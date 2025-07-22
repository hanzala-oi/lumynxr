"use client";

import React, { useState, useEffect } from "react";
import { useScrollVideo } from "@/hooks/useScrollVideo";

type ScrollVideoProps = {
  srcWebm: string;
  srcMp4: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  preload?: "auto" | "metadata" | "none";
};

export default function ScrollVideo({
  srcWebm,
  srcMp4,
  className = "",
  muted = true,
  preload = "metadata",
  loop = false,
}: ScrollVideoProps) {
  const { videoRef, containerRef } = useScrollVideo();
  const [format, setFormat] = useState<"webm" | "mp4">("mp4");

  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    setFormat(isIOS && isSafari ? "mp4" : "webm");
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <video
        ref={videoRef}
        muted={muted}
        playsInline
        preload={preload}
        loop={loop}
        className="w-full h-full object-cover rounded-xl"
      >
        {format === "webm" ? (
          <source src={srcWebm} type="video/webm" />
        ) : (
          <source src={srcMp4} type="video/mp4" />
        )}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
