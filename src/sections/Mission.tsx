const MissionSection = () => {
  return (
    <div className="h-screen container py-20 relative flex flex-col justify-center">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <h2 className="text-2xl lg:text-5xl">Compute Tokenization Protocol</h2>
          <p className="text-sm lg:text-base mt-7 font-extralight">
            Compute Tokenization Protocol (CTP) is built to tokenize enterprise grade GPUs. CTP is
            the foundation to pricing compute assets and enabling trading, staking, and derivatives
            for this emerging asset class.
          </p>

          <h2 className="text-2xl lg:text-5xl">GPU Custody</h2>
          <p className="text-sm lg:text-base mt-7 font-extralight">
            Acquire & custody H100s & B200s in T3 data centers and tokenize them into GNFTs – the
            compute will be further &quot;restaked&quot; into (de)centralized compute networks and
            DePIN projects for yield
          </p>

          <h2 className="text-2xl lg:text-5xl">Compute Derivatives</h2>
          <p className="text-sm lg:text-base mt-7 font-extralight">
            Expand AI-Fi ecosystem by introducing derivatives such as GPU ETF, Compute Index, perp,
            staking & lending, etc, removing the barrier and enabling everyone to participate in AI
            prosperity
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
