import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="flex md:items-end md:justify-between flex-col md:flex-row gap-4">
          <div className="space-y-6">
            <Link href="/">
              <Image src="/logo.png" width="150" height="50" alt="logo" className="!h-8 w-auto" />
            </Link>

            <h3 className="text-base md:text-xl">
              Yielding from the AGI future has never been easier
            </h3>
          </div>
          <div>
            <p>Follow us</p>
          </div>
        </div>

        <div className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-gray-500">
            @2024 Compute Labs Hodings Ltd @ All Rights Reserved.
          </p>
          <div className="space-x-4">
            <Link href="/" className="text-xs underline">
              Privacy Policy
            </Link>
            <Link href="/" className="text-xs underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
