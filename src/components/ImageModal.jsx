import React from "react";

const ImageModal = ({ imageSrc, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <img
          src={imageSrc}
          alt={imageSrc}
          className="w-full h-auto rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
