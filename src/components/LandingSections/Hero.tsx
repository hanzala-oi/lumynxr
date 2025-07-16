import React from 'react';

function Hero() {
  return (
    <div className="flex h-screen w-screen items-center justify-center  px-12 bg-black">
      {/* Video Section */}
      <div className="w-full xl:w-3/4 xl:ml-[-158px] 3xl:ml-[-206px]  h-full flex-shrink-0">
        <video
          className="w-full h-full object-cover rounded-xl"
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Header.webm`}
          autoPlay
       
          muted
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-10 max-w-xl text-left">
        <div className=" xl:text-[64px] 3xl:text-[96px] xl:leading-[76px] 3xl:leading-[100px] font-light text-[#E2E2E2]">
          Realities <br /> Unlike Before
        </div>
        <div className="xl:text-[20px] 3xl:text-[24px] leading-[32px] font-extralight text-[#C5C5C5] tracking-[0.048px]">
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
