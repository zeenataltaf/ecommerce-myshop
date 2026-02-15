"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

type Props = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartItem({
  id,
  name,
  price,
  image,
  quantity,
}: Props) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <div className="relative w-16 h-16">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex-1">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500">
          ${price} × {quantity}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            addToCart({ id, name, price, image, description: "" })
          }
          className="px-2 py-1 bg-green-600 text-white rounded text-sm"
        >
          +
        </button>

        <button
          onClick={() => removeFromCart(id)}
          className="px-2 py-1 bg-red-600 text-white rounded text-sm"
        >
          −
        </button>
      </div>
    </div>
  );
}
