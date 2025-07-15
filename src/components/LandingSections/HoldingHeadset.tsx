'use client';
import React, { useEffect, useRef, useState } from 'react';

const ScrollRevealImageCenter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inset, setInset] = useState(50); // Initial clip from all sides

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const startRevealY = window.innerHeight * 0.4;

      if (rect.top > startRevealY) {
        setInset(30);
        return;
      }

      const distanceScrolled = startRevealY - rect.top;
      const revealDistance = window.innerHeight - startRevealY;
      const progress = Math.min(distanceScrolled / revealDistance, 1);

      const newInset = 30 - progress * 30;
      setInset(newInset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="w-screen h-screen transition-all duration-300 ease-out"
        style={{
          clipPath: `inset(${inset}% ${inset}% ${inset}% ${inset}%)`,
          WebkitClipPath: `inset(${inset}% ${inset}% ${inset}% ${inset}%)`,
        }}
      >
        <img
          src="https://lumynxr.blob.core.windows.net/images/HoldingHeadset-BG-Desktop.png"
          alt="Scroll Reveal Center"
          className="w-screen h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default ScrollRevealImageCenter;
