import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer"; // We use this instead of Cart

export const metadata = {
  title: "Preston Wholesale",
  description: "Luxury B2B Logistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <AuthProvider>
          <CartProvider>
            {/* The Navbar and Drawer are globally available */}
            <Navbar />
            <CartDrawer />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}