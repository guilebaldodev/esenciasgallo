import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./css/header.module.css"; 

const MobileMenu = ({ onClose }) => {
  const message = encodeURIComponent(
    "¡Hola! Me gustaría recibir más información sobre sus servicios."
  );
  const whatsAppURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;

  return (
    <div className={`${style["mobile-menu"]} ${style["slide-enter"]}`}>
      <div className={style["menu-header"]}>
        <div className={style["menu-header-left"]}>
          <Image
            src="/layout/icon.png"
            alt="justice icon"
            width={40}
            height={40}
          />
          <p className={style["menu-title"]}>Flores MX</p>
        </div>
        <Image
          className={style["menu-close-icon"]}
          src="/layout/x.png"
          width={25}
          height={25}
          alt="Cerrar menú"
          onClick={onClose}
        />
      </div>

      <div className={style["menu-options"]}>
        <div className={style["menu-item"]}>
          <Link href="/catalogo" onClick={onClose}>
            Catalogo de productos
          </Link>
        </div>

        <div className={style["menu-item"]}>
          <Link href="/contacto" onClick={onClose}>
            Contacto
          </Link>
        </div>
      </div>

      <Link
        href={whatsAppURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatea con nosotros en WhatsApp"
        className={style["whatsapp-div"]}
      >
        <img src="/layout/green-whatsapp.png" alt="WhatsApp logo" />
        <p>Habla con nosotros</p>
      </Link>
    </div>
  );
};

export default MobileMenu;
