import React from 'react'

function Hero() {
  return (
    <div className='flexh-full w-full  '>
      <div className=" absolute  h-[895px] w-[1590px] top-[102px]  ">
        <video
          className="object-center object-cover w-full h-full " 
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/videos/Header.webm`}
          autoPlay
          loop
          muted
        /> 
      </div>
      <div className=" gap-[60px]  flex flex-col absolute right-[200px] top-[357px]  ">
        <div className="text-[96px]  leading-[100px]  text-[#E2E2E2]">
          Realities <br /> Unlike Before
        </div>
        <div className="text-[24px] leading-[32px] font-[250] text-[#C5C5C5]">LumynXR is a high-performance mixed reality <br />headset designed for the future of spatial <br />computing, with enterprise-ready features for <br /> cross-industry innovation</div></div>

    </div>
  )
}

export default Hero