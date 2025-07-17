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

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        scrub: true,
        pin: true,
        pinSpacing: true,
        end: () => `+=${window.innerHeight * 2}`,
      },
    });

    // Animate container size and image scale simultaneously
    timeline
      .fromTo(
        imageContainer,
        { 
          width: "40%", // Start with small container
          height: "32%",
          transformOrigin: "bottom bottom" // Scale from bottom center
        },
        { 
          width: "100%", // Grow to full size
          height: "100%",
          ease: "power2.out",
          transformOrigin: "center center"
        }
      )
      .fromTo(
        image,
        { 
          scale: 1.3, // Start zoomed in
          transformOrigin: "center center"
        },
        { 
          scale: 1, // Scale down to normal
          ease: "power2.out",
          transformOrigin: "center center"
        },
        0 // Start at the same time as container animation
      );

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#E2E2E2] flex items-center justify-center h-screen"
    >
      <div 
        ref={imageContainerRef}
        className="relative flex justify-center items-center overflow-hidden rounded-2xl"
        // style={{ width: "65%", height: "10%" }} // Initial small size
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/HoldingHeadset-BG-Desktop.png`}
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