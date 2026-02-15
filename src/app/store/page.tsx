import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

import Home from "@/sections/Home";
import Products from "@/sections/Products";
import Cart from "@/sections/Cart";
import Contact from "@/sections/Contact";

export default function StorePage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main className="pt-20">
        <Home />
        <Products />
        <Cart />
        <Contact />
      </main>
    </>
  );
}
