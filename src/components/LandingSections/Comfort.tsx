import Image from "next/image";
import React, { useEffect, useRef } from "react";

function Comfort() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    const heading = headingRef.current;
    const para = paraRef.current;
    const imageWrap = imageWrapRef.current;
    if (!root || !heading || !para) return;

    // If reduced motion, reveal instantly
    if (prefersReduced) {
      heading.setAttribute("data-inview", "true");
      para.setAttribute("data-inview", "true");
      if (imageWrap) imageWrap.setAttribute("data-inview", "true");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.setAttribute("data-inview", "true");
            para.setAttribute("data-inview", "true");
            if (imageWrap) imageWrap.setAttribute("data-inview", "true");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0.25 }
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="flex flex-col md:flex-col-reverse xl:flex-row min-h-[70vh] md:min-h-[85vh] md:max-h-screen md:pt-[100px] xl:pt-0 xl:h-screen w-full bg-black overflow-hidden"
    >
      {/* Text Block - Relative positioned */}
      <div className="z-10 pl-[28px] md:pl-[32px] pt-10 xl:pl-[115px] 2xl:pl-[259px] flex flex-col justify-start xl:justify-center mb-10 md:mb-0 h-full">
        <h1
          ref={headingRef}
          className={[
            "text-[32px] md:text-[48px] md:leading-[52px] leading-[30px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2]",
            // animation additions:
            "opacity-0 -translate-x-24",
            "motion-safe:transition-all motion-safe:duration-[1200ms] motion-safe:ease-[cubic-bezier(0.19,1,0.22,1)]",
            "motion-safe:delay-100",
            "[&[data-inview='true']]:opacity-100 [&[data-inview='true']]:translate-x-0",
          ].join(" ")}
        >
          <span className="block md:hidden">Balanced for Comfort</span>
          <span className="hidden md:block">
            Balanced
            <br />
            for Comfort
          </span>
        </h1>

        <svg
          className="my-[60px] hidden 2xl:block"
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="6"
          viewBox="0 0 52 6"
          fill="none"
        >
          <path
            d="M3 3C18.3333 3 49 3 49 3"
            stroke="#E2E2E2"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="mt-[37px] mb-[41px] hidden xl:block 2xl:hidden ml-1"
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="2"
          viewBox="0 0 42 2"
          fill="none"
        >
          <path
            d="M1 1C14.3333 1 41 1 41 1"
            stroke="#E2E2E2"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="my-[15px] xl:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="2"
          viewBox="0 0 34 2"
          fill="none"
        >
          <path d="M1 1C11.6667 1 33 1 33 1" stroke="#C5C5C5" strokeLinecap="round" />
        </svg>

        <p
          ref={paraRef}
          className={[
            "max-w-[352px] md:max-w-[489px] lg:max-w-[423px] 2xl:max-w-[509px] text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] md:leading-[24px] xl:leading-[32px] font-[200] xl:font-[200] text-[#C5C5C5] xl:tracking-[0.048px]",
            // animation additions:
            "opacity-0 -translate-x-24",
            "motion-safe:transition-all motion-safe:duration-[1200ms] motion-safe:ease-[cubic-bezier(0.19,1,0.22,1)]",
            "motion-safe:delay-300",
            "[&[data-inview='true']]:opacity-100 [&[data-inview='true']]:translate-x-0",
          ].join(" ")}
        >
          Ergonomic facemask design ensures balanced 1:1 weight distribution for all-day comfort
        </p>
      </div>

      <div className="xl:w-2/3 flex items-end justify-end">
        {/* Image Block - Absolute positioned */}
        <div
          ref={imageWrapRef}
          className={[
            "mx-auto h-full flex items-center justify-end xl:w-2/3",
            // animation additions (image slides in from right):
            "opacity-0 translate-x-24",
            "motion-safe:transition-all motion-safe:duration-[1000ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
            "motion-safe:delay-200",
            "[&[data-inview='true']]:opacity-100 [&[data-inview='true']]:translate-x-0",
          ].join(" ")}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/Sideview.V2.png`}
            alt="Comfort"
            width={600}
            height={400}
            className="max-w-[250px] xl:max-w-[400px] 2xl:max-w-[600px] h-auto object-cover xl:ml-[50px] mb-10"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Comfort;
