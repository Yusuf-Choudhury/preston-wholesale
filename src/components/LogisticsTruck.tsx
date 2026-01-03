"use client";

import { motion } from "framer-motion";
import { Truck } from "lucide-react";

export default function LogisticsTruck() {
  return (
    <div className="w-full border-t border-white/10 py-20 overflow-hidden relative bg-black">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black"></div>
      {/* The Road Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      {/* The Moving Truck */}
      <motion.div
        initial={{ x: "-20%" }}
        animate={{ x: "120%" }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
      >
        <div className="relative">
          {/* Truck Icon with Glow */}
          <Truck className="w-10 h-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          {/* Headlights */}
          <div className="absolute top-6 right-0 w-24 h-8 bg-gradient-to-r from-white/20 to-transparent blur-md transform rotate-12"></div>
          {/* Speed lines */}
          <div className="absolute top-2 -left-8 space-y-1 opacity-50">
            <div className="w-6 h-px bg-white/40"></div>
            <div className="w-10 h-px bg-white/60"></div>
            <div className="w-4 h-px bg-white/40"></div>
          </div>
        </div>
        <span className="mt-4 text-[9px] uppercase tracking-widest text-zinc-600">
          Global Logistics • En Route
        </span>
      </motion.div>
    </div>
  );
}
