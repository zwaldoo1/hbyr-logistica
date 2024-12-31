import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion";
  
  const ContactFAQ = () => {
    const faqs = [
      {
        question: "¿Cuál es el tiempo de respuesta típico?",
        answer: "Normalmente respondemos a todas las consultas dentro de 24-48 horas hábiles. Para casos urgentes, recomendamos contactarnos por teléfono."
      },
      {
        question: "¿Trabajan con clientes internacionales?",
        answer: "Sí, trabajamos con clientes de todo el mundo. Utilizamos herramientas de comunicación digital para mantener una colaboración efectiva sin importar la ubicación."
      },
      {
        question: "¿Cómo se inicia un proyecto con ustedes?",
        answer: "El proceso comienza con una consulta inicial a través de este formulario o por teléfono. Luego, programamos una reunión para discutir los detalles del proyecto y crear una propuesta personalizada."
      },
      {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Aceptamos transferencias bancarias, tarjetas de crédito y débito principales, y PayPal. Para proyectos grandes, ofrecemos planes de pago flexibles."
      },
      {
        question: "¿Ofrecen servicios de mantenimiento post-proyecto?",
        answer: "Sí, ofrecemos varios planes de mantenimiento y soporte continuo para asegurar que tu proyecto siga funcionando de manera óptima después del lanzamiento."
      }
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
              <p className="text-gray-600">
                Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y proceso de trabajo.
              </p>
            </div>
  
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactFAQ;