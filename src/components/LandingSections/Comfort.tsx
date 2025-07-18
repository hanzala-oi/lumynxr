"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Comfort() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // when section top hits 80% viewport
          toggleActions: "play none none none",
        },
      });

      // Image animation (parallax-like effect)
      tl.from(".comfort-image", {
        scale: 1.1,
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      // Heading & Text stagger animation
      tl.from(
        ".comfort-text > *",
        {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        },
        "-=1" // start slightly before image finishes
      );
    }, containerRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full bg-black overflow-hidden "
    >
      {/* Image Block - Absolute positioned */}
      <div className="absolute inset-0  ml-[-156px] h-[500px] mt-[150px] xl:m-0 xl:h-screen ">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/SideView.png`}
          alt="Comfort"
          fill
          className="comfort-image object-cover xl:scale-90 xl:translate-x-44"
          priority
        />
      </div>

      {/* Text Block - Relative positioned */}
      <div className="comfort-text relative z-10 pl-[28px] pt-10 xl:p-0 flex flex-col justify-start  xl:justify-center h-full xl:ml-[250px] ">
        <h1 className="text-[32px] xl:text-[64px] 2xl:text-[96px] font-light leading-[35px]   xl:leading-[76px]  2xl:leading-[100px] tracking-[0%] text-[#E2E2E2] ">
          <span className="block xl:hidden">Balanced for Comfort</span>
          <span className="hidden xl:block">
            Balanced
            <br />
            for Comfort
          </span>
        </h1>
        <div className="w-[46px] h-[1px] xl:h-1 mt-[13px] bg-white xl:mt-[38px] mb-[20px] xl:mb-[40px] 2xl:my-[60px] rounded" />
        <p className="text-[14px] xl:text-[20px] 2xl:text-[24px] xl:leading-[32px] font-[200] text-[#C5C5C5] xl:tracking-[0.048px]">
          Ergonomic facemask design ensures balanced <br /> 1:1 weight
          distribution for all-day comfort
        </p>
      </div>
    </div>
  );
}

export default Comfort;
