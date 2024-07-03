import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import Header from "@/components/header/Header";
import FooterSection from "@/components/FooterSection";
const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});
export const metadata: Metadata = {
  title: "Dine Markete",
  description:
    "Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${sora.className}`}>
        <div className="max-w-[1515px] mx-auto">
          <Header />
          {children}
        </div>
        <FooterSection />
      </body>
    </html>
  );
}
