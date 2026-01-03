"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen text-white pt-32">
      <Navbar />
      
      <div className="max-w-xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Get Verified.</h1>
          <p className="text-zinc-400">
            Join 500+ retailers accessing exclusive wholesale pricing.
          </p>
        </div>

        <form className="space-y-6 bg-zinc-900/50 p-8 rounded-2xl border border-white/5 shadow-xl backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <label className="text-xs font-semibold text-zinc-500">First Name</label>
               <input className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition-colors" />
             </div>
             <div className="space-y-2">
               <label className="text-xs font-semibold text-zinc-500">Last Name</label>
               <input className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition-colors" />
             </div>
          </div>

          <div className="space-y-2">
             <label className="text-xs font-semibold text-zinc-500">Work Email</label>
             <input type="email" className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition-colors" />
          </div>

          <div className="space-y-2">
             <label className="text-xs font-semibold text-zinc-500">Company Name</label>
             <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm focus:border-blue-500 outline-none transition-colors" />
          </div>

          <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20">
            Submit Application
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}