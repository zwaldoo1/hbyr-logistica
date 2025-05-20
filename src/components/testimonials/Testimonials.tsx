import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Button from "../ui/Button";
import { MessageCircle } from "lucide-react";

// Casos de éxito reales en contexto de logística
const caseStudies = [
  {
    title: "Optimización de rutas",
    result: "Reducción del 35% en tiempos de entrega aplicando algoritmos de ruteo inteligente.",
    icon: "🛣️",
  },
  {
    title: "Gestión de flota",
    result: "Mejoramos la eficiencia operativa en un 50% con monitoreo en tiempo real.",
    icon: "🚛",
  },
  {
    title: "Digitalización de procesos",
    result: "Automatización de órdenes y seguimiento, reduciendo errores humanos en un 80%.",
    icon: "📲",
  },
  {
    title: "Trazabilidad completa",
    result: "Implementación de tracking avanzado, aumentando la satisfacción del cliente en un 90%.",
    icon: "📦",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Casos de éxito en logística
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Resultados reales de HBYR, donde tecnología y logística se combinan para maximizar eficiencia.
          </p>
        </motion.div>

        {/* Carrusel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4 mb-8">
              {caseStudies.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <div className="h-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="h-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="text-5xl mb-4 animate-bounce-slow">{item.icon}</div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.result}</p>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        {/* Llamado a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 mb-6">
            ¿Listo para optimizar tu operación logística con soluciones reales?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white group hover:shadow-lg transition-all duration-300"
          >
            Contáctanos
            <MessageCircle className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
