"use client";

import Section from "@/components/Section";
import CartItem from "@/components/CartItem";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, totalPrice, clearCart } = useCart();

  return (
    <Section id="cart">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="mb-6">
            {cart.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-semibold">
              Total: ${totalPrice}
            </h3>

            <button
              onClick={clearCart}
              className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </Section>
  );
}
