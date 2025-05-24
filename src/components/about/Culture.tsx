import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, Target } from "lucide-react";

const culturePoints = [
  {
    icon: <Heart className="w-8 h-8 text-yellow-400" />,
    title: "Pasión por la Excelencia",
    description: "Nos esforzamos constantemente por superar las expectativas y entregar resultados excepcionales.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    title: "Innovación Constante",
    description: "Fomentamos la creatividad y buscamos nuevas formas de resolver desafíos.",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Trabajo en Equipo",
    description: "Creemos en el poder de la colaboración y el apoyo mutuo para alcanzar objetivos comunes.",
  },
  {
    icon: <Target className="w-8 h-8 text-yellow-400" />,
    title: "Enfoque en Resultados",
    description: "Nos comprometemos a entregar valor tangible y medible en cada proyecto.",
  },
];

const Culture = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/vehiculos/z7.jpeg"
          alt="Fondo Cultura"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60 -z-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-4 py-2 text-sm font-medium bg-gray-800/80 text-yellow-400 rounded-full mb-8 shadow-lg"
          >
            La Cultura de HBYR
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[2px_2px_6px_rgba(0,0,0,0.7)] mb-6 leading-tight">
            Nuestra cultura nos define <br /> y nos impulsa cada día
          </h2>

          <p className="text-xl text-gray-200 drop-shadow-md max-w-3xl mx-auto mb-12 leading-relaxed text-center md:text-2xl">
            En HBYR, nuestra forma de trabajar está guiada por valores fundamentales que fortalecen nuestro compromiso con la excelencia, la innovación, el trabajo colaborativo y el logro de resultados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {culturePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-left text-white"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-yellow-300">
                      {point.title}
                    </h3>
                    <p className="text-gray-200">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decoración animada de fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute inset-0 -z-40 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-transparent animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Culture;
