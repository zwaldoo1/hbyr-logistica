import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

const partners = [
  {
    name: "Watts",
    logo: "/watts.jpg",
    description: "Marca chilena líder en jugos, alimentos y productos naturales",
  },
  {
    name: "Proalsa",
    logo: "/proalza.jpg",
    description: "Especialistas en alimentos y soluciones nutricionales",
  },
  {
    name: "Proexa",
    logo: "/pro.jpg",
    description: "Soluciones integrales en automatización y control industrial",
  },
];

const Partners = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/vehiculos/z4.jpeg')" }}
    >
      {/* Capa translúcida para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-sm"></div>

      {/* Contenido encima de la capa */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Nuestros Socios
          </span>
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
            Colaborando con los mejores
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto drop-shadow-md">
            Trabajamos con empresas líderes para ofrecer soluciones innovadoras y de calidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/90">
                <CardContent className="p-6">
                  <div className="aspect-video relative mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-purple-200 max-w-3xl mx-auto drop-shadow-md">
            ¿Interesado en colaborar con nosotros? Estamos siempre abiertos a nuevas alianzas estratégicas.
          </p>
          <a href="/contact">
            <button
              className="mt-6 px-8 py-3 rounded-full font-medium text-white transition duration-300
                         bg-gradient-to-r from-orange to-red
                         hover:brightness-110"
            >
              Conviértete en Socio
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
