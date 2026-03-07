import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.discountedPrice < product.price;
  const unitPrice = hasDiscount ? product.discountedPrice : product.price;
  const discountPercent = hasDiscount ? Math.round(((product.price - product.discountedPrice) / product.price) * 100) : 0;

  return (
    <article className={styles.card}>
      <Link href={`/product/${product.id}`} className={styles.media}>
        <div className={styles.imageWrap}>
          <Image src={product.image.url} alt={product.image.alt ?? product.title} fill className={styles.image} sizes="(max-width: 600px) 100vw, 33vw" />
        </div>
        {hasDiscount && <div className={styles.badge}>-{discountPercent}%</div>}
      </Link>

      <div className={styles.body}>
        <Link href={`/product/${product.id}`} className={styles.title}>{product.title}</Link>

        <div className={styles.row}>
          <div className={styles.price}>
            {hasDiscount && <span className={styles.original}>{product.price} kr</span>}
            <span className={styles.current}>{unitPrice} kr</span>
          </div>

          <div className={styles.rating}>⭐ {product.rating.toFixed(1)}</div>
        </div>
      </div>
    </article>
  );
}