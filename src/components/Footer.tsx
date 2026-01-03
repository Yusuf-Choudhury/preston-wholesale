import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif text-white">PRESTON.</h3>
          <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
            Global logistics and high-volume wholesale supply. Exclusively for verified trade partners.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-3 text-xs text-zinc-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
          <ul className="space-y-3 text-xs text-zinc-400">
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Trade</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Manifest</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">Trade Support</h4>
          <p className="text-zinc-400 text-xs mb-2">London HQ: +44 20 7946 0000</p>
          <p className="text-zinc-400 text-xs mb-4">logistics@prestonwholesale.com</p>
          <div className="flex gap-4">
             {/* Social Placeholders */}
             <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-500 transition-colors"></div>
             <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-500 transition-colors"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
          © 2024 Preston Wholesale Ltd. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Systems Operational</span>
        </div>
      </div>
    </footer>
  );
}
