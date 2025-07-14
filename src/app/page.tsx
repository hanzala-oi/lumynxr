import Hero from "@/components/LandingSections/Hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="product" data-theme="dark" className="h-screen bg-black">
        <Hero />
      </section>
      <section id="product" data-theme="light" className="h-screen bg-[#E2E2E2]">
        <Hero />
      </section>
    </>
  );
}
