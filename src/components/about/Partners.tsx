import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

const partners = [
  {
    name: "TechCorp Global",
    logo: "data:image/jpeg;base64,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",
    description: "Líder en soluciones tecnológicas empresariales"
  },
  {
    name: "Innovation Labs",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSnDjZw1CsOf4kLOweuzPUpIpXaG01MZQ0w&s",
    description: "Pioneros en investigación y desarrollo"
  },
  {
    name: "Digital Solutions",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Zm-4x4la30nbn47cKCJdlw_lOgyveUSdtQ&s",
    description: "Expertos en transformación digital"
  },
  {
    name: "Creative Studios",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Zm-4x4la30nbn47cKCJdlw_lOgyveUSdtQ&s",
    description: "Referentes en diseño y creatividad"
  },
  {
    name: "Smart Systems",
    logo: "https://images.stockcake.com/public/9/b/4/9b4f3957-ccc2-41bf-88e2-c488c66d9a28_large/urban-modern-architecture-stockcake.jpg",
    description: "Especialistas en automatización"
  },
  {
    name: "Future Tech",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFjRv6Nbd8fjLhGJA0Bhot_9mAavADXsoY7WfUdCi35xVwDgWmy8v-q-AbxvWNMVeKLo&usqp=CAU",
    description: "Innovadores en tecnologías emergentes"
  }
];

const Partners = () => {
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
            Nuestros Socios
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Colaborando con los mejores
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              <Card className="hover:shadow-lg transition-shadow duration-300">
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
                  <p className="text-gray-600">
                    {partner.description}
                  </p>
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Interesado en colaborar con nosotros? Estamos siempre abiertos a nuevas alianzas estratégicas.
          </p>
          <button className="mt-6 px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors">
            Conviértete en Socio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;