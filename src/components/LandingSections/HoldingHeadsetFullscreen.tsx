import React from "react";
import Image from "next/image";

const HoldingHeadsetFullscreen: React.FC = () => {
  return (
    <div className="w-full xl:hidden">
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/HoldingHeadset-BG-Phone.png`}
        alt="Header Image"
        width={1630} // Replace with actual image resolution width
        height={861} // Replace with actual image resolution height
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
};

export default HoldingHeadsetFullscreen;
