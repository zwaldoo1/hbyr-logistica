import React, { useState } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTouch = () => {
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 2500);
  };

  return (
    <div
      className="fixed bottom-20 right-5 z-50 flex items-center gap-2 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouch}
    >
      {/* Burbuja de texto animada */}
      {isHovered && (
        <div className="max-w-[220px] bg-white text-green-700 font-semibold text-sm px-4 py-2 rounded-2xl shadow-xl border border-green-300 animate-fade-in">
          ¿Tienes dudas? ¡Escríbenos!
        </div>
      )}

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/56912345678"
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat en WhatsApp"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-10 h-10"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
