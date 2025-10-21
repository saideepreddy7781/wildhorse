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

// --- Updated slides array with new images ---
const slides = [
  { image: wedLanding, title: 'Wedding Photography', description: 'Looking for the best wedding photographers in South India? Contact Wild horse Media today!' },
  { image: pweLanding, title: 'Pre-Wedding Photoshoot', description: 'Searching for the Most Romantic Pre-Wedding Photographers in South India? Book your dreamy pre-wedding photography session with Wild Horse Media today!' },
  { image: matLanding, title: 'Maternity Shoots', description: 'Where Can I Find the Best Maternity Photographers in Bengaluru? Cherish this journey forever. Contact Wild Horse Media for elegant maternity photoshoots!' },
  { image: babysLanding, title: 'Baby Shower', description: 'Need Creative Baby Shower Photographers and Coverage in South India? Capture the joy of your celebration! Enquire about Wild Horse Media baby shower packages now!' },
  { image: babyLanding, title: 'Baby Photoshoots', description: 'Looking for Professional Newborn and Baby Photographers in Bengaluru? Tiny moments, lifelong memories. Schedule your baby photoshoot with Wild Horse Media!' },
  { image: brideLanding, title: 'Bridal Portraits', description: 'Discover the Best Bridal Portrait Photographers for Your Stunning Wedding Day Look? Your solo moment to shine! Get a breathtaking bridal photoshoot package from Wild Horse Media.' },
  { image: familyLanding, title: 'Family Photoshoots', description: 'Searching for the Top Family Portrait Photographers to Capture Your Bond in South India? Create stunning family heirlooms. Contact Wild Horse Media for memorable family photoshoots!' },
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
    // --- Adjusted height for mobile ---
    <section id="home" className="relative h-[75vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            // --- Removed background style, added opacity transition container ---
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
             {/* --- Added img tag for better aspect ratio control --- */}
             <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover" // Use object-cover (or object-contain if needed)
             />
             {/* Gradient overlay can be added back here if needed */}
             {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Unchanged) */}
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

      {/* Slide Indicators (Unchanged) */}
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

      {/* Caption overlay (Unchanged) */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 bg-card/80 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3 rounded-lg shadow-[var(--shadow-soft)] text-right">
        <p className="font-playfair text-foreground font-semibold text-base md:text-lg">
          {slides[currentSlide].title}
        </p>
        <p className="font-poppins text-foreground/80 text-xs md:text-sm mt-1">
          {slides[currentSlide].description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;