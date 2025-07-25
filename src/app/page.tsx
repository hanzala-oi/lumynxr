import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/LandingSections/Hero";

const RevealingHeadset = dynamic(() => import('@/components/LandingSections/RevealingHeadset'), {
  loading: () => <div>Loading...</div>,
});
const Optical = dynamic(() => import('@/components/LandingSections/Optical'));
const Chipset = dynamic(() => import('@/components/LandingSections/Chipset'));
const Comfort = dynamic(() => import('@/components/LandingSections/Comfort'));
const Sound = dynamic(() => import('@/components/LandingSections/Sound'));
const Controller = dynamic(() => import('@/components/LandingSections/Controller'));
const PassThrough = dynamic(() => import('@/components/LandingSections/PassThrough'));
const Features = dynamic(() => import('@/components/LandingSections/Features'));
const HoldingHeadset = dynamic(() => import('@/components/LandingSections/HoldingHeadset'));
const HoldingHeadsetFullscreen = dynamic(() => import('@/components/LandingSections/HoldingHeadsetFullscreen'));
const WhatsInTheBox = dynamic(() => import('@/components/LandingSections/WhatsInTheBox'));
const BuiltForEnterprise = dynamic(() => import('@/components/LandingSections/BuiltForEnterprice'));
const Footer = dynamic(() => import('@/components/footer'));


export default function Home() {
  return (
    <>
      <Navbar />
      <section id="product" data-theme="dark" className="min-h-screen bg-black">
        <Hero />
      </section>
      <section id="product" data-theme="dark" className="hidden xl:block">
        <RevealingHeadset />
      </section>
      <div className="hidden xl:block h-[200px] bg-black "></div>
      <section id="product" data-theme="dark" className=" bg-black">
        <Optical />
      </section>
      <section id="product" data-theme="dark" className=" bg-black">
        <Chipset />
      </section>
      <section id="product" data-theme="dark" className=" bg-black">
        <PassThrough />
      </section>
      <section id="product" data-theme="dark" className=" bg-black">
        <Comfort />
      </section>
      <section id="product" data-theme="dark" className=" bg-black">
        <Sound />
      </section>
      <section id="product" data-theme="dark" className=" bg-black">
        <Controller />
      </section>

      <section id="product" data-theme="light" className="xl:hidden">
        <HoldingHeadsetFullscreen />
      </section>
      <section id="product" data-theme="light" className="hidden xl:block">
        <HoldingHeadset />
      </section>
      <section id="product" data-theme="dark" className=" bg-black">
        <Features />
      </section>
      <section id="product" data-theme="light" className="">
        <WhatsInTheBox />
      </section>
      <section id="product" data-theme="light" className=" ">
        <BuiltForEnterprise />
      </section>
      <section id="product" data-theme="dark">
        <Footer />
      </section>
    </>
  );
}
