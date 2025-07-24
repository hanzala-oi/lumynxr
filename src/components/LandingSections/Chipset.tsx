import React from "react";
import ScrollVideo from "./ScrollVideo";

function Chipset() {
  return (
    <div
      className="relative flex md:flex-col-reverse w-full min-h-[75vh] md:h-screen xl:h-screen bg-black md:py-10 h-[70vh]"
    >
      {/* Background video */}
      <ScrollVideo
        srcWebm={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Chipsetv2.mp4`}
        srcMp4={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Chipsetv2.mp4`}
        className="absolute inset-0 w-full xl:h-full object-cover mt-[200px] md:mt-0"
        poster="https://lumynxr.blob.core.windows.net/images/chipset.png"

      />

      {/* Text overlay */}
      <div className="xl:relative xl:bottom-28 z-10 pl-[28px] md:pl-[32px] xl:pl-[115px] 2xl:pl-[259px] flex flex-col justify-start md:justify-end items-start h-full text-[#E2E2E2]">
        <h1 className="text-[32px] md:text-[48px] md:leading-[52px] leading-[30px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light">
          <span className="hidden md:block">
            Powered by <br /> Snapdragon<sup className="xl:text-5xl">®</sup>
          </span>
          <span className="md:hidden">
            Powered by Snapdragon<sup>®</sup>
          </span>
        </h1>

        <svg
          className="my-[60px] hidden 2xl:block ml-1"
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
          className="mt-[37px] mb-[41px] hidden xl:block 2xl:hidden ml-1"
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

        <p className="max-w-[332px] md:max-w-[470px] lg:max-w-[432px] 2xl:max-w-[519px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] font-[200] text-[#C5C5C5] xl:tracking-[0.048px]">
          Qualcomm<sup>®</sup> Snapdragon<sup>®</sup> XR2+ Gen 2 powers
          high-speed processing, rich graphics and seamless multitasking for
          enterprise and MR use.
        </p>
      </div>
    </div>
  );
}

export default Chipset;
