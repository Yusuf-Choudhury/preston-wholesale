"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../../components/ProductCard";

const ALL_PRODUCTS = [
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
  },
  {
    title: "Voss Glass Reserve",
    category: "Hydration",
    price: "£22.00 / case",
    stock: 60,
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Royal Tonic Water",
    category: "Mixers",
    price: "£14.50 / case",
    stock: 200,
    image: "https://images.unsplash.com/photo-1598614187854-26a60e982dc4?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 border-b border-white/10 pb-8"
      >
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
          Master Inventory
        </h1>
        <div className="flex justify-between items-end">
          <p className="text-zinc-500 text-sm max-w-md font-light">
            Live availability for verified trade partners. Prices and add-to-cart functionality are restricted to account holders.
          </p>
          <span className="hidden md:block text-[10px] uppercase tracking-widest text-indigo-400">
            {new Date().toLocaleDateString()} • Live Feed
          </span>
        </div>
      </motion.div>

      {/* Product Grid with Staggered Animation */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ALL_PRODUCTS.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
