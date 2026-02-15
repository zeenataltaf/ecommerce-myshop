import { Product } from "@/types/product";
import { getStoredProducts } from "@/libs/adminstorage";

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 120,
    image: "/images/products/p1.jfif",
    description: "High quality wireless headphones with noise cancelling."
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 90,
    image: "/images/products/p2.jfif",
    description: "Track your health and notifications on the go."
  },
  {
    id: "3",
    name: "Gaming Mouse",
    price: 45,
    image: "/images/products/p3.jfif",
    description: "Ergonomic gaming mouse with RGB lighting."
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    price: 150,
    image: "/images/products/p4.jfif",
    description: "Premium mechanical keyboard for fast typing."
  },
  {
    id: "5",
    name: "Bluetooth Speaker",
    price: 70,
    image: "/images/products/p5.jfif",
    description: "Portable speaker with deep bass sound."
  },
  {
    id: "6",
    name: "Laptop Stand",
    price: 35,
    image: "/images/products/p6.jfif",
    description: "Adjustable stand for comfortable laptop usage."
  }
];
export function loadProducts(): Product[] {
  const stored = getStoredProducts();
  return stored.length ? stored : defaultProducts;
}
