// components/Advantages.tsx

import { motion } from "framer-motion";
import {
  Truck,
  PackageCheck,
  Clock,
  ShieldCheck,
} from "lucide-react";

const advantages = [
  {
    icon: <Truck className="w-12 h-12 text-purple-400" />,
    title: "Flota moderna",
    description: "Más de 100 vehículos equipados para entregas seguras y eficientes.",
  },
  {
    icon: <PackageCheck className="w-12 h-12 text-purple-400" />,
    title: "Seguimiento en tiempo real",
    description: "Monitorea tus envíos en tiempo real, desde el origen hasta la entrega.",
  },
  {
    icon: <Clock className="w-12 h-12 text-purple-400" />,
    title: "Cumplimiento del 99.5%",
    description: "Comprometidos con la puntualidad y precisión en cada entrega.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-purple-400" />,
    title: "Seguridad certificada",
    description: "Protocolos avanzados para resguardar cada envío de principio a fin.",
  },
];

const Advantages = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/vehiculos/z7.jpeg" // <-- Puedes cambiar esta imagen por la que desees
          alt="Fondo de ventajas"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-black/60 -z-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gray-800/80 text-yellow-400 rounded-full text-sm font-semibold mb-4 shadow-lg">
            ¿Por qué elegir HBYR?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#001A9C] to-[#FF6A00] bg-clip-text text-transparent drop-shadow-[2px_2px_6px_rgba(0,0,0,0.7)]">
            Ventajas de trabajar con nosotros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow border border-white/10"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
