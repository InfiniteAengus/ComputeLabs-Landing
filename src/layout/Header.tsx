import Image from "next/image";
import Link from "next/link";

const headerLinks = [
  { title: "About", link: "/about" },
  { title: "Docs", link: "/docs" },
  { title: "Contact", link: "/contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 z-[100] w-full bg-transparent py-8 transition-all md:py-4 backdrop-blur-sm">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width="150" height="50" alt="logo" className="!h-10 w-auto" />
        </Link>

        <ul className="flex gap-4 text-sm">
          {headerLinks.map((link) => (
            <li key={`item-${link.title}`}>
              <Link href={link.link} className="text-gray-500 hover:text-white transition-all">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
