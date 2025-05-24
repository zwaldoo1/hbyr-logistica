import { motion } from "framer-motion";
import { Award, Users, Globe, Briefcase } from "lucide-react";

const achievements = [
  {
    icon: Award,
    gradient: "from-purple-500 to-indigo-600",
    number: "15+",
    label: "Premios Obtenidos",
    description:
      "Reconocimientos nacionales por excelencia en soluciones logísticas y transporte eficiente.",
  },
  {
    icon: Users,
    gradient: "from-pink-500 to-rose-600",
    number: "200+",
    label: "Clientes Activos",
    description:
      "Empresas que confían en nuestra puntualidad, trazabilidad y compromiso.",
  },
  {
    icon: Globe,
    gradient: "from-blue-500 to-cyan-600",
    number: "5",
    label: "Países Alcanzados",
    description:
      "Cobertura logística en Chile, Argentina, Perú, Bolivia y Uruguay.",
  },
  {
    icon: Briefcase,
    gradient: "from-green-500 to-emerald-600",
    number: "2,000+",
    label: "Operaciones Completadas",
    description:
      "Cargas entregadas exitosamente cumpliendo con altos estándares de seguridad y tiempo.",
  },
];

const Achievements = () => {
  return (
    <section
      className="py-24 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/vehiculos/z3.jpeg')" }}
    >
      {/* Capa translúcida oscura para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Nuestros Logros
          </span>
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
            Números que hablan por sí mismos
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Cada número representa el compromiso con la excelencia y la satisfacción de nuestros clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-white bg-opacity-20 backdrop-blur-md hover:shadow-lg transition-shadow duration-300 cursor-default"
              >
                <div
                  className={`mx-auto mb-4 flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br ${achievement.gradient}`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2 drop-shadow-md">{achievement.number}</h3>
                <h4 className="text-xl font-semibold text-white mb-2 drop-shadow-md">{achievement.label}</h4>
                <p className="text-white drop-shadow-md">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
