import AccordionItem from "@/app/ui/AccordionItem";
export const faqData = [
  {
    question: '¿Son originales?',
    answer:
      'Sí, todos nuestros perfumes son originales. Trabajamos de la mano con marcas reconocidas y distribuidores autorizados para garantizar su autenticidad.',
  },
  {
    question: '¿Cuántas piezas puedo comprar?',
    answer:
      'Puedes comprar desde 1 pieza. También brindamos precios especiales a mayoristas desde las 4 piezas.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Manejamos distintos métodos de pago para facilitar tu experiencia: tarjetas de crédito (Visa y Mastercard), tarjetas de débito, transferencias electrónicas y pagos en efectivo.',
  },
  {
    question: '¿Hacen entregas personales?',
    answer:
      'Sí, contamos con amplios puntos de entrega en la ciudad de Guadalajara, Zapopan y Tlaquepaque.',
  },
  {
    question: '¿Hacen envíos?',
    answer:
      'Sí, enviamos a toda la república mexicana. El tiempo de entrega depende de tu ubicación: de 1 a 3 días hábiles (Express) o de 2 a 7 días hábiles (Estándar). Compras a partir de $2,500 MXN tienen envío gratis. No aplica en zona extendida. Aplican restricciones.',
  },
  {
    question: 'Tengo dudas con los decants',
    answer:
      'Manejamos un amplio repertorio de fragancias totalmente originales, mililitro por mililitro. Disponibles en presentaciones de 3ml, 5ml y 10ml. (Enlace a Excel)',
  },
  {
    question: '¿Cómo es el proceso de compra?',
    answer:
      '1. Seleccionas tus productos y los añades al carrito de compra.\n2. Se genera una orden y se carga el resumen en el chat.\n3. Realizas el pago y procedemos con el envío.',
  },
  {
    question: '¿Por qué elegirnos?',
    answer:
      'En Perfumería Esencias Gallo tenemos muy presente las necesidades de nuestros clientes. Brindamos un servicio personalizado y a la medida de cada persona. Tu satisfacción es nuestra prioridad.',
  },
];


const QuestionPage = () => {
  return (
    <>
      <div className="questions-container">
        <h2>Preguntas Frecuentes</h2>
<p className="question-p">
  Esta sección de preguntas frecuentes es totalmente personalizable y está pensada para que tú, como dueño de la florería,
  puedas responder de forma anticipada las dudas más comunes de tus propios clientes.
  <br />
  <br />
  Aquí podrás agregar, editar o eliminar preguntas como: métodos de pago, tiempos de entrega, cobertura, personalización de arreglos, entre otras. 
  Esto te ahorrará tiempo y mejorará la experiencia de tus compradores.
  <br />
  <br />
  Si no sabes qué escribir, puedes usar las preguntas que ya vienen como ejemplo en esta demo. Solo ingresa a tu panel de administración y edítalas fácilmente.
</p>

        <div className="questions-list">
          <div className="accordion">
            {faqData.map((item, index) => (
              <AccordionItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
