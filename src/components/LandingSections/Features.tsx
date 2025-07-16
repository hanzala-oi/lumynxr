"use client";
import React from "react";

type VideoSource = {
  webm: string;
  mp4: string;
};

type Feature = {
  title: string;
  sources: VideoSource;
};

const features: Feature[] = [
  {
    title: "Anti-fogging ventilation system",
    sources: {
      webm: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Ventilation.webm`,
      mp4: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Ventilation.mp4`,
    },
  },
  {
    title: "Easy IPD Adjustment",
    sources: {
      webm: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/IPD-Bentou.webm`,
      mp4: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/IPD-Bento.mp4`,
    },
  },
  {
    title: "Power that lasts",
    sources: {
      webm: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Batteryu.webm`,
      mp4: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Battery.mp4`,
    },
  },
];

const Features: React.FC = () => {
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex gap-[6px]">
        {/* Left Large Card */}
        <div
          className="relative rounded-xl bg-[#090909] overflow-hidden shadow-lg group"
          style={{ width: "759px", height: "754px" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={features[0].sources.webm} type="video/webm" />
            <source src={features[0].sources.mp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute flex justify-center items-start flex-col gap-5 bottom-6 left-6">
            <h1 className="text-[20px] font-normal leading-[100%] tracking-[0%] text-[#F2F2F2]">
              {features[0].title}
            </h1>
            <p className="text-[16px] leading-[24px] tracking-[3%] font-extralight text-[#F2F2F2]">
              Built-in anti-fog ventilation keeps your view clear and <br />
              uninterrupted during extended use
            </p>
          </div>
        </div>

        {/* Right Stacked Cards */}
        <div className="flex flex-col gap-[6px]">
          {/* First Right Card */}
          <div
            className="relative rounded-xl bg-[#090909] overflow-hidden flex justify-center items-start shadow-lg group"
            style={{ width: "711px", height: "468.37px" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              className="w-[600px] object-cover transition duration-300 ease-in-out group-hover:scale-105"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={features[1].sources.webm} type="video/webm" />
              <source src={features[1].sources.mp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute flex justify-center items-start flex-col gap-5 bottom-6 left-6">
              <h1 className="text-[20px] font-normal leading-[100%] tracking-[0%] text-[#F2F2F2]">
                {features[1].title}
              </h1>
              <p className="text-[16px] leading-[24px] tracking-[3%] font-extralight text-[#F2F2F2]">
                Adjustable IPD range from 56-70mm ensures a clear,<br />
                comfortable view tailored to each user’s eye distance
              </p>
            </div>
          </div>

          {/* Second Right Card */}
          <div
            className="relative rounded-xl bg-[#090909] overflow-hidden shadow-lg group flex justify-end items-start"
            style={{ width: "711px", height: "281px" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              className="w-[500px] h-auto flex justify-start items-start object-cover transition duration-300 ease-in-out group-hover:scale-105"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={features[2].sources.webm} type="video/webm" />
              <source src={features[2].sources.mp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute flex justify-center items-start flex-col gap-5 bottom-6 left-6">
              <h1 className="text-[20px] font-normal leading-[100%] tracking-[0%] text-[#F2F2F2]">
                {features[2].title}
              </h1>
              <p className="text-[16px] leading-[24px] tracking-[3%] font-extralight text-[#F2F2F2]">
                5500mAh battery for long lasting <br /> power for extended use
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
