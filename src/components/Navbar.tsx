
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="font-serif text-xl md:text-2xl text-white tracking-tight font-bold">
          PRESTON<span className="text-amber-500">.</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
            Inventory
          </Link>
          <Link href="/contact" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
            Contact
          </Link>
          
          {/* CTA BUTTON */}
          <Link 
            href="/contact"
            className="border border-white/20 px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
          >
            Trade Login
          </Link>
        </div>

        {/* MOBILE MENU ICON (Simple Placeholder) */}
        <div className="md:hidden text-white">
            <span className="text-xs uppercase tracking-widest">Menu</span>
        </div>
      </div>
    </nav>
  );
}
