import { motion } from "framer-motion";

const PortfolioHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="animate-fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Nuestro Portafolio
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Descubre cómo transformamos ideas en resultados destacados. Aquí algunos de nuestros proyectos más destacados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;