import type { Product } from "@/types/product";

const KEY = "products";

export function getStoredProducts(): Product[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveStoredProducts(products: Product[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(products));
  }
}

export function addStoredProduct(product: Product) {
  const products = getStoredProducts();
  products.push(product);
  saveStoredProducts(products);
}

export function deleteStoredProduct(id: string) {
  const products = getStoredProducts().filter(p => p.id !== id);
  saveStoredProducts(products);
}
