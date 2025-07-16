import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col xl:flex-row h-screen w-screen items-start xl:items-center justify-center bg-black ">
      {/* Video Section */}
      <div className="w-auto xl:w-3/4  xl:ml-[-158px] 2xl:ml-[-206px] h-[301px]  xl:h-full flex-shrink-0  ">
        <video
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          muted
        >
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/header.webm`}
            type="video/webm"
          />
          <source
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Header.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-[16px] xl:gap-10  text-left ml-[26px] xl:ml-0 mt-[68px] xl:mt-0 ">
        <div className="text-[32px] leading-[35px] xl:text-[64px] 2xl:text-[96px] xl:leading-[76px] 2xl:leading-[100px] font-light text-[#E2E2E2]">
          Realities <br /> Unlike Before
        </div>
        <div className="text-[14px] xl:text-[20px] 2xl:text-[24px] xl:leading-[32px] font-[200] xl:font-[200] text-[#C5C5C5] xl:tracking-[0.048px]">
          LumynXR is a high-performance mixed reality <br />
          headset designed for the future of spatial <br />
          computing, with enterprise-ready features for <br />
          cross-industry innovation
        </div>
      </div>
    </div>
  );
}

export default Hero;
// import React from 'react';

// function Hero() {
//   return (
//     <div className="flex h-screen w-screen items-center justify-center gap-20 px-12 bg-black">
//       {/* Video Section */}
//       <div className="w-[640px] h-[480px] flex-shrink-0">
//         <video
//           className="w-full h-full object-cover rounded-xl"
//           src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Header.webm`}
//           autoPlay
//           loop
//           muted
//         />
//       </div>

//       {/* Text Section */}
//       <div className="flex flex-col gap-10 max-w-xl text-left">
//         <div className="text-[64px] leading-[72px] font-light text-[#E2E2E2]">
//           Realities <br /> Unlike Before
//         </div>
//         <div className="text-[20px] leading-[30px] font-extralight text-[#C5C5C5]">
//           LumynXR is a high-performance mixed reality <br />
//           headset designed for the future of spatial <br />
//           computing, with enterprise-ready features for <br />
//           cross-industry innovation
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
