import { Truck, CalendarCheck, Wrench, Users } from "lucide-react";
import Button from "../ui/Button";

const services = [
  {
    icon: Truck,
    title: "Gestión de Vehículos",
    description: "Control total sobre tus camionetas y vehículos de trabajo",
    items: [
      "Reserva de vehículos en tiempo real",
      "Disponibilidad y asignación eficiente",
      "Historial de uso y kilometraje",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Planificación y Coordinación",
    description: "Organiza tareas y moviliza equipos de forma eficiente",
    items: [
      "Calendario de reservas",
      "Control de entregas y retiros",
      "Notificaciones automáticas a los trabajadores",
    ],
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    description: "Cuida tu flota con recordatorios y reportes inteligentes",
    items: [
      "Registro de incidentes",
      "Alertas de mantención programada",
      "Historial técnico de cada vehículo",
    ],
  },
  {
    icon: Users,
    title: "Gestión de Personal",
    description: "Asigna permisos y roles dentro de tu equipo de trabajo",
    items: [
      "Control de usuarios y administradores",
      "Acceso seguro mediante autenticación",
      "Historial de acciones por usuario",
    ],
  },
];

const Services = () => {
  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/vehiculos/z111.jpeg')" }}
    >
      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FF8C00]">
            Nuestros Servicios
          </h2>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
            Ofrecemos soluciones creativas y personalizadas para impulsar tu marca en cada etapa de su crecimiento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 glass-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-left w-full">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button (opcional) */}
        {/* <div className="text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg hover:opacity-90 transition-opacity"
          >
            Contáctanos para personalizar tu solución
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
