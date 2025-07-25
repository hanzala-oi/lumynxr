import React from "react";
import PlayTeaser from "./PlayTeaser";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row min-h-screen xl:max-h-screen max-w-screen w-screen items-start xl:items-center justify-center bg-black lg:pt-[80px] lg:gap-6 lg-landscape:flex-row">
      {/* Video Section */}
      <div className="w-full md:h-3/6 md:mt-[10vh] lg:mt-0 xl:w-2/3 xl:max-w-2/3 h-[301px] xl:h-full flex-shrink-0 flex flex-col items-center justify-center">
        <video
          className="object-cover rounded-xl w-[110%] h-[110%]"
          muted
          playsInline
          autoPlay
          preload="metadata"
          controls={false}
        >
          <source src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/header.webm`} type="video/webm" />
          <source src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Header.mp4`} type="video/mp4" />
        </video>
      </div>

      {/* Text Section */}
      <div className="w-auto xl:w-1/3 flex flex-col gap-[16px] xl:gap-10 text-left ml-[26px] xl:ml-0 mt-[68px] xl:mt-0">
        <div className="text-[32px] md:text-[48px] leading-[35px] md:leading-[52px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2] motion-text">
          Realities <br /> Unlike Before
        </div>
        <div className="max-w-[302px] md:max-w-[479px] xl:max-w-[399px] 2xl:max-w-[532px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] font-[200] text-[#C5C5C5] xl:tracking-[0.048px] motion-subtext">
          LumynXR is a high-performance mixed reality headset designed for the
          future of spatial computing, with enterprise-ready features for
          cross-industry innovation
        </div>
      </div>
      <PlayTeaser />
    </div>
  );
};

export default Hero;
