import React from "react";
import ScrollVideo from "./ScrollVideo";

function Optical() {
  return (
    <div
      className="flex flex-col-reverse md-h-[100vh] md:py-10 md:flex-col xl:flex-row min-h-[75vh] md:min-h-[90vh] xl:h-screen gap-6 xl:gap-0 max-w-screen items-start justify-end xl:items-center xl:justify-start bg-black overflow-hidden md:pt-[100px] xl:mt-0"
    >
      {/* Video Section */}
      <div className="w-full xl:w-2/3 h-[301px] md:h-4/5">
        <ScrollVideo
          srcWebm={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Optical.webm`}
          srcMp4={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Optical.mp4`}
          className=" inset-0  scale-[1.1] w-full xl:h-full object-cover "
          poster="https://lumynxr.blob.core.windows.net/images/optical.png"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col z-10 text-left ml-[26px] md:ml-[32px] xl:ml-0 mt-[68px] md:mt-0 overflow-hidden">
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
