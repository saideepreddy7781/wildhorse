// src/components/HeroSection.tsx

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Import hero carousel images from landing folder ---
import wedLanding from '../assets/landing/wedding.jpg';
import pweLanding from '../assets/landing/Copy of _WHM1566.jpg';
import matLanding from '../assets/landing/Copy of WHM-443.jpg';
import babysLanding from '../assets/landing/Copy of whm (17).jpg';
import babyLanding from '../assets/landing/Copy of DSC02110 copy.jpg';
import brideLanding from '../assets/landing/WHM-1460.jpg';
import familyLanding from '../assets/landing/DSC08189.jpg';

// --- Updated slides array with service descriptions ---
const slides = [
  { image: wedLanding, title: 'Wedding Photography', description: 'Looking for the best wedding photographers in South India?' },
  { image: pweLanding, title: 'Pre-Wedding Photoshoot', description: 'Searching for the Most Romantic Pre-Wedding Photographers?' },
  { image: matLanding, title: 'Maternity Shoots', description: 'Where Can I Find the Best Maternity Photographers in Bengaluru?' },
  { image: babysLanding, title: 'Baby Shower', description: 'Need Creative Baby Shower Photographers and Coverage?' },
  { image: babyLanding, title: 'Baby Photoshoots', description: 'Looking for Professional Newborn and Baby Photographers?' },
  { image: brideLanding, title: 'Bridal Portraits', description: 'Discover the Best Bridal Portrait Photographers!' },
  { image: familyLanding, title: 'Family Photoshoots', description: 'Create stunning family heirlooms!' },
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
    <section id="home" className="relative h-[84vh] flex items-center justify-center overflow-hidden -mt-[80px] pt-[80px]">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
           {slides.map((slide, index) => (
             <div
               key={index}
               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
             >
               {/* Check if image needs blur background (portrait) or can be cropped (landscape) */}
               {/* For now, we'll detect this with CSS - portrait images will show blur background */}
               <div className="absolute inset-0 flex items-center justify-center">
                 {/* Blurred background layer - only visible for portrait images */}
                 <img
                    src={slide.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110 brightness-75"
                    aria-hidden="true"
                 />
                 {/* Main image - will use object-cover for landscape, object-contain for portrait */}
                 <img
                    src={slide.image}
                    alt={slide.title}
                    className="relative w-full h-full object-cover"
                    style={{
                      objectFit: 'cover',
                    }}
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      const aspectRatio = img.naturalWidth / img.naturalHeight;
                      // If portrait (aspect ratio < 1), use contain with blur background
                      if (aspectRatio < 1) {
                        img.style.objectFit = 'contain';
                      }
                    }}
                 />
               </div>
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