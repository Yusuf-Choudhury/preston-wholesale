"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import { Star } from "lucide-react";

// Mock Data
const REVIEWS = [
  { name: "James H.", text: "Best wholesale pricing in London." },
  { name: "Sarah L.", text: "Fast dispatch and authentic stock." },
  { name: "Ritz Hotel", text: "Our go-to supplier for premium spirits." },
  { name: "Urban Bar", text: "Flawless logistics every time." },
];

const PRODUCTS = [
  { name: "Obsidian Energy", category: "Energy", image: "/product-can.jpg", price: "£14.99" },
  { name: "Glacier Pure", category: "Water", image: "/product-water.jpg", price: "£8.50" },
  { name: "Amber Reserve", category: "Spirits", image: "/product-can.jpg", price: "£45.00" },
  { name: "Voss Sparkle", category: "Water", image: "/product-water.jpg", price: "£12.99" },
];

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      {/* 1. HERO SECTION (Scaled Down Video Container) */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Left */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
              The Art of <br />
              <span className="text-amber-500">Global Supply.</span>
            </h1>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              We connect premium retailers with exclusive, high-margin inventory. 
              Verified authenticity, 24h dispatch, and volume pricing.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Link href="/shop" className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors rounded-sm">
                Shop Now
              </Link>
              <Link href="/contact" className="px-8 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">
                Trade Login
              </Link>
            </div>
          </div>

          {/* Video Right (Contained, not full screen) */}
          <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/hero-watch.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* 2. REVIEWS SCROLLER */}
      <section className="py-12 border-y border-white/5 bg-zinc-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex gap-12 animate-scroll">
              {[...REVIEWS, ...REVIEWS].map((review, i) => (
                <div key={i} className="min-w-[250px] flex flex-col gap-2">
                   <div className="flex text-amber-500 gap-1">
                     <Star size={12} fill="currentColor" />
                     <Star size={12} fill="currentColor" />
                     <Star size={12} fill="currentColor" />
                     <Star size={12} fill="currentColor" />
                     <Star size={12} fill="currentColor" />
                   </div>
                   <p className="text-zinc-300 text-xs italic">"{review.text}"</p>
                   <p className="text-zinc-500 text-[10px] uppercase font-bold">{review.name}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID ("Refreshing Can Lineup") */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-center mb-16">Live Inventory</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="group bg-[#111] border border-white/5 rounded-sm p-4 hover:border-amber-500/50 transition-colors">
              <div className="aspect-square relative mb-4 overflow-hidden bg-black rounded-sm">
                <Image src={product.image} alt={product.name} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">{product.category}</p>
              <h3 className="text-sm font-bold text-white mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                 <span className="text-amber-500 text-xs font-bold">{product.price}</span>
                 <button className="text-[10px] border border-white/20 px-3 py-1 text-white hover:bg-white hover:text-black transition-colors">
                   Add
                 </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURE SECTION (Image Left, Text Right) */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
           <div className="relative aspect-square rounded-sm overflow-hidden border border-white/10">
             <video autoPlay loop muted playsInline className="w-full h-full object-cover">
               <source src="/hero-can.mp4" type="video/mp4" />
             </video>
           </div>
           <div className="space-y-6">
             <h2 className="text-4xl font-serif">Taste is Everything.</h2>
             <p className="text-zinc-400 text-sm leading-relaxed">
               We've tackled a bunch of challenges to create an awesome supply chain that stands out from the big names. 
               Get ready for a unique logistics adventure that'll wow you with every shipment.
             </p>
             <Link href="/shop" className="text-amber-500 text-xs font-bold uppercase tracking-widest border-b border-amber-500 pb-1">
               Read Our Story
             </Link>
           </div>
        </div>
      </section>

      {/* 5. TRADE CTA BANNER */}
      <section className="py-20 bg-amber-700 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Trade Enquiries</h2>
        <p className="text-white/80 text-sm max-w-xl mx-auto mb-8">
          100% of our focus is on supporting businesses like yours. 
          Your choice is more than a supplier – it's a decision to disrupt the status quo.
        </p>
        <Link href="/contact" className="px-10 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-sm">
          Apply for Trade Account
        </Link>
      </section>

      <Footer />
    </main>
  );
}