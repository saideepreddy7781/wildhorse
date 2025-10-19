import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Import your new images ---
import wedLanding from '@/assets/wed-landing.jpeg';
import pweLanding from '@/assets/pwe-landing.jpg';
import matLanding from '@/assets/mat-landing page.jpg';
import babysLanding from '@/assets/Babys-landing.jpg'; // For baby shower/naming ceremony
import babyLanding from '@/assets/baby-landing.jpg';   // For baby photoshoots
import brideLanding from '@/assets/Bride-landing.jpg'; // Can be used for model/bridal shoots
import familyLanding from '@/assets/family-landing.jpg';

// --- Updated slides array with new images ---
const slides = [
  {
    image: wedLanding,
    title: 'Wedding Photography',
    description: 'Capturing the magic',
  },
  {
    image: pweLanding,
    title: 'Pre-Wedding Photoshoot',
    description: 'Your love story',
  },
  {
    image: matLanding,
    title: 'Maternity Shoots',
    description: 'Anticipation & celebration',
  },
  {
    image: babysLanding,
    title: 'Baby Shower',
    description: 'Joyful new beginnings',
  },
  {
    image: babyLanding,
    title: 'Baby Photoshoots',
    description: 'Precious early moments',
  },
  {
    image: brideLanding,
    title: 'Bridal Portraits',
    description: 'The Princess Bride',
  },
  {
    image: familyLanding,
    title: 'Family Photoshoots',
    description: 'Timeless memories',
  },
  // Reusing some images for the remaining categories
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
             {/* Gradient overlay removed for clearer images */}
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

      {/* Caption overlay in bottom-right */}
      <div className="absolute bottom-6 right-6 z-20 bg-card/80 backdrop-blur-sm px-5 py-3 rounded-lg shadow-[var(--shadow-soft)] text-right">
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
