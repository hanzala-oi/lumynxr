"use client";
import React, { useRef, useEffect, useState } from "react";

function Optical() {
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
    console.log(window.innerWidth, window.innerHeight);
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
    let scrollTimeout: NodeJS.Timeout;

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
      className="relative w-full h-screen flex flex-col md:flex-row justify-center items-center bg-black p-10"
    >
      {/* Video Section */}
      <div className="w-full md:w-[60%] h-1/2 md:h-full flex justify-center items-center">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Optical.webm`}
            type="video/webm"
          />
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Optical.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full md:w-[40%]">
        <h1 className="text-[96px]   font-light leading-[100px] text-[#E2E2E2] tracking-tight">
          See Every
          <br />
          Detail
        </h1>
        <div className="w-[46px] h-1 bg-white my-[60px] rounded"></div>
        <p className="text-2xl font-extralight md:text-xl leading-[32px] text-[#C5C5C5] tracking-wide max-w-xl">
          4K+ fast LCD delivers ultra-low latency and <br /> stunning clarity
          with vibrant colors, sharp text <br /> and lifelike details.
        </p>
      </div>
    </div>
  );
}

export default Optical;
