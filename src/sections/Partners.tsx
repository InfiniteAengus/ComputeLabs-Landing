import { InvestorCard } from "@/components/InvestorCard";

const PartnersSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl text-center font-semibold">Partners</h2>
        <p className="text-center mt-5">
          We are supported by leading figures in the tech and Web3 industries
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {[
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
          ].map((investor, index) => (
            <InvestorCard imageUrl={investor} key={`investor-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
