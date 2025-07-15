'use client';
import React, { useEffect, useRef, useState } from 'react';
interface HoldingHeadsetProps {
  onRevealComplete?: () => void;
}

const HoldingHeadset: React.FC<HoldingHeadsetProps> = ({ onRevealComplete }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef(0);
  const [revealProgress, setRevealProgress] = useState(0);
  const postRevealScrollCount = useRef(0);
  const isTrappingRef = useRef(false);
  const hasStartedRevealRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const originalOverflow = document.body.style.overflow;

    const getVisibleHeight = () => {
      const r = section.getBoundingClientRect();
      const top = Math.max(r.top, 0);
      const bottom = Math.min(r.bottom, window.innerHeight);
      return Math.max(0, bottom - top);
    };

    const trapScroll = () => {
      isTrappingRef.current = true;
      hasStartedRevealRef.current = true;
      document.body.style.overflow = 'hidden';
    };

    const releaseScroll = () => {
      if (postRevealScrollCount.current < 2) {
        postRevealScrollCount.current += 1;
        return; // wait for 2 gestures after full reveal
      }

      isTrappingRef.current = false;
      document.body.style.overflow = originalOverflow;
      if (onRevealComplete) onRevealComplete(); // Notify parent
    };



    const handleWheel: EventListener = (ev) => {
      const e = ev as WheelEvent;
      const visible = getVisibleHeight();
      const threshold = 0.9 * window.innerHeight;
      const rect = section.getBoundingClientRect();

      if (!isTrappingRef.current && !hasStartedRevealRef.current && visible >= threshold) {
        const targetPosition = window.scrollY + rect.top
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });

        setTimeout(() => {
          trapScroll();
        }, 300);
      }

      if (
        rect.top <= window.innerHeight * 0.15 &&
        rect.bottom > 0 &&
        revealRef.current < 1
      ) {
        if (!isTrappingRef.current) {
          const targetPosition = window.scrollY + rect.top
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          trapScroll();
        }
      }

      if (isTrappingRef.current) {
        e.preventDefault();
        e.stopPropagation();

        const scrollSpeed = 0.001;
        const deltaY = e.deltaY;
        const next = Math.min(1, Math.max(0, revealRef.current + deltaY * scrollSpeed));

        if (next !== revealRef.current) {
          revealRef.current = next;
          setRevealProgress(next);
        }

        if (next >= 1) {
          releaseScroll();
        }
        return;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      const rect = section.getBoundingClientRect();
      const visible = getVisibleHeight();
      const threshold = 0.9 * window.innerHeight;

      if (!isTrappingRef.current && !hasStartedRevealRef.current && visible >= threshold) {
        const targetPosition = window.scrollY + rect.top;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });

        setTimeout(() => {
          trapScroll();
        }, 300);
      }

      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
      }
    };

    let touchStartY = 0;
    const handleTouchMove = (e: TouchEvent) => {
      if (isTrappingRef.current) {
        e.preventDefault();

        const touch = e.touches[0];
        const deltaY = touchStartY - touch.clientY;
        touchStartY = touch.clientY;

        const next = Math.min(1, Math.max(0, revealRef.current + deltaY * 0.002));
        if (next !== revealRef.current) {
          // If user scrolls backward, reset post-reveal count
          if (next < 1 && revealRef.current === 1) {
            postRevealScrollCount.current = 0;
          }

          revealRef.current = next;
          setRevealProgress(next);
        }


        if (next >= 1) {
          releaseScroll();
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length === 0) {
        touchStartY = 0;
      }
    };

    const handleScroll = () => {
      if (!isTrappingRef.current && !hasStartedRevealRef.current) {
        const rect = section.getBoundingClientRect();
        const visible = getVisibleHeight();
        const threshold = 0.5 * window.innerHeight;

        if (visible >= threshold && rect.top <= window.innerHeight * 0.3) {
          const targetPosition = window.scrollY + rect.top
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });

          setTimeout(() => {
            trapScroll();
          }, 300);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTrappingRef.current) {
        const keys = ['ArrowDown', 'ArrowUp', 'Space', 'PageDown', 'PageUp'];
        if (keys.includes(e.key)) {
          e.preventDefault();
        }
      }
    };

    const opts = { passive: false } as AddEventListenerOptions;
    window.addEventListener('wheel', handleWheel, opts);
    window.addEventListener('touchstart', handleTouchStart, opts);
    window.addEventListener('touchmove', handleTouchMove, opts);
    window.addEventListener('touchend', handleTouchEnd, opts);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown, opts);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-screen overflow-hidden"
      style={{ touchAction: 'none' }}
    >
      <div
        className="absolute top-0 left-0 h-screen w-screen transition-all duration-200 ease-out"
        style={{
          clipPath: `inset(
            ${(1 - revealProgress) * 35}% 
            ${(1 - revealProgress) * 35}% 
            ${(1 - revealProgress) * 35}% 
            ${(1 - revealProgress) * 35}%
          )`,
        }}
      >
        <img
          src="https://lumynxr.blob.core.windows.net/images/HoldingHeadset-BG-Desktop.png"
          alt="Scroll Reveal Center"
          className="h-screen w-screen object-cover"
        />
      </div>
    </div>
  );
};

export default HoldingHeadset;
