import { useState } from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { ExternalLink, MessageSquareIcon } from "lucide-react";
// Define project categories
const categories = [
  "Todos",
  "Diseño Gráfico",
  "Desarrollo Web",
  "Campañas de Marketing",
];
// Sample projects data
const projects = [
  {
    id: 1,
    title: "Rediseño de Marca Global",
    category: "Diseño Gráfico",
    description: "Renovación completa de identidad visual para empresa internacional",
    image: "https://mexico.unir.net/wp-content/uploads/sites/6/2023/08/diseno_grafico.png",
    link: "#",
  },
  {
    id: 2,
    title: "App Móvil Financiera",
    category: "Desarrollo Web",
    description: "Aplicación de gestión financiera personal",
    image: "https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/que-hace-un-desarrollador-web.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Campaña Digital Innovadora",
    category: "Campañas de Marketing",
    description: "Estrategia multiplataforma con 300% ROI",
    image: "https://ipmark.com/wp-content/uploads/UNANCOR-IMAGEN-1-pexels-kindel-media-7688336-1-800x445.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Plataforma E-commerce",
    category: "Desarrollo Web",
    description: "Desarrollo de tienda online con más de 10,000 productos",
    image: "https://www.qualityzoneinfotech.com/assets/img/E-Commerce.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Branding Startup Tech",
    category: "Diseño Gráfico",
    description: "Identidad visual completa para startup tecnológica",
    image: "https://blogconexion.senati.edu.pe/wp-content/uploads/2024/04/Di%CC%81a-del-Disen%CC%83o-Gra%CC%81fico-01-scaled.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Campaña Redes Sociales",
    category: "Campañas de Marketing",
    description: "Estrategia integral en redes sociales",
    image: "https://fidiaspro.com/wp-content/uploads/2023/03/Campana-de-redes-sociales.jpg",
    link: "#",
  },
];
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const filteredProjects = projects.filter(
    (project) => activeCategory === "Todos" || project.category === activeCategory
  );
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Nuestro Portafolio
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Descubre cómo transformamos ideas en resultados destacados. Aquí algunos de nuestros proyectos más destacados.
          </p>
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <div className="text-white">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.description}</p>
                    </div>
                    <a
                      href={project.link}
                      className="text-white hover:text-purple-300 transition-colors"
                      aria-label={`Ver más sobre ${project.title}`}
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA Section */}
        <div className="text-center animate-fade-up">
          <p className="text-xl text-gray-700 mb-6">
            ¿Interesado en lo que hacemos? ¡Contáctanos para tu próximo proyecto!
          </p>
          <Button
            className="flex justify-center items-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg hover:opacity-90 transition-opacity"
          >
            <MessageSquareIcon/>
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;