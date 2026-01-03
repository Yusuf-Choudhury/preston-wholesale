import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif text-white tracking-tight">PRESTON.</h3>
          <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
            The definitive supply chain for luxury retailers. 
            <br />Global logistics. Verified authenticity.
          </p>
          <div className="text-amber-600 text-[10px] font-bold uppercase tracking-widest">
            ● Systems Operational
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Platform</h4>
          <ul className="space-y-4 text-xs text-zinc-400">
            <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-amber-500 transition-colors">Live Inventory</Link></li>
            <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Trade Application</Link></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Legal & Trade</h4>
          <ul className="space-y-4 text-xs text-zinc-400">
            <li><Link href="/contact" className="hover:text-white transition-colors">Terms of Supply</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Shipping Manifest</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">HQ Support</h4>
          <p className="text-zinc-400 text-xs mb-2">London Office: +44 20 7946 0000</p>
          <p className="text-zinc-400 text-xs mb-6">logistics@prestonwholesale.com</p>
          <Link href="/contact" className="text-[10px] border border-white/20 px-4 py-2 rounded-sm text-white hover:bg-white hover:text-black transition-all">
            Open Support Ticket
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
          © 2024 Preston Wholesale Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}