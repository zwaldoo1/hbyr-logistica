import { useEffect, useState } from "react";
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

// Imágenes del fondo
const backgroundImages = [
  "/vehiculos/z1.jpeg",
  "/vehiculos/z2.jpeg",
  "/vehiculos/z3.jpeg",
];

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
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-20 bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImages[currentBg]})`,
      }}
    >
      {/* Capa oscura para mejor legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" />

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Casos de éxito en logística
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Resultados reales de HBYR, donde tecnología y logística se combinan para maximizar eficiencia.
          </p>
        </motion.div>

        {/* Carrusel de casos */}
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
                      className="h-full p-6 bg-white bg-opacity-90 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="text-5xl mb-4 animate-bounce-slow">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-700">{item.result}</p>
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
          <p className="text-xl text-white mb-6">
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
