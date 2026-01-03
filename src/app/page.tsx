"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

// MOCK PRODUCTS
const PREVIEW_PRODUCTS = [
  { name: "Obsidian Energy", category: "Energy Series", image: "/product-can.jpg" },
  { name: "Glacier Source", category: "Hydration", image: "/product-water.jpg" },
  { name: "Amber Reserve", category: "Limited Edition", image: "/product-can.jpg" }, 
];

export default function HomePage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-amber-500 selection:text-black">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
            <source src="/hero-watch.mp4" type="video/mp4" />
          </video>
          {/* Warm Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1005] via-black/30 to-black/60 opacity-90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <h2 className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                Established 2024 • London
             </h2>
             <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tight leading-[0.9]">
               The Art of <br />
               <span className="text-zinc-400">High-Volume Supply.</span>
             </h1>
             <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10 font-light">
               We connect premium retailers with exclusive, high-margin inventory. 
               Access is restricted to verified trade partners.
             </p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="flex flex-col sm:flex-row justify-center gap-4"
           >
             <Link href="/shop" className="px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors rounded-sm">
               View Inventory
             </Link>
             <Link href="/contact" className="px-10 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors rounded-sm backdrop-blur-md">
               Request Access
             </Link>
           </motion.div>
        </div>
      </section>

      {/* 2. INFORMATION / METRICS (The "Useful" Part) */}
      <section className="py-20 bg-[#080808] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="text-4xl font-serif text-amber-600">24h</div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Global Dispatch</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Our automated logistics hubs ensure same-day dispatch for all orders placed before 2pm GMT.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-serif text-amber-600">100%</div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Verified Authentic</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Direct-from-manufacturer sourcing chains eliminate middlemen and guarantee product integrity.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-serif text-amber-600">B2B</div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Wholesale Pricing</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Tiered pricing structures designed specifically for high-volume retail partners and distributors.
            </p>
          </div>
        </div>
      </section>

      {/* 3. LATEST ARRIVAL (Featured Can Video) */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-[#050505]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Container */}
          <div className="order-2 lg:order-1 relative aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden border border-white/10">
             <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
               <source src="/hero-can.mp4" type="video/mp4" />
             </video>
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-8">
               <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-1">New Arrival</p>
               <h3 className="text-2xl font-serif text-white">Obsidian Series IV</h3>
             </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Curated for the <br />Modern Consumer.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              Our newest acquisition features limited edition stock previously unavailable in the UK market. 
              These units are reserved for Tier 1 partners until Friday.
            </p>
            <div className="pt-4">
              <Link href="/shop" className="text-amber-500 text-xs uppercase tracking-widest border-b border-amber-500 pb-1 hover:text-white hover:border-white transition-all">
                Access Full Catalogue &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREVIEW GRID */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif text-white">Live Inventory.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PREVIEW_PRODUCTS.map((product, index) => (
              <div key={index} className="group relative bg-black border border-white/10 rounded-sm overflow-hidden hover:border-amber-600/50 transition-colors">
                <div className="aspect-square relative">
                  <Image src={product.image} alt={product.name} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                   <p className="text-[9px] uppercase tracking-widest text-amber-500 mb-1">{product.category}</p>
                   <h3 className="text-lg font-serif text-white">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}