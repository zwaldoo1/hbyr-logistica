import { motion } from "framer-motion";
const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description: "Evaluamos tus necesidades y objetivos para crear un plan personalizado."
  },
  {
    number: "02",
    title: "Propuesta",
    description: "Desarrollamos una estrategia detallada y timeline del proyecto."
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Implementamos las soluciones acordadas con actualizaciones regulares."
  },
  {
    number: "04",
    title: "Entrega",
    description: "Refinamos y entregamos el proyecto con soporte continuo."
  }
];
const ServicesProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un enfoque estructurado y transparente para garantizar el éxito de tu proyecto
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                <span className="text-4xl font-bold text-purple-600/20 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-purple-200"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesProcess;