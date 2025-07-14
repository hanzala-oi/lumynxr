"use client";
import React, { useEffect, useRef, useState } from "react";

function PassThrough() {
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

  const pauseVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (!video.paused) {
        video.pause();
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Video pause error:", error);
      }
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
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(section);

    let lastScrollY = window.scrollY;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (isScrollingUp && hasPlayedOnce && isVisible) {
          playVideo();
        }
      }, 100);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [hasPlayedOnce, isVisible]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden"
    >
      {/* Text Block */}
      <div
        className="absolute top-0 left-[133px] z-10 flex flex-col justify-center h-full"
      >
        <h1 className="text-4xl md:text-[96px] font-light leading-[100px] text-[#E2E2E2] tracking-tight">
          Clear
          <br />
          Passthrough
        </h1>
        <div className="w-[46px] h-1 bg-white my-[60px] rounded"></div>
        <p className="text-2xl font-extralight md:text-xl leading-[32px] text-[#C5C5C5] tracking-wide max-w-xl">
          LumynXR delivers full-color passthrough <br /> with iToF depth sensing
          for a vivid and <br /> accurate Mixed Reality experience.
        </p>
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        className="w-[70%] h-full object-cover"
      >
        <source
          src="https://lumynxr-cdn.azureedge.net/videos/Passthrough.webm"
          type="video/webm"
        />
        <source
          src="https://lumynxr-cdn.azureedge.net/videos/Passthrough.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default PassThrough;
