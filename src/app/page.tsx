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
      <section id="product" data-theme="dark" className="h-screen bg-black">
        <Optical />
      </section>
      <section id="product" data-theme="dark" className="h-screen bg-black">
        <Chipset />
      </section>
      <section id="product" data-theme="dark" className="h-screen bg-black">
        <PassThrough />
      </section>
      <section id="product" data-theme="dark" className="h-screen bg-black">
        <Comfort />
      </section>
      <section id="product" data-theme="dark" className="h-screen bg-black">
        <Sound />
      </section>
      <section id="product" data-theme="dark" className="h-screen bg-black">
        <Controller />
      </section>
      <section id="product" data-theme="dark">
        <HoldingHeadset />
      </section>
      <section id="product" data-theme="dark" className="h-screen bg-black">
        <Features />
      </section>
      <section id="product" data-theme="light" className="h-screen ">
        <WhatsInTheBox />
      </section>
      <section id="product" data-theme="light" className="h-screen ">
        <BuiltForEnterprise />
      </section>
      <section id="product" data-theme="dark">
        <Footer />
      </section>
    </>
  );
}
