'use client'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-left">
        <h2 className="about-title">
          <span>Sobre</span> Nosotros
        </h2>

        <h3 className="about-subtitle">Nuestra Historia</h3>
        <p className="about-paragraph">
          En Esencias Gallo, convertimos aromas en emociones. Nuestro compromiso es ofrecer perfumes auténticos, que representen estilo, personalidad y elegancia. Cada fragancia nace de una pasión por lo artesanal y lo original.
        </p>

        <h3 className="about-subtitle">Nuestros Valores</h3>
        <p className="about-paragraph">
          Creemos en la autenticidad, la calidad y la atención cercana. Cada esencia representa nuestra dedicación al detalle y al bienestar de nuestros clientes. Queremos que cada aroma cuente tu historia.
        </p>

        <a href="/catalogo" className="about-button">Ver catálogo</a>
      </div>

      <div className="about-right">
        <div className="about-image-bg">
          <Image
            src="/layout/perfum-example.png"
            alt="Perfume Esencias Gallo"
            width={400}
            height={400}
            className="about-product"
          />
        </div>
      </div>
    </section>
  )
}
