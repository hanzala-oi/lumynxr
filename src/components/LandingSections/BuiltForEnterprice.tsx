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
      className="h-screen bg-[#FAFAFA] overflow-hidden"
    >
      <div className="flex items-center h-screen">
        {/* Left Content */}
        <div className="fade-left w-1/2 xl:pl-[115px] 2xl:pl-[199px]">
          <div className="max-w-lg">
            <div className="text-[32px] leading-[30px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] text-black">
              <span className="block xl:hidden">Built for Enterprise</span>
              <span className="hidden xl:block">
                Built for
                <br />
               Enterprisel
              </span>

            </div>
            <svg
              className="xl:mb-[39px] xl:mt-[18px] 2xl:my-[60px]"
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
        <div className="fade-right w-1/2 relative mt-[200px]">
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
