"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from './page.module.css';
import { toast } from "react-toastify";

type FormData = {
  nombre: string;
  apellidos: string;
  correo: string;
  telefono: string;
  mensaje: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactPage = () => {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!form.apellidos.trim()) newErrors.apellidos = "Los apellidos son obligatorios.";
    if (!form.correo.trim()) {
      newErrors.correo = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      newErrors.correo = "Ingresa un correo válido.";
    }
    if (!form.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d+$/.test(form.telefono)) {
      newErrors.telefono = "Ingresa solo números.";
    }
    if (!form.mensaje.trim()) newErrors.mensaje = "Este campo es obligatorio.";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    setErrors({});

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Mensaje enviado correctamente");
      setForm({
        nombre: "",
        apellidos: "",
        correo: "",
        telefono: "",
        mensaje: "",
      });
    } else {
      toast.error("Hubo un error al enviar el mensaje");
    }

    setLoading(false);
  };

  return (
    <div className={styles['contact-container']}>
      <div className={styles['contact-banner']}>
        <h2>Contacto</h2>
      </div>

      <div className={styles['contact-info']}>
        <form className={styles['contact-form']} onSubmit={handleSubmit}>
          <h3 className={styles['contact-subtitle']}>Estamos a tus órdenes</h3>

          <div className={styles['contact-buttons']}>
            <button type="button" className={styles['green']}>
              <Image src="/layout/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} />
              {process.env.NEXT_PUBLIC_PHONE_NUMBER}
            </button>
            <button type="button" className={styles['red']}>
              <Image src="/layout/phone-icon2.png" alt="Teléfono" width={32} height={32} />
              {process.env.NEXT_PUBLIC_PHONE_NUMBER}
            </button>
          </div>

          <div className={styles['contact-us']}>
            <p>Cuentanos tus dudas o solicita información personalizada por nuestros diferentes medios de contacto</p>
          </div>

          <h3 className={styles['contact-title']}>Formulario de contacto:</h3>
          <div className={styles['contact-form-inputs']}>

            {/* Nombre */}
            <div className={styles['contact-form-input']}>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" value={form.nombre} onChange={handleChange} />
              {errors.nombre && <p className={styles["error-text"]}>{errors.nombre}</p>}
            </div>

            {/* Apellidos */}
            <div className={styles['contact-form-input']}>
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" id="apellidos" value={form.apellidos} onChange={handleChange} />
              {errors.apellidos && <p className={styles["error-text"]}>{errors.apellidos}</p>}
            </div>

            {/* Correo */}
            <div className={styles['contact-form-input']}>
              <label htmlFor="correo">Correo electrónico</label>
              <input type="email" id="correo" value={form.correo} onChange={handleChange} />
              {errors.correo && <p className={styles["error-text"]}>{errors.correo}</p>}
            </div>

            {/* Teléfono */}
            <div className={styles['contact-form-input']}>
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" id="telefono" value={form.telefono} onChange={handleChange} />
              {errors.telefono && <p className={styles["error-text"]}>{errors.telefono}</p>}
            </div>

            {/* Mensaje */}
            <div className={`${styles['contact-form-input']} ${styles['g-100']}`}>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" value={form.mensaje} onChange={handleChange}></textarea>
              {errors.mensaje && <p className={styles["error-text"]}>{errors.mensaje}</p>}
            </div>
          </div>

          <button className={styles['contact-send-button']} disabled={loading}>
            {loading ? 
            <>
            <div className={"lds-dual-ring"}></div> 
            Enviando...
            </>
            : 
            "Solicitar informes"}
          </button>
        </form>

        <div className={styles['contact-ubication']}>
          <Image
            src="/layout/maps-example.jpg"
            alt="Ubicación"
            width={300}
            height={200}
            style={{ width: "100%", height: "auto" }}
          />
          <p>
            <strong>Dirección:</strong><br />
            CDMX<br /><br />
            <strong>Correo de contacto:</strong><br />
            floresmx@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
