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
      className="flex flex-col-reverse xl:flex-row h-[75vh] xl:h-screen gap-6 xl:gap-0 w-screen items-start justify-end xl:items-center xl:justify-center bg-black overflow-hidden "
    >
      {/* Video Section */}
      <div className="w-auto xl:w-3/4 xl:ml-[-158px] 2xl:ml-[-206px] h-[301px] xl:h-full flex-shrink-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover rounded-xl"
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

      {/* Text Section */}
      <div className="flex flex-col gap-[16px] xl:gap-10 text-left ml-[26px] xl:ml-[-100px] mt-[68px] xl:mt-0">
        <div className="text-[32px] leading-[30px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2]">
          <span className="block xl:hidden">See Every Detail</span>
          <span className="hidden xl:block">
            See Every
            <br />
            Detail
          </span>

        </div>
        <div className="w-[46px] h-[1px] xl:h-1 bg-white rounded" />
        <div className="text-[14px] xl:text-[20px] 2xl:text-[24px] xl:leading-[32px] font-[200] text-[#C5C5C5] xl:tracking-[0.048px]">
          4K+ fast LCD delivers ultra-low latency and <br />
          stunning clarity with vibrant colors, sharp text <br />
          and lifelike details.
        </div>
      </div>
    </div>
  );
}

export default Optical;
