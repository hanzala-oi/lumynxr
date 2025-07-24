"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import { gsap } from "gsap";
import { useRef } from "react";
import clsx from "clsx";
import Navbar from "../navbar";
import Teaser from "./Teaser";

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

function Hero() {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const [videoFormat, setVideoFormat] = useState<"webm" | "mp4">("mp4");
  const textRef = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const isDark = true
  useEffect(() => {
    setVideoFormat(getPreferredVideoFormat());
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (textRef.current) {
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 }
      );
    }

    if (textRef2.current) {
      tl.fromTo(
        textRef2.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5 },
        "-=0.5"
      );
    }

    if (teaserRef.current) {
      tl.fromTo(
        teaserRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=0.3" // Overlap slightly or adjust to taste
      );
    }

    return () => {
      tl.kill();
    };
  }, []);


  const handlePlayTeaserClick = () => {
    if (window.innerWidth < 1280) {
      setIsVideoDialogOpen(true);
    }
  };
  useEffect(() => {
    const video = document.querySelector("video");
    if (video && video.paused) {
      video.play().catch(() => {
      });
    }
  }, []);
  const teaserRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex  flex-col xl:flex-row min-h-screen xl:max-h-screen max-w-screen w-screen items-start xl:items-center justify-center bg-black tablet:pt-[80px] tablet:gap-6 tablet-landscape:flex-row ">
      {/* Video Section */}
      <div className="w-full md-items-center md:h-3/6 md:mt-[10vh] lg:mt-0 xl:w-2/3 xl:max-w-2/3 h-[301px] xl:h-full flex-shrink-0 flex flex-col items-center justify-center">
        <video
          className="object-cover rounded-xl w-[110%] h-[110%]"
          muted
          playsInline
          autoPlay
          preload="auto"
          controls={false}
        >
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/header.webm`}
            type="video/webm"
          />
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Header.mp4`}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Text Section */}
      <div className="w-auto xl:w-1/3 flex flex-col gap-[16px] xl:gap-10 text-left ml-[26px] xl:ml-0 mt-[68px] xl:mt-0">
        <div
          ref={textRef}
          className="opacity-0 translate-y-12 text-[32px] md:text-[48px] leading-[35px] md:leading-[52px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2]"
        >
          Realities <br /> Unlike Before
        </div>

        <div
          ref={textRef2}
          className="opacity-0 translate-y-24 max-w-[302px] md:max-w-[479px] xl:max-w-[399px] 2xl:max-w-[532px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] font-[200] text-[#C5C5C5] xl:tracking-[0.048px]"
        >
          LumynXR is a high-performance mixed reality headset designed for the
          future of spatial computing, with enterprise-ready features for
          cross-industry innovation
        </div>

      </div>

      <div
        ref={teaserRef}
        className="opacity-0 " // Initial hidden state
      >
        <Teaser onPlayTeaserClick={handlePlayTeaserClick} />
      </div>




      <AnimatePresence>
        {isVideoDialogOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsVideoDialogOpen(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
            >
              <motion.button
                onClick={() => setIsVideoDialogOpen(false)}
                className="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md"
              >
                <XIcon className="size-5" />
              </motion.button>
              <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-gray-900">
                <video
                  className="size-full rounded-2xl object-cover"
                  autoPlay
                  controls
                >
                  <source
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/${videoFormat === "webm" ? "Teaser.webm" : "Teaser_v3.mp4"
                      }`}
                    type={`video/${videoFormat}`}
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Hero;
