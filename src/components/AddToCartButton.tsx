"use client";

import { useCart } from "@/store/CartContext";
import type { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
    const { addToCart } = useCart();
    
    return (
        <button type="button" onClick={() => addToCart(product)} style={{ marginTop: 6, border: "none", background: "#111", color:"#fff", padding: "12px 14px", borderRadius: 10, fontWeight: 700, cursor: "pointer"}}>
            Add To Cart
        </button>
    );
}