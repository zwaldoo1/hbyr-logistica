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
            Nuestro Flota de Vehiculos
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
Conoce nuestra flota de vehículos diseñada para cubrir todo tipo de necesidades logísticas y de transporte. A continuación, te mostramos algunos de nuestros modelos más destacados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;