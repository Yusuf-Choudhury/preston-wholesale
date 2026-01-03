"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// MOCK DATA
const PRODUCTS = [
  { id: 1, name: "Obsidian Black", category: "Energy", image: "/product-can.jpg" },
  { id: 2, name: "Glacier Pure", category: "Hydration", image: "/product-water.jpg" },
  { id: 3, name: "Amber Reserve", category: "Spirits", image: "/product-can.jpg" },
  { id: 4, name: "Voss Sparkle", category: "Hydration", image: "/product-water.jpg" },
];

export default function ShopPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      
      {/* 1. TRUCK HEADER VIDEO */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
          <source src="/logistics-truck.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/60" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
           <div className="max-w-7xl mx-auto">
             <span className="px-3 py-1 bg-amber-600 text-white text-[9px] font-bold uppercase tracking-widest rounded-sm mb-4 inline-block">
               Global Logistics Network
             </span>
             <h1 className="text-5xl md:text-7xl font-serif text-white drop-shadow-lg">
               Master Inventory.
             </h1>
           </div>
        </div>
      </section>

      {/* 2. PRODUCT GRID */}
      <section className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[600px] bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-amber-600/30 transition-all"
            >
              {/* Image filling the card */}
              <div className="absolute inset-0">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              </div>
              
              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 w-full p-10">
                <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">{product.category}</p>
                <h3 className="text-4xl font-serif text-white mb-8">{product.name}</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="px-8 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-amber-500 transition-colors">
                    View Specs
                  </Link>
                  <Link href="/contact" className="px-8 py-3 backdrop-blur-md bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-colors">
                    Sign In for Price
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}