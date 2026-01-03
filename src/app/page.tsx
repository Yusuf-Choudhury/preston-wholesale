"use client";

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