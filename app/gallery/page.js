"use client";
import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  // Generate image paths from 1 to 44
  const images = Array.from({ length: 44 }, (_, i) => `/img/1 (${i + 1}).jpeg`);
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      newIndex = (currentIndex + 1) % images.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        {/* Hero Image Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-teal-800">
          {/* You can uncomment and add a gallery hero image if you have one */}
          {/* <Image
            src="/gallery-hero.jpg"
            alt="Rinki Nurses Gallery"
            fill
            className="object-cover"
          /> */}
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Gallery
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Explore moments from our nursing and caregiving services
          </p>
        </div>

        {/* Wavey Bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      {/* Gallery Content */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
                onClick={() => openImage(img, index)}
              >
                <Image
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0  group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-medium">
                    View
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeImage}
            className="absolute top-4 right-4 text-white hover:text-teal-300 transition-colors"
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={() => navigate('prev')}
            className="absolute left-4 text-white hover:text-teal-300 transition-colors"
          >
            <ChevronLeft size={48} />
          </button>
          
          <div className="relative w-full max-w-6xl h-full max-h-[90vh]">
            <Image
              src={selectedImage}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          
          <button 
            onClick={() => navigate('next')}
            className="absolute right-4 text-white hover:text-teal-300 transition-colors"
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg">
            Image {currentIndex + 1} of {images.length}
          </div>
        </div>
      )}
    </div>
  );
}