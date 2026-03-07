import { getProducts } from "@/services/api";
import ProductCard from "@/components/ProductCard";
import styles from "./page.module.css";
import ProductSearch from "@/components/ProductSearch";

export default async function Home({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const sp = await searchParams;
  const search = sp.search?.toLowerCase() || "";

  let products = [];

  try {
    products = await getProducts();
  } catch {
    return (
      <main className={styles.main}>
        <h1 className={styles.heading}>Online Shop</h1>
        <p>Failed to load products. Please try again later.</p>
      </main>
    );
  }

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Online Shop</h1>
      <ProductSearch />
      {filteredProducts.length === 0 && <p style={{ color: "red" }}>No products found.</p>}
      <section className={styles.grid}>
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </main>
  );
}
