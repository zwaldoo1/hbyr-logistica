import React, { useState } from "react";
import "./Galeriapage.css";

const images = [
  "/vehiculos/z1.jpeg",
  "/vehiculos/z2.jpeg",
  "/vehiculos/z3.jpeg",
  "/vehiculos/z4.jpeg",
  "/vehiculos/z5.jpeg",
  "/vehiculos/z6.jpeg",
  "/vehiculos/z7.jpeg",
  "/vehiculos/z8.jpeg",
  "/vehiculos/z9.jpeg",
  "/vehiculos/z10.jpeg",
  "/vehiculos/z11.jpeg",
];


const splitIntoRows = (array: string[], rows: number) => {
  const result: string[][] = [];
  for (let i = 0; i < rows; i++) {
    result.push([]);
  }
  array.forEach((item, index) => {
    result[index % rows].push(item);
  });
  return result;
};

const Galeriapage = () => {
  const rows = splitIntoRows(images, 3);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Galería de Vehículos</h2>

      <div className="gallery-rows">
        {rows.map((rowImages, rowIndex) => (
          <div
            key={rowIndex}
            className={`gallery-row animate-scroll-row-${rowIndex}`}
            style={{ minHeight: "150px" }}
          >
            {[...rowImages, ...rowImages].map((src, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Vehículo ${index + 1}`}
                  className="gallery-img"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="modal-close-btn"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeriapage;
