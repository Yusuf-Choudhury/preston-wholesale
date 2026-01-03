"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar"; 

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
      {/* 1. GLOBAL NAVBAR (Hidden initially, fades in) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <Navbar />
      </motion.div>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center px-6 md:px-12">
        
        {/* Subtle Background Splash (Optional Depth) */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
             {/* If you want the splash background, uncomment below. otherwise it stays pure black */}
             {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale">
                <source src="/splash-main.mp4" type="video/mp4" />
             </video> */}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Text & Buttons */}
          <div className="flex flex-col items-start space-y-8">
            
            {/* Brand Name Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-amber-500 tracking-[0.4em] text-xs font-bold uppercase mb-4">
                Est. 2024 London
              </h2>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tight">
                PRESTON
                <br />
                <span className="text-zinc-500">WHOLESALE.</span>
              </h1>
            </motion.div>

            {/* Buttons Animation (Delays until text is done) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors duration-300"
              >
                Get in Touch
              </Link>
              <Link 
                href="/shop"
                className="px-8 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: The "Hero Can" Video (Latest Arrival) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 1.5 }} // Enters last
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* "Latest Arrival" Label */}
            <div className="absolute -left-12 top-1/2 -rotate-90 text-[10px] uppercase tracking-widest text-zinc-500 origin-center">
              Latest Arrival • Series IV
            </div>

            {/* Video Container */}
            <div className="w-full h-full relative border-l border-white/10 pl-8">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-sm shadow-2xl shadow-black/50"
              >
                {/* THIS IS YOUR NEW FILE */}
                <source src="/hero-can.mp4" type="video/mp4" />
              </video>
              
              {/* Overlay Glass Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-widest text-zinc-600">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>

      </section>

      {/* SECTION 2: Placeholder for Reviews (We will build this next) */}
      <section className="min-h-[50vh] bg-zinc-950 border-t border-white/5 flex items-center justify-center">
        <p className="text-zinc-700 text-sm uppercase tracking-widest">
          [Phase 3: Review Section Loading...]
        </p>
      </section>

    </main>
  );
}