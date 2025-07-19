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
      className="relative h-[70vh] xl:h-screen w-full bg-black overflow-hidden"
    >
      {/* Image Block - Absolute positioned */}
      <div className="absolute inset-0  ml-[-156px]  mt-[150px] xl:m-0 xl:h-screen ">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/SideView.png`}
          alt="Comfort"
          fill
          className="comfort-image object-cover xl:scale-90 xl:translate-x-44"
          priority
        />
      </div>

      {/* Text Block - Relative positioned */}
      <div className="comfort-text relative z-10 pl-[28px] pt-10 md:pl-[115px] 2xl:pl-[199px] flex flex-col justify-start  xl:justify-center h-full  ">
        <h1 className="text-[32px] xl:text-[64px] 2xl:text-[96px] font-light leading-[35px]   xl:leading-[76px]  2xl:leading-[100px] tracking-[0%] text-[#E2E2E2] ">
          <span className="block xl:hidden">Balanced for Comfort</span>
          <span className="hidden xl:block">
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
        <p className="hidden xl:block xl:text-[20px] 2xl:text-[24px] xl:leading-[32px] font-[150] xl:font-[200] text-[#C5C5C5] xl:tracking-[0.048px] ml-1">
          Ergonomic facemask design ensures balanced <br /> 1:1 weight
          distribution for all-day comfort
        </p>
        <p className=" xl:hidden text-[14px] font-[150] text-[#C5C5C5] ">
          Ergonomic facemask design ensures balanced  1:1 weight
          distribution for all-day comfort
        </p>

      </div>
    </div>
  );
}

export default Comfort;
