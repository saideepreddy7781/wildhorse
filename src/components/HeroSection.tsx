import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

import heroWedding from '@/assets/mar-1.jpeg';
import maternityShoot from '@/assets/mat-6.jpg';
import preweddingShoot from '@/assets/pwe-1.jpeg';
import eventsPhoto from '@/assets/eng-1.jpeg';
import babyPhotoshoot from '@/assets/baby-1.jpg';
import modelPhotoshoot from '@/assets/mod-1.jpg';
import familyPhotoshoot from '@/assets/famm-1.jpeg';
import housewarmingPhoto from '@/assets/hwa-1.jpeg';
import namingCeremonyPhoto from '@/assets/nam-2.jpeg';
import albumDesignPhoto from '@/assets/br-1.jpg';
import productPhoto from '@/assets/pr-4.jpg';
import cameraRentalPhoto from '@/assets/ren-1.jpg';
import productPhoto1 from '@/assets/pr-2.jpeg';


const slides = [
  {
    image: heroWedding,
    title: 'Wedding Photography',
    description: 'Capturing the magic', // Shortened tag line
  },
  {
    image: preweddingShoot,
    title: 'Pre-Wedding Photoshoot',
    description: 'Your love story', // Shortened tag line
  },
  {
    image: maternityShoot,
    title: 'Maternity & Baby Showers',
    description: 'Anticipation & celebration', // Shortened tag line
  },
  {
    image: productPhoto,
    title: 'Product Photography',
    description: 'Showcasing the best', // Shortened tag line
  },
  {
    image: babyPhotoshoot,
    title: 'Baby Photoshoots',
    description: 'Precious early moments', // Shortened tag line
  },
  {
    image: modelPhotoshoot,
    title: 'Model Photoshoots',
    description: 'Professional portfolios', // Shortened tag line
  },
  {
    image: familyPhotoshoot,
    title: 'Family Photoshoots',
    description: 'Timeless memories', // Shortened tag line
  },
  {
    image: housewarmingPhoto,
    title: 'Housewarming Photography',
    description: 'Joy of new beginnings', // Shortened tag line
  },
  {
    image: namingCeremonyPhoto,
    title: 'Naming Ceremony',
    description: 'Blessings of a name', // Shortened tag line
  },
  {
    image: albumDesignPhoto,
    title: 'Album Design & Printing',
    description: 'Beautifully crafted', // Shortened tag line
  },
  {
    image: productPhoto1,
    title: 'Corporate Photography',
    description: 'Images for business', // Shortened tag line
  },
  {
    image:cameraRentalPhoto,
    title: 'Camera Rentals',
    description: 'High-quality equipment', // Shortened tag line
  },
];


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
             {/* Gradient overlay removed */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-card/80 hover:bg-card backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-card/80 hover:bg-card backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-muted hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Caption overlay in bottom-right - Updated */}
      <div className="absolute bottom-6 right-6 z-20 bg-card/80 backdrop-blur-sm px-5 py-3 rounded-lg shadow-[var(--shadow-soft)] text-right"> {/* Added text-right */}
        {/* Increased title size */}
        <p className="font-playfair text-foreground font-semibold text-base md:text-lg">
          {slides[currentSlide].title}
        </p>
        {/* Added tagline */}
        <p className="font-poppins text-foreground/80 text-xs md:text-sm mt-1">
          {slides[currentSlide].description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;