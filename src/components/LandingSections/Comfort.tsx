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
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {/* Image Block - Absolute positioned */}
      <div className="absolute inset-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/SideView.png`}
          alt="Comfort"
          fill
          className="comfort-image object-cover scale-90 translate-x-44"
          priority
        />
      </div>

      {/* Text Block - Relative positioned */}
      <div className="comfort-text relative z-10 flex flex-col justify-center h-full ml-[250px]">
        <h1 className="text-[36px] md:text-[96px] font-light leading-[100px] tracking-[0%] text-[#E2E2E2]">
          Balanced
          <br />
          for Comfort
        </h1>
        <div className="w-[46px] h-1 bg-white my-[60px] rounded"></div>
        <p className="text-base md:text-2xl font-light leading-[32px] tracking-[0.2%] text-[#C5C5C5]">
          Ergonomic facemask design ensures balanced <br /> 1:1 weight
          distribution for all-day comfort
        </p>
      </div>
    </div>
  );
}

export default Comfort;
