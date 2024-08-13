"use client";

import HeroSection from "@/sections/Hero";
import MissionSection from "@/sections/Mission";
import PartnersSection from "@/sections/Partners";

export default function Home() {
  return (
    <main id="root">
      <HeroSection />
      <MissionSection />
      <PartnersSection />
    </main>
  );
}
