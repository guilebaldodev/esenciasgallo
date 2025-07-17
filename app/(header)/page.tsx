"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { bullCatalog, flowerCatalog, Product } from "@/consts";
import ProductCard from "../ui/Product";

export default function Home() {

  const message = encodeURIComponent('¡Buenos dias! Me gustaría recibir más información sobre las flores.');
  const whatsAppURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;



  return (
    <>
    
    <div className={styles['landing-page']}>

      <div className={styles['hero-container']}>
<div className={styles['hero-texts']}>
  <h1>
    Sorprende con un <span className={styles['primary-color']}>Arreglo Floral Único</span>
  </h1>
  <h3>
    En Flores MX creamos ramos y arreglos para cada ocasión: cumpleaños, aniversarios, detalles románticos o simplemente para alegrar el día. Entrega rápida y flores siempre frescas.
  </h3>
  <Link href="/catalogo">Productos</Link>
</div>

        <div className={styles['hero-image']}>
          <Image src="/home/header2.png" alt="Hero" width={400} height={400} style={{width:"100%",height:'auto'}} />
        </div>
      </div>

<div className={styles['category-container']}>

  <div className={styles['category-item']}>
    <Image src="/home/ramo.png" alt="Ramos de flores" width={40} height={40} />
    <p>Ramos</p>
  </div>

  <div className={styles['category-item']}>
    <Image src="/home/florero.png" alt="Arreglos florales" width={40} height={40} />
    <p>Floreros</p>
  </div>

  <div className={styles['category-item']}>
    <Image src="/home/globo.png" alt="Rosas" width={40} height={40} />
    <p>Globos</p>
  </div>

  <div className={styles['category-item']}>
    <Image src="/home/caja.png" alt="Cajas de regalo" width={40} height={40} />
    <p>Cajas de Regalo</p>
  </div>

</div>


      <div className={styles['landing-products']}>
        <div className={styles['landing-products-title']}>
          <h3>Nuestros mejores productos</h3>
        </div>
        <div className={styles['landing-products-container']}>
          {flowerCatalog && flowerCatalog.map((product:Product,index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>


<div className={styles['about-us-testimonials']}>
  <div className={styles['about-us-titles']}>
    <h3>Testimonios</h3>
    <h4>Conoce la experiencia de quienes han confiado en nuestros arreglos florales</h4>
  </div>
</div>

<div className={styles['about-testimonial-grid']}>

  <div className={styles['testimonial']}>
    <div className={styles['about-testimonial']}>
      <div className={styles['testimonial-circle']}>
        <Image 
          src="/bussines/person3.jpg" 
          alt="Imagen de usuario José Hernández" 
          width={50} 
          height={50} 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "100%"
          }}
        />
      </div>
      <h3>José Hernández</h3>
      <h4>Cliente</h4>
      <p>
        <q>El ramo que pedí superó mis expectativas. Lo entregaron justo a tiempo y con flores frescas y hermosas.</q>
      </p>
    </div>
    <div className={styles['testimonial-footer']}>
      <p><strong>Diciembre 2024</strong></p>
      <p>13:05 pm</p>
    </div>
  </div>

  <div className={styles['testimonial']}>
    <div className={styles['about-testimonial']}>
      <div className={styles['testimonial-circle']}>
        <Image 
          src="/bussines/person.jpg" 
          alt="Imagen de usuario Lucía Ramírez" 
          width={50} 
          height={50} 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "100%"
          }}
        />
      </div>
      <h3>Lucía Ramírez</h3>
      <h4>Cliente</h4>
      <p>
        <q>Encargué un arreglo personalizado para el aniversario de mis padres y quedó precioso. ¡Gracias por hacerlo tan especial!</q>
      </p>
    </div>
    <div className={styles['testimonial-footer']}>
      <p><strong>Marzo 2024</strong></p>
      <p>09:30 am</p>
    </div>
  </div>

  <div className={styles['testimonial']}>
    <div className={styles['about-testimonial']}>
      <div className={styles['testimonial-circle']}>
        <Image 
          src="/bussines/person2.webp" 
          alt="Imagen de usuario Raúl García" 
          width={50} 
          height={50} 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "100%"
          }}
        />
      </div>
      <h3>Raúl García</h3>
      <h4>Cliente</h4>
      <p>
        <q>Compré una caja de rosas con chocolates para sorprender a mi novia y le encantó. Todo llegó en perfecto estado.</q>
      </p>
    </div>
    <div className={styles['testimonial-footer']}>
      <p><strong>Abril 2024</strong></p>
      <p>14:45 pm</p>
    </div>
  </div>

</div>


 
<div className={styles['fill-banner']}>
  <h3>
    Arreglos <span className={styles['primary-color']}>Personalizados</span>
  </h3>
  <p>
    Crea momentos únicos con nuestros arreglos florales hechos a medida. Elige las flores, el estilo y la ocasión,
    y nosotros nos encargamos del resto. Atención directa por WhatsApp para que tu pedido sea perfecto.
  </p>

  <a 
    href={whatsAppURL}
    target="_blank" 
    rel="noopener noreferrer"
  >
    ¡Haz tu pedido por WhatsApp!
  </a>
</div>



    </div>
    
    </>
  );
}
