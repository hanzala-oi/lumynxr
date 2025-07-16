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
        <div className="fade-left w-1/2 pl-[299px]">
          <div className="max-w-lg">
            <h1 className="text-[96px] text-black leading-tight">
              Built for
              <br />
              Enterprise
            </h1>
            <svg
              className="my-[60px]"
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
            <p className="text-[24px] font-[250] text-[#141414] leading-relaxed">
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
