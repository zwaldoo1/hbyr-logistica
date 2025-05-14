const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#001A9C] to-[#FF6A00] bg-clip-text text-transparent animate-fade-up">
            Conecta con Nosotros
          </h1>
          <p className="text-lg text-gray-600 animate-fade-up [animation-delay:200ms]">
            Estamos aquí para escucharte y ayudarte a hacer realidad tu próximo proyecto creativo.
            Contáctanos y descubre cómo podemos trabajar juntos.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6,#ec4899)] blur-3xl"></div>
      </div>
    </section>
  );
};

export default ContactHero;