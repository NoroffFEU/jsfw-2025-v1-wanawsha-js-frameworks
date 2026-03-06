"use client";

import { useState } from "react";
import { useCart } from "@/store/CartContext";
import type { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        addToCart(product);
        setShowMessage(true);

        setTimeout(() => {
        setShowMessage(false);
        }, 2000);
    };

    return (
        <>
        <button type="button" onClick={handleClick} style={{ marginTop: 6, border: "none", background: "#111", color: "#fff", padding: "12px 14px", borderRadius: 10, fontWeight: 700, cursor: "pointer" }}>
            Add to cart
        </button>

        {showMessage && <p style={{ color: "green", marginTop: 8 }}>Added to cart!</p>}
        </>
    );
}