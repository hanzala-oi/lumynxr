"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HoldingHeadset: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageContainer = imageContainerRef.current;
    const image = imageRef.current;

    if (!container || !imageContainer || !image) return;

    // Animate once on scroll into view
    const revealOnce = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=100px", // small buffer
        toggleActions: "play none none none", // only play once
      },
    });

    revealOnce
      .fromTo(
        imageContainer,
        {
          width: "40%",
          height: "32%",
          transformOrigin: "bottom bottom",
        },
        {
          width: "100%",
          height: "100%",
          ease: "power2.out",
          duration: 1,
        }
      )
      .fromTo(
        image,
        {
          scale: 1.3,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          ease: "power2.out",
          duration: 1,
        },
        0
      );

    // Pin the container for 2 more scrolls
    const holdPin = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${300}`, // hold after reveal
      pin: true,
      pinSpacing: true,
    });

    return () => {
      revealOnce.kill();
      holdPin.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#ffffff] flex items-center justify-center h-screen"
    >
      <div
        ref={imageContainerRef}
        className="relative flex justify-center items-center overflow-hidden rounded-2xl"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/Desktop,Laptop,Phone%20Landscape.png`}
          alt="Header Image"
          fill
          className="object-cover"
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default HoldingHeadset;
