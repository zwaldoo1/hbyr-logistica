import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Nuestros Servicios Profesionales
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Soluciones creativas y estratégicas para impulsar tu negocio al siguiente nivel. 
            Descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 mix-blend-multiply" />
      </div>
    </section>
  );
};
export default ServicesHero;