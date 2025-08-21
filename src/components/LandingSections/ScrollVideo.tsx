// components/ScrollVideoGsap.tsx
"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useGsapScrollVideo } from "@/hooks/useScrollVideo";

type Props = {
  srcWebm: string;
  srcMp4: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  preload?: "auto" | "metadata" | "none";
  poster?: string;
  // Optional GSAP tuning
  start?: string;
  end?: string;
  rootMarginPx?: number;
};

function getStableFormat(): "webm" | "mp4" {
  if (typeof navigator === "undefined") return "mp4";
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  if (isIOS || isSafari) return "mp4"; // force mp4 for iOS/Safari stability

  const v = document.createElement("video");
  const canWebM =
    typeof v.canPlayType === "function" &&
    (v.canPlayType('video/webm; codecs="vp9"') ||
      v.canPlayType('video/webm; codecs="vp8"'));
  return canWebM ? "webm" : "mp4";
}

export default function ScrollVideo({
  srcWebm,
  srcMp4,
  className = "",
  muted = true,
  loop = false,
  preload = "none", // default none
  poster,
  start,
  end,
  rootMarginPx = 600,
}: Props) {
  const [format, setFormat] = useState<"webm" | "mp4">("mp4");
  const [attachOnce, setAttachOnce] = useState(false); // monotonic: attach exactly once

  useEffect(() => setFormat(getStableFormat()), []);

  const { containerRef, videoRef } = useGsapScrollVideo<HTMLVideoElement>({
    start,
    end,
    rootMarginPx,
    onNearViewport: () => setAttachOnce(true),
  });

  const src = useMemo(() => {
    if (!attachOnce) return null;
    return format === "webm" ? srcWebm : srcMp4;
  }, [attachOnce, format, srcWebm, srcMp4]);

  return (
    <div ref={containerRef} className={className}>
      <video
        ref={videoRef}
        muted={muted}
        playsInline
        webkit-playsinline="true"
        loop={loop}
        preload={preload}
        poster={poster}
        className="w-full h-full object-cover"
      >
        {/* Attach exactly once (no detach) → no flicker / decoder churn */}
        {src && <source src={src} type={`video/${format}`} />}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
