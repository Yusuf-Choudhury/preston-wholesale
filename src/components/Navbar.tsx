"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { User, ShoppingBag, Menu } from "lucide-react"; // Standard icons

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/95 border-b border-white/10 py-4" 
          : "bg-gradient-to-b from-black/80 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <Link href="/" className="flex flex-col z-50">
           <span className="font-serif text-2xl text-white font-bold tracking-tight">PRESTON.</span>
        </Link>

        {/* CENTER: Standard Navigation (Like Salaam Cola) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-amber-500 transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-amber-500 transition-colors">
            Shop
          </Link>
          <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-amber-500 transition-colors">
            Contact
          </Link>
          <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-amber-500 transition-colors">
            About
          </Link>
        </div>

        {/* RIGHT: Icons & Actions */}
        <div className="flex items-center gap-6">
          <Link href="/contact" className="group flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
            <User className="w-4 h-4" />
            <span className="hidden lg:block text-[10px] uppercase tracking-widest">My Account</span>
          </Link>
          <Link href="/contact" className="flex items-center gap-2 px-5 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors rounded-sm">
            Trade Portal
          </Link>
        </div>
      </div>
    </nav>
  );
}