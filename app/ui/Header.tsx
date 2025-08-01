"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/app/ui/MobileNav";
import { useEffect, useState } from "react";
import styles from "./css/header.module.css";
import Cart from "@/app/ui/Cart";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();


  const total=useCartStore((state)=>state.getTotalItems())

  useEffect(() => {
    if (cartIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartIsOpen]);

  const handleSearch = () => {
    router.push(`/catalogo?busqueda=${encodeURIComponent(search)}`);
  };

  return (
<>
  {menu && (
    <MobileNav
      onClose={() => {
        setMenu(false);
      }}
    />
  )}

  {cartIsOpen && (
    <Cart
      onClose={() => {
        setCartIsOpen(false);
      }}
    ></Cart>
  )}

  <div className={styles["header"]}>
    <div
      onClick={() => {
        setMenu(true);
      }}
      className={styles["header-mobile-options"]}
    >
      <Image
        src={"/layout/burger-menu.png"}
        alt="menu"
        height={35}
        width={35}
      />
    </div>

    <div className={styles["header-title"]}>
      <Image src={"/layout/icon.png"} width={45} height={45} alt="logo" />
      <h3>
        <Link href={"/"}>Esencias Gallo</Link>
      </h3>
    </div>

    <nav className={styles["nav-header"]}>
      <Link href={`/catalogo?busqueda=`}>Catalogo de productos</Link>
      <Link href={"/contacto"}>Contacto</Link>
    </nav>

    <div className={styles["header-icons"]}>
      <div className={styles["header-input"]}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          placeholder="Buscar productos..."
          type="text"
        />
        <button onClick={handleSearch}>
          <Image
            alt="Icono de buscar"
            src={"/home/search-icon.png"}
            width={20}
            height={20}
          />
        </button>
      </div>

      {/* <div onClick={()=>router.push("/panel-de-control/estadisticas")} className={styles["header-icon"]}>
        <Image
          src={"/layout/user-icon.png"}
          width={32}
          height={32}
          alt="Perfil"
        />
      </div> */}
      <div className={styles["header-icon"]}>
        <Image
          onClick={() => {
            setCartIsOpen(true);
          }}
          src={"/layout/cart.png"}
          width={30}
          height={30}
          alt="Carrito de compras"
        />
        <div className={styles["cart-number"]}>
          <p>{total}</p>
        </div>
      </div>
    </div>
  </div>

  <nav className={styles["nav"]}>
    <div className={styles["header-input"]}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        placeholder="Buscar productos..."
        type="text"
      />
      <button onClick={handleSearch}>
        <Image
          alt="Icono de buscar"
          src={"/home/search-icon.png"}
          width={20}
          height={20}
        />
      </button>
    </div>

    <ul className={styles["second-nav"]}>
      <li>
        <Link href={`/catalogo?busqueda=`}>Catalogo de productos</Link>
      </li>
      <li>
        <Link href={"/contacto"}>Contacto</Link>
      </li>
    </ul>

    <ul className={styles["nav-links"]}>
      <li>
        <Image
          alt="Facebook"
          src="/layout/facebook-icon.png"
          width={25}
          height={25}
        />
        <Link href={`/catalogo?busqueda=`}>Facebook</Link>
      </li>
      <li>
        <Image
          alt="Instagram"
          src="/layout/instagram-icon.png"
          width={25}
          height={25}
        />
        <Link href={"/contacto"}>Instagram</Link>
      </li>
    </ul>

    <div className={styles["nav-info"]}>
      <div className={styles["nav-info-item"]}>
        <Image
          src={"/layout/perfum.png"}
          width={32}
          height={32}
          alt="Pr"
        />
        <div>
          <h4>Perfumes</h4>
          <p>100% originales</p>
        </div>
      </div>

      <div className={styles["nav-info-item"]}>
        <Image
          src={"/layout/mexico.png"}
          width={35}
          height={35}
          alt="México"
        />
        <div>
          <h4>Envíos</h4>
          <p>A todo México</p>
        </div>
      </div>
    </div>
  </nav>
</>

  );
};

export default Header;
