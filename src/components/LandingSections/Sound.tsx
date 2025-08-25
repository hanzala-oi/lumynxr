import React, { useEffect, useRef } from "react";
import ScrollVideo from "./ScrollVideo";

function Sound() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = rootRef.current;
    const heading = headingRef.current;
    const para = paraRef.current;
    if (!root || !heading || !para) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      heading.setAttribute("data-inview", "true");
      para.setAttribute("data-inview", "true");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            heading.setAttribute("data-inview", "true");
            para.setAttribute("data-inview", "true");
            io.unobserve(entry.target);
          }
        }
      },
      { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0.25 }
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative flex md:flex-col-reverse w-full md:min-h-screen xl:h-screen bg-black min-h-[60vh] overflow-hidden"
    >
      {/* Background Video */}
      <ScrollVideo
        srcWebm={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Speakersv2.webm`}
        srcMp4={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Speakersv2.mp4`}
        className="absolute md:mt-20 inset-0 scale-[1.1] md:w-full md:h-4/6 xl:h-full object-cover mt-[200px] z-0 xl:mt-[-100px]"
        poster="https://lumynxr.blob.core.windows.net/images/sound.png"
      />

      {/* Overlay Text */}
      <div className="xl:absolute z-10 flex xl:justify-end xl:items-center xl:top-1/2 xl:transform xl:-translate-y-1/2 pl-[28px] md:pl-[32px] xl:pl-0 w-full">
        <div className="text-left xl:w-1/3">
          <h1
            ref={headingRef}
            className={[
              "text-[32px] md:text-[48px] md:leading-[52px] leading-[30px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2]",
              // animation additions:
              "opacity-0 translate-x-24",
              "motion-safe:transition-all motion-safe:duration-[1200ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
              "motion-safe:delay-100",
              "[&[data-inview='true']]:opacity-100 [&[data-inview='true']]:translate-x-0",
            ].join(" ")}
          >
            <span className="hidden xl:block">Immersive<br />Sound</span>
            <span className="xl:hidden">Immersive Sound</span>
          </h1>

          {/* SVG Lines */}
          <svg className="my-[60px] hidden 2xl:block" xmlns="http://www.w3.org/2000/svg" width="52" height="6" viewBox="0 0 52 6" fill="none">
            <path d="M3 3C18.3333 3 49 3 49 3" stroke="#E2E2E2" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <svg className="mt-[37px] mb-[41px] hidden xl:block 2xl:hidden" xmlns="http://www.w3.org/2000/svg" width="42" height="2" viewBox="0 0 42 2" fill="none">
            <path d="M1 1C14.3333 1 41 1 41 1" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <svg className="my-[15px] xl:hidden" xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
            <path d="M1 1C11.6667 1 33 1 33 1" stroke="#C5C5C5" strokeLinecap="round" />
          </svg>

          {/* Description */}
          <p
            ref={paraRef}
            className={[
              "max-w-[332px] md:max-w-[531px] lg:max-w-[384px] 2xl:max-w-[443px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] font-[200] text-[#C5C5C5] xl:tracking-[0.048px]",
              // animation additions:
              "opacity-0 translate-x-24",
              "motion-safe:transition-all motion-safe:duration-[1200ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
              "motion-safe:delay-300",
              "[&[data-inview='true']]:opacity-100 [&[data-inview='true']]:translate-x-0",
            ].join(" ")}
          >
            LumynXR delivers a rich 3D soundstage—so every sound feels perfectly placed in your environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sound;
