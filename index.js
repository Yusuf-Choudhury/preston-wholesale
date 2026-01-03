import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Truck, Box, Globe, ChevronRight, ShieldCheck } from 'lucide-react';

/* --- 1. THE TRAFFIC ANIMATION COMPONENT --- */
const LogisticsAnimation = () => {
  return (
    <div className="w-full h-48 bg-zinc-900 relative overflow-hidden border-t border-b border-yellow-600/30 rounded-lg shadow-2xl">
      {/* Background Grid (Command Center Vibe) */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>
      
      {/* The Road */}
      <div className="absolute bottom-4 w-full h-16 bg-zinc-800 border-t border-zinc-600">
        <div className="w-full h-full flex items-center justify-around">
          <div className="w-full h-1 border-t border-dashed border-zinc-500/50"></div>
        </div>
      </div>

      {/* MOVING TRUCK CONTAINER */}
      <div className="absolute bottom-8 animate-drive-truck z-20">
        <div className="flex flex-col items-center">
          {/* Label floating above truck */}
          <div className="mb-2 px-2 py-0.5 bg-yellow-600 text-black text-[8px] font-mono font-bold rounded">
            UNIT-01: PRESTON
          </div>
          <div className="flex items-end filter drop-shadow-2xl">
             {/* Cab */}
             <div className="w-14 h-12 bg-zinc-200 rounded-tr-md rounded-tl-sm relative">
               <div className="absolute top-1 right-0 w-6 h-6 bg-cyan-900/50 rounded-bl-md"></div>
             </div>
             {/* Trailer */}
             <div className="w-40 h-16 bg-zinc-900 border border-yellow-600/50 ml-1 flex items-center justify-center relative">
               <div className="text-center">
                 <h3 className="text-yellow-600 font-serif tracking-widest text-[10px] uppercase">Preston</h3>
                 <div className="w-full h-[1px] bg-yellow-600 my-1"></div>
                 <p className="text-zinc-500 text-[8px] font-mono">SECURE TRANSIT</p>
               </div>
             </div>
          </div>
          {/* Wheels */}
          <div className="flex space-x-1 ml-4 -mt-2">
            <div className="w-5 h-5 bg-black rounded-full border border-zinc-600 animate-spin-slow"></div>
            <div className="w-5 h-5 bg-black rounded-full border border-zinc-600 animate-spin-slow ml-20"></div>
            <div className="w-5 h-5 bg-black rounded-full border border-zinc-600 animate-spin-slow"></div>
          </div>
        </div>
      </div>

      {/* LUXURY CAR (Background) */}
      <div className="absolute bottom-10 animate-drive-car z-10 opacity-40 blur-[1px]">
        <div className="w-24 h-8 bg-zinc-700 rounded-lg relative"></div>
        <div className="flex space-x-12 ml-3 -mt-2">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drive {
          0% { transform: translateX(-300px); }
          100% { transform: translateX(120vw); }
        }
        .animate-drive-truck { animation: drive 12s linear infinite; }
        .animate-drive-car { animation: drive 7s linear infinite; animation-delay: 1s; }
        .animate-spin-slow { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

/* --- 2. MAIN PAGE LAYOUT --- */
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-yellow-600 selection:text-black overflow-x-hidden">
      <Head>
        <title>Preston Wholesale | Global Logistics</title>
      </Head>

      {/* --- HEADER --- */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-600 rotate-45"></div>
            <span className="text-xl font-serif font-bold tracking-[0.2em] text-white">
              PRESTON
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-yellow-500 transition-colors">Catalog</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Logistics</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Client Portal</a>
          </div>
          <button className="px-6 py-2 border border-zinc-700 text-xs uppercase tracking-widest hover:bg-yellow-600 hover:text-black hover:border-yellow-600 transition-all duration-300">
            Inquire
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-12 h-[1px] bg-yellow-600"></span>
              <span className="text-yellow-600 text-xs font-bold tracking-widest uppercase">
                Wholesale & Logistics
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif leading-none mb-8 text-white">
              Luxury <br/>
              <span className="text-zinc-600">In Motion.</span>
            </h1>
            
            <p className="text-zinc-400 text-lg max-w-md mb-10 font-light leading-relaxed">
              Global procurement and secure transportation for high-value inventory. 
              We bridge the gap between manufacturer and market.
            </p>

            <div className="flex space-x-4">
              <button className="flex items-center px-8 py-4 bg-yellow-600 text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                View Inventory <ChevronRight className="ml-2 w-4 h-4" />
              </button>
              <button className="px-8 py-4 border border-zinc-700 text-xs uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                Track Shipment
              </button>
            </div>
          </motion.div>

          {/* Right: The Dashboard/Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-zinc-800 rounded-lg blur opacity-20"></div>
            <div className="relative bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                <h3 className="text-sm font-mono text-zinc-300 flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-yellow-600" /> 
                  LIVE OPERATIONS
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">System Online</span>
                </div>
              </div>
              
              {/* THE ANIMATION */}
              <LogisticsAnimation />
              
              {/* Data Rows */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-black/40 p-3 border border-zinc-800 rounded">
                  <div className="text-zinc-500 text-[10px] uppercase">Active Fleet</div>
                  <div className="text-xl text-white font-mono">24</div>
                </div>
                <div className="bg-black/40 p-3 border border-zinc-800 rounded">
                  <div className="text-zinc-500 text-[10px] uppercase">Volume</div>
                  <div className="text-xl text-white font-mono">4.2M</div>
                </div>
                <div className="bg-black/40 p-3 border border-zinc-800 rounded">
                  <div className="text-zinc-500 text-[10px] uppercase">Route</div>
                  <div className="text-xl text-yellow-600 font-mono">LDN-NYC</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* --- FEATURES STRIP --- */}
      <section className="border-t border-zinc-900 bg-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Box, title: "Secure Storage", desc: "Climate controlled warehousing." },
            { icon: Truck, title: "Rapid Transit", desc: "Same-day dispatch network." },
            { icon: ShieldCheck, title: "Insured Cargo", desc: "Full liability coverage included." }
          ].map((feature, i) => (
            <div key={i} className="flex items-start space-x-4 p-6 hover:bg-zinc-900 transition duration-300 border border-transparent hover:border-zinc-800">
              <feature.icon className="w-8 h-8 text-yellow-600" />
              <div>
                <h4 className="text-white font-serif text-lg mb-2">{feature.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
