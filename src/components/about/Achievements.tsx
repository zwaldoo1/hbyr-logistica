import { motion } from "framer-motion";
import { Award, Users, Globe, Briefcase } from "lucide-react";

const achievements = [
  {
    icon: <Award className="w-12 h-12 text-purple-600" />,
    number: "15+",
    label: "Premios Obtenidos",
    description:
      "Reconocimientos nacionales por excelencia en soluciones logísticas y transporte eficiente.",
  },
  {
    icon: <Users className="w-12 h-12 text-purple-600" />,
    number: "200+",
    label: "Clientes Activos",
    description:
      "Empresas que confían en nuestra puntualidad, trazabilidad y compromiso.",
  },
  {
    icon: <Globe className="w-12 h-12 text-purple-600" />,
    number: "5",
    label: "Países Alcanzados",
    description:
      "Cobertura logística en Chile, Argentina, Perú, Bolivia y Uruguay.",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-purple-600" />,
    number: "2,000+",
    label: "Operaciones Completadas",
    description:
      "Cargas entregadas exitosamente cumpliendo con altos estándares de seguridad y tiempo.",
  },
];

const Achievements = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Números que hablan por sí mismos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada número representa el compromiso con la excelencia y la satisfacción de nuestros clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">{achievement.icon}</div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</h3>
              <h4 className="text-xl font-semibold text-purple-600 mb-2">{achievement.label}</h4>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
