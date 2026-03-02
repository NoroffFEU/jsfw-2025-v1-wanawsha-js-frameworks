import { getProducts } from "@/services/api";
import ProductCard from "@/components/ProductCard";
import styles from "./page.module.css";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Online Shop</h1>
      <section className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </main>
  );
}