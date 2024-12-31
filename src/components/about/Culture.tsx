import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, Target } from "lucide-react";

const culturePoints = [
  {
    icon: <Heart className="w-8 h-8 text-purple-600" />,
    title: "Pasión por la Excelencia",
    description: "Nos esforzamos constantemente por superar las expectativas y entregar resultados excepcionales."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
    title: "Innovación Constante",
    description: "Fomentamos la creatividad y buscamos nuevas formas de resolver desafíos."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: "Trabajo en Equipo",
    description: "Creemos en el poder de la colaboración y el apoyo mutuo para alcanzar objetivos comunes."
  },
  {
    icon: <Target className="w-8 h-8 text-purple-600" />,
    title: "Enfoque en Resultados",
    description: "Nos comprometemos a entregar valor tangible y medible en cada proyecto."
  }
];

const Culture = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Nuestra Cultura
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Construyendo un ambiente de trabajo excepcional
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestra cultura es el corazón de nuestra empresa, definiendo quiénes somos y cómo trabajamos juntos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {culturePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            "La cultura no es solo lo que decimos, es lo que hacemos. Cada día nos esforzamos por vivir nuestros valores
            y crear un ambiente donde todos puedan prosperar y dar lo mejor de sí mismos."
          </p>
          <p className="mt-4 text-purple-600 font-medium">- Ana García, CEO</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Culture;