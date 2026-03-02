import type { ApiItemResponse, ApiListResponse, Product } from "@/types/product";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_API_BASE_URL in .env.local");
}

async function fetchJson<T>(url: string): Promise<T> {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`API error ${res.status}: ${res.statusText}`);
  }

    return (await res.json()) as T;
}

export async function getProducts(): Promise<Product[]> {
    const res = await fetchJson<ApiListResponse<Product>>(`${BASE_URL}/online-shop`);
    return res.data;
}

export async function getProductById(id: string): Promise<Product> {
    const res = await fetchJson<ApiItemResponse<Product>>(`${BASE_URL}/online-shop/${id}`);
    return res.data;
}