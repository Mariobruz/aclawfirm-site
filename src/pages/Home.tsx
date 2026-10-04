import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Practice from "@/components/Practice";
import GlobalReach from "@/components/GlobalReach";
import Method from "@/components/Method";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { initLenis } from "@/lib/scroll";

export default function Home() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-[#0B0D11] text-[#FAF8F5] antialiased">
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Practice />
        <GlobalReach />
        <Method />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
