
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // simple demo password
    if (password === "admin123") {
      localStorage.setItem("admin-auth", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Wrong password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg p-8 rounded-xl w-80 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Admin Login</h1>

        <input
          type="password"
          placeholder="Enter password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
