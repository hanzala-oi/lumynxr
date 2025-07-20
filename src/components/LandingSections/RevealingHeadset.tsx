"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeIcon, VolumeOff } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const VideoReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom+=100% top",
        scrub: true,
        pin: true,
      },
    });

    timeline.fromTo(
      video,
      {
        scale: 0.3,
      },
      {
        scale: 1,
        ease: "power2.out",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative bg-[#E2E2E2] flex items-center justify-center"
    >
      <div className="sticky top-0 flex justify-center items-center w-full h-screen">

        <video
          ref={videoRef}
          className="rounded-3xl shadow-2xl bg-black"
          muted
          playsInline
          autoPlay
          loop
        >
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Teaser_v2.webm`}
            type="video/webm"
          />
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Teaser_v2.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Mute Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-5 right-10 cursor-pointer hover:bg-gray-800 text-white text-sm px-3 py-1.5 rounded-xl shadow-lg bg-black/70 transition"
        >
          {isMuted ? <Volume2 /> : <VolumeOff />}
        </button>
      </div>
    </div>
  );
};

export default VideoReveal;
