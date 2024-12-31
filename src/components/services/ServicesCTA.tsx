import { motion } from "framer-motion";
import Button from "../ui/Button";

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para impulsar tu negocio?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Agendar consulta
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Ver portafolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default ServicesCTA;