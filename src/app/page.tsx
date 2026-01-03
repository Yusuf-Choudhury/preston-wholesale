"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar"; 

// MOCK DATA for Phase 1
const LATEST_PRODUCTS = [
  { name: "Obsidian Energy", category: "Energy", image: "/product-can.jpg" },
  { name: "Glacier Source", category: "Hydration", image: "/product-water.jpg" },
  { name: "Amber Reserve", category: "Spirits", image: "/product-can.jpg" }, // Used Can as placeholder for 3rd if whiskey missing
];

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <Navbar />
      </motion.div>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center px-6 md:px-12">
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Text */}
          <div className="flex flex-col items-start space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-amber-500 tracking-[0.4em] text-xs font-bold uppercase mb-4">
                Est. 2024 London
              </h2>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tight text-white">
                PRESTON
                <br />
                <span className="text-zinc-500">WHOLESALE.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <Link href="/contact" className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors">
                Get in Touch
              </Link>
              <Link href="/shop" className="px-8 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Shop Now
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Hero Video (Looping Can) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 1.5 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            <div className="absolute -left-12 top-1/2 -rotate-90 text-[10px] uppercase tracking-widest text-zinc-500 origin-center">
              Latest Arrival • Series IV
            </div>
            <div className="w-full h-full relative border-l border-white/10 pl-8">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-sm opacity-90">
                <source src="/hero-can.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. REVIEW SECTION */}
      <section className="py-24 border-t border-white/5 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-500 text-lg">★</span>
            ))}
          </div>
          <h3 className="text-2xl md:text-4xl font-serif leading-relaxed mb-8 italic text-zinc-100">
            &ldquo;Preston Wholesale has completely transformed our supply chain. The consistency of stock and speed of delivery is unmatched in the UK.&rdquo;
          </h3>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-white">Sarah Jenkins</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">Procurement Director, The Ritz</span>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT TEASER GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-serif text-white">Latest Drops.</h2>
          <Link href="/shop" className="text-xs uppercase tracking-widest border-b border-amber-500 pb-1 text-amber-500 hover:text-white transition-colors">
            View All Stock
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {LATEST_PRODUCTS.map((product, index) => (
            <div key={index} className="group relative bg-zinc-900 border border-white/5">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">{product.category}</p>
                <h3 className="text-xl font-serif text-white mb-6">{product.name}</h3>
                <Link 
                  href="/contact"
                  className="block w-full py-3 text-center border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
                >
                  Sign Up to View Price
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}