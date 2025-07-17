import Image from 'next/image';
import styles from './page.module.css'
const  BussinesPage= () => {

    return ( 
    <>
    
    <div className={styles['about-us-container']}>
      <div className={styles['about-us-header']}>
        <div className={styles['about-us-titles']}>
          <h2>Nuestra empresa</h2>
          <h3>Conoce las características más importantes de la empresa</h3>
        </div>

        <div className={styles['about-us']}>
          <div className={styles['about-us-img']}>
            <Image 
              src="/bussines/about-us-bull.webp" 
              alt="Imagen de toro mecánico" 
              width={300} 
              height={500}
              style={{width:"100%",maxWidth:"550px",marginRight:"1rem",height:'auto'}}
            />
          </div>
          <div className={styles['about-us-texts']}>
            <div className={styles['about-us-item']}>
              <Image 
                src="/bussines/about-bussines.png" 
                alt="Icono de negocio" 
                width={50} 
                height={50} 
              />
              <div>
                <h3>Toros para Negocios Exitosos</h3>
                <p>Inicia tu propio negocio de entretenimiento con nuestros toros mecánicos, perfectos para atraer clientes y generar ganancias. Te asesoramos desde la instalación hasta la promoción.</p>
              </div>
            </div>

            <div className={styles['about-us-item']}>
              <Image 
                src="/bussines/about-config.png" 
                alt="Icono de configuración" 
                width={50} 
                height={50} 
              />
              <div>
                <h3>Accesorios Incluidos en tu Compra</h3>
                <p>Con cada compra de toro mecánico, obtienes gratis una funda protectora y un set de repuestos. Mantén tu equipo en óptimas condiciones sin gastar de más.</p>
              </div>
            </div>

            <div className={styles['about-us-item']}>
              <Image 
                src="/bussines/about-quality.png" 
                alt="Icono de calidad" 
                width={50} 
                height={50} 
              />
              <div>
                <h3>Toros Mecánicos de Precisión</h3>
                <p>Nuestros toros mecánicos están diseñados con tecnología de punta para ofrecer la mejor experiencia de manejo y control. Perfectos para cualquier tipo de evento, garantizamos seguridad y diversión.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['about-us-info']}>
        <div className={styles['about-info-titles']}>
          <h3>Qué ofrecemos</h3>
          <h4>Descripción de lo que ofrecemos</h4>
        </div>

        <div className={styles['landing-about-container']}>
          <div className={styles['landing-about-item']}>
            <div className={styles['img-container']}>
              <Image 
                src="/home/delivery.svg" 
                alt="Icono de envío" 
                width={50} 
                height={50} 
              />
            </div>
            <h3>Envío seguro y rápido</h3>
            <p>Tus toros mecánicos llegarán de manera segura y a tiempo.</p>
          </div>

          <div className={styles['landing-about-item']}>
            <div className={styles['img-container']}>
              <Image 
                src="/home/tape-icon.png" 
                alt="Icono de personalización" 
                width={50} 
                height={50} 
              />
            </div>
            <h3>Toros a tu medida</h3>
            <p>Personalización para que tu toro refleje la identidad de tu negocio.</p>
          </div>

          <div className={styles['landing-about-item']}>
            <div className={styles['img-container']}>
              <Image 
                src="/home/safety.png" 
                alt="Icono de seguridad" 
                width={50} 
                height={50} 
              />
            </div>
            <h3>Calidad asegurada</h3>
            <p>Nuestros toros están fabricados con materiales de alta calidad.</p>
          </div>

          <div className={styles['landing-about-item']}>
            <div className={styles['img-container']}>
              <Image 
                src="/home/quick.png" 
                alt="Icono de montaje rápido" 
                width={50} 
                height={50} 
              />
            </div>
            <h3>Montaje rápido y sencillo</h3>
            <p>Listo para usar en minutos, sin herramientas complicadas.</p>
          </div>
        </div>
      </div>

      <div className={styles['about-us-testimonials']}>
        <div className={styles['about-us-titles']}>
          <h2>Testimonios</h2>
          <h3>Conoce los testimonios de personas que han iniciado su emprendimiento con nosotros</h3>
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
                  height: "100% ",
                  objectFit:"cover",
                  borderRadius: "100%"
                }}
             />
            </div>
            <h3>José Hernández</h3>
            <h4>Emprendedor</h4>
            <p>
              <q>Los toros mecánicos que adquirí han sido una excelente inversión para mi negocio. Funcionan a la perfección.</q>
            </p>
          </div>

          <div className={styles['testimonial-footer']}>
            <p><strong>Diciembre 2024</strong></p>
            <p>13:05 am</p>
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
                  height: "100% ",
                  objectFit:"cover",
                  borderRadius: "100%"
                }}
          />
            </div>
            <h3>Lucía Ramírez</h3>
            <h4>Emprendedora</h4>
            <p>
              <q>Los toros mecánicos han sido una gran adición a mi negocio. Son seguros y muy divertidos para mis clientes.</q>
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
                  height: "100% ",
                  objectFit:"cover",
                  borderRadius: "100%"
                }}
              />
            </div>
            <h3>Raúl García</h3>
            <h4>Emprendedor</h4>
            <p>
              <q>Excelente calidad, los toros son robustos y muy duraderos. Totalmente recomendados para eventos grandes.</q>
            </p>
          </div>

          <div className={styles['testimonial-footer']}>
            <p><strong>Abril 2024</strong></p>
            <p>14:45 pm</p>
          </div>
        </div>
      </div>
    </div>
    </> );
}
 
export default BussinesPage;