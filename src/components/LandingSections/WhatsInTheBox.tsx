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
      className="h-screen bg-[#FAFAFA] py-[223px]"
    >
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] pl-[122px]">
          {/* What's in the Box Section */}
          <div>
            <h2 className="heading text-[64px] leading-[100px] font-[300] text-black mb-8">
              What's in the Box?
            </h2>

            <div>
              <div className="ml-[-259px] mt-[-20] box-image">
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
          <div>
            <h2 className="heading text-[64px] font-[300] text-black mb-[54px]">
              Specifications
            </h2>

            <div className="w-[600px]">
              <div>
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="spec-line flex justify-between items-center py-0.5"
                  >
                    <span className="text-[#5B5B5B] text-[20px] font-extralight">
                      {spec.label}
                    </span>
                    <div className="flex items-center w-[335px]">
                      <span className="text-[#5B5B5B] text-[20px] font-normal">
                        {spec.value}
                      </span>
                    </div>
                  </div>
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
