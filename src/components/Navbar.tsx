"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();

  // total items count
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/80 backdrop-blur shadow-md border-b"
          : "bg-white/50 backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1 whileHover={{ scale: 1.05 }} className="font-bold text-lg">
          MyShop
        </motion.h1>

        {/* Links */}
        <div className="flex gap-6 items-center text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/store">Store</Link>
          <Link href="/store#products">Products</Link>

          {/* CART WITH BADGE */}
          <Link href="/store#cart" className="relative">
            Cart

            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <Link href="/store#contact">Contact</Link>
        </div>
        <a href="/admin" className="text-sm font-medium hover:text-blue-600">
  Admin
</a>
      </div>
    </motion.nav>
  );
}
