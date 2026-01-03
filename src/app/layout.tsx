import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer"; // Add the Drawer here
import { CartProvider } from "../context/CartContext"; // Add the Provider here

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
            <Navbar />
            <CartDrawer />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}