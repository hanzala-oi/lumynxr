"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HoldingHeadset: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top", // Start when container hits top of viewport
        scrub: true,
        pin: true, 
        pinSpacing: true, 
        end: () => `+=${window.innerHeight * 2}`, // in your GSAP ScrollTrigger
      },
    });

    // Animate the image scaling up
    timeline.fromTo(
      image,
      { scale: 0.3 }, // Start at 30% scale
      { scale: 1, ease: "power2.out" } // End at full size
    );

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#E2E2E2] flex items-center justify-center"
    >
      <div className="sticky top-0 flex justify-center items-center w-full h-screen ">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/HoldingHeadset-BG-Desktop.png`}
          alt="Header Image"
          fill
          className="object-cover rounded-2xl"
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default HoldingHeadset;
