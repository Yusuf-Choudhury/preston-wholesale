"use client";

import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

interface ProductProps {
  title: string;
  category: string;
  price: string;
  image: string; // URL
  stock: number;
}

export default function ProductCard({ title, category, price, image, stock }: ProductProps) {
  const { isTradeUser } = useAuth();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md transition-all hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-zinc-800">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={image} 
          alt={title} 
          className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
        />
        
        {/* Floating Badge */}
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-light text-white">{title}</h3>
        
        {/* Stock Indicator (Only for Trade) */}
        {isTradeUser ? (
          <div className="mt-2 flex items-center gap-2 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {stock} Units in Stock
          </div>
        ) : (
          <div className="mt-2 text-xs text-zinc-500">Trade Login Required for Stock</div>
        )}

        {/* Price & Action Area */}
        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">Wholesale Price</p>
            
            {/* THE BLUR LOGIC */}
            <div className={`mt-1 text-2xl font-medium text-white transition-all duration-500 ${!isTradeUser ? "blur-sm select-none opacity-50" : ""}`}>
              {isTradeUser ? price : "£XX.XX"}
            </div>
          </div>

          <button 
            className={`rounded-lg px-5 py-2 text-sm font-medium transition-all 
              ${isTradeUser 
                ? "bg-white text-black hover:bg-zinc-200" 
                : "border border-white/20 bg-transparent text-white hover:bg-white/10"
              }`}
          >
            {isTradeUser ? "Add to Order" : "Login to View"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}