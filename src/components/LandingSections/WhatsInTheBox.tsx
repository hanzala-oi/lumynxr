"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function WhatsInTheBox() {
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

  const textRef = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const specRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef2.current, // start when specifications enter
        start: "top 80%", // adjust based on design
      },
      defaults: { ease: "power3.out" },
    });

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        }
      );
    }

    if (textRef2.current) {
      gsap.fromTo(
        textRef2.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: textRef2.current,
            start: "top 85%",
          },
        }
      );
    }

    // Animate each spec item on scroll
    specRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: 0.05 * index, // subtle stagger
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div className="min-h-screen md:flex md:items-center md:justify-center bg-[#FAFAFA] xl:py-[115px] 2xl:py-[223px] overflow-hidden">
      <div className="mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
          {/* What's in the Box Section */}
          <div className="flex flex-col md:items-center items-end w-full">
            <div className="flex flex-col items-start">
              <h2
                ref={textRef}
                className="heading xl:pl-20 text-[32px] md:text-[36px] xl:text-[40px] 2xl:text-[64px] leading-[35px] md:leading-[52px] xl:leading-[100px] font-[300] text-black mb-8 pl-[28px] md:pl-[32px] md:pt-0 pt-10 xl:pt-0"
              >
                What's in the Box?
              </h2>

              <div>
                <div className="ml-[-50px] xl:ml-0 min-[2400px]:ml-[-50px] max-w-[700px] min-[2400px]:max-w-[800px]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/BoxContents-v3-With Labels.png`}
                    alt="LumynXR Logo"
                    width={4246}
                    height={2673}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Specifications Section */}
          <div className="pl-[28px] md:pl-[32px] xl:pl-0 flex flex-col items-center w-full">
            <div ref={textRef2} className="w-full flex flex-col items-start">
              <h2 className="heading text-[32px] md:text-[36px] xl:text-[40px] 2xl:text-[64px] leading-[35px] md:leading-[52px] xl:leading-[100px] font-[300] text-black mb-[54px] xl:mb-0 2xl:mb-[54px]">
                Specifications
              </h2>
              <div className="xl:w-[600px] 2xl:w-[700px] pl-2 w-full">
                <div className="grid grid-cols-2 gap-y-3 xl:gap-y-4 2xl:gap-y-6">
                  {specifications.map((spec, index) => (
                    <React.Fragment key={index}>
                      <span
                        ref={(el: HTMLSpanElement | null) => {
                          specRefs.current[index * 2] = el;
                        }}
                        className="text-left text-[#5B5B5B] text-[12px] md:text-[16px] xl:text-[16px] 2xl:text-[20px] font-extralight leading-[16px] xl:leading-[22px] 2xl:leading-[24px]"
                      >
                        {spec.label}
                      </span>
                      <span
                        ref={(el: HTMLSpanElement | null) => {
                          specRefs.current[index * 2 + 1] = el;
                        }}
                        className="ml-[-70px] text-left text-[#5B5B5B] text-[12px] md:text-[16px] xl:text-[16px] 2xl:text-[20px] font-normal leading-[14px] md:leading-[16px] xl:leading-[20px]"
                      >
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
    </div>
  );
}

export default WhatsInTheBox;
