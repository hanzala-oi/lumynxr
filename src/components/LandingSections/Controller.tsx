"use client";
import React, { useEffect, useRef, useState } from "react";

function Controller() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const playVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        playPromiseRef.current = video.play();
        await playPromiseRef.current;
      }
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
    if (!video) return;

    if (!video.paused) {
      video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            playVideo();
            setHasPlayedOnce(true);
          } else {
            setIsVisible(false);
            pauseVideo();
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% visible
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [hasPlayedOnce]); // 👈 Removed isVisible

  return (
    <div
      ref={sectionRef}
      className="flex items-center justify-center h-screen gap-20 px-6 md:px-20"
    >
      {/* Text Content */}
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-[36px] md:text-[96px] font-light leading-[100px] tracking-[0%] text-[#E2E2E2]">
          Effortless
          <br />
          Precision
        </h1>
        <div className="w-[46px] h-1 bg-white my-[60px] rounded"></div>

        <p className="text-base md:text-2xl font-light leading-[32px] tracking-[0.2%] text-[#C5C5C5]">
          Interact naturally with precise hand <br /> tracking or high fidelity
          controllers for <br />
          intuitive, accurate control
        </p>
      </div>

      {/* Video */}
      <div className="w-[999px] h-[576px] rounded-[20px] overflow-hidden">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          className="rounded-[20px] w-full h-full object-cover"
        >
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Controllers.webm`}
            type="video/webm"
          />
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Controllers.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Controller;
