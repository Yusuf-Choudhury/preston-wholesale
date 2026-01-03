"use client";

import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl font-serif mb-4 text-center">Trade Application</h1>
        <p className="text-zinc-500 text-center mb-12 max-w-md mx-auto">
          We operate on an approval-only basis. Please submit your details below.
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" className="w-full bg-zinc-900 border border-white/10 p-4 text-sm focus:border-amber-500 outline-none" />
            <input type="text" placeholder="Last Name" className="w-full bg-zinc-900 border border-white/10 p-4 text-sm focus:border-amber-500 outline-none" />
          </div>
          <input type="email" placeholder="Business Email" className="w-full bg-zinc-900 border border-white/10 p-4 text-sm focus:border-amber-500 outline-none" />
          <textarea rows={4} placeholder="Company Details & Interest" className="w-full bg-zinc-900 border border-white/10 p-4 text-sm focus:border-amber-500 outline-none" />
          
          <button className="w-full bg-white text-black py-4 text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors">
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
}