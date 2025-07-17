"use client";


import styles from "./product.module.css";
import Gallery from "@/app/ui/SwiperGallery";
import { useParams } from "next/navigation";
import { flowerCatalog } from "@/consts";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import { toast } from "react-toastify";

const formatPrice = (price: number | undefined) => {
  if (price) return price.toLocaleString("en-US", { minimumFractionDigits: 0 });
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const addToCart = useCartStore((state) => state.addToCart);
  const [loading, setLoading] = useState(false);

  const product = flowerCatalog.find((product) => product.id == parseInt(id));
  

  if (!product) return <>....Error</>;

  const message = 
`Hola, quiero comprar este producto:
*${product.titulo}*
${product.categoria}
Precio: $${formatPrice(product.precio)}
${process.env.NEXT_PUBLIC_URL}/catalogo/${product.id}`;

  const whatsappUrl = `https://wa.me/${
    process.env.NEXT_PUBLIC_PHONE_NUMBER
  }?text=${encodeURIComponent(message)}`;


  

  function getDiscountInfo(actual: number, previous?: number) {
    if (!previous || actual >= previous) return null;

    const ahorro = previous - actual;
    const porcentaje = Math.round((ahorro / previous) * 100);

    return {
      ahorro: ahorro.toLocaleString("en-US"),
      porcentaje,
    };
  }

  const discount = product
    ? getDiscountInfo(product.precio, product.anterior)
    : null;

  return (
    <>
      <div className={styles["product-detail-container"]}>
        <div className={styles["product-detail"]}>
          <div className={styles["product-detail-img"]}>
            <Gallery images={product.img}></Gallery>
          </div>

          <div className={styles["product-detail-info"]}>
            <h2>{product.titulo}</h2>

            <div className={styles["product-prices-info"]}>
              <div className={styles["product-main-prices"]}>
                <p className={styles["price-discount"]}>
                  ${formatPrice(product.precio)}
                </p>
                {product.anterior && (
                  <p className={styles["p-discount"]}>
                    ${formatPrice(product.anterior)}
                  </p>
                )}
              </div>

              {product?.anterior && (
                <div className={styles["div-discount"]}>
                  Ahorras {discount?.ahorro} (%{discount?.porcentaje})
                </div>
              )}
            </div>

            <div className={styles["product-detail-buttons"]}>
              <div className={`${styles["product-detail-button"]}`}>
                <div
                  onClick={() => {

                    if(loading) return;

                    setLoading(true);
                    setTimeout(() => {
                      addToCart(product);
                      setLoading(false);
                    }, 1000);
                    toast.success("Producto añadido al carrito");
                  }}
                  className={`${styles["product-button-content"]}`}
                >
                  {loading ? (
                    <>
                      <div className={"lds-dual-ring"}></div>
                    </>
                  ) : (
                    <>
                      <p>Añadir al carrito</p>
                    </>
                  )}
                </div>
              </div>

              <div
                className={`${styles["product-button-whatsapp"]} ${styles["product-detail-button"]}`}
              >
                <div onClick={()=>{
                  window.open(whatsappUrl, "_blank");
                }} className={styles["product-button-content"]}>
                  <img src="/layout/whatsapp-icon.png" alt="" />
                  <p>Ordenar ahora</p>
                </div>
              </div>
            </div>

            <div
              className={styles["product-details-detail"]}
              dangerouslySetInnerHTML={{ __html: product.descripcion }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
