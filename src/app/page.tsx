"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar"; 

// MAPPED ASSETS FROM YOUR SCREENSHOT
const LATEST_PRODUCTS = [
  { name: "Obsidian Energy", category: "Energy Series", image: "/product-can.jpg" },
  { name: "Glacier Source", category: "Hydration", image: "/product-water.jpg" },
  { name: "Amber Reserve", category: "Limited Edition", image: "/product-can.jpg" }, // Reusing Can as placeholder for 3rd
];

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-amber-500 selection:text-black">
      
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
      <section className="relative h-screen w-full flex items-center justify-center px-6 md:px-12 overflow-hidden">
        
        {/* BACKGROUND VIDEO (Your Watch Video) */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40" // Dimmed for text readability
          >
            <source src="/hero-watch.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Typography */}
          <div className="flex flex-col items-start space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h2 className="text-amber-500 tracking-[0.4em] text-[10px] font-bold uppercase mb-6 pl-1">
                Est. 2024 London
              </h2>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter text-white">
                PRESTON
                <br />
                <span className="text-zinc-400">WHOLESALE.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <Link href="/contact" className="px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors duration-300">
                Get in Touch
              </Link>
              <Link href="/shop" className="px-8 py-4 border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                View Collection
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Featured Video (Your Can Video) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            <div className="absolute -left-12 top-1/2 -rotate-90 text-[9px] uppercase tracking-widest text-zinc-400 origin-center z-20">
              Latest Arrival • Series IV
            </div>
            
            <div className="w-full h-full relative border-l border-white/10 pl-10">
              <div className="relative w-full h-full overflow-hidden rounded-sm bg-zinc-900 shadow-2xl">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src="/hero-can.mp4" type="video/mp4" />
                </video>
                {/* Inner Glow */}
                <div className="absolute inset-0 ring-1 ring-white/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. LOGISTICS SECTION (Using your Truck Video) */}
      <section className="w-full bg-zinc-950 border-t border-white/10 relative">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Darken video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-[400px] object-cover opacity-30"
        >
          <source src="/logistics-truck.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
             <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight">Global Logistics.</h3>
        </div>
      </section>

      {/* 4. PRODUCT GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
          <h2 className="text-4xl font-serif text-white">Latest Drops.</h2>
          <Link href="/shop" className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
            View All Stock
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {LATEST_PRODUCTS.map((product, index) => (
            <div key={index} className="group relative">
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden bg-zinc-900 mb-6 border border-white/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="pr-4">
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-2">{product.category}</p>
                <h3 className="text-xl font-serif text-white mb-4">{product.name}</h3>
                <Link 
                  href="/contact"
                  className="inline-block border-b border-white/20 pb-1 text-[10px] font-bold uppercase tracking-widest text-white hover:border-amber-500 hover:text-amber-500 transition-all"
                >
                  Request Pricing
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}