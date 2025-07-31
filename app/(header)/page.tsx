"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import {perfumeCatalog, Product } from "@/consts";
import ProductCard from "../ui/Product";
import { useEffect, useState } from "react";
import AboutUs from "../ui/AboutUs";
import { useRouter } from 'next/navigation';


const brands = [
  { name: 'Yves Saint Laurent', image: '/home/brands/YVES.webp' },
  { name: 'Armaf', image: '/home/brands/armaf.webp' },
  { name: 'Hawas', image: '/home/brands/hawas.webp' },
  { name: 'Valentino', image: '/home/brands/valentino.png' },
];


export default function Home() {

  const message = encodeURIComponent('¡Buenos dias! Me gustaría recibir más información sobre los perfumes.');
  const whatsAppURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;

const [index, setIndex] = useState(0);
const [isMobile, setIsMobile] = useState(false);

const next = () => setIndex((index + 1) % brands.length);
const prev = () => setIndex((index - 1 + brands.length) % brands.length);

const visibleBrands = isMobile ? [brands[index]] : brands;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1000)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])



    const router = useRouter();


  return (
    <>
    
    <div className={styles['landing-page']}>

      <div className={styles['hero-container']}>
<div className={styles['hero-texts']}>
  <span>#tenemosloquebuscas</span>
  <h1>
    PERFUMERIA
    <br/>
    ESENCIAS
    <br/>
    GALLO
  </h1>
  <h3>
    ENVIOS A TODO EL PAIS - PRECIOS PARA TÚ NEGOCIO
  </h3>
  <Image onClick={()=>{
    
    router.push('/catalogo'); 


  }} src="/layout/gallo.png" alt="Logotipo" width={150} height={150}  />



</div>

{/* 
<div className="overlay">

</div> */}

        {/* <div className={styles['hero-image']}>
          <Image src="/home/header2.png" alt="Hero" width={400} height={400} style={{width:"100%",height:'auto'}} />
        </div> */}
      </div>




      <div className={styles['landing-products']}>
        <div className={styles['landing-products-title']}>
          <h3>Nuestros mejores productos</h3>
        </div>
        <div className={styles['landing-products-container']}>
          {perfumeCatalog && perfumeCatalog.map((product:Product,index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>



    <section className="review-section">
      <div className="review-background">
        <Image
          src="/layout/background2.jpg"
          alt="Fondo de perfumes"
          fill
          priority
          className="review-bg-image"
        />
      </div>

      <div className="review-overlay">
        <h2 className="review-title">Nuestras marcas</h2>

        <div className="review-carousel">
          <button className="review-arrow mobile-only" onClick={prev}>◀</button>

<div className="review-cards-wrapper">
  {visibleBrands.map((brand, i) => (
    <div 
    
    onClick={() => router.push(`/catalogo?busqueda=${encodeURIComponent(brand.name)}`)}
    key={i} className="review-card brand-card">
      <Image
        src={brand.image}
        alt={brand.name}
        width={150}
        height={150}
        className="brand-logo"
      />
    </div>
  ))}
</div>


          <button className="review-arrow mobile-only" onClick={next}>▶</button>
        </div>
      </div>
    </section>



            <AboutUs></AboutUs>


        <section className="wa-invite-section">
      <div className="wa-invite-text">
        <h2>¿Tienes dudas o quieres hacer un pedido?</h2>
        <p>Escríbenos directamente por WhatsApp, ¡estamos para ayudarte!</p>
      </div>

      <a href={whatsAppURL} target="_blank" rel="noopener noreferrer" className="wa-invite-button">
        Ir a WhatsApp
      </a>
    </section>




    </div>
    
    </>
  );
}
