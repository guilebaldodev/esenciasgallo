import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import React from "react";
import styles from "./css/cart.module.css";

const Cart = ({ onClose }) => {
  const formatPrice = (price) => {
    return price.toLocaleString("en-US", { minimumFractionDigits: 0 });
  };

  const sendItems = () => {
    if (cartItems.length === 0) return;

    const lineas = cartItems.map(
      (item) =>
        `${item.titulo}\nCantidad: ${
          item.cantidad
        }\nPrecio unitario: $${formatPrice(
          item.precio
        )}\nSubtotal: $${formatPrice(item.precio * item.cantidad)}\n`
    );

    const totalLine = `\n*TOTAL: $${formatPrice(total)}*`; 

    const mensaje = encodeURIComponent(
      `Hola, quiero comprar los siguientes productos:\n\n${lineas.join(
        "\n"
      )}${totalLine}`
    );

    const url = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${mensaje}`; 
    window.open(url, "_blank");
  };

  const cartItems = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = useCartStore((state) => state.getTotal());

  return (
    <>
      <div className={styles["cart-overlay"]}>
        <div className={`${styles["cart-content"]} ${styles["slide-enter"]}`}>
          <div className={styles["cart-header"]}>
            <h4>Carrito de compras</h4>
            <Image
              src="/layout/x.png"
              width={23}
              height={23}
              alt="Cerrar menú"
              onClick={onClose}
            />
          </div>

          <div className={styles["cart-items"]}>
            {cartItems.map((product, index) => (
              <div key={index} className={styles["cart-item"]}>
                <div className={styles["cart-item-info"]}>
                  <Image
                    src={product.img[0]}
                    width={80}
                    height={80}
                    alt="product"
                  />

                  <div className={styles["cart-item-right"]}>
                    <div className={styles["cart-item-details"]}>
                      <p>Toro Mecanico</p>
                      <h5>{product.titulo}</h5>
                      <span>${formatPrice(product.precio)}</span>
                    </div>

                    <Image
                      onClick={() => {
                        removeFromCart(product.id);
                      }}
                      className={styles["delete-icon"]}
                      src={"/layout/delete-icon.png"}
                      width={30}
                      height={30}
                      alt="icono de eliminar"
                    />
                  </div>
                </div>

                <div className={styles["cart-item-actions"]}>
                  <div className={styles["cart-item-quantity"]}>
                    <button
                      onClick={() => {
                        updateQuantity(product.id, -1);
                      }}
                    >
                      -
                    </button>
                    <button>{product.cantidad}</button>
                    <button
                      onClick={() => {
                        updateQuantity(product.id, 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles["cart-footer"]}>
            <div className={styles["cart-footer-total"]}>
              <span>Total</span>
              <span>${formatPrice(total)}</span>
            </div>

            <p>Serás redirigido a WhatsApp para concluir la compra</p>

            <button onClick={sendItems}>
              <Image
                src={"/layout/whatsapp-icon.png"}
                width={25}
                height={25}
                alt="whatsapp enlace"
              />
              <span>Finalizar Compra</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
