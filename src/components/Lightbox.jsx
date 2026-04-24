import React from "react";

const Lightbox = ({
  images,
  thumbnailImages,
  imageIndex,
  setImageIndex,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleNext = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="hidden md:flex fixed inset-0 bg-black/75 z-50 items-center justify-center">
      <div className="relative max-w-xl w-full flex flex-col items-center gap-6 px-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-8 cursor-pointer"
          aria-label="Close lightbox"
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#FFFFFF"
              fillRule="evenodd"
            />
          </svg>
        </button>

        {/* Main image with navigation */}
        <div className="relative w-full">
          <img
            src={images[imageIndex]}
            alt="Product"
            className="w-full rounded-xl object-cover"
          />

          {/* Previous arrow */}
          <button
            onClick={handlePrev}
            disabled={imageIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer shadow-md ${
              imageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous image"
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={handleNext}
            disabled={imageIndex === images.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer shadow-md ${
              imageIndex === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            aria-label="Next image"
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-between w-[80%]">
          {thumbnailImages.map((thumb, index) => (
            <div
              key={thumb}
              onClick={() => setImageIndex(index)}
              className={`relative w-16 h-16 rounded-xl cursor-pointer overflow-hidden transition-all ${
                index === imageIndex
                  ? "ring-2 ring-[hsl(26_100%_55%)]"
                  : "hover:opacity-75"
              }`}
            >
              <img
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-full object-cover rounded-xl ${
                  index === imageIndex ? "opacity-50" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
