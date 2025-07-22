"use client";
import React, { useEffect, useRef, useState } from "react";

type VideoSource = {
  webm: string;
  mp4: string;
};

type Feature = {
  title: string;
  sources: VideoSource;
  description: string;
};

const features: Feature[] = [
  {
    title: "Anti-fogging ventilation system",
    description:
      "Built-in anti-fog ventilation keeps your view clear and uninterrupted during extended use",
    sources: {
      webm: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Ventilation.webm`,
      mp4: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Ventilation.mp4`,
    },
  },
  {
    title: "Easy IPD Adjustment",
    description:
      "Adjustable IPD range from 56-70mm ensures a clear, comfortable view tailored to each user's eye distance",
    sources: {
      webm: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/IPD-Bentou.webm`,
      mp4: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/IPD-Bento.mp4`,
    },
  },
  {
    title: "Power that lasts",
    description: "5500mAh battery for long lasting power for extended use",
    sources: {
      webm: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Battery_v2.webm`,
      mp4: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Battery_v2.mp4`,
    },
  },
];

// Utility to detect browser
function getPreferredVideoFormat(): "webm" | "mp4" {
  if (typeof navigator !== "undefined") {
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    if (isIOS && isSafari) {
      return "mp4"; // Safari on iOS → MP4
    }
    return "webm"; // Prefer WebM for others
  }
  return "mp4"; // Default fallback
}

const Features: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [videoFormat, setVideoFormat] = useState<"webm" | "mp4">("mp4");

  useEffect(() => {
    setVideoFormat(getPreferredVideoFormat());
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video && video.paused) {
      video.play().catch((err) => {
        console.warn("Video play interrupted:", err);
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0;
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 1280) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="xl:h-screen min-h-screen w-screen flex flex-col xl:flex-row items-center justify-center xl:py-8 xl:px-10 2xl:px-20 2xl:py-20 py-8 px-4 md:px-6 ">
      <div className="xl:w-4/5 h-full flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-2 xl:max-h-[85vh] xl:max-w-[85vw] ">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="group w-full xl:w-1/2 h-full  gap-2 flex flex-row xl:flex-col  rounded-xl b-2 "
        >
          <div className="w-full h-full  overflow-hidden bg-[#1a1919] rounded-xl">
            <video
              ref={(el) => {
                videoRefs.current[0] = el;
              }}
              className="w-full  h-4/5 object-cover transition duration-300 ease-in-out group-hover:scale-105 "
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={features[0].sources.webm} type="video/webm" />
              <source src={features[0].sources.mp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="flex flex-col gap-2 justify-end pl-4 pb-4 h-1/5 md:mt-4 xl:mt-0   ">
              <h1 className="text-[16px]  xl:text-[20px] font-[500] xl:font-normal xl:leading-[100%] xl:tracking-[0%] text-[#F2F2F2]">
                {features[0].title}
              </h1>
              <p className="text-[12px] xl:text-[16px] leading-[15px] xl:leading-[24px] 2xl:tracking-[3%] font-[150] 2xl:font-[200]  text-[#F2F2F2] ">
                Built-in anti-fog ventilation keeps your view clear and
                uninterrupted during extended use
              </p>
            </div>
          </div>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hidden xl:hidden md:flex   flex-col w-full  h-full bg-[#1a1919] rounded-xl group"
          >
            <div className="w-full h-full overflow-hidden  rounded-xl ">
              <video
                ref={(el) => {
                  videoRefs.current[1] = el;
                }}
                className="   object-cover transition duration-300 ease-in-out group-hover:scale-105 "
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={features[1].sources.webm} type="video/webm" />
                <source src={features[1].sources.mp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="pb-4 mt-4  2xl:mt-0 pl-4  flex gap-2 flex-col">
                <h1 className="text-[16px]  xl:text-[20px] font-[500] xl:font-normal xl:leading-[100%] xl:tracking-[0%] text-[#F2F2F2]">
                  {features[1].title}
                </h1>
                <p className="text-[12px] xl:text-[16px] leading-[15px] xl:leading-[24px] 2xl:tracking-[3%] font-[150] 2xl:font-[200]  text-[#F2F2F2]">
                  Adjustable IPD range from 56-70mm ensures a clear, comfortable
                  view tailored to each user's eye distance
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/2 h-full flex flex-col  gap-4 xl:gap-2 ">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full xl:h-3/5 h-full bg-[#1a1919] rounded-xl group md:hidden xl:block"
          >
            <div className="w-full h-4/5 overflow-hidden ">
              <video
                ref={(el) => {
                  videoRefs.current[1] = el;
                }}
                className="mt-[-20px]   object-cover transition duration-300 ease-in-out group-hover:scale-105 "
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={features[1].sources.webm} type="video/webm" />
                <source src={features[1].sources.mp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="pb-8 mt-[-13px] 2xl:mt-0 pl-4 h-1/5 flex gap-2 flex-col">
              <h1 className="text-[16px]  xl:text-[20px] font-[500] xl:font-normal xl:leading-[100%] xl:tracking-[0%] text-[#F2F2F2]">
                {features[1].title}
              </h1>
              <p className="text-[12px] xl:text-[16px] leading-[15px] xl:leading-[24px] 2xl:tracking-[3%] font-[150] 2xl:font-[200]  text-[#F2F2F2]">
                Adjustable IPD range from 56-70mm ensures a clear, comfortable
                view tailored to each user's eye distance
              </p>
            </div>
          </div>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group w-full  xl:h-2/5 h-full bg-[#1a1919] rounded-xl flex flex-col md:flex-row  md:items-center overflow-hidden"
          >
            <div className="md:w-2/5 h-full flex flex-col gap-2 justify-end pb-8 pl-4 pt-4   ">
              <h1 className="text-[16px]   xl:text-[20px] font-[500] xl:font-normal xl:leading-[100%] xl:tracking-[0%] text-[#F2F2F2]">
                {features[2].title}
              </h1>
              <p className="text-[12px]  xl:text-[16px] leading-[15px] xl:leading-[24px] 2xl:tracking-[3%] font-[150] 2xl:font-[200]  text-[#F2F2F2]">
                5500mAh battery for long lasting power for extended use
              </p>
            </div>
            <div className="md:w-3/5 group h-full group overflow-hidden ">
              <video
                ref={(el) => {
                  videoRefs.current[2] = el;
                }}
                className=" w-full  h-full object-cover transition duration-300 ease-in-out group-hover:scale-105   "
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={features[2].sources.webm} type="video/webm" />
                <source src={features[2].sources.mp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
