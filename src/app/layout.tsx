import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Use 'Inter' - the standard for modern/Apple-style UI
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Preston Wholesale | Pro Supply",
  description: "Next-generation logistics for retail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}