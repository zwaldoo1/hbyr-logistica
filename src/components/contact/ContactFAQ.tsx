import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ContactFAQ = () => {
  const faqs = [
    {
      question: "¿Cuál es el tiempo de respuesta a solicitudes logísticas?",
      answer:
        "En HBYR respondemos a todas las solicitudes dentro de un plazo de 24 a 48 horas hábiles. Para situaciones críticas operativas, contamos con atención prioritaria vía telefónica.",
    },
    {
      question: "¿HBYR trabaja con empresas fuera de Chile?",
      answer:
        "Sí. Atendemos empresas a nivel nacional e internacional. Gracias a nuestras plataformas digitales, mantenemos una comunicación fluida con clientes en cualquier parte del mundo.",
    },
    {
      question: "¿Cómo se inicia una colaboración con HBYR?",
      answer:
        "Todo comienza con una reunión de diagnóstico. Puedes contactarnos a través del formulario o directamente por teléfono. Evaluamos tu operación logística y generamos una propuesta personalizada sin costo.",
    },
    {
      question: "¿Qué métodos de pago aceptan por sus servicios logísticos?",
      answer:
        "Aceptamos transferencias bancarias, tarjetas de crédito y débito, además de opciones de facturación electrónica. Para proyectos de gran envergadura, ofrecemos planes de pago escalonados.",
    },
    {
      question: "¿Brindan soporte continuo después de implementar la solución?",
      answer:
        "Sí. Ofrecemos soporte técnico y planes de mantenimiento para asegurar que nuestros sistemas y procesos sigan funcionando de forma óptima, con disponibilidad 24/7 si el servicio lo requiere.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios logísticos y procesos.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
