import Image from "next/image";
import { getProductById } from "@/services/api";
import styles from "./page.module.css";
import AddToCartButton from "@/components/AddToCartButton";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProductById(id);
  const hasDiscount = product.discountedPrice < product.price;

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          <Image src={product.image.url} alt={product.image.alt ?? product.title} fill className={styles.image} sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{product.title}</h1>
          <div className={styles.priceRow}>
            {hasDiscount ? (
              <>
                <span className={styles.discounted}>{product.discountedPrice} kr</span>
                <span className={styles.original}>{product.price} kr</span>
              </>
            ) : (
              <span className={styles.normal}>{product.price} kr</span>
            )}
          </div>
          <p className={styles.rating}>⭐ {product.rating.toFixed(1)}</p>
          <p className={styles.desc}>{product.description}</p>
          {product.tags?.length > 0 ? (
            <div className={styles.tags}>
              {product.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          ) : null}
          <AddToCartButton product={product} />
          {product.reviews?.length > 0 ? (
            <section className={styles.reviews}>
              <h2 className={styles.h2}>Reviews</h2>
              <ul className={styles.reviewList}>
                {product.reviews.map((r) => (
                  <li key={r.id} className={styles.reviewItem}>
                    <div className={styles.reviewTop}>
                      <strong>{r.username}</strong>
                      <span>⭐ {r.rating}</span>
                    </div>
                    <p className={styles.reviewText}>{r.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}