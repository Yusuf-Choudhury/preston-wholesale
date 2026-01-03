import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] border-t border-white/10 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Mission */}
        <div className="space-y-6">
          <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest">Our Mission</h4>
          <p className="text-zinc-500 text-xs leading-relaxed">
            Preston Wholesale was born to disrupt the traditional supply chain. We prioritize speed, authenticity, and volume, pledging 100% transparency to our trade partners.
          </p>
          <div className="flex gap-4 pt-2">
             <Instagram className="w-4 h-4 text-zinc-400 hover:text-white cursor-pointer" />
             <Facebook className="w-4 h-4 text-zinc-400 hover:text-white cursor-pointer" />
             <Twitter className="w-4 h-4 text-zinc-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Column 2: Operating Hours */}
        <div>
          <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">Operating Hours</h4>
          <div className="space-y-2 text-xs text-zinc-400">
            <p>Mon - Fri: 09:00 - 18:00</p>
            <p>Sat: 10:00 - 14:00</p>
            <p>Sun: Closed (Automated Ordering Only)</p>
          </div>
        </div>

        {/* Column 3: Site Links */}
        <div>
          <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">Site Links</h4>
          <ul className="space-y-3 text-xs text-zinc-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Shop Inventory</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Trade Application</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 4: Official Partner */}
        <div>
          <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">Official Logistics</h4>
          <p className="text-zinc-500 text-xs leading-relaxed mb-4">
            Partnered with global freight leaders to ensure your stock arrives on time, every time.
          </p>
          <div className="w-full h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-[10px] text-zinc-600 uppercase tracking-widest">
            Certified Partner
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex justify-between items-center">
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
          © 2024 Preston Wholesale. All Rights Reserved.
        </p>
        <p className="text-[10px] text-zinc-700 uppercase tracking-widest">
          London • New York • Dubai
        </p>
      </div>
    </footer>
  );
}