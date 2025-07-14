import Chipset from "@/components/LandingSections/Chipset";
import Hero from "@/components/LandingSections/Hero";
import Optical from "@/components/LandingSections/Optical";
import PassThrough from "@/components/LandingSections/PassThrough";
import RevealingHeadset from "@/components/LandingSections/RevealingHeadset";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="product" data-theme="dark" className="h-screen bg-black">
        <Hero />
      </section>
      <section id="product" data-theme="dark" className="h-screen bg-[#E2E2E2]">
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
    </>
  );
}
