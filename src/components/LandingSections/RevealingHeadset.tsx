"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top", // when container hits top of viewport
        end: "bottom+=100% top", // stick for 100% height
        scrub: true,
        pin: true, // pin section during scroll
      },
    });

    // Animate the video scaling up
    timeline.fromTo(
      video,
      {
        scale: 0.3, // Start at 30% size
      },
      {
        scale: 1, // End at full size
        ease: "power2.out",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#E2E2E2] flex items-center justify-center"
    >
      <div className="sticky top-0 flex justify-center items-center w-full h-screen">
        <video
          ref={videoRef}
          className="rounded-2xl shadow-2xl bg-black"
          src="https://lumynxr-cdn.azureedge.net/videos/Header.webm"
          muted
          playsInline
          autoPlay
          loop
        />
      </div>
    </div>
  );
};

export default VideoReveal;
