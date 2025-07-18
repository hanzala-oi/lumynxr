"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhatsInTheBox() {
  const containerRef = useRef<HTMLDivElement>(null);

  const specifications = [
    { label: "Device name", value: "LumynXR" },
    { label: "CPU", value: "Qualcomm Snapdragon XR2+ Gen 2" },
    { label: "Display", value: "2160x2160" },
    { label: "Optics", value: "Pancake Lens" },
    { label: "Speakers", value: "Stereo Speakers - Dolby Tuned" },
    { label: "RAM", value: "8 GB" },
    { label: "Storage", value: "128GB, 512GB" },
    { label: "Passthrough", value: "RGB Passthrough" },
    { label: "DoF", value: "6DoF" },
    { label: "Depth Sensing", value: "Yes" },
    { label: "IPD", value: "Adjustable 56-70mm" },
    { label: "Battery", value: "5500 mAh" },
    { label: "OS", value: "Android" },
    { label: "Weight", value: "540g" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Animate Headings
      tl.from(".heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animate Image
      tl.from(".box-image", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "-=0.8"); // overlap with previous

      // Animate Each Spec Line
      tl.from(".spec-line", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      }, "-=0.5"); // slight overlap
    }, containerRef);

    return () => ctx.revert(); // Clean up animations on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#FAFAFA] xl:py-[115px] 2xl:py-[223px] overflow-hidden"
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px]  xl:pl-[122px]">
          {/* What's in the Box Section */}
          <div>
            <h2 className="heading text-[32px] xl:text-[40px] 2xl:text-[64px] leading-[35px] xl:leading-[100px] font-[300] text-black mb-8 pl-[28px] pt-10 xl:pt-0">
              What's in the Box?
            </h2>

            <div>
              <div className="xl:hidden mt-[-60px] w-[150vw] ml-[-25vw] ">
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/BoxContents.png`}
                  alt="LumynXR Logo"
                  width={684}
                  height={368}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <div className="
               xl:ml-[-259px] hidden xl:block  xl:mt-[-60] 2xl:mt-[-20]   box-image ">
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/BoxContents.png`}
                  alt="LumynXR Logo"
                  width={1426}
                  height={768}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Specifications Section */}
          <div className="pl-[28px] xl:pl-0 ">
            <h2 className="heading text-[32px] xl:text-[40px] 2xl:text-[64px] leading-[35px] xl:leading-[100px] font-[300] text-black mb-[54px] ">
              Specifications
            </h2>

            <div className=" xl:w-[600px] 2xl:w-[700px]">
              <div className="grid grid-cols-2 gap-y-3  ">
                {specifications.map((spec, index) => (
                  <React.Fragment key={index}>
                    <span className="text-left text-[#5B5B5B] text-[12px] xl:text-[16px] 2xl:text-[20px] font-extralight leading-[16px] xl:leading-[22px] 2xl:leading-[24px]  ">
                      {spec.label}
                    </span>
                    <span className="ml-[-30px] text-left text-[#5B5B5B] text-[12px] xl:text-[16px] 2xl:text-[20px] font-normal leading-[14px] xl:leading-[20px] ">
                      {spec.value}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsInTheBox;
