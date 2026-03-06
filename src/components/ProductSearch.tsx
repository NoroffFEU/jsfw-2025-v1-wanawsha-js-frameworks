"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductSearch() {

    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/?search=${encodeURIComponent(query)}`);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." style={{ width: "100%", padding: "12px", borderRadius: 10, border: "1px solid #ddd", outline: "none" }} />
        </form>
    );
}