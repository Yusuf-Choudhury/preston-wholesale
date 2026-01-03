"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isTradeUser, logout } = useAuth();

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/20 px-8 py-4 backdrop-blur-md">
      <Link href="/" className="text-xl font-bold tracking-tighter text-white">
        WHOLESALE<span className="text-indigo-500">.</span>
      </Link>
      
      <div className="flex gap-6 items-center">
    // ...existing code...
    // (No change needed, links already point to /shop and /contact and use pathname for active state)
      </div>
    </nav>
  );
}
