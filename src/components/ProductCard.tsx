import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import styles from "./ProductCard.module.css";


function discountPercent(price: number, discountedPrice: number) {
    if (discountedPrice >= price) return null;
    const percent = Math.round(((price - discountedPrice) / price) * 100);
    return percent > 0 ? percent : null;
}

export default function ProductCard({ product }: { product: Product }) {
    const percent = discountPercent(product.price, product.discountedPrice);

    return (
        <Link href={`/product/${product.id}`} className={styles.card}>
        <div className={styles.imageWrap}>
            {percent !== null && <span className={styles.badge}>-{percent}%</span>}
            <Image src={product.image.url} alt={product.image.alt ?? product.title} fill className={styles.image} sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className={styles.body}>
            <h3 className={styles.title}>{product.title}</h3>

            <div className={styles.priceRow}>
            {product.discountedPrice < product.price ? (
                <>
                <span className={styles.discounted}>{product.discountedPrice} kr</span>
                <span className={styles.original}>{product.price} kr</span>
                </>
            ) : (
                <span className={styles.normal}>{product.price} kr</span>
            )}
            </div>
            <div className={styles.meta}>
            <span>⭐ {product.rating.toFixed(1)}</span>
            </div>
        </div>
        </Link>
    );
}