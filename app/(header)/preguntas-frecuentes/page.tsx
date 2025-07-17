import AccordionItem from "@/app/ui/AccordionItem";

const faqData = [
  {
    question: '¿Cómo puedo hacer un pedido en Flores MX?',
    answer: 'Selecciona el arreglo o ramo que más te guste y haz clic en "Haz tu pedido". Serás redirigido a un chat de WhatsApp donde coordinaremos los detalles de entrega y pago.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos pagos mediante transferencia bancaria, tarjetas de débito/crédito y depósitos en OXXO. Durante el proceso por WhatsApp podrás elegir tu método preferido.',
  },
  {
    question: '¿Realizan entregas a domicilio?',
    answer: 'Sí, realizamos entregas en toda la ciudad y zonas cercanas. Consulta con nosotros por WhatsApp para verificar la cobertura en tu zona.',
  },
  {
    question: '¿Con cuánta anticipación debo hacer mi pedido?',
    answer: 'Recomendamos hacer tu pedido con al menos 24 horas de anticipación para garantizar disponibilidad y puntualidad en la entrega.',
  },
  {
    question: '¿Puedo personalizar mi arreglo floral?',
    answer: '¡Claro! Puedes elegir colores, flores preferidas, incluir tarjetas personalizadas o chocolates. Escríbenos por WhatsApp y te ayudamos a crear algo especial.',
  },
  {
    question: '¿Tienen servicio para eventos especiales?',
    answer: 'Sí, realizamos arreglos para bodas, cumpleaños, aniversarios, graduaciones y más. Contáctanos para cotizar según tus necesidades.',
  },
  {
    question: '¿Qué pasa si no estoy en casa cuando llega el pedido?',
    answer: 'Te contactaremos antes de la entrega. Si no estás, podemos dejarlo con alguien de confianza o reagendar la entrega con un costo adicional.',
  },
  {
    question: '¿Las flores son naturales?',
    answer: 'Sí, todos nuestros arreglos se elaboran con flores naturales frescas seleccionadas especialmente para cada ocasión.',
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
