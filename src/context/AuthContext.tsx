"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isTradeUser: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Default is FALSE (Guest Mode) so we can see the blurring effect immediately
  const [isTradeUser, setIsTradeUser] = useState(false);

  const login = () => setIsTradeUser(true);
  const logout = () => setIsTradeUser(false);

  return (
    <AuthContext.Provider value={{ isTradeUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};