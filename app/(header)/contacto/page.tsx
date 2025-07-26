import Image from 'next/image';
import style from './contacto.module.css';
import ContactForm from '@/app/ui/ContactForm';

const Contacto = () => {
    return (
        <>
            <div className={style['contact-page-container']}>
                <div className={style['contact-titles']}>
                    <h2>Contáctanos</h2>
                    <p>¿Tienes dudas o quieres hacer un pedido especial? Escríbenos, estamos para ayudarte.</p>
                </div>

                <div className={style['contact-info']}>
                    <div className={style['contact-text']}>

                        <div className={style["contact-text-subtitle"]}>
                            <h4>Esencias Gallo</h4>
                            <p>
                                Aromas que enamoran. Si tienes preguntas sobre nuestros perfumes, promociones o envíos, no dudes en escribirnos. ¡Respondemos en menos de 24 horas!
                            </p>
                        </div>

                        <div className={style['contact-text-items']}>
                            <div className={style['contact-text-item']}>
                                <Image src="/layout/time.png" alt="Horario" width={26} height={26} />
                                <p>
                                    Lunes a sábado de 9am a 6pm
                                </p>
                            </div>

                            <div className={style['contact-text-item']}>
                                <Image src="/layout/whatsapp-icon.png" alt="WhatsApp" width={26} height={26} />
                                <p>
                                    3319047961
                                </p>
                            </div>

                            <div className={style['contact-text-item']}>
                                <Image src="/layout/ubication-icon.png" alt="Ubicación" width={26} height={26} />
                                <p>
                                    México
                                </p>
                            </div>
                        </div>

                    </div>

                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default Contacto;
