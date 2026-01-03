"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        {/* Left Column: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-4 block">
            Concierge
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-white">
            Get in <br /> Touch.
          </h1>
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12 max-w-sm">
            Interested in becoming a trade partner? Our logistics team is available 24/7 for high-value inquiries.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white mb-2">Headquarters</h3>
              <p className="text-zinc-500 font-light">100 Bishopsgate<br/>London, EC2M 1GT<br/>United Kingdom</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white mb-2">Direct Line</h3>
              <p className="text-zinc-500 font-light">+44 (0) 20 7123 4567</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white mb-2">Email</h3>
              <p className="text-zinc-500 font-light">accounts@preston-wholesale.com</p>
            </div>
          </div>
        </motion.div>
        {/* Right Column: The Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-zinc-900/30 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-lg"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">First Name</label>
                <input type="text" className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500">Last Name</label>
                <input type="text" className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500">Company Email</label>
              <input type="email" className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500">Inquiry Type</label>
              <select className="w-full bg-transparent border-b border-zinc-700 py-2 text-zinc-400 focus:outline-none focus:border-indigo-500 transition-colors">
                <option>Trade Account Application</option>
                <option>Logistics Query</option>
                <option>General Support</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"></textarea>
            </div>
            <button className="w-full bg-white text-black py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors mt-4">
              Send Request
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
