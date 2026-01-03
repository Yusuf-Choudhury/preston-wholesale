"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      
      {/* 1. HERO VIDEO BACKGROUND */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }} // Darkens video slightly for text readability
        transition={{ duration: 2, delay: 1 }} // Fades in AFTER text starts
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          {/* Ensure this file is in your 'public' folder */}
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
      </motion.div>

      {/* 2. CINEMATIC CONTENT ENTRANCE */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        
        {/* Brand Name - Enters First */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 font-serif text-5xl font-medium tracking-tight text-white md:text-8xl"
        >
          PRESTON
          <span className="text-amber-500">.</span>
        </motion.h1>

        {/* Subtitle - Enters Second */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-10 max-w-lg text-sm font-light uppercase tracking-[0.3em] text-zinc-300"
        >
          The Art of High-Volume Supply
        </motion.p>

        {/* Buttons - Enter Last */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col gap-6 sm:flex-row"
        >
          <Link
            href="/shop"
            className="group relative overflow-hidden rounded-none border border-white px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
          >
            View Collection
          </Link>
          
          <Link
            href="/contact"
            className="group relative px-10 py-4 text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-amber-500"
          >
            Request Access &rarr;
          </Link>
        </motion.div>
      </div>

      {/* 3. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </motion.div>

    </main>
  );
}