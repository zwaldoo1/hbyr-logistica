import { motion } from "framer-motion";

const History = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 opacity-5 -z-10"
        style={{
          clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)"
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 text-sm font-medium bg-white/90 text-orange-700 rounded-full mb-8 shadow-lg"
          >
            Nuestra Historia
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#001A9C] to-[#FF6A00]">
HBYR Logística y Transporte
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
Desde nuestros inicios hasta consolidarnos como referentes en logística y transporte,
nuestra historia refleja años de esfuerzo, innovación y compromiso con la excelencia operativa.
Cada etapa ha sido impulsada por la misión de entregar soluciones confiables que marquen la diferencia en el día a día de nuestros clientes y en el desarrollo de las industrias que servimos.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white font-medium rounded-full hover:shadow-lg transition-all cursor-pointer group">
            <span>Conoce más sobre nuestra historia</span>
            <svg
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default History;