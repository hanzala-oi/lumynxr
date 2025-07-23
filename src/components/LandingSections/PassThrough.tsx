import React from "react";
import ScrollVideo from "./ScrollVideo";

function PassThrough() {

  return (
    <div className="relative flex md:flex-col-reverse w-full md:min-h-screen xl:h-screen bg-black min-h-[70vh] overflow-hidden">
      
      {/* Background Video */}
      <ScrollVideo
        srcWebm={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Passthroughv2.webm`}
        srcMp4={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Passthroughv2.mp4`}
        className="absolute inset-0 xl:-left-64 scale-[1.1] w-full xl:h-full object-cover mt-[200px] md:mt-0 z-0"
      />

      {/* Overlay Text */}
      <div className="xl:absolute lg:pb-10 flex xl:justify-end xl:items-center xl:top-1/2 xl:transform xl:-translate-y-1/2 pl-[28px] md:pl-[32px] xl:pl-0 w-full z-[1]">
        <div className="text-left xl:w-1/3">
          <h1 className="text-[32px] md:text-[48px] md:leading-[52px] leading-[30px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2]">
            <span className="hidden xl:block">
              Clear
              <br />
              Passthrough
            </span>
            <span className="xl:hidden">Clear Passthrough</span>
          </h1>

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

          <p className="max-w-[358px] md:max-w-[567px] lg:max-w-[362px] 2xl:max-w-[466px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] font-[200] text-[#C5C5C5] xl:tracking-[0.048px]">
            LumynXR delivers full-color passthrough with iToF depth sensing for
            a vivid and accurate Mixed Reality experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PassThrough;
