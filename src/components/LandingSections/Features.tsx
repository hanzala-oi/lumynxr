"use client";
import React, { useEffect, useRef } from "react";

type VideoSource = {
  webm: string;
  mp4: string;
};

type Feature = {
  title: string;
  sources: VideoSource;
};

const features: Feature[] = [
  {
    title: "Anti-fogging ventilation system",
    sources: {
      webm: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Ventilation.webm`,
      mp4: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Ventilation.mp4`,
    },
  },
  {
    title: "Easy IPD Adjustment",
    sources: {
      webm: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/IPD-Bentou.webm`,
      mp4: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/IPD-Bento.mp4`,
    },
  },
  {
    title: "Power that lasts",
    sources: {
      webm: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Batteryu.webm`,
      mp4: `${process.env.NEXT_PUBLIC_CDN_URL}/videos/Battery.mp4`,
    },
  },
];

const Features: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video && video.paused) {
      video.play().catch((err) => {
        console.warn("Video play interrupted:", err);
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0;
    }
  };

  useEffect(() => {
    // Don't run on desktop and above (xl = 1280px)
    if (window.innerWidth >= 1280) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => { });
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    // <div className="min-h-screen bg-black flex items-center justify-center p-4 ">
    //   <div className="w-full max-w-7xl">
    //     {/* Mobile Layout */}
    //     <div className="xl:hidden space-y-6">
    //       {features.map((feature, index) => (
    //         <div
    //           key={index}
    //           className="bg-[#1a1919] rounded-xl overflow-hidden group cursor-pointer"
    //           onMouseEnter={handleMouseEnter}
    //           onMouseLeave={handleMouseLeave}
    //         >
    //           <div className="aspect-video">
    //             <video
    //               ref={(el) => {
    //                 videoRefs.current[index] = el;
    //               }}
    //               className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-105"
    //               muted
    //               loop
    //               playsInline
    //               preload="metadata"
    //             >
    //               <source src={feature.sources.webm} type="video/webm" />
    //               <source src={feature.sources.mp4} type="video/mp4" />
    //               Your browser does not support the video tag.
    //             </video>
    //           </div>
    //           <div className="p-6">
    //             <h1 className="text-[16px]  xl:text-[20px] font-[500] xl:font-normal xl:leading-[100%] xl:tracking-[0%] text-[#F2F2F2] mb-2">
    //               {feature.title}
    //             </h1>
    //             <p className="text-[12px] xl:text-[16px] leading-[15px] xl:leading-[24px] 2xl:tracking-[3%] font-[150] 2xl:font-[200]  text-[#F2F2F2]">
    //               {index === 0 && "Built-in anti-fog ventilation keeps your view clear and uninterrupted during extended use"}
    //               {index === 1 && "Adjustable IPD range from 56-70mm ensures a clear, comfortable view tailored to each user's eye distance"}
    //               {index === 2 && "5500mAh battery for long lasting power for extended use"}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Desktop Layout */}
    //     <div className="hidden xl:grid xl:grid-cols-2 gap-2  max-h-[80vh]">
    //       {/* Left Half - First Feature */}
    //       <div
    //         className="bg-[#1a1919] rounded-xl  group cursor-pointer flex flex-col overflow-hidden "
    //         onMouseEnter={handleMouseEnter}
    //         onMouseLeave={handleMouseLeave}
    //       >
    //         {/* Video takes 2/3 of height */}
    //         <div className=" flex-[2]">
    //           <video
    //             ref={(el) => {
    //               videoRefs.current[0] = el;
    //             }}
    //             className="w-full  h-full object-cover transition duration-300 ease-in-out group-hover:scale-105 "
    //             muted
    //             loop
    //             playsInline
    //             preload="metadata"
    //           >
    //             <source src={features[0].sources.webm} type="video/webm" />
    //             <source src={features[0].sources.mp4} type="video/mp4" />
    //             Your browser does not support the video tag.
    //           </video>
    //         </div>
    //         {/* Text takes 1/3 of height */}
    //         <div className="  relative bottom-6 p-6 pr-10 pt-0 mt-[-50px] flex flex-col gap-3 justify-center ">
    //           <h1 className="text-[16px]  xl:text-[20px] font-[500] xl:font-normal xl:leading-[100%] xl:tracking-[0%] text-[#F2F2F2] mt-[-10px]">
    //             {features[0].title}
    //           </h1>
    //           <p className="text-[12px] xl:text-[16px] leading-[15px] xl:leading-[24px] 2xl:tracking-[3%] font-[150] 2xl:font-[200]  text-[#F2F2F2] ">
    //             Built-in anti-fog ventilation keeps your view clear and uninterrupted during extended use
    //           </p>
    //         </div>
    //       </div>

    //       {/* Right Half */}
    //       <div className="flex flex-col gap-2 max-h-[80vh] ">
    //         {/* Second Feature - Takes 3/5 of right half */}
    //         <div
    //           className="bg-[#1a1919] rounded-xl overflow-hidden group cursor-pointer flex-2 flex flex-col"
    //           onMouseEnter={handleMouseEnter}
    //           onMouseLeave={handleMouseLeave}
    //         >
    //           <div className="flex-[2]   flex flex-col items-between  justify-start ">
    //             <video
    //               ref={(el) => {
    //                 videoRefs.current[1] = el;
    //               }}
    //               className=" max-h-3/5   object-cover transition duration-300 ease-in-out group-hover:scale-105 "
    //               muted
    //               loop
    //               playsInline
    //               preload="metadata"
    //             >
    //               <source src={features[1].sources.webm} type="video/webm" />
    //               <source src={features[1].sources.mp4} type="video/mp4" />
    //               Your browser does not support the video tag.
    //             </video>
    //             <div className=" relative bottom-4  gap-3  p-6 pt-0 flex flex-col justify-center ">
    //               <h1 className="text-[16px]  xl:text-[20px] font-[500] xl:font-normal xl:leading-[100%] xl:tracking-[0%] text-[#F2F2F2]">
    //                 {features[1].title}
    //               </h1>
    //               <p className="text-[12px] xl:text-[16px] leading-[15px] xl:leading-[24px] 2xl:tracking-[3%] font-[150] 2xl:font-[200]  text-[#F2F2F2]">
    //                 Adjustable IPD range from 56-70mm ensures a clear, comfortable view tailored to each user's eye distance
    //               </p>
    //             </div>
    //           </div>

    //         </div>

    //         {/* Third Feature - Takes 2/5 of right half */}
    //         <div
    //           className="bg-[#1a1919] rounded-xl w-full overflow-hidden group cursor-pointer flex-[1] flex   "
    //           onMouseEnter={handleMouseEnter}
    //           onMouseLeave={handleMouseLeave}
    //         >
    //           <div className=" flex relative w-full">

    //             <div className=" pl-6 gap-3 max-w-1/2   flex flex-col justify-center ">
    //               <h1 className="text-[16px]   xl:text-[20px] font-[500] xl:font-normal xl:leading-[100%] xl:tracking-[0%] text-[#F2F2F2]">
    //                 {features[2].title}
    //               </h1>
    //               <p className="text-[12px] xl:text-[16px] leading-[15px] xl:leading-[24px] 2xl:tracking-[3%] font-[150] 2xl:font-[200]  text-[#F2F2F2]">
    //                 5500mAh battery for long lasting power for extended use
    //               </p>
    //             </div>
    //             <video
    //               ref={(el) => {
    //                 videoRefs.current[2] = el;
    //               }}
    //               className="absolute w-1/2 right-0 object-cover transition duration-300 ease-in-out group-hover:scale-105  "
    //               muted
    //               loop
    //               playsInline
    //               preload="metadata"
    //             >
    //               <source src={features[2].sources.webm} type="video/webm" />
    //               <source src={features[2].sources.mp4} type="video/mp4" />
    //               Your browser does not support the video tag.

    //             </video>
    //           </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="xl:h-screen min-h-screen w-screen flex flex-col xl:flex-row items-center justify-center xl:py-8 xl:px-10 2xl:px-20 2xl:py-20 py-8 px-4 ">
      <div className="xl:w-4/5 h-full flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-2 xl:max-h-[85vh] xl:max-w-[85vw] ">

        <div onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} className="group w-full xl:w-1/2 h-full flex flex-col bg-[#1a1919] rounded-xl">
          <div className="w-full h-4/5  overflow-hidden ">
            <video
              ref={(el) => {
                videoRefs.current[0] = el;
              }}
              className="w-full  h-full object-cover transition duration-300 ease-in-out group-hover:scale-105 "
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={features[0].sources.webm} type="video/webm" />
              <source src={features[0].sources.mp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col gap-2 justify-end pl-4 pb-13 h-1/5">
            <h1 className="text-[16px]  xl:text-[20px] font-[500] xl:font-normal xl:leading-[100%] xl:tracking-[0%] text-[#F2F2F2]">
              {features[0].title}
            </h1>
            <p className="text-[12px] xl:text-[16px] leading-[15px] xl:leading-[24px] 2xl:tracking-[3%] font-[150] 2xl:font-[200]  text-[#F2F2F2] ">
              Built-in anti-fog ventilation keeps your view clear and uninterrupted during extended use
            </p>
          </div>
        </div>


        <div className="w-full xl:w-1/2 h-full flex flex-col  gap-4 xl:gap-2 ">

          <div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} className="w-full xl:h-3/5 h-full bg-[#1a1919] rounded-xl group">
            <div className="w-full h-4/5 overflow-hidden ">
              <video
                ref={(el) => {
                  videoRefs.current[1] = el;
                }}
                className="mt-[-20px]   object-cover transition duration-300 ease-in-out group-hover:scale-105 "
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={features[1].sources.webm} type="video/webm" />
                <source src={features[1].sources.mp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="pb-8 mt-[-13px] 2xl:mt-0 pl-4 h-1/5 flex gap-2 flex-col">
              <h1 className="text-[16px]  xl:text-[20px] font-[500] xl:font-normal xl:leading-[100%] xl:tracking-[0%] text-[#F2F2F2]">
                {features[1].title}
              </h1>
              <p className="text-[12px] xl:text-[16px] leading-[15px] xl:leading-[24px] 2xl:tracking-[3%] font-[150] 2xl:font-[200]  text-[#F2F2F2]">
                Adjustable IPD range from 56-70mm ensures a clear, comfortable view tailored to each user's eye distance
              </p>
            </div>
          </div>


          <div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} className="group w-full xl:h-2/5 h-full bg-[#1a1919] rounded-xl flex flex-col xl:flex-row ">
            <div className="xl:w-1/3  h-full flex flex-col gap-2 justify-end pb-8 pl-4 pt-4">
              <h1 className="text-[16px]   xl:text-[20px] font-[500] xl:font-normal xl:leading-[100%] xl:tracking-[0%] text-[#F2F2F2]">
                {features[2].title}
              </h1>
              <p className="text-[12px] xl:text-[16px] leading-[15px] xl:leading-[24px] 2xl:tracking-[3%] font-[150] 2xl:font-[200]  text-[#F2F2F2]">
                5500mAh battery for long lasting power for extended use
              </p>
            </div>
            <div className="xl:w-2/3 group h-full group overflow-hidden">
              <video
                ref={(el) => {
                  videoRefs.current[2] = el;
                }}
                className=" w-full  h-full object-cover transition duration-300 ease-in-out group-hover:scale-105   "
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={features[2].sources.webm} type="video/webm" />
                <source src={features[2].sources.mp4} type="video/mp4" />
                Your browser does not support the video tag.

              </video></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;