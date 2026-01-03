import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../src/app/globals.css";
import { CartProvider } from "../src/context/CartContext";
import Cart from "../src/components/Cart";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Preston Wholesale | Liquid Luxury",
  description: "Exclusive wholesale supply.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#050505] text-white antialiased selection:bg-[#D81B26] selection:text-white">
        <CartProvider>
          {children}
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
