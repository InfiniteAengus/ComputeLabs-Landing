import Image from "next/image";

interface IInvestorCardProps {
  imageUrl: string;
}

export const InvestorCard: React.FC<IInvestorCardProps> = (props) => {
  return (
    <div className="p-2 shadow-lg bg-gray-700/5 rounded-lg backdrop-blur-sm flex items-center justify-center border border-gray-800">
      <Image
        src={props.imageUrl}
        width={200}
        height={200}
        alt="investor"
        className="h-16 w-auto brightness-0 invert object-contain"
      />
    </div>
  );
};
