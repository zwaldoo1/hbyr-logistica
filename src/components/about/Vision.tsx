import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-5 -z-10"
        style={{
          clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)"
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 text-sm font-medium bg-white/90 text-blue-700 rounded-full mb-8 shadow-lg"
          >
            Nuestra Visión
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Aspiramos a liderar el cambio hacia un mundo más conectado y sostenible
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
En HBYR visualizamos un futuro donde la tecnología y la experiencia humana se integran en perfecta sincronía,
potenciando soluciones logísticas eficientes, sostenibles y seguras para impulsar el crecimiento de nuestros clientes y del país.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;