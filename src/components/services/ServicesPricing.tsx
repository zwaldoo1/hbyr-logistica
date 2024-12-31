import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
const plans = [
  {
    name: "Básico",
    price: "499",
    description: "Perfecto para pequeños negocios",
    features: [
      "Diseño web básico",
      "SEO básico",
      "3 redes sociales",
      "Soporte por email",
      "Actualizaciones mensuales"
    ]
  },
  {
    name: "Profesional",
    price: "999",
    description: "Ideal para empresas en crecimiento",
    features: [
      "Diseño web avanzado",
      "SEO completo",
      "5 redes sociales",
      "Soporte prioritario",
      "Actualizaciones semanales",
      "Analytics avanzado",
      "Marketing de contenidos"
    ]
  },
  {
    name: "Empresarial",
    price: "1999",
    description: "Para grandes empresas",
    features: [
      "Diseño web premium",
      "SEO avanzado",
      "Todas las redes sociales",
      "Soporte 24/7",
      "Actualizaciones diarias",
      "Analytics premium",
      "Marketing completo",
      "Consultoría estratégica",
      "App móvil personalizada"
    ]
  }
];
const ServicesPricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes y Precios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones flexibles que se adaptan a tus necesidades y presupuesto
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/mes</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  Comenzar ahora
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesPricing;