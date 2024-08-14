"use client";

import { useRef } from "react";

import CursorAnimation from "@/components/CursorAnimation";
import ScrollSmootherComponents from "@/components/ScrollSmootherComponents";
import CTASection from "@/sections/CTA";
import HeroSection from "@/sections/Hero";
import MissionSection from "@/sections/Mission";
import PartnersSection from "@/sections/Partners";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export default function Home() {
  const cursor1 = useRef();
  const cursor2 = useRef();

  return (
    <>
      <CursorAnimation cursor1={cursor1} cursor2={cursor2} />
      <ScrollSmootherComponents />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main id="root">
            <HeroSection />
            <MissionSection />
            <PartnersSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
