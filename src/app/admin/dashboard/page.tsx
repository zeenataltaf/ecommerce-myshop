"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/types/product";
import {
  getStoredProducts,
  addStoredProduct,
  deleteStoredProduct,
} from "@/libs/adminstorage";

export default function Dashboard() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  // protect route
const [products, setProducts] = useState<Product[]>(() => {
  if (typeof window === "undefined") return [];
  return getStoredProducts();
});

useEffect(() => {
  const auth = localStorage.getItem("admin-auth");
  if (!auth) router.push("/admin");
}, [router]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();

    const newProduct: Product = {
      id: Date.now().toString(),
      name: form.name,
      price: Number(form.price),
      image: form.image,
      description: form.description,
    };

    addStoredProduct(newProduct);
    setProducts(getStoredProducts());

    setForm({ name: "", price: "", image: "", description: "" });
  }

  function handleDelete(id: string) {
    deleteStoredProduct(id);
    setProducts(getStoredProducts());
  }

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* Add product form */}
      <form
        onSubmit={handleAdd}
        className="grid gap-3 max-w-md bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-xl font-semibold">Add Product</h2>

        <input
          placeholder="Name"
          className="border p-2 rounded"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Price"
          type="number"
          className="border p-2 rounded"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />

        <input
          placeholder="Image URL"
          className="border p-2 rounded"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="border p-2 rounded"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <button className="bg-green-600 text-white py-2 rounded">
          Add Product
        </button>
      </form>

      {/* Product list */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded-xl space-y-2">
            <Image 
            src={p.image}
            alt={p.name} 
            width={400}
            height={400}
            className="h-40 w-full object-cover rounded" />
            <h3 className="font-semibold">{p.name}</h3>
            <p>${p.price}</p>

            <button
              onClick={() => handleDelete(p.id)}
              className="text-red-600 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
