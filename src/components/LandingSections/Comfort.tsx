import Image from "next/image";
import React from "react";



function Comfort() {

  return (
    <div
      className="flex flex-col md:flex-col-reverse xl:flex-row min-h-[70vh] md:min-h-[85vh] md:max-h-screen md:pt-[100px] xl:pt-0 xl:h-screen w-full bg-black overflow-hidden  "
    >
      {/* Text Block - Relative positioned */}
      <div className="   z-10 pl-[28px] md:pl-[32px] pt-10 xl:pl-[115px] 2xl:pl-[199px] flex flex-col justify-start  xl:justify-center  mb-10 md:mb-0 h-full  ">
        <h1 className="text-[32px] md:text-[48px] md:leading-[52px] leading-[30px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2]">
          <span className="block md:hidden">Balanced for Comfort</span>
          <span className="hidden md:block">
            Balanced
            <br />
            for Comfort
          </span>
        </h1>

        <svg className="my-[60px] hidden 2xl:block" xmlns="http://www.w3.org/2000/svg" width="52" height="6" viewBox="0 0 52 6" fill="none">
          <path d="M3 3C18.3333 3 49 3 49 3" stroke="#E2E2E2" strokeWidth="5" strokeLinecap="round" />
        </svg>
        <svg className="mt-[37px] mb-[41px] hidden xl:block 2xl:hidden ml-1" xmlns="http://www.w3.org/2000/svg" width="42" height="2" viewBox="0 0 42 2" fill="none">
          <path d="M1 1C14.3333 1 41 1 41 1" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <svg className="my-[15px] xl:hidden " xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
          <path d="M1 1C11.6667 1 33 1 33 1" stroke="#C5C5C5" strokeLinecap="round" />
        </svg>
        <p className=" max-w-[352px] md:max-w-[489px]  lg:max-w-[423px] 2xl:max-w-[509px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] font-[200] xl:font-[200] text-[#C5C5C5] xl:tracking-[0.048px] ">
          Ergonomic facemask design ensures balanced  1:1 weight distribution for all-day comfort
        </p>
      </div>
      <div className="xl:w-2/3 flex items-end justify-end ">
        {/* Image Block - Absolute positioned */}
        <div className="  mx-auto  h-full flex items-center justify-end  xl:w-2/3">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/Sideview.V2.png`}
            alt="Comfort"
            width={600}
            height={400}
            className="max-w-[250px]  xl:max-w-[400px] 2xl:max-w-[600px]  h-auto object-cover  xl:ml-[50px]   "
            priority
          />
        </div>
      </div>



    </div>
  );
}

export default Comfort;
