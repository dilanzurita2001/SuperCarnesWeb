import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Aquí configuras las imágenes / videos que quieres mostrar
const slides = [
  {
    type: 'image',
    src: '/images/fondo_comercial.png',
    // src: 'https://images.unsplash.com/photo-1571451223213-ab396a71ba74',
    alt: 'Parrillada de carnes premium',
  },
  {
    type: 'video',
    src: '/images/toma_local.mov',
    alt: 'Cortes de carne premium listos para la parrilla',
  },
  {
    type: 'image',
    src: '/images/Local_aereo.png',
    alt: 'Cortes frescos en vitrina',
  },
  // Ejemplo de video (si luego quieres usar uno)
  // {
  //   type: 'video',
  //   src: '/videos/parrilla.mp4',
  //   poster: '/images/parrilla-poster.jpg',
  //   alt: 'Video de parrilla en acción',
  // },
];

const AUTO_PLAY_DELAY = 5000;

const HeroCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

 useEffect(() => {
  if (isPaused) return;
  const current = slides[currentIndex];
  if (current.type === 'video') return;

  const id = setInterval(nextSlide, AUTO_PLAY_DELAY);
  return () => clearInterval(id);
}, [isPaused, currentIndex]);

  const current = slides[currentIndex];

  return (
    <section
      className="relative h-[600px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fondo con carrusel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          {current.type === 'image' ? (
            <img
              src={current.src}
              alt={current.alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              className="w-full h-full object-cover"
              src={current.src}
              // poster={current.poster}
              autoPlay
              muted
              playsInline
              // dejamos que se reproduzca una sola vez y luego pase al siguiente
              onEnded={nextSlide}
            />
          )}

          {/* Overlay oscuro como el que ya tenías */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Contenido que venga desde Home.jsx */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        {children}
      </div>

      {/* Flecha izquierda */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition z-20"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      {/* Flecha derecha */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition z-20"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* Puntitos */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 w-3 rounded-full transition ${
              idx === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
export default HeroCarousel;