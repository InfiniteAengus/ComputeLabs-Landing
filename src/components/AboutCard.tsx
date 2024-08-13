interface IAboutCard {
  title: string;
  content: string;
}

const AboutCard: React.FC<IAboutCard> = (props: IAboutCard) => {
  const { title, content } = props;

  return (
    <div className="border rounded-lg p-4 h-full">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400">{content}</p>
    </div>
  );
};

export default AboutCard;
