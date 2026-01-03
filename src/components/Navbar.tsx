"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-[#050505]/90 backdrop-blur-xl border-white/10 py-4" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex flex-col group">
           <span className="font-serif text-2xl text-white tracking-tight font-bold group-hover:text-amber-500 transition-colors">PRESTON.</span>
           <span className="text-[8px] text-zinc-500 uppercase tracking-[0.3em] group-hover:text-white transition-colors">Wholesale</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 hover:text-white transition-colors">
            Inventory
          </Link>
          <Link href="/contact" className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <Link 
            href="/contact" 
            className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            Client Login
          </Link>
          <Link 
            href="/contact"
            className="px-6 py-3 bg-amber-700 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-amber-600 transition-all rounded-sm shadow-lg shadow-amber-900/20"
          >
            Apply for Trade
          </Link>
        </div>
      </div>
    </nav>
  );
}