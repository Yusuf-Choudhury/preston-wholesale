"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, toggleCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-white/10 bg-zinc-900 p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold uppercase tracking-widest text-white">Your Order</h2>
              <button onClick={toggleCart} className="text-zinc-500 hover:text-white">CLOSE</button>
            </div>

            <div className="flex flex-col gap-4">
              {items.length === 0 ? (
                <p className="text-zinc-500 text-sm">Your order is empty.</p>
              ) : (
                items.map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-white/5 pb-4">
                    <span className="text-white">{item.title}</span>
                    <span className="text-zinc-400">{item.price}</span>
                  </div>
                ))
              )}
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <button className="w-full bg-white py-4 text-xs font-bold uppercase tracking-widest text-black hover:bg-zinc-200">
                Checkout Request ({items.length})
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
