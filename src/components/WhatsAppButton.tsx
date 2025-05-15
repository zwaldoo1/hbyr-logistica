import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/56912345678"
      className="fixed bottom-20 right-5 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat en WhatsApp"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsAppButton;
