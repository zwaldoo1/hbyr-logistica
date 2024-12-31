import { Camera, Code, Megaphone, Palette, BarChart, Globe, Shield, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
const services = [
  {
    icon: Palette,
    title: "Diseño Gráfico",
    description: "Creación de identidades visuales únicas y memorables",
    features: [
      "Diseño de logos y branding",
      "Material publicitario",
      "Diseño de empaques",
      "Ilustraciones personalizadas"
    ]
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Sitios web modernos y aplicaciones web personalizadas",
    features: [
      "Desarrollo frontend y backend",
      "E-commerce y tiendas online",
      "Aplicaciones web progresivas",
      "Optimización de rendimiento"
    ]
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Estrategias efectivas para aumentar tu presencia online",
    features: [
      "SEO y SEM",
      "Marketing de contenidos",
      "Email marketing",
      "Gestión de redes sociales"
    ]
  },
  {
    icon: Camera,
    title: "Producción Audiovisual",
    description: "Contenido visual profesional para tu marca",
    features: [
      "Videos corporativos",
      "Fotografía de producto",
      "Animación y motion graphics",
      "Edición profesional"
    ]
  },
  {
    icon: BarChart,
    title: "Analítica y Datos",
    description: "Insights basados en datos para mejores decisiones",
    features: [
      "Análisis de métricas",
      "Reportes personalizados",
      "Optimización de conversión",
      "Seguimiento de KPIs"
    ]
  },
  {
    icon: Globe,
    title: "Internacionalización",
    description: "Expande tu negocio a nuevos mercados",
    features: [
      "Traducción de contenidos",
      "Adaptación cultural",
      "Estrategias de mercado",
      "Soporte multilingüe"
    ]
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Protección integral para tu negocio digital",
    features: [
      "Auditorías de seguridad",
      "Protección de datos",
      "Certificados SSL",
      "Backups automáticos"
    ]
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma",
    features: [
      "Desarrollo iOS y Android",
      "PWAs",
      "UX/UI para móviles",
      "Mantenimiento continuo"
    ]
  }
];
const ServicesList = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesList;