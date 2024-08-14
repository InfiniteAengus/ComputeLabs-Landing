import { useEffect, useRef } from "react";
import { InvestorCard } from "@/components/InvestorCard";
import hasTextMoveAnim from "@/lib/utils/animation/hasTextMoveAnim";

const investors = [
  "/investors/protocol-labs.png",
  "/investors/okx.png",
  "/investors/protocol-labs.png",
  "/investors/okx.png",
  "/investors/protocol-labs.png",
  "/investors/okx.png",
  "/investors/protocol-labs.png",
  "/investors/okx.png",
  "/investors/protocol-labs.png",
  "/investors/okx.png",
  "/investors/protocol-labs.png",
  "/investors/okx.png",
];

const PartnersSection = () => {
  const textMoveAnim = useRef<any>("");

  useEffect(() => {
    hasTextMoveAnim(textMoveAnim.current);
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-7xl font-semibold" ref={textMoveAnim}>
          Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mt-20">
          {investors.map((investor, index) => (
            <InvestorCard imageUrl={investor} key={`investor-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
