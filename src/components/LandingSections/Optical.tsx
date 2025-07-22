"use client";
import React, { useRef, useEffect, useState } from "react";

// Utility: Detect preferred video format
function getPreferredVideoFormat(): "webm" | "mp4" {
  if (typeof navigator !== "undefined") {
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    if (isIOS && isSafari) {
      return "mp4"; // Safari on iOS
    }
    return "webm"; // Prefer WebM for others
  }
  return "mp4"; // Default fallback
}

function Optical() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [videoFormat, setVideoFormat] = useState<"webm" | "mp4">("mp4");
  const playPromiseRef = useRef<Promise<void> | null>(null);

  useEffect(() => {
    setVideoFormat(getPreferredVideoFormat());
  }, []);

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
      className="flex flex-col-reverse md:flex-col xl:flex-row min-h-[75vh] md:min-h-[90vh] xl:h-screen gap-6 xl:gap-0 max-w-screen items-start justify-end xl:items-center xl:justify-start bg-black overflow-hidden md:pt-[100px] xl:mt-0"
    >
      {/* Video Section */}
      <div className="w-full xl:w-2/3 h-[301px] md:h-4/5">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover rounded-xl"
        >
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Optical.${videoFormat}`}
            type={`video/${videoFormat}`}
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Section */}
      <div className="flex flex-col text-left ml-[26px] md:ml-[32px] xl:ml-0 mt-[68px] md:mt-0 overflow-hidden">
        <div className="text-[32px] md:text-[48px] md:leading-[52px] leading-[30px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2]">
          <span className="block xl:hidden">See Every Detail</span>
          <span className="hidden xl:block">
            See Every
            <br />
            Detail
          </span>
        </div>

        <svg
          className="my-[60px] hidden 2xl:block"
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="6"
          viewBox="0 0 52 6"
          fill="none"
        >
          <path
            d="M3 3C18.3333 3 49 3 49 3"
            stroke="#E2E2E2"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="mt-[37px] mb-[41px] hidden xl:block 2xl:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="2"
          viewBox="0 0 42 2"
          fill="none"
        >
          <path
            d="M1 1C14.3333 1 41 1 41 1"
            stroke="#E2E2E2"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="my-[15px] xl:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="2"
          viewBox="0 0 34 2"
          fill="none"
        >
          <path
            d="M1 1C11.6667 1 33 1 33 1"
            stroke="#C5C5C5"
            strokeLinecap="round"
          />
        </svg>

        <p className="max-w-[312px] md:max-w-[548px] lg:max-w-[356px] 2xl:max-w-[507px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] font-[200] xl:font-[200] text-[#C5C5C5] xl:tracking-[0.048px]">
          4K+ fast LCD delivers ultra-low latency and
          stunning clarity with vibrant colors, sharp text
          and lifelike details.
        </p>
      </div>
    </div>
  );
}

export default Optical;
