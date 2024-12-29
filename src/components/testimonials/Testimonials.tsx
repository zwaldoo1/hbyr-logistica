import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Button from "../ui/Button";
import { MessageCircle, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "CEO de TechStart",
    image: "/placeholder.svg",
    text: "El equipo superó nuestras expectativas. Su creatividad y profesionalismo transformaron completamente nuestra presencia digital.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Marketing, InnovateMKT",
    image: "/placeholder.svg",
    text: "Un trabajo excepcional en nuestro rebranding. El impacto en nuestro engagement fue inmediato y significativo.",
  },
  {
    name: "Ana Martínez",
    role: "Fundadora de EcoStyle",
    image: "/placeholder.svg",
    text: "Su enfoque estratégico y atención al detalle hicieron toda la diferencia. Estamos encantados con los resultados.",
  },
  {
    name: "Luis Torres",
    role: "Director Creativo, DesignPro",
    image: "/placeholder.svg",
    text: "La mejor decisión que tomamos fue trabajar con ellos. Su equipo es increíblemente talentoso y dedicado.",
  },
];
const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Historias de éxito que destacan el impacto de nuestro trabajo.
          </p>
        </motion.div>
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <div className="h-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="h-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <Quote className="w-8 h-8 text-purple-500 mb-4 opacity-50" />
                      <p className="text-gray-600 mb-6">{testimonial.text}</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious children className="hidden md:flex" />
            <CarouselNext children className="hidden md:flex" />
          </Carousel>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 mb-6">
            ¿Quieres ser nuestro próximo cliente feliz?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white group hover:shadow-lg transition-all duration-300"
          >
            Escríbenos ahora
            <MessageCircle className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default Testimonials;