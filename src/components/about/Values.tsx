import { motion } from "framer-motion";
import { Clock, ShieldCheck, Activity, MapPin } from "lucide-react";

const values = [
  {
    title: "Compromiso 24/7",
    description: "Estamos disponibles todo el día, todos los días, para asegurar una logística sin interrupciones.",
    gradient: "from-yellow-500 to-orange-500",
    icon: Clock,
  },
  {
    title: "Seguridad Garantizada",
    description: "Contamos con sistemas GPS en cada vehículo y seguros de carga para una operación confiable.",
    gradient: "from-red-500 to-pink-500",
    icon: ShieldCheck,
  },
  {
    title: "Eficiencia Operativa",
    description: "Optimizamos rutas, tiempos y procesos para entregar con puntualidad y precisión.",
    gradient: "from-blue-500 to-sky-500",
    icon: Activity,
  },
  {
    title: "Adaptabilidad Regional",
    description: "Brindamos cobertura efectiva en Santiago y regiones, adaptándonos a cada necesidad.",
    gradient: "from-green-500 to-emerald-500",
    icon: MapPin,
  },
];

const Values = () => {
  return (
    <section className="py-24 relative overflow-hidden min-h-[80vh]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/vehiculos/sicomono.jpeg"
          alt="Fondo Valores"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60 -z-20" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 text-sm font-medium bg-gray-900/80 text-yellow-400 rounded-full mb-8 shadow-lg"
          >
            Nuestros Valores
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.7)]">
            Los principios que nos guían
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-10 rounded-2xl transition-opacity duration-300 group-hover:opacity-20`}
                />
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                  <div
                    className={`h-12 w-12 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${value.gradient}`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-white">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
