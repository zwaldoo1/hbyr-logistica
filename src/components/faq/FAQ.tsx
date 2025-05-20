import Button from "../ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuáles son los tiempos de entrega de sus servicios logísticos?",
      answer:
        "Los tiempos de entrega dependen del tipo de servicio y destino. Para envíos nacionales estándar, el tiempo estimado es de 24 a 72 horas. Para envíos internacionales, puede variar entre 5 a 10 días hábiles.",
    },
    {
 question: "¿Qué medidas de seguridad utilizan para proteger la carga?",
  answer:
    "Implementamos estrictos protocolos de seguridad que incluyen monitoreo GPS, sellos de seguridad, control de acceso y personal capacitado para garantizar la integridad de cada envío durante todo el trayecto.",
    },
    {
      question: "¿Puedo solicitar servicios personalizados de logística?",
      answer:
        "Claro que sí. Ofrecemos soluciones logísticas personalizadas que se adaptan a las necesidades específicas de tu empresa, incluyendo almacenaje, distribución y transporte especializado.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground">
            Encuentra respuestas rápidas a las dudas más comunes sobre nuestros servicios logísticos.
          </p>
        </div>
        <div className="glass-card p-6 md:p-8 rounded-lg mb-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center animate-fade-up">
          <p className="mb-6 text-lg">
            ¿Tienes más preguntas? Estamos aquí para ayudarte.
          </p>
          <Button size="lg" className="group">
            <MessageCircle className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Contáctanos ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
