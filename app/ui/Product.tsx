"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import styles from "./css/productcard.module.css";
import { Product } from "@/consts";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const formatPrice = (price: number) => {
  return price.toLocaleString("en-US", { minimumFractionDigits: 0 });
};

type ProductCardsProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardsProps) => {
  const message = 
`Hola, quiero comprar este producto:
*${product.titulo}*
${product.categoria}
Precio: $${formatPrice(product.precio)}
${process.env.NEXT_PUBLIC_URL}/catalogo/${product.id}`;

  const whatsappUrl = `https://wa.me/${
    process.env.NEXT_PUBLIC_PHONE_NUMBER
  }?text=${encodeURIComponent(message)}`;

  const addToCart = useCartStore((state) => state.addToCart);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className={styles["product-card"]}>
        <Link href={`catalogo/${product.id}`}  >
          <div className={styles["product-img-container"]}>
            <Image
              src={product.img[0]}
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                minHeight: "100%",
                aspectRatio:"1",
                objectFit: "cover",
              }}
              alt={product.titulo}
            />
          </div>

          <div className={styles["product-card-info"]}>
            <div className="product-card-details">
              <h3>{product.titulo}</h3>
              <p>{product.categoria}</p>

              <div className={styles["product-card-prices"]}>
                <p className={styles["discount-price"]}>
                  ${formatPrice(product.precio)}
                </p>
                {product.anterior && (
                  <p
                    className={`${styles["normal-price"]} ${styles["discount"]}`}
                  >
                    ${formatPrice(product.anterior)}
                  </p>
                )}
              </div>
            </div>
            <div className={styles["card-buttons"]}>
              <button
                disabled={loading}
                onClick={(e) => {
                  e.preventDefault();
                  setLoading(true);
                  setTimeout(() => {
                    addToCart(product);
                    setLoading(false);
                  }, 500);

                  toast.success("Producto añadido al carrito")

                }}
              >
               {loading ? <div className="mini-spinner"></div> : "Agregar al carrito"}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.open(whatsappUrl, "_blank");
                }}
                className={styles["whatsapp"]}
              >
                <img src="/layout/whatsapp-icon.png" alt="whatsapp" />
                Comprar ahora
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
