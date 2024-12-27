import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 opacity-10 -z-10" 
        style={{
          backgroundImage: "linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)"
        }}
      />
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
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Transformando el futuro
            <br /> a través de la innovación
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Nos dedicamos a crear soluciones que impulsan el progreso y mejoran la vida de las personas,
            siempre con un compromiso inquebrantable con la excelencia y la sostenibilidad.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute inset-0 -z-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;