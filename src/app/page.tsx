"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import { ArrowRight, Globe, ShieldCheck, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* 1. HERO SECTION: Big, Bold, Centered */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-blue-400 text-xs font-medium backdrop-blur-md">
            New: Series IV Logistics Network
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Supply Chain.<br />Reimagined.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Preston Wholesale connects premium retailers with global inventory. 
            Automated. Verified. Instant.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/shop" className="px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">
              Browse Inventory <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-colors">
              Trade Application
            </Link>
          </div>
        </div>

        {/* Hero Video Floating Below */}
        <div className="mt-16 relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/hero-watch.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* 2. BENTO GRID FEATURES (Apple Style) */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Why Top Retailers Choose Us.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: Large Left - Vibrant Gradient */}
          <div className="md:col-span-2 md:row-span-2 relative bg-gradient-to-br from-blue-900 to-black rounded-3xl p-10 overflow-hidden border border-white/10 group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/30 blur-[80px]" />
             <Globe className="w-12 h-12 text-blue-400 mb-6" />
             <h3 className="text-3xl font-bold mb-4">Global Reach, Local Speed.</h3>
             <p className="text-zinc-300 max-w-md">
               Our decentralized logistics nodes ensure that stock sits closer to you. 
               Delivery times reduced by 40% across UK and Europe.
             </p>
             <div className="absolute bottom-0 right-0 w-2/3 h-2/3 translate-x-12 translate-y-12">
               <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-tl-2xl shadow-2xl opacity-80 group-hover:scale-105 transition-transform duration-700">
                 <source src="/logistics-truck.mp4" type="video/mp4" />
               </video>
             </div>
          </div>

          {/* Card 2: Top Right - Dark Minimal */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-center hover:bg-zinc-800 transition-colors">
             <ShieldCheck className="w-10 h-10 text-green-400 mb-4" />
             <h3 className="text-xl font-bold">100% Authentic.</h3>
             <p className="text-zinc-400 text-sm mt-2">Verified chain of custody from factory to floor.</p>
          </div>

          {/* Card 3: Bottom Right - Video Background */}
          <div className="relative bg-black rounded-3xl overflow-hidden border border-white/10 group">
             <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity">
               <source src="/hero-can.mp4" type="video/mp4" />
             </video>
             <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-xl font-bold">Live Drops.</h3>
                <p className="text-zinc-300 text-sm">New stock alerts daily.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CAROUSEL (Clean Cards) */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold">Latest Arrivals.</h2>
            <Link href="/shop" className="text-blue-500 hover:text-blue-400 font-medium text-sm">View All &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Product 1 */}
             <div className="group bg-black rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer">
               <div className="aspect-square relative bg-zinc-900">
                 <Image src="/product-can.jpg" alt="Energy" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-6">
                 <div className="flex justify-between items-start mb-2">
                   <div>
                     <p className="text-xs text-blue-400 font-bold uppercase mb-1">Energy</p>
                     <h3 className="text-lg font-bold">Obsidian Black</h3>
                   </div>
                   <span className="bg-zinc-800 text-white text-xs px-2 py-1 rounded">Stock Low</span>
                 </div>
                 <button className="w-full mt-4 py-2 bg-white text-black text-sm font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                   View Pricing
                 </button>
               </div>
             </div>

             {/* Product 2 */}
             <div className="group bg-black rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer">
               <div className="aspect-square relative bg-zinc-900">
                 <Image src="/product-water.jpg" alt="Water" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-6">
                 <div className="flex justify-between items-start mb-2">
                   <div>
                     <p className="text-xs text-blue-400 font-bold uppercase mb-1">Hydration</p>
                     <h3 className="text-lg font-bold">Glacier Pure</h3>
                   </div>
                   <span className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded">In Stock</span>
                 </div>
                 <button className="w-full mt-4 py-2 bg-white text-black text-sm font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                   View Pricing
                 </button>
               </div>
             </div>

             {/* Product 3 */}
             <div className="group bg-black rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer">
               <div className="aspect-square relative bg-zinc-900">
                 <Image src="/product-can.jpg" alt="Spirit" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-6">
                 <div className="flex justify-between items-start mb-2">
                   <div>
                     <p className="text-xs text-blue-400 font-bold uppercase mb-1">Spirits</p>
                     <h3 className="text-lg font-bold">Amber Reserve</h3>
                   </div>
                   <span className="bg-purple-900/30 text-purple-400 text-xs px-2 py-1 rounded">Exclusive</span>
                 </div>
                 <button className="w-full mt-4 py-2 bg-white text-black text-sm font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                   View Pricing
                 </button>
               </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}