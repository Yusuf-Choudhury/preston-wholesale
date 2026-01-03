"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4">
      <div 
        className={`
          flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
          ${scrolled 
            ? "bg-white/10 backdrop-blur-xl border border-white/10 w-full max-w-5xl shadow-2xl" 
            : "bg-transparent w-full max-w-7xl"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500" /> {/* Modern Logo Mark */}
          Preston.
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Home</Link>
          <Link href="/shop" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Shop</Link>
          <Link href="/contact" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/shop" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5 text-white" />
          </Link>
          <Link 
            href="/contact" 
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-full transition-all"
          >
            Client Portal
          </Link>
        </div>
      </div>
    </nav>
  );
}