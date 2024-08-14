"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

import hasTextInvertAnim from "@/lib/utils/animation/hasTextInvertAnim";

export default function CTASection() {
  const textInvert = useRef<any>();

  useEffect(() => {
    hasTextInvertAnim(textInvert.current);
  }, []);

  return (
    <section className="cta-section-2 py-32 md:py-72">
      <div className="container">
        <div className="grid-cols-1 grid md:grid-cols-[auto_auto] items-center justify-between gap-10">
          <div className="relative">
            <h2
              className="text-4xl md:text-9xl uppercase [&>div]:bg-[length:200%_100%] [&>div]:bg-clip-text [&>div]:text-transparent [&>div]:bg-custom-gradient font-semibold mb-10 [&>div]:bg-right"
              ref={textInvert}
            >
              Let’s <br />
              build <br />
              together
            </h2>
            <div className="static transform-none max-w-[250px] md:absolute -end-8 top-1/2 md:-translate-y-1/2 right-0">
              <p>
                Inspired by our work? <br />I would be delighted to help you create your dream
                interior!
              </p>
            </div>
          </div>
          <div className="bg-white uppercase py-4 px-6 md:py-8 md:px-12 rounded-full text-black">
            <Link href={`/contact`}>Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
