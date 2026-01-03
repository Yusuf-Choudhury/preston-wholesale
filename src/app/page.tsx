"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

const LATEST_PRODUCTS = [
  { name: "Obsidian Energy", category: "Energy Series", image: "/product-can.jpg" },
  { name: "Glacier Source", category: "Hydration", image: "/product-water.jpg" },
  { name: "Amber Reserve", category: "Limited Edition", image: "/product-can.jpg" }, 
];

export default function HomePage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-amber-500 selection:text-black">
      <Navbar />
      {/* 1. HERO SECTION (Watch Video) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
            <source src="/hero-watch.mp4" type="video/mp4" />
          </video>
          {/* Warm Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1000] via-black/40 to-black/60 opacity-90" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="text-6xl md:text-9xl font-serif text-white mb-6 tracking-tight"
           >
             PRESTON.
           </motion.h1>
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="text-amber-200/80 text-sm md:text-lg tracking-widest uppercase mb-10 max-w-2xl mx-auto leading-relaxed"
           >
             The Definitive Supply Chain for Luxury Retailers.
           </motion.p>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 0.8 }}
             className="flex flex-col sm:flex-row justify-center gap-6"
           >
             <Link href="/shop" className="px-12 py-4 bg-amber-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/20 rounded-sm">
               View Inventory
             </Link>
             <Link href="/contact" className="px-12 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">
               Trade Application
             </Link>
           </motion.div>
        </div>
      </section>
      {/* 2. INFORMATION / WHY US (Warm Background) */}
      <section className="py-24 bg-gradient-to-b from-[#1a1000] to-black px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="p-8 border border-white/5 bg-white/5 rounded-2xl hover:border-amber-500/30 transition-colors">
            <h3 className="text-xl font-serif text-amber-500 mb-4">Global Reach</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Our logistics network spans 4 continents, ensuring your stock arrives on time, every time.
            </p>
          </div>
          <div className="p-8 border border-white/5 bg-white/5 rounded-2xl hover:border-amber-500/30 transition-colors">
            <h3 className="text-xl font-serif text-amber-500 mb-4">Verified Authenticity</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every unit is sourced directly from manufacturers. We guarantee 100% authenticity on all luxury goods.
            </p>
          </div>
          <div className="p-8 border border-white/5 bg-white/5 rounded-2xl hover:border-amber-500/30 transition-colors">
            <h3 className="text-xl font-serif text-amber-500 mb-4">Volume Pricing</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Tiered pricing structures designed for high-volume retailers and wholesale partners.
            </p>
          </div>
        </div>
      </section>

      {/* 3. LATEST ARRIVAL (Can Video) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10">
               <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                 <source src="/hero-can.mp4" type="video/mp4" />
               </video>
               {/* "Latest Arrival" Badge */}
               <div className="absolute top-6 left-6 px-4 py-2 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                 Just Landed
               </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif text-white">The Series IV Collection.</h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              Our newest acquisition features limited edition stock previously unavailable in the UK market. 
              Reserved for Tier 1 partners until Friday.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 24hr Dispatch
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Pallet Pricing Available
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT TEASERS */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif text-white">Live Inventory.</h2>
            <Link href="/shop" className="text-amber-500 text-xs uppercase tracking-widest border-b border-amber-500 pb-1 hover:text-white hover:border-white transition-all">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {LATEST_PRODUCTS.map((product, index) => (
              <div key={index} className="group relative bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5">
                <div className="aspect-square relative">
                  <Image src={product.image} alt={product.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
           </div>
           <div className="p-6">
             <h3 className="text-lg font-serif text-white mb-2">{product.name}</h3>
                   <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-6">{product.category}</p>
                   <Link href="/contact" className="block w-full py-3 bg-white/5 border border-white/10 text-center text-[10px] font-bold uppercase tracking-widest text-zinc-300 group-hover:bg-white group-hover:text-black transition-all rounded-lg">
                     Sign In for Price
                   </Link>
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
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

// Use your assets
const LATEST_PRODUCTS = [
  { name: "Obsidian Energy", category: "Energy Series", image: "/product-can.jpg" },
  { name: "Glacier Source", category: "Hydration", image: "/product-water.jpg" },
  { name: "Amber Reserve", category: "Limited Edition", image: "/product-can.jpg" }, 
];

export default function HomePage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-amber-500 selection:text-black">
      <Navbar />

      {/* 1. HERO SECTION (Watch Video) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
            <source src="/hero-watch.mp4" type="video/mp4" />
          </video>
          {/* Warm Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1000] via-black/40 to-black/60 opacity-90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="text-6xl md:text-9xl font-serif text-white mb-6 tracking-tight"
           >
             PRESTON.
           </motion.h1>
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="text-amber-200/80 text-sm md:text-lg tracking-widest uppercase mb-10 max-w-2xl mx-auto leading-relaxed"
           >
             The Definitive Supply Chain for Luxury Retailers.
           </motion.p>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 0.8 }}
             className="flex flex-col sm:flex-row justify-center gap-6"
           >
             <Link href="/shop" className="px-12 py-4 bg-amber-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/20 rounded-sm">
               View Inventory
             </Link>
             <Link href="/contact" className="px-12 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">
               Trade Application
             </Link>
           </motion.div>
        </div>
      </section>

      {/* 2. INFORMATION / WHY US (Warm Background) */}
      <section className="py-24 bg-gradient-to-b from-[#1a1000] to-black px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="p-8 border border-white/5 bg-white/5 rounded-2xl hover:border-amber-500/30 transition-colors">
            <h3 className="text-xl font-serif text-amber-500 mb-4">Global Reach</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Our logistics network spans 4 continents, ensuring your stock arrives on time, every time.
            </p>
          </div>
          <div className="p-8 border border-white/5 bg-white/5 rounded-2xl hover:border-amber-500/30 transition-colors">
            <h3 className="text-xl font-serif text-amber-500 mb-4">Verified Authenticity</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every unit is sourced directly from manufacturers. We guarantee 100% authenticity on all luxury goods.
            </p>
          </div>
          <div className="p-8 border border-white/5 bg-white/5 rounded-2xl hover:border-amber-500/30 transition-colors">
            <h3 className="text-xl font-serif text-amber-500 mb-4">Volume Pricing</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Tiered pricing structures designed for high-volume retailers and wholesale partners.
            </p>
          </div>
        </div>
      </section>

      {/* 3. LATEST ARRIVAL (Can Video) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10">
               <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                 <source src="/hero-can.mp4" type="video/mp4" />
               </video>
               {/* "Latest Arrival" Badge */}
               <div className="absolute top-6 left-6 px-4 py-2 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                 Just Landed
               </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif text-white">The Series IV Collection.</h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              Our newest acquisition features limited edition stock previously unavailable in the UK market. 
              Reserved for Tier 1 partners until Friday.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 24hr Dispatch
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Pallet Pricing Available
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT TEASERS */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif text-white">Live Inventory.</h2>
            <Link href="/shop" className="text-amber-500 text-xs uppercase tracking-widest border-b border-amber-500 pb-1 hover:text-white hover:border-white transition-all">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {LATEST_PRODUCTS.map((product, index) => (
              <div key={index} className="group relative bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5">
                <div className="aspect-square relative">
                  <Image src={product.image} alt={product.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                   <h3 className="text-lg font-serif text-white mb-2">{product.name}</h3>
                   <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-6">{product.category}</p>
                   <Link href="/contact" className="block w-full py-3 bg-white/5 border border-white/10 text-center text-[10px] font-bold uppercase tracking-widest text-zinc-300 group-hover:bg-white group-hover:text-black transition-all rounded-lg">
                     Sign In for Price
                   </Link>
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