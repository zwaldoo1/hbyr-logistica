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
      question: "¿Cuáles son los tiempos de entrega de sus servicios?",
      answer:
        "Nuestros tiempos de entrega varían según el servicio. Por ejemplo, un diseño gráfico básico puede tomar de 3 a 5 días hábiles, mientras que un sitio web completo puede demorar de 4 a 6 semanas.",
    },
    {
      question: "¿Cómo trabajan con sus clientes?",
      answer:
        "Nuestro proceso incluye reuniones iniciales para entender tus necesidades, presentación de propuestas personalizadas, desarrollo iterativo, y retroalimentación continua hasta la entrega final.",
    },
    {
      question: "¿Puedo personalizar los servicios que ofrecen?",
      answer:
        "¡Por supuesto! Adaptamos nuestras soluciones a tus objetivos. Puedes combinar servicios o solicitar características específicas según tus necesidades.",
    },
  ];
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground">
            Encuentra respuestas rápidas a las dudas más comunes sobre nuestros servicios.
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