"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BuiltForEnterprise() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // trigger when top of container hits 80% viewport
          toggleActions: "play none none none",
        },
      });

      // Animate left content
      tl.from(".fade-left", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate right image
      tl.from(".fade-right", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-fit  xl:h-screen bg-[#FAFAFA] overflow-hidden pt-[100px] xl:pt-0 "
    >
      <div className="flex flex-col xl:flex-row items-start xl:items-center  ">
        {/* Left Content */}
        <div className="fade-left xl:w-1/2 xl:pl-[115px] 2xl:pl-[199px] pl-[28px]  ">
          <div className="">
            <div className="text-[32px] font-[300] leading-[30px] xl:text-[64px] 2xl:text-[96px]  xl:leading-[100px] text-black ">
              <span className="block 2xl:hidden ">Built for Enterprise</span>
              <span className="hidden 2xl:block">
                Built for
                <br />
                Enterprise
              </span>

            </div>
            {/* Small screens (default) */}
            <svg
              className="block xl:hidden my-[15px]"
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
              className="hidden xl:block 2xl:hidden mt-[10px] mb-[40px]"
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
              className="hidden 2xl:block my-[60px]"
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
            <p className="text-[14px] xl:text-[20px] 2xl:text-[24px] xl:leading-[32px] font-[200] 2xl:font-[250]  xl:tracking-[0.048px] text-[#141414] leading-relaxed">
              Enterprise-ready and fully customizable, LumynXR <br />
              gives you control over software and hardware to <br />
              build MR solutions tailored to your workflow
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="fade-right xl:w-1/2 relative xl:mt-[200px]  mb-[">
          <div className="h-full w-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/Enterprise.png`}
              alt="LumynXR Logo"
              width={1091}
              height={872}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuiltForEnterprise;
