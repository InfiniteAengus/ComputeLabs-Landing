"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/lib/plugins";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmootherComponents = () => {
  useEffect(() => {
    try {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    } catch (e) {
      console.log("ScrollSmoother Error: ", e);
    }
  }, []);
  return <div></div>;
};

export default ScrollSmootherComponents;
