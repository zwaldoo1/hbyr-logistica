import { useState } from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { ExternalLink, MessageSquareIcon } from "lucide-react";


// Define project categories
const categories = [
  "Todos",
  "Camionetas",
  "Camiones",
  "Vehículos Especiales",
];

// Sample projects data
const vehicles = [
  {
    id: 1,
    title: "Camioneta Toyota Hilux 4x4",
    category: "Camionetas",
    description: "Ideal para terrenos difíciles, capacidad de carga de 1 tonelada.",
    image: "./vehiculos/toyota.jpg"
  },
  {
    id: 2,
    title: "Camión Hyundai HD78",
    category: "Camiones",
    description: "Camión mediano con caja cerrada. Perfecto para reparto urbano.",
    image: "./vehiculos/camion.jpg"
  },
  {
    id: 3,
    title: "Camioneta Nissan NP300",
    category: "Camionetas",
    description: "Eficiente y confiable para uso diario en obras y logística.",
    image: "./vehiculos/nissan1.jpg"
  },
  {
    id: 4,
    title: "Camión Grúa HIAB",
    category: "Vehículos Especiales",
    description: "Camión con brazo hdráulico, ideal para carga pesada en altura.",
    image: "./vehiculos/camion2.jpg"
  },
  {
    id: 5,
    title: "Camión Reparto Frigorífico",
    category: "Camiones",
    description: "Equipado con sistema de refrigeración, ideal para transporte de alimentos.",
    image: "./vehiculos/camionfrio.jpg"
  },
  {
    id: 6,
    title: "Camioneta Mitsubishi L200",
    category: "Camionetas",
    description: "Robusta y versátil para faenas exigentes y trayectos largos.",
    image: "./vehiculos/camionetault.jpg"
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
const filteredProjects = vehicles.filter(
  (project) => activeCategory === "Todos" || project.category === activeCategory
);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Nuestra flota
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            HBYR pone a tu disposición una flota equipada para faenas exigentes, transporte especializado y operaciones de alto rendimiento.
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