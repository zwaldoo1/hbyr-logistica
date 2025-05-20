import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="py-24 relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/vehiculos/fondo5.jpg"
          alt="Fondo Visión"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60 -z-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 text-sm font-medium bg-gray-900/80 text-yellow-400 rounded-full mb-8 shadow-lg"
          >
            Nuestra Visión
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.7)]">
            Aspiramos a liderar el cambio hacia un mundo más conectado y sostenible
          </h2>

          <p className="text-xl text-gray-200 drop-shadow-md leading-relaxed">
            En HBYR visualizamos un futuro donde la tecnología y la experiencia humana se integran en perfecta sincronía,
            potenciando soluciones logísticas eficientes, sostenibles y seguras para impulsar el crecimiento de nuestros clientes y del país.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
