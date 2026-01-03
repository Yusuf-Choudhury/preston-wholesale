
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar"; // Ensure this import path is correct

// --- DATA: Reviews & Products (Mock Data) ---
const REVIEWS = [
  {
    name: "James H.",
    role: "Verified Trade Partner",
    text: "Preston Wholesale redefined our supply chain. The logistics are flawless, and the inventory quality is unmatched in the UK market.",
    stars: 5,
  },
];

const LATEST_PRODUCTS = [
  {
    name: "Obsidian Energy",
    category: "Energy Drink",
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80&w=800", // Placeholder
  },
  {
    name: "Glacier Pure",
    category: "Hydration",
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&q=80&w=800", // Placeholder
  },
  {
    name: "Royal Tonic",
    category: "Mixer Series",
    image: "https://images.unsplash.com/photo-1598614187854-26a60e982dc4?auto=format&fit=crop&q=80&w=800", // Placeholder
  },
];

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-amber-500 selection:text-black">
      {/* SECTION 1: HERO - The Cinematic Entrance 
        Sequence: Brand -> Nav -> Buttons -> Video 
      */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Background Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black z-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Text & Buttons */}
          <div className="text-left space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-serif tracking-tighter"
            >
              PRESTON
              <span className="text-amber-500">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex items-center gap-6"
            >
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors"
              >
                Get in Touch
              </Link>
              <Link 
                href="/shop"
                className="px-8 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: "Latest Arrival" Video Teaser */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -top-12 -left-12 text-[10px] uppercase tracking-widest text-amber-500/80">
              Latest Arrival • Series IV
            </div>
            
            {/* VIDEO PLACEHOLDER CONTAINER */}
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm border border-white/10 bg-zinc-900">
              {/* Replace this source with your 'Latest Arrival' loop video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80"
              >
                <source src="https://cdn.coverr.co/videos/coverr-pouring-a-drink-in-a-glass-5324/1080p.mp4" type="video/mp4" />
              </video>
              
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                <p className="text-white font-serif text-2xl">Obsidian Reserve</p>
                <p className="text-zinc-400 text-xs uppercase tracking-widest mt-1">Limited Batch</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SOCIAL PROOF - The 5-Star Review 
      */}
      <section className="py-32 border-t border-white/10 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-500 text-xl">★</span>
            ))}
          </div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif leading-relaxed mb-8"
          >
            &ldquo;{REVIEWS[0].text}&rdquo;
          </motion.h3>
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-white">{REVIEWS[0].name}</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">{REVIEWS[0].role}</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCT TEASER - "Sign Up to View"
      */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-serif">Curated Inventory.</h2>
          <Link href="/shop" className="text-xs uppercase tracking-widest border-b border-amber-500 pb-1 text-amber-500 hover:text-white transition-colors">
            View All Stock
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {LATEST_PRODUCTS.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900 border border-white/5"
            >
              {/* Product Image */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Info & Restricted Button */}
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">{product.category}</p>
                <h3 className="text-xl font-serif text-white mb-6">{product.name}</h3>
                
                <Link 
                  href="/contact"
                  className="block w-full py-3 text-center border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all"
                >
                  Sign Up to View Price
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import BackgroundVideo from "../components/BackgroundVideo";

// Mock Data for the Luxury Catalog
const PRODUCTS = [
  {
    title: "Barr Cola Premium",
    category: "Soft Drinks",
    price: "£12.50 / case",
    stock: 450,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Glacier Spring Water",
    category: "Hydration",
    price: "£6.80 / case",
    stock: 1200,
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Ultra-Soft Tissue",
    category: "Household",
    price: "£18.00 / bale",
    stock: 150,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be87513?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Obsidian Energy",
    category: "Energy",
    price: "£24.00 / case",
    stock: 85,
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <BackgroundVideo />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">
              Wholesale Portal 2.0
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-bold tracking-tighter sm:text-8xl md:text-9xl mix-blend-overlay text-white opacity-90"
          >
            PRESTON
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 max-w-md text-lg text-zinc-300 font-light"
          >
            Exclusive logistics and high-value inventory for verified partners.
          </motion.p>
        </div>
      </section>

      {/* 2. PRODUCT CATALOG */}
      <section className="relative z-10 bg-black px-6 py-24 md:px-12">
        <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
          <h2 className="text-3xl font-light tracking-tight">Latest Arrivals</h2>
          <span className="hidden text-xs uppercase tracking-widest text-zinc-500 md:block">
            Live Stock Feed
          </span>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

    </main>
  );
}