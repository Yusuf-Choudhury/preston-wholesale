"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import LogisticsTruck from "../../components/LogisticsTruck"; 

// --- MOCK DATA ---
const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Obsidian Black Series",
    category: "Energy",
    image: "/product-can.jpg", // Uses your uploaded asset
  },
  {
    id: 2,
    name: "Glacier Spring Source",
    category: "Hydration",
    image: "/product-water.jpg", // Uses your uploaded asset
  },
  {
    id: 3,
    name: "Amber Reserve",
    category: "Spirits",
    image: "/product-whiskey.jpg", // Uses your uploaded asset
  },
];

const LATEST_ARRIVALS = [
  { id: 4, name: "Voss Sparkle", stock: "Low Stock", date: "Just In" },
  { id: 5, name: "Red Bull Sugarfree", stock: "High Volume", date: "Restocked" },
  { id: 6, name: "Fiji Water Case", stock: "Available", date: "Yesterday" },
  { id: 7, name: "San Pellegrino", stock: "Pre-Order", date: "Coming Soon" },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
      
      {/* 1. HEADER SECTION */}
      <section className="px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-tight">
            Master Inventory
          </h1>
          <p className="text-zinc-500 max-w-xl text-sm uppercase tracking-widest">
            Exclusive wholesale pricing for verified partners.
          </p>
        </motion.div>
      </section>

      {/* 2. THE LOGISTICS TRUCK (Separator) */}
      <LogisticsTruck />

      {/* 3. FEATURED GRID */}
      <section className="px-6 md:px-12 mb-24 mt-12">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500 mb-8">
          Featured Collections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[500px] overflow-hidden rounded-sm bg-zinc-900 border border-white/5"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              </div>

              {/* Text Layer (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                <p className="text-[10px] uppercase tracking-widest text-amber-400 mb-2">
                  {product.category}
                </p>
                <h3 className="text-2xl font-serif text-white mb-6">
                  {product.name}
                </h3>
                
                {/* The "Sign Up" Button Logic */}
                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded text-center">
                  <p className="text-zinc-300 text-[10px] uppercase mb-2">Wholesale Price Hidden</p>
                  <Link 
                    href="/contact"
                    className="block w-full py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors"
                  >
                    Login to Unlock
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. LATEST ARRIVALS */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 border-b border-white/10 pb-4">
          Incoming Manifest (Live Feed)
        </h2>

        <div className="space-y-4">
          {LATEST_ARRIVALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between p-6 bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-colors rounded-sm group"
            >
              <div className="flex items-center gap-6">
                <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                <div>
                  <h3 className="text-lg font-serif text-white group-hover:text-amber-500 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                    {item.date} • {item.stock}
                  </p>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="hidden md:block text-[10px] uppercase tracking-widest text-zinc-400 border border-white/10 px-4 py-2 hover:bg-white hover:text-black transition-all"
              >
                Request Quote
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}