// hooks/useGsapScrollVideo.ts
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Controls a <video> element with GSAP ScrollTrigger:
 * - play() on enter/enterBack
 * - pause() on leave/leaveBack
 * - optional early "arm" when near viewport to ensure source is attached once
 */
export function useGsapScrollVideo<T extends HTMLVideoElement>({
  start = "top 80%",       // when top of container hits 80% of viewport
  end = "bottom 20%",
  anticipatePin = 1,       // smoother triggers with sticky/transform layouts
  rootMarginPx = 600,      // when to "arm" (near viewport) so we can attach source once
  onNearViewport,          // called once when near viewport (to attach <source>)
}: {
  start?: string;
  end?: string;
  anticipatePin?: number;
  rootMarginPx?: number;
  onNearViewport?: () => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<T | null>(null);
  const armedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // 1) Pre-attach “near viewport” observer (fires once)
    //    This avoids attaching <source> at load, preventing early network.
    const io = new IntersectionObserver(
      ([entry]) => {
        const near =
          entry.isIntersecting ||
          entry.boundingClientRect.top < window.innerHeight + rootMarginPx;
        if (near && !armedRef.current) {
          armedRef.current = true;
          onNearViewport?.();
        }
      },
      { rootMargin: `${rootMarginPx}px 0px ${rootMarginPx}px 0px`, threshold: 0.01 }
    );
    io.observe(container);

    // 2) ScrollTrigger play/pause control
    const st = ScrollTrigger.create({
      trigger: container,
      start,
      end,
      anticipatePin,
      onEnter: () => {
        // play if armed and ready (avoid racing canplay)
        video.play().catch(() => {});
      },
      onEnterBack: () => {
        video.play().catch(() => {});
      },
      onLeave: () => {
        video.pause();
      },
      onLeaveBack: () => {
        video.pause();
      },
    });

    // 3) Pause on tab hide / pagehide (iOS stability)
    const onVis = () => (document.hidden ? video.pause() : void 0);
    const onHide = () => video.pause();
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pagehide", onHide);

    return () => {
      io.disconnect();
      st.kill();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pagehide", onHide);
    };
  }, [start, end, anticipatePin, rootMarginPx, onNearViewport]);

  return { containerRef, videoRef };
}
