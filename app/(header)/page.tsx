"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import {perfumeCatalog, Product } from "@/consts";
import ProductCard from "../ui/Product";
import { useEffect, useState } from "react";
import AboutUs from "../ui/AboutUs";


const reviews = [
  {
    name: 'Anita S.',
    role: 'Clienta feliz',
    rating: 5,
    text: 'Me encantó la atención y la calidad. Todo llegó en perfectas condiciones.',
    date: 'hace 2 meses',
  },
  {
    name: 'José L.',
    role: 'Comprador verificado',
    rating: 5,
    text: 'Muy buena experiencia de compra. Todo fue rápido y seguro.',
    date: 'hace 3 meses',
  },
  {
    name: 'Alan M.',
    role: 'Comprador verificado',
    rating: 5,
    text: 'La página es confiable y los productos huelen increíble. Estoy feliz con mi compra.',
    date: 'hace 4 meses',
  },
];

export default function Home() {

  const message = encodeURIComponent('¡Buenos dias! Me gustaría recibir más información sobre los perfumes.');
  const whatsAppURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;

  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1000)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const next = () => setIndex((index + 1) % reviews.length)
  const prev = () => setIndex((index - 1 + reviews.length) % reviews.length)

  const visibleReviews = isMobile ? [reviews[index]] : reviews
  

  return (
    <>
    
    <div className={styles['landing-page']}>

      <div className={styles['hero-container']}>
<div className={styles['hero-texts']}>
  <h1>
    Descubre tu <span className={styles['primary-color']}>Esencia Perfecta</span>
  </h1>
  <h3>
    En Esencias Gallo encontrarás perfumes originales para cada momento especial. Aromas únicos, atención personalizada y envíos a todo México.
  </h3>
  <Link href="/catalogo">Ver perfumes</Link>
</div>


<div className="overlay">

</div>

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
        <h2 className="review-title">Opiniones de nuestros clientes</h2>

        <div className="review-carousel">
          <button className="review-arrow mobile-only" onClick={prev}>◀</button>

          <div className="review-cards-wrapper">
            {visibleReviews.map((review, i) => (
              <div key={i} className="review-card">
                <p className="review-name">{review.name}</p>
                <p className="review-role">{review.role}</p>
                <p className="review-stars">{'★'.repeat(review.rating)}<span>/5</span></p>
                <p className="review-text">{review.text}</p>
                <p className="review-date">{review.date}</p>
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
