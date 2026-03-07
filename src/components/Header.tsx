"use client";

import Link from "next/link";
import { useCart } from "@/store/CartContext";

export default function Header() {
    const { cartCount } = useCart();

    return (
        <header style={{ padding: "14px 16px", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit", fontWeight: 800 }}>Online Shop</Link>
            <nav style={{ display: "flex", gap: 14 }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
            <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link>
            <Link href="/cart" style={{ textDecoration: "none", color: "inherit", fontWeight: 700 }}>Cart ({cartCount})</Link>
            </nav>
        </div>
        </header>
    );
}