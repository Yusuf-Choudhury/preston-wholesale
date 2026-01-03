"use client";

import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-32">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Trade Application</h1>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-lg mx-auto">
            Access to the Preston Wholesale inventory is restricted to verified business partners. 
            Please complete the application below.
          </p>
        </div>

        <form className="space-y-8 bg-white/5 p-8 md:p-12 rounded-2xl border border-white/5">
          {/* Section 1: Business Details */}
          <div>
            <h3 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Business Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wide">Company Name</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 text-sm focus:border-amber-500 outline-none transition-colors" placeholder="e.g. Acme Retail Ltd" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wide">Trading Address</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 text-sm focus:border-amber-500 outline-none transition-colors" placeholder="Postal Code / Street" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wide">VAT / Tax ID</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 text-sm focus:border-amber-500 outline-none transition-colors" placeholder="Required for verification" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wide">Company Reg Number</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 text-sm focus:border-amber-500 outline-none transition-colors" placeholder="Optional" />
              </div>
            </div>
          </div>

          {/* Section 2: Contact Person */}
          <div>
            <h3 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Representative Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wide">First Name</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 text-sm focus:border-amber-500 outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-wide">Last Name</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 text-sm focus:border-amber-500 outline-none transition-colors" />
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <label className="text-xs text-zinc-500 uppercase tracking-wide">Business Email</label>
              <input type="email" className="w-full bg-black border border-white/10 rounded-lg p-4 text-sm focus:border-amber-500 outline-none transition-colors" placeholder="name@company.com" />
            </div>
          </div>

          <button className="w-full bg-amber-600 text-white py-5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-all shadow-lg shadow-amber-900/20">
            Submit Application
          </button>
          
          <p className="text-center text-[10px] text-zinc-600">
            By submitting this form, you agree to our Terms of Trade. Approvals typically take 24-48 hours.
          </p>
        </form>
      </div>

      <Footer />
    </main>
  );
}