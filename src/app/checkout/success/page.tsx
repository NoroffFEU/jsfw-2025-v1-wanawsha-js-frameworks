"use client";

import { useEffect } from "react";
import { useCart } from "@/store/CartContext";
import Link from "next/link";

export default function CheckoutSuccessPage() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <main style={{ padding: "40px 16px", maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h1>Thank you for your order!</h1>
        <p>Your purchase was successful.</p>
        <Link href="/" style={{ display: "inline-block", marginTop: 20, textDecoration: "none", fontWeight: 700 }}>
        Back to shop
        </Link>
    </main>
    );
}
