// src/components/HeroSection.tsx

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Import your new images with corrected relative paths ---
import wedLanding from '../assets/wed-landing.png';
import pweLanding from '../assets/pwe-landing.jpg';
import matLanding from '../assets/mat-landing page.jpg';
import babysLanding from '../assets/Babys-landing.jpg';
import babyLanding from '../assets/baby-landing.jpg';
import brideLanding from '../assets/br-2.jpeg';
import familyLanding from '../assets/family-landing.jpg';

// --- Updated slides array descriptions ---
const slides = [
  { image: wedLanding, title: 'Wedding Photography', description: 'Looking for the Best Wedding Photographers in Bangalore? Contact Phometo today' },
  { image: pweLanding, title: 'Pre-Wedding Photoshoot', description: 'Searching for the Most Romantic Pre-Wedding Photographers? Book your dreamy session!' },
  { image: matLanding, title: 'Maternity Shoots', description: 'Contact Phometo today to get the Best Photography Service in Bangalore.' },
  { image: babysLanding, title: 'Baby Shower', description: 'Need Creative Baby Shower Photographers? Enquire about packages now!' },
  { image: babyLanding, title: 'Baby Photoshoots', description: 'Professional Newborn and Baby Photographers in Bengaluru. Tiny moments, lifelong memories.' },
  { image: brideLanding, title: 'Bridal Portraits', description: 'Looking for the Best Photographers in Bangalore? Contact Phometo today' },
  { image: familyLanding, title: 'Family Photoshoots', description: 'Create stunning family heirlooms with memorable family photoshoots!' },
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
    <section id="home" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
           {slides.map((slide, index) => (
             <div
               key={index}
               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
             >
               <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
               />
             </div>
           ))}
      </div>

      {/* Navigation Arrows */}
        <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-card/80 hover:bg-card backdrop-blur-sm p-2 md:p-3 rounded-full transition-all"
            aria-label="Previous slide"
        >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
        </button>
        <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-card/80 hover:bg-card backdrop-blur-sm p-2 md:p-3 rounded-full transition-all"
            aria-label="Next slide"
        >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
      </button>


      {/* Slide Indicators */}
       <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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

      {/* Caption overlay */}
      {/* --- ADJUSTED POSITIONING TO BOTTOM-RIGHT --- */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 bg-black/50 backdrop-blur-sm px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-lg text-right max-w-sm">
        <p className="font-playfair text-white font-bold text-xl md:text-3xl mb-1">
          {slides[currentSlide].title}
        </p>
        <p className="font-poppins text-gray-200 text-sm md:text-base">
          {slides[currentSlide].description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;