"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product, CartItem } from "@/types/product";

type CartContextValue = {
  items: CartItem[];
  ready: boolean;
  cartCount: number;
  total: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "online_shop_cart_v1";

function toCartItem(product: Product, quantity: number): CartItem {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    discountedPrice: product.discountedPrice,
    imageUrl: product.image.url,
    imageAlt: product.image.alt,
    quantity,
  };
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  // 1) Load once after mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setItems(Array.isArray(parsed) ? (parsed as CartItem[]) : []);
    } catch {
      setItems([]);
    } finally {
      setReady(true);
    }
  }, []);

  // 2) Save whenever items change (after ready)
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore write errors
    }
  }, [items, ready]);

  const addToCart = (product: Product, quantity: number = 1) => {
    const qty = Math.max(1, Math.floor(quantity));

    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (!existing) return [...prev, toCartItem(product, qty)];

      return prev.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity + qty } : i
      );
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    const qty = Math.max(1, Math.floor(quantity));
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    );
  };

  const clearCart = () => setItems([]);

  const cartCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const total = useMemo(() => {
    return items.reduce((sum, i) => {
      const unitPrice =
        i.discountedPrice < i.price ? i.discountedPrice : i.price;
      return sum + unitPrice * i.quantity;
    }, 0);
  }, [items]);

  const value: CartContextValue = {
    items,
    ready,
    cartCount,
    total,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}