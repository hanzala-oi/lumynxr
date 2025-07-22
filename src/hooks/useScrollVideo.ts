"use client";

import { useEffect, useRef } from "react";

export function useScrollVideo<T extends HTMLVideoElement>() {
  const videoRef = useRef<T | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null); 

  const playPromiseRef = useRef<Promise<void> | null>(null);
  const hasPlayedOnceRef = useRef(false);
  const isVisibleRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null); 

  const playVideo = async () => {
    const video = videoRef.current;
    if (!video || !video.paused) return;

    try {
      playPromiseRef.current = video.play();
      await playPromiseRef.current;
      hasPlayedOnceRef.current = true;
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Video play error:", error);
      }
    } finally {
      playPromiseRef.current = null;
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current || video;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(container);

    const onScroll = () => {
      const scrollY = window.scrollY;
      const isScrollingUp = scrollY < lastScrollYRef.current;
      lastScrollYRef.current = scrollY;

      clearTimeout(scrollTimeoutRef.current as NodeJS.Timeout);

      scrollTimeoutRef.current = setTimeout(() => {
        if (
          isScrollingUp &&
          isVisibleRef.current &&
          hasPlayedOnceRef.current
        ) {
          playVideo();
        }
      }, 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeoutRef.current as NodeJS.Timeout);
    };
  }, []);

  return { videoRef, containerRef };
}
