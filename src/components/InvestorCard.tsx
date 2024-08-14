import Image from "next/image";

interface IInvestorCardProps {
  imageUrl: string;
}

export const InvestorCard: React.FC<IInvestorCardProps> = (props) => {
  return (
    <div className="p-5 aspect-square flex items-center justify-center border border-white min-w-24 [&:nth-child(1)]:col-start-2 [&:nth-child(2)]:col-start-1 [&:nth-child(7)]:col-start-2">
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
