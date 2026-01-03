
"use client";





"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0a0500]/90 backdrop-blur-xl border-b border-amber-900/20 py-4" 
          : "bg-gradient-to-b from-black/80 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex flex-col">
           <span className="font-serif text-2xl text-white tracking-tight font-bold">PRESTON.</span>
           <span className="text-[8px] text-amber-500 uppercase tracking-[0.3em]">Wholesale</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 hover:text-amber-400 transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 hover:text-amber-400 transition-colors">
            Inventory
          </Link>
          <Link href="/contact" className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 hover:text-amber-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" // Visual "Login" that redirects to application for now
            className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >

            "use client";

            import React, { useState, useEffect } from "react";
            import Link from "next/link";
            import { motion } from "framer-motion";

            export default function Navbar() {
              const [scrolled, setScrolled] = useState(false);

              useEffect(() => {
                const handleScroll = () => setScrolled(window.scrollY > 50);
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
              }, []);

              return (
                <nav
                  className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                    scrolled 
                      ? "bg-[#0a0500]/90 backdrop-blur-xl border-b border-amber-900/20 py-4" 
                      : "bg-gradient-to-b from-black/80 to-transparent py-6"
                  }`}
                >
                  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
                    {/* LOGO */}
                    <Link href="/" className="flex flex-col">
                       <span className="font-serif text-2xl text-white tracking-tight font-bold">PRESTON.</span>
                       <span className="text-[8px] text-amber-500 uppercase tracking-[0.3em]">Wholesale</span>
                    </Link>

                    {/* DESKTOP LINKS */}
                    <div className="hidden md:flex items-center gap-8">
                      <Link href="/" className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 hover:text-amber-400 transition-colors">
                        Home
                      </Link>
                      <Link href="/shop" className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 hover:text-amber-400 transition-colors">
                        Inventory
                      </Link>
                      <Link href="/contact" className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 hover:text-amber-400 transition-colors">
                        Contact
                      </Link>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-4">
                      <Link 
                        href="/contact" // Visual "Login" that redirects to application for now
                        className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                      >
                        Sign In
                      </Link>
                      <Link 
                        href="/contact"
                        className="px-6 py-3 bg-amber-600/10 border border-amber-600/30 text-[10px] font-bold uppercase tracking-widest text-amber-500 hover:bg-amber-600 hover:text-white transition-all rounded-sm"
                      >
                        Apply for Trade
                      </Link>
                    </div>
                  </div>
                </nav>
              );
            }
