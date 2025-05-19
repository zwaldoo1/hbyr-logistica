import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/vehiculos/fondo4.jpg"
          alt="Fondo Hero"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Capa oscura para mejorar contraste */}
      <div className="absolute inset-0 bg-black/60 -z-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-4 py-2 text-sm font-medium bg-white/90 text-purple-700 rounded-full mb-8 shadow-lg"
          >
            Nuestra Misión
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#001A9C] to-[#FF6A00] bg-clip-text text-transparent drop-shadow-[2px_2px_6px_rgba(0,0,0,0.7)] mb-6 leading-tight text-center">
            Transformando la logística  
            <br /> 
            a través de la eficiencia y la confianza
          </h1>

          <p className="text-xl text-white drop-shadow-md max-w-3xl mx-auto mb-10 leading-relaxed text-center md:text-2xl">
            Logistica HBYR posee más de 20 años de experiencia en el sector de la distribución profesional, destacándose como un referente confiable y eficiente en el mercado. Nos especializamos en el transporte de alimentos e insumos clínicos, brindando un servicio operativo disponible las 24 horas del día, los 7 días de la semana. Contamos con una flota propia, diseñados para atender diversos tipos de carga con la máxima seguridad y eficiencia.
          </p>

          {/* Capa adicional decorativa de pulsación suave */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute inset-0 -z-40 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
