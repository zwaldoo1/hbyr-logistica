import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroBanner = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Carrusel de fondo */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 -z-10 w-full h-full max-h-screen"
        fadeEffect={{ crossFade: true }}
      >
        {["fondo1.jpg", "fondo2.jpg", "fondo3.jpg"].map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={`/vehiculos/${img}`}
              className="w-full h-full object-cover object-center bg-black"
              alt={`Fondo ${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Contenido encima */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
<div className="flex flex-col md:flex-row items-start md:justify-between gap-6 md:gap-10">
  {/* Texto principal */}
  <div className="text-left order-2 md:order-1">
    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#001A9C] to-[#FF6A00] bg-clip-text text-transparent mb-4 leading-tight">
      <span className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#001A9C] to-[#FF6A00] bg-clip-text text-transparent">
        HBYR
      </span>
      LOGÍSTICA Y TRANSPORTE
    </h1>
    <p className="text-xl md:text-2xl text-black drop-shadow-md max-w-xl">
      20 años brindando soluciones en transporte, distribución y almacenaje a nivel nacional
    </p>
  </div>

  {/* Logo debajo en móvil, a la derecha en escritorio */}
  <div className="flex-shrink-0 mt-6 md:mt-0 w-full md:w-auto flex justify-center md:justify-start order-1 md:order-2">
    <img
      src="/vehiculos/logo1.png"
      alt="Logo HBYR"
      className="max-w-[160px] md:max-w-[300px] h-auto"
    />
  </div>
</div>


            {/* Botón "Conocer más" */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/about" className="group">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#001A9C] to-[#FF6A00] text-white group hover:shadow-lg transition-all duration-300"
                >
                  Conocer más
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Efectos decorativos */}
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
