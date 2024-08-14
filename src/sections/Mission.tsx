import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

import hasCharAnim from "@/lib/utils/animation/hasCharAnim";
import hasTextRevealAnim from "@/lib/utils/animation/hasTextRevealAnim";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const missions = [
  {
    title: "Compute Tokenization Protocol",
    description:
      "Compute Tokenization Protocol (CTP) is built to tokenize enterprise grade GPUs. CTP is the foundation to pricing compute assets and enabling trading, staking, and derivatives for this emerging asset class.",
  },
  {
    title: "GPU Custody",
    description:
      "Acquire & custody H100s & B200s in T3 data centers and tokenize them into GNFTs – the compute will be further &quot;restaked&quot; into (de)centralized compute networks and DePIN projects for yieldF",
  },
  {
    title: "Compute Derivatives",
    description:
      "Expand AI-Fi ecosystem by introducing derivatives such as GPU ETF, Compute Index, perp, staking & lending, etc, removing the barrier and enabling everyone to participate in AI prosperity",
  },
  {
    title: "Compute Derivatives",
    description:
      "Expand AI-Fi ecosystem by introducing derivatives such as GPU ETF, Compute Index, perp, staking & lending, etc, removing the barrier and enabling everyone to participate in AI prosperity",
  },
  {
    title: "Compute Derivatives",
    description:
      "Expand AI-Fi ecosystem by introducing derivatives such as GPU ETF, Compute Index, perp, staking & lending, etc, removing the barrier and enabling everyone to participate in AI prosperity",
  },
];

const MissionSection = () => {
  const containerRef = useRef<any>();
  const charAnim = useRef<any>("");
  const textRevealAnim = useRef<any>("");

  useEffect(() => {
    hasCharAnim(charAnim.current);
    hasTextRevealAnim(textRevealAnim.current);
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div
      className="container py-20 md:py-40 relative flex flex-col justify-center"
      ref={containerRef}
    >
      <p ref={charAnim}>What is our</p>
      <h2 className="text-7xl" ref={textRevealAnim}>
        Mission
      </h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-20">
        <div className="relative">
          {missions.map((mission, i) => (
            <Link
              className="block mb-8"
              key={`mission-${i}`}
              href=""
              onClick={(e) => {
                e.preventDefault();
                setSelectedIndex(i);
              }}
            >
              <div
                className={`grid grid-cols-[80px_auto] ${
                  selectedIndex === i ? "text-white" : "text-[#999]"
                }`}
              >
                <span className="text-xl">{i + 1 <= 9 ? "0" + (i + 1) : i + 1}</span>
                <h3 className="text-2xl md:text-4xl">{mission.title}</h3>
              </div>
            </Link>
          ))}

          <div className="relative">
            {missions.map((mission, i) => (
              <p
                className={`text-[#999] py-10 absolute top-0 left-0 ${
                  selectedIndex === i ? "opacity-100" : "opacity-0"
                } transition-all duration-500`}
                key={`mission-text-${i}`}
              >
                {mission.description}
              </p>
            ))}
          </div>
        </div>

        <div className="images relative">
          <div className="bg-white h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
