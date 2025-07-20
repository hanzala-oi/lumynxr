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
      className="flex flex-col md:flex-col-reverse xl:flex-row items-center justify-center xl:h-screen bg-black min-h-[70vh] md:min-h-[85vh] overflow-hidden md:pb-20 xl:pb-0 "
    >
      {/* Text Content */}
      <div className=" flex flex-col w-full justify-center xl:h-full  pl-6 md:pl-[32px] xl:pl-[115px] 2xl:pl-[199px]">
        <h1 className="text-[32px] md:text-[48px] md:leading-[52px] leading-[30px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2]">

          <span className="hidden xl:block">  Effortless
            <br />
            Precision</span>
          <span className="xl:hidden"> Effortless

            Precision</span>
        </h1>

        <svg className="my-[60px] hidden 2xl:block ml-1" xmlns="http://www.w3.org/2000/svg" width="52" height="6" viewBox="0 0 52 6" fill="none">
          <path d="M3 3C18.3333 3 49 3 49 3" stroke="#E2E2E2" strokeWidth="5" strokeLinecap="round" />
        </svg>
        <svg className="mt-[37px] mb-[41px] hidden xl:block 2xl:hidden ml-1" xmlns="http://www.w3.org/2000/svg" width="42" height="2" viewBox="0 0 42 2" fill="none">
          <path d="M1 1C14.3333 1 41 1 41 1" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <svg className="my-[15px] xl:hidden " xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
          <path d="M1 1C11.6667 1 33 1 33 1" stroke="#C5C5C5" strokeLinecap="round" />
        </svg>
       <p className=" max-w-[319px] md:max-w-[459px]  lg:max-w-[377px] 2xl:max-w-[451px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] font-[200] xl:font-[200] text-[#C5C5C5] xl:tracking-[0.048px] ">
          Interact naturally with precise hand  tracking or high fidelity
          controllers for 
          intuitive, accurate control
        </p>
      </div>

      {/* Video */}
      <div className=" rounded-[20px] overflow-hidden pb-[100px] md:pb-0  mt-6 md:mt-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          className="rounded-[20px] w-full h-full object-cover "
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
