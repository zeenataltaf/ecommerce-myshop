"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <div className="relative w-full h-40 mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.description}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="font-bold">${product.price}</span>

        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
