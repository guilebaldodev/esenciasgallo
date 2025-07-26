import Image from "next/image";
import Link from "next/link";
import config from "@/config/config.json";




const Footer = () => {
    return ( 
    <>
      <footer className="footer">
            <div className="footer-info">
                <div className="circle-logotype">
                    <Image src="/layout/gallo.png" alt="Logotipo" width={150} height={150}  />
                </div>

                <div className="footer-section">
                    <h3>Esencias Gallo</h3>
                    <ul>
                        <li>
                            <Link href="/catalogo">Catalogo</Link>
                        </li>
                        <li>
                            <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Redes sociales</h3>
                    <ul>
                        <li>
                            <Image src="/layout/facebook-icon.png" alt="Facebook" width={22} height={22} />
                            <Link target="_blank" href="https://www.facebook.com/esencias.gallo">Esencias Gallo</Link>
                        </li>
                        <li>
                            <Image src="/layout/instagram-icon.png" alt="Instagram" width={22} height={22} />
                            <Link target="_blank" href="https://www.instagram.com/esenciasgallo?igsh=MTF6Mmw3ZXkyZzV1bw%3D%3D&utm_source=qr">Esencias Gallo</Link>
                        </li>
                        <li>
                            <Image src="/layout/whatsapp-icon.png" alt="WhatsApp" width={22} height={22} />
                            <Link href="">{config.contactPhone}</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contáctanos en</h3>
                    <ul>
                        <li>
                            <Image src="/layout/email-icon.png" alt="Email" width={22} height={22} />
                            <p>esenciasgallo@gmail.com</p>
                        </li>
                        <li>
                            <Image src="/layout/phone-icon.png" alt="Teléfono" width={22} height={22} />
                            <p>{config.contactPhone}</p>
                        </li>
                        <li>
                            <Image src="/layout/ubication-icon.png" alt="Ubicación" width={22} height={22} />
                            <p>
                            Mexico.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-developer">
                
<p>
  Copyright Esencias Gallo - 2025. Todos los derechos reservados.
</p>

            
                <p><Link style={{textDecoration:"underline"}} href={"https://portfolio-flame-nu-34.vercel.app/"}>Contacta al programador</Link></p>
            </div>
        </footer>  
    </> );
}
 
export default Footer;