"use client";

import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main className="pt-24 max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="min-h-[70vh] flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold mb-6 leading-tight"
          >
            Discover the Future of <br /> Tech Shopping
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-xl mb-10"
          >
            MyShop brings you premium gadgets, accessories, and modern tools
            with fast delivery and unbeatable prices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/hero.jfif"
              alt="Store hero"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </section>

        {/* FEATURES */}
        <section className="py-20 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Premium Products",
              text: "Carefully selected gadgets designed for performance and style.",
            },
            {
              title: "Fast Delivery",
              text: "Get your orders delivered quickly with our reliable shipping.",
            },
            {
              title: "Secure Shopping",
              text: "Safe checkout and trusted payment systems for peace of mind.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-3">{f.title}</h2>
              <p className="text-gray-600">{f.text}</p>
            </motion.div>
          ))}
        </section>

        {/* IMAGE GRID */}
        <section className="pb-24 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["hero1.jfif", "hero2.jfif", "hero3.jfif"].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-52 rounded-xl overflow-hidden shadow"
            >
              <Image
                src={`/images/products/${img}`}
                alt="Store product"
                fill
                priority
                className="object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </section>
      </main>
    </>
  );
}
