"use client";

import { useState } from "react";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";
import { loadProducts } from "@/data/products";

export default function Products() {
  const [products] = useState<Product[]>(() => loadProducts());

  return (
    <Section id="products">
      <h2 className="text-3xl font-bold mb-10">Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
