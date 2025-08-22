import React, { useLayoutEffect, useRef } from "react";
import ScrollVideo from "./ScrollVideo";
import gsap from "gsap";

function Controller() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const rootRef = useRef(null);

  const isClient = typeof window !== "undefined";

  useLayoutEffect(() => {
    if (!isClient) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const heading = headingRef.current;
      const para = paraRef.current;
      if (!heading || !para) return;

      if (prefersReduced) {
        gsap.set([heading, para], { opacity: 1, x: 0 });
        return;
      }

      // Initial state for line-style reveal
      gsap.set([heading, para], { opacity: 0, x: -100 });

      // Trigger once when the section enters the viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to([heading, para], {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "expo.out",
                stagger: 0.22, // paragraph follows heading
                overwrite: "auto",
              });
              observer.disconnect();
            }
          });
        },
        { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0.25 }
      );

      if (rootRef.current) observer.observe(rootRef.current);

      return () => observer.disconnect();
    }, rootRef);

    return () => ctx.revert();
  }, [isClient]);

  return (
    <div
      ref={rootRef}
      className="flex flex-col md:h-screen md:flex-col-reverse xl:flex-row items-center justify-center xl:h-screen bg-black min-h-[70vh] md:min-h-[85vh] overflow-hidden md:pb-20 xl:pb-0"
    >
      {/* Text Content */}
      <div className="flex z-10 md:mt-10 flex-col w-full justify-center xl:h-full pl-6 md:pl-[32px] xl:pl-[115px] 2xl:pl-[259px]">
        <h1
          ref={headingRef}
          className="text-[32px] md:text-[48px] md:leading-[52px] leading-[30px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2]"
        >
          <span className="hidden xl:block">Effortless<br />Precision</span>
          <span className="xl:hidden">Effortless Precision</span>
        </h1>

        {/* SVG Lines */}
        <svg className="my-[60px] hidden 2xl:block ml-1" xmlns="http://www.w3.org/2000/svg" width="52" height="6" viewBox="0 0 52 6" fill="none">
          <path d="M3 3C18.3333 3 49 3 49 3" stroke="#E2E2E2" strokeWidth="5" strokeLinecap="round" />
        </svg>
        <svg className="mt-[37px] mb-[41px] hidden xl:block 2xl:hidden ml-1" xmlns="http://www.w3.org/2000/svg" width="42" height="2" viewBox="0 0 42 2" fill="none">
          <path d="M1 1C14.3333 1 41 1 41 1" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <svg className="my-[15px] xl:hidden" xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
          <path d="M1 1C11.6667 1 33 1 33 1" stroke="#C5C5C5" strokeLinecap="round" />
        </svg>

        {/* Description */}
        <p
          ref={paraRef}
          className="max-w-[319px] md:max-w-[459px] lg:max-w-[377px] 2xl:max-w-[451px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] font-[200] text-[#C5C5C5] xl:tracking-[0.048px]"
        >
          Interact naturally with precise hand tracking or high fidelity controllers for intuitive, accurate control.
        </p>
      </div>

      {/* Video */}
      <div className="rounded-[20px] overflow-hidden pb-[100px] md:pb-0 mt-6 md:mt-10">
        <ScrollVideo
          srcWebm={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Controllers.webm`}
          srcMp4={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Controllers.mp4`}
          className="rounded-[20px] w-full h-full object-cover md:p-5 md:rounded-2xl"
        />
      </div>
    </div>
  );
}

export default Controller;
