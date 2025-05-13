import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import  Button  from "../ui/Button";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-pink-200/30 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
<div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
  {/* Texto principal */}
  <div className="text-left">
    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#001A9C] to-[#FF6A00] bg-clip-text text-transparent mb-4 leading-tight">
      <span className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#001A9C] to-[#FF6A00] bg-clip-text text-transparent">
        HBYR
      </span>
      LOGÍSTICA Y TRANSPORTE
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 max-w-xl">
      20 años brindando soluciones en transporte, distribución y almacenaje a nivel nacional
    </p>
  </div>

  {/* Logo a la derecha */}
  <div className="flex-shrink-0">
    <img src="/vehiculos/logo1.png" alt="Logo HBYR" className="h-58 md:h-40 w-auto" /> 
  </div>
</div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white group hover:shadow-lg transition-all duration-300"
              >
                Conocer más
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          {/* Decorative shapes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden lg:block"
          >
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
              <div className="absolute inset-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
              <div className="absolute inset-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HeroBanner;