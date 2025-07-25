import Image from "next/image";
import React from "react";


function BuiltForEnterprise() {
 
  return (
    <div
      className="h-fit min-h-[80vh] lg:min-h-[50vh] md:min-h-[85vh] xl:h-screen bg-[#FAFAFA] overflow-hidden lg:pt-0 pt-[80px] xl:pt-0  "
    >
      <div className="flex flex-col md:flex-col-reverse xl:flex-row items-start xl:items-center h-full ">
        {/* Left Content */}
        <div className="fade-left    xl:pl-[115px] flex  2xl:pl-[259px] min-[2800px]:pl-[599px] pl-[28px]  h-full  md:mt-[-200px]  xl:mt-0 md:pb-20 xl:pb-0 ">
          <div className="flex flex-col justify-center h-full   ">
            <div className="text-[32px] md:text-[48px] md:leading-[52px] leading-[30px] xl:text-[64px] 2xl:text-[96px] min-[2800px]:text-[128px] xl:leading-[76px] 2xl:leading-[100px] text-black ">
              <span className="block md:hidden ">Built for Enterprise</span>
              <span className="hidden md:block">
                Built for
                <br />
                Enterprise
              </span>

            </div>
            {/* Small screens (default) */}
            <svg
              className="block xl:hidden my-[15px] "
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="2"
              viewBox="0 0 34 2"
              fill="none"
            >
              <path d="M1 1C11.6667 1 33 1 33 1" stroke="#4D4D4D" strokeLinecap="round" />
            </svg>

            {/* Extra Large screens (xl only) */}
            <svg
              className="hidden xl:block 2xl:hidden mt-[10px] mb-[40px] ml-1"
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="2"
              viewBox="0 0 42 2"
              fill="none"
            >
              <path d="M1 1H41" stroke="#141414" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* 2XL screens and above */}
            <svg
              className="hidden 2xl:block my-[60px] ml-1"
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="6"
              viewBox="0 0 52 6"
              fill="none"
            >
              <path
                d="M3 3C18.3333 3 49 3 49 3"
                stroke="#141414"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>

            {/* Description */}
            <p className="max-w-[352px] md:max-w-[449px]  lg:max-w-[450px] 2xl:max-w-[533px] min-[2800px]:max-w-[800px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] min-[2800px]:leading-[40px] font-[200] min-[2800px]:text-[36px] text-[#141414] xl:tracking-[0.048px] ml-1">
              Enterprise-ready and fully customizable, LumynXR
              gives you control over software and hardware to
              build MR solutions tailored to your workflow
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="fade-right mb-[-120px]  relative md:mb-[10px] lg:mb-0  w-full xl:mb-0 xl:mt-[200px] 2xl:mt-[300px]  flex items-end justify-end ">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/Enterprise.png`}
            alt="LumynXR Logo"
            width={1291}
            height={872}
            priority
            className="lg:min-w-[450px] xl:min-w-[768px] md:w-[495px] 2xl:min-w-[1000px] min-[2800px]:min-w-[1500px] md:mask-gradient  "
          />

        </div>
      </div>
    </div>
  );
}

export default BuiltForEnterprise;
