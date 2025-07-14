import Image from "next/image";
import React from "react";

function Comfort() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Image Block - Absolute positioned */}
      <div className="absolute inset-0">
        <Image
          src="https://lumynxr-cdn.azureedge.net/images/SideView.png"
          alt="Comfort"
          fill
          className="object-cover scale-90 translate-x-44"
          priority
        />
      </div>

      {/* Text Block - Relative positioned */}
      <div className="relative z-10 flex flex-col justify-center  h-full ml-[250px]">
        <h1 className="text-[36px] md:text-[96px] font-light leading-[100px] tracking-[0%] text-[#E2E2E2]">
          Balanced
          <br />
          for Comfort
        </h1>
        <div className="w-[46px] h-1 bg-white my-[60px] rounded"></div>

        <p className="text-base md:text-2xl font-light leading-[32px] tracking-[0.2%] text-[#C5C5C5]">
          Ergonomic facemask design ensures balanced <br /> 1:1 weight
          distribution for all-day comfort
        </p>
      </div>
    </div>
  );
}

export default Comfort;
