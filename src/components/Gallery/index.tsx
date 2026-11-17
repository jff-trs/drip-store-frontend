import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export interface GalleryImage {
  src: string;
  tagline?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  width?: string;
  height?: string;
  objectFit?: "cover" | "contain";
  showThumbs?: boolean;
  radius?: string;
}

export default function Gallery({
  images,
  width = "100%",
  height = "600px",
  objectFit = "cover",
  showThumbs = false,
  radius = "8px",
}: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  return (
    <div className="flex flex-col gap-4 w-full" style={{ maxWidth: width }}>
      <div
        className="relative w-full overflow-hidden bg-[#F5F5F5]"
        style={{ height, borderRadius: radius }}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((currentImage, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-full flex items-center justify-center bg-white"
            >
              {currentImage.title ? (
                <div className="w-full h-full max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between bg-[#F5F5F5]">
                  <div className="w-full md:w-1/2 flex flex-col gap-4 z-10 py-8 md:py-0">
                    {currentImage.tagline && (
                      <span className="text-warning font-bold text-[14px] uppercase">
                        {currentImage.tagline}
                      </span>
                    )}
                    <h1 className="text-4xl md:text-6xl font-bold text-dark-gray-2 leading-tight">
                      {currentImage.title}
                    </h1>
                    {currentImage.description && (
                      <p className="text-dark-gray-3 text-[16px] max-w-md">
                        {currentImage.description}
                      </p>
                    )}
                    {currentImage.buttonText && (
                      <Link
                        to={currentImage.buttonLink || "/products"}
                        className="bg-primary text-white font-bold text-[16px] px-8 py-3 rounded-lg w-fit mt-4 hover:bg-tertiary transition-colors"
                      >
                        {currentImage.buttonText}
                      </Link>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end h-full items-center">
                    <img
                      src={currentImage.src}
                      alt={currentImage.title}
                      className="w-[80%] md:w-[90%] max-h-[400px] md:max-h-[500px] object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              ) : (
                <img
                  src={currentImage.src}
                  alt={`Slide ${index + 1}`}
                  className={`w-full h-full ${objectFit === "contain" ? "object-contain" : "object-cover"} object-center p-4`}
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={prevImage}
          disabled={isFirst}
          className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-md z-20 transition-all ${
            isFirst
              ? "bg-light-gray-3 text-light-gray-2 cursor-not-allowed opacity-50"
              : "bg-white/80 hover:bg-white text-dark-gray hover:scale-110"
          }`}
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          onClick={nextImage}
          disabled={isLast}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-md z-20 transition-all ${
            isLast
              ? "bg-light-gray-3 text-light-gray-2 cursor-not-allowed opacity-50"
              : "bg-white/80 hover:bg-white text-dark-gray hover:scale-110"
          }`}
        >
          <FiChevronRight size={24} />
        </button>

        {!showThumbs && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-6" : "bg-light-gray-2 w-3"}`}
              />
            ))}
          </div>
        )}
      </div>

      {showThumbs && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{ borderRadius: radius }}
              className={`w-[117px] h-[95px] flex-shrink-0 overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-primary opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-contain bg-white p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
