import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const manrope = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compute Labs",
  description: "Compute Labs | Building AI-Fi and enabling direct exposure to AI compute assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
