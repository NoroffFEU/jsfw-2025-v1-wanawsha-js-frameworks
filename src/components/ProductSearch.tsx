"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductSearch() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("search") || "");

    useEffect(() => {
        const timeout = setTimeout(() => {
        router.replace(`/?search=${encodeURIComponent(query)}`);
        }, 300);

        return () => clearTimeout(timeout);
    }, [query, router]);

    return (
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." style={{ width: "100%", padding: "12px", borderRadius: 10, border: "1px solid #ddd", outline: "none" }} />
    );
}