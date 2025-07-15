import Image from 'next/image';
import React from 'react'

function WhatsInTheBox() {
    const specifications = [
        { label: "Device name", value: "LumynXR" },
        { label: "CPU", value: "Qualcomm Snapdragon XR2+ Gen 2" },
        { label: "Display", value: "2160x2160" },
        { label: "Optics", value: "Pancake Lens" },
        { label: "Speakers", value: "Stereo Speakers - Dolby Tuned" },
        { label: "RAM", value: "8 GB" },
        { label: "Storage", value: "128GB, 512GB" },
        { label: "Passthrough", value: "RGB Passthrough" },
        { label: "DoF", value: "6DoF" },
        { label: "Depth Sensing", value: "Yes" },
        { label: "IPD", value: "Adjustable 56-70mm" },
        { label: "Battery", value: "5500 mAh" },
        { label: "OS", value: "Android" },
        { label: "Weight", value: "540g" }
    ];

    return (
        <div className='min-h-screen bg-[#FAFAFA] py-[223px] px-8'>
            <div className=' mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[48px] pl-[123px]'>

                    {/* What's in the Box Section */}
                    <div>
                        <h2 className="text-[64px] font-[350] text-black mb-16 ">
                            What's in the Box?
                        </h2>

                        <div className="">
                            <div className=''>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/BoxContents.png`}
                                    alt="LumynXR Logo"
                                    width={1426}
                                    height={768}
                                    priority
                                />
                            </div>
                        </div>

                    </div>

                    {/* Specifications Section */}
                    <div>
                        <h2 className="text-[64px] font-[350]  text-black mb-[54px]">
                            Specifications
                        </h2>

                        <div className=" p-2 w-[600px]">
                            <div className="space-y-2">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="flex justify-between items-center py-2 ">
                                        <span className="text-[#5B5B5B] text-[20px] font-extralight">{spec.label}</span>
                                        <div className="flex items-center start  w-[325px]">
                                            <span className="text-[#5B5B5B] text-[20px] font-normal ">{spec.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhatsInTheBox