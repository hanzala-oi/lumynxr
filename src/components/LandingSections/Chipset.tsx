"use client";
import React, { useRef, useEffect, useState } from "react";

function Chipset() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const playPromiseRef = useRef<Promise<void> | null>(null);

const playVideo = async () => {
  const video = videoRef.current;
  if (!video) return;

  try {
    if (video.paused) {
      // Only try to play if it’s paused
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
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://lumynxr-cdn.azureedge.net/videos/Chipset.webm"
          type="video/webm"
        />
        <source
          src="https://lumynxr-cdn.azureedge.net/videos/Chipset.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Text overlay */}
      <div className="relative bottom-28 z-10 ml-20 flex flex-col justify-end items-start h-full px-8 md:px-16 text-[#E2E2E2]">
        <h1 className="text-4xl md:text-[96px] font-light tracking-[0%] leading-[100px] ">
          Powered by <br /> Snapdragon<sup className="text-5xl">®</sup>
        </h1>
        <div className="w-[46px] h-1 bg-white my-[40px] rounded"></div>
        <p className="text-[24px] font-extralight leading-[32px] tracking-[0.2%]  md:text-xl max-w-lg text-[#C5C5C5]">
          Qualcomm<sup>®</sup> Snapdragon<sup>®</sup> XR2+ Gen 2 powers
          high-speed processing, rich graphics and seamless multitasking for
          enterprise and MR use.
        </p>
      </div>
    </div>
  );
}

export default Chipset;
