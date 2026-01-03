"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  title: string;
  price: string;
};

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  isOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setItems([...items, item]);
    setIsOpen(true); // Open drawer when item added
  };

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <CartContext.Provider value={{ items, addToCart, isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};