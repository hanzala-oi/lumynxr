"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";

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

  useEffect(() => {
    setVideoFormat(getPreferredVideoFormat());
  }, []);

  const handlePlayTeaserClick = () => {
    if (window.innerWidth < 1280) {
      setIsVideoDialogOpen(true);
    }
  };

  return (
    <div className="flex flex-col xl:flex-row min-h-screen xl:max-h-screen max-w-screen w-screen items-start xl:items-center justify-center bg-black ">
      {/* Video Section */}
      <div className="w-full md:mt-[30vh] lg:mt-0 xl:w-2/3 xl:max-w-2/3 h-[301px] xl:h-full flex-shrink-0 flex flex-col items-center justify-center">
        <video
          className="object-cover rounded-xl w-[110%] h-[110%]"
          muted
          playsInline
          autoPlay
        >
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/${videoFormat === "webm" ? "header.webm" : "Header.mp4"}`}
            type={`video/${videoFormat}`}
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Section */}
      <div className="w-auto xl:w-1/3 flex flex-col gap-[16px] xl:gap-10 text-left ml-[26px] xl:ml-0 mt-[68px] xl:mt-0">
        <div className="text-[32px] md:text-[48px] leading-[35px] md:leading-[52px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2]">
          Realities <br /> Unlike Before
        </div>
        <div className="max-w-[302px] md:max-w-[479px] xl:max-w-[399px] 2xl:max-w-[532px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] font-[200] text-[#C5C5C5] xl:tracking-[0.048px]">
          LumynXR is a high-performance mixed reality 
          headset designed for the future of spatial 
          computing, with enterprise-ready features for 
          cross-industry innovation
        </div>
      </div>

      <div className="flex items-center justify-start w-full h-full xl:hidden">
        <button
          onClick={handlePlayTeaserClick}
          className="flex h-[43px] items-center mt-5 ml-7 gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] text-gray-300 text-sm font-medium shadow-inner hover:opacity-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-gray-400"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play Teaser
        </button>
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
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/${videoFormat === "webm" ? "Teaser_v3.webm" : "Teaser_v3.mp4"}`}
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
