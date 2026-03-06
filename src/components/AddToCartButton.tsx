"use client";

import { useState } from "react";
import { useCart } from "@/store/CartContext";
import type { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      <button onClick={handleClick} style={{ marginTop: 6, border: "none", background: "#111", color: "#fff", padding: "12px 14px", borderRadius: 10, fontWeight: 700, cursor: "pointer" }}>
        Add to cart
      </button>

      {showToast && (
        <div style={{ position: "fixed", top: 20, right: 20, background: "#76835d", color: "#fff", padding: "12px 16px", borderRadius: 10, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
          Added to cart!
        </div>
      )}
    </>
  );
}