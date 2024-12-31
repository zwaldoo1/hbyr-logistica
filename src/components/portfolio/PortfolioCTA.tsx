import Button from "../ui/Button";

const PortfolioCTA = () => {
  return (
    <div className="flex flex-col  px-4 justify-center text-center animate-fade-up">
      <p className="text-xl text-gray-700 mb-6">
        ¿Interesado en lo que hacemos? ¡Contáctanos para tu próximo proyecto!
      </p>
      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white  mb-3 text-lg hover:opacity-90 transition-opacity w-32 items-center">
        Contáctanos
      </Button>
    </div>
  );
};
export default PortfolioCTA;