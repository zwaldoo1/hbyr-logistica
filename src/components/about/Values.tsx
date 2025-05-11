import { motion } from "framer-motion";

const values = [
  {
    title: "Compromiso 24/7",
    description: "Estamos disponibles todo el día, todos los días, para asegurar una logística sin interrupciones.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Seguridad Garantizada",
    description: "Contamos con sistemas GPS en cada vehículo y seguros de carga para una operación confiable.",
    gradient: "from-red-500 to-pink-500"
  },
  {
    title: "Eficiencia Operativa",
    description: "Optimizamos rutas, tiempos y procesos para entregar con puntualidad y precisión.",
    gradient: "from-blue-500 to-sky-500"
  },
  {
    title: "Adaptabilidad Regional",
    description: "Brindamos cobertura efectiva en Santiago y regiones, adaptándonos a cada necesidad.",
    gradient: "from-green-500 to-emerald-500"
  },
];


const Values = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 text-sm font-medium bg-white/90 text-purple-700 rounded-full mb-8 shadow-lg"
          >
            Nuestros Valores
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Los principios que nos guían
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-2xl transition-opacity duration-300 group-hover:opacity-20" />
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`h-12 w-12 rounded-lg mb-6 bg-gradient-to-br ${value.gradient}`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;