"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeOff } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function getPreferredVideoFormat(): "webm" | "mp4" {
  if (typeof navigator !== "undefined") {
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    if (isIOS && isSafari) {
      return "mp4";
    }
    return "webm";
  }
  return "mp4";
}

const VideoReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoFormat, setVideoFormat] = useState<"webm" | "mp4">("mp4");

  useEffect(() => {
    setVideoFormat(getPreferredVideoFormat());
  }, []);

  // Mute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Pause/mute when out of view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          video.muted = isMuted;
        } else {
          video.pause();
          video.muted = true;
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) observer.unobserve(video);
    };
  }, [isMuted]);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#000000] flex items-center justify-center"
    >
      <div className="sticky top-0 flex justify-center items-center w-full h-screen">
        <video
          ref={videoRef}
          className="rounded-3xl shadow-2xl bg-black h-full w-full object-cover"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
        >
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Teaser_v3.${videoFormat}`}
            type={`video/${videoFormat}`}
          />
          Your browser does not support the video tag.
        </video>

        <button
          onClick={toggleMute}
          className="absolute bottom-5 right-10 cursor-pointer hover:bg-gray-800 text-white text-sm px-3 py-1.5 rounded-xl shadow-lg bg-black/70 transition"
        >
          {isMuted ? <VolumeOff /> : <Volume2 />}
        </button>
      </div>
    </div>
  );
};

export default VideoReveal;
