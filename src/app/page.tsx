import Footer from "@/components/footer";
import BuiltForEnterprise from "@/components/LandingSections/BuiltForEnterprice";
import Chipset from "@/components/LandingSections/Chipset";
import Comfort from "@/components/LandingSections/Comfort";
import Controller from "@/components/LandingSections/Controller";
import Features from "@/components/LandingSections/Features";
import Hero from "@/components/LandingSections/Hero";
import Optical from "@/components/LandingSections/Optical";
import PassThrough from "@/components/LandingSections/PassThrough";
import RevealingHeadset from "@/components/LandingSections/RevealingHeadset";
import Sound from "@/components/LandingSections/Sound";
import WhatsInTheBox from "@/components/LandingSections/WhatsInTheBox";
import Navbar from "@/components/navbar";
import HoldingHeadset from "@/components/LandingSections/HoldingHeadset";
import HoldingHeadsetFullscreen from "@/components/LandingSections/HoldingHeadsetFullscreen";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="product" data-theme="dark" className="h-screen bg-black">
        <Hero />
      </section>
      <section id="product" data-theme="dark" className=" ">
        <RevealingHeadset />
      </section>
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
      <section id="product" data-theme="light" className="h-screen ">
        <WhatsInTheBox />
      </section>
      <div className="h-[100px] bg-[#FAFAFA]"></div>
      <section id="product" data-theme="light" className=" ">
        <BuiltForEnterprise />
      </section>
      <section id="product" data-theme="dark">
        <Footer />
      </section>
    </>
  );
}
