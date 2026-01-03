"use client";

import { useCart } from "../context/CartContext";
import { X, Trash2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { items, removeFromCart, toggleCart, isCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-[#0a0a0a] border-l border-white/10 z-[70] p-8 shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-thin uppercase tracking-[0.2em] text-white">Your Selection</span>
              <button onClick={toggleCart} className="hover:rotate-90 transition duration-300">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6">
              {items.length === 0 ? (
                <p className="text-white/40 text-center mt-20 uppercase text-xs tracking-widest">Your bag is empty</p>
              ) : (
                items.map((item: any, i: number) => (
                  <div key={i} className="flex gap-4 items-center bg-white/5 p-4 rounded border border-white/5">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded grayscale" />
                    <div className="flex-1">
                      <h4 className="text-white text-sm font-bold uppercase tracking-wider">{item.name}</h4>
                      <p className="text-[#D81B26] text-xs mt-1 italic">{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-white/40 hover:text-white transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex justify-between text-white mb-6 uppercase tracking-widest text-sm">
                <span>Total</span>
                <span>£{items.reduce((acc: number, item: any) => acc + parseFloat(item.price.replace('£', '')), 0).toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#D81B26] text-black py-4 font-bold uppercase tracking-widest hover:bg-white transition duration-300 flex items-center justify-center gap-2">
                Checkout <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
