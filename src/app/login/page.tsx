"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import BackgroundVideo from "../../components/BackgroundVideo";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay for dramatic effect
    setTimeout(() => {
      login(); // Activate Trade Mode
      router.push("/"); // Redirect to Home
    }, 1500);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Re-use the video background for consistency, or remove for a simpler look */}
      <div className="absolute inset-0 opacity-40">
        <BackgroundVideo />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-8 backdrop-blur-xl shadow-2xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-[0.2em] text-white">TRADE ACCESS</h1>
          <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400">Authorized Partners Only</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500">Business Email</label>
            <input 
              type="email" 
              required
              className="w-full rounded-none border-b border-white/20 bg-transparent py-2 text-sm text-white placeholder-zinc-700 focus:border-indigo-500 focus:outline-none transition-colors"
              placeholder="buyer@company.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500">Access Key</label>
            <input 
              type="password" 
              required
              className="w-full rounded-none border-b border-white/20 bg-transparent py-2 text-sm text-white placeholder-zinc-700 focus:border-indigo-500 focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="group relative w-full overflow-hidden rounded-lg bg-white px-4 py-3 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-zinc-200"
          >
            <span className={`relative z-10 flex items-center justify-center gap-2 ${loading ? "opacity-0" : "opacity-100"}`}>
              Enter Portal
            </span>
            {/* Loading Spinner */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-300 border-t-black"></div>
              </div>
            )}
          </button>
        </form>

        <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
          <a href="#" className="text-[10px] uppercase tracking-wider text-zinc-500 hover:text-white">Apply for Account</a>
          <a href="#" className="text-[10px] uppercase tracking-wider text-zinc-500 hover:text-white">Lost Access?</a>
        </div>
      </motion.div>
    </main>
  );
}
