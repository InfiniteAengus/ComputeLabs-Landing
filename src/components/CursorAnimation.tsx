"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const CursorAnimation = ({ cursor1, cursor2 }: { cursor1: any; cursor2: any }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        function mousemoveHandler(e: any) {
          try {
            let tl = gsap.timeline({
              defaults: {
                x: e.clientX,
                y: e.clientY,
              },
            });

            // Main Cursor Moving
            tl.to(".cursor1", {
              ease: "power2.out",
            }).to(
              ".cursor2",
              {
                ease: "power2.out",
              },
              "-=0.4"
            );
          } catch (error) {
            console.log("Cursor animation error: ", error);
          }
        }
        document.addEventListener("mousemove", mousemoveHandler);
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <div className="cursor1" ref={cursor1}></div>
      <div className="cursor2" ref={cursor2}></div>
    </>
  );
};

export default CursorAnimation;
