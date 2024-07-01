import type { Metadata } from "next";
import "./globals.css";

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
      <body className="max-w-[1515px] mx-auto font-sans">{children}</body>
    </html>
  );
}
