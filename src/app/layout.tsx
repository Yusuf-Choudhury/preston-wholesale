import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

// 1. Load Luxury Fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preston Wholesale | Global Logistics",
  description: "The Art of High-Volume Supply.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-black text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}