"use client";

import Image from "next/image";
import { useCart } from "@/store/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartPage() {
    const router = useRouter();
    const { items, total, ready, updateQuantity, removeFromCart } = useCart();
    const [removedToast, setRemovedToast] = useState(false);
    
    if (!ready) {
        return (
        <main style={{ padding: "24px 16px", maxWidth: 1100, margin: "0 auto" }}>
            <h1>Cart</h1>
            <p>Loading...</p>
        </main>
        );
    }

    if (items.length === 0) {
        return (
            <main style={{ padding: "24px 16px", maxWidth: 1100, margin: "0 auto" }}>
                <h1>Cart</h1>
                <p>Your cart is empty.</p>
                {removedToast && <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "#416239", color: "#fff", padding: "14px 18px", borderRadius: 10, zIndex: 1000 }}>
                    Item removed from cart
                </div>}
            </main>
        );
    }

    return (
        <main style={{ padding: "24px 16px", maxWidth: 1100, margin: "0 auto" }}>
        <h1>Cart</h1>
        <div style={{ display: "grid", gap: 16 }}>
            {items.map((item) => {
            const unitPrice = item.discountedPrice < item.price ? item.discountedPrice : item.price;

            return (
                <div key={item.id} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 14, border: "1px solid #eee", padding: 14, borderRadius: 12 }}>
                    <div style={{ position: "relative", width: 100, height: 100 }}>
                        <Image src={item.imageUrl} alt={item.imageAlt ?? item.title} fill style={{ objectFit: "cover", borderRadius: 8 }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <strong>{item.title}</strong>
                        <span>{unitPrice} kr</span>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <button onClick={() => {removeFromCart(item.id); setRemovedToast(true); setTimeout(() => setRemovedToast(false), 2000);}} style={{ color: "red", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>
                        Remove
                        </button>
                    </div>
                </div>
            );
        })}
        </div>
        <div style={{ marginTop: 24, borderTop: "1px solid #eee", paddingTop: 16 }}>
            <h2>Total: {total.toFixed(2)} kr</h2>
            <button onClick={() => router.push("/checkout/success")} style={{ marginTop: 10, border: "none", background: "#111", color: "#fff", padding: "12px 16px", borderRadius: 10, fontWeight: 700, cursor: "pointer" }}>
            Checkout
            </button>
        </div>
            {removedToast && <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "#416239", color: "#fff", padding: "14px 18px", borderRadius: 10, zIndex: 1000 }}>
                Item removed from cart
            </div>
            }
        </main>
    );
}