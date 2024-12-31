import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Ana García",
    role: "CEO & Fundadora",
    image: "/placeholder.svg",
    bio: "Líder visionaria con más de 15 años de experiencia en innovación tecnológica.",
    linkedin: "#",
    twitter: "#",
    email: "ana@lumoscreatives.com"
  },
  {
    name: "Carlos Rodríguez",
    role: "Director Creativo",
    image: "/placeholder.svg",
    bio: "Maestro en diseño con un ojo excepcional para los detalles y la estética.",
    linkedin: "#",
    twitter: "#",
    email: "carlos@lumoscreatives.com"
  },
  {
    name: "Laura Martínez",
    role: "Directora de Tecnología",
    image: "/placeholder.svg",
    bio: "Experta en desarrollo de software y arquitectura de sistemas.",
    linkedin: "#",
    twitter: "#",
    email: "laura@lumoscreatives.com"
  },
  {
    name: "Miguel Torres",
    role: "Director de Marketing",
    image: "/placeholder.svg",
    bio: "Estratega digital con pasión por crear campañas impactantes.",
    linkedin: "#",
    twitter: "#",
    email: "miguel@lumoscreatives.com"
  }
];

const Team = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Nuestro Equipo
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mentes creativas detrás de Lumos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un equipo apasionado y diverso, unido por la misión de crear soluciones extraordinarias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.linkedin} className="text-gray-600 hover:text-purple-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.twitter} className="text-gray-600 hover:text-purple-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-purple-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;