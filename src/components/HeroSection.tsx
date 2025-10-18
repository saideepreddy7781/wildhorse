import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import heroWedding from '@/assets/hero-wedding.jpg';
import maternityShoot from '@/assets/maternity-shoot.jpg';
import preweddingShoot from '@/assets/prewedding-shoot.jpg';
import eventsPhoto from '@/assets/events-photo.jpg'; // Using this as a placeholder

// Updated slides array to include all 12 categories
const slides = [
  // 1. Wedding
  {
    image: heroWedding,
    title: 'Wedding Photography',
    description: 'Capturing the magic of your special day.',
  },
  // 2. Pre-wedding
  {
    image: preweddingShoot,
    title: 'Pre-Wedding Photoshoot',
    description: 'Celebrate your love story before the big day.',
  },
  // 3. Maternity & Baby showers
  {
    image: maternityShoot,
    title: 'Maternity & Baby Showers',
    description: 'Cherishing the beauty of anticipation and celebration.',
  },
  // 4. Product / E-Commerce photography
  {
    image: eventsPhoto, // Placeholder - Add a specific product image
    title: 'Product Photography',
    description: 'Showcasing your products in the best light.',
  },
  // 5. Baby photoshoots
  {
    image: maternityShoot, // Placeholder - Add a specific baby image
    title: 'Baby Photoshoots',
    description: 'Capturing the precious early moments.',
  },
  // 6. Model photoshoots
  {
    image: preweddingShoot, // Placeholder - Add a specific model image
    title: 'Model Photoshoots',
    description: 'Professional portfolios for aspiring and established models.',
  },
  // 7. Family photoshoots
  {
    image: heroWedding, // Placeholder - Add a specific family image
    title: 'Family Photoshoots',
    description: 'Creating timeless memories with your loved ones.',
  },
  // 8. Housewarming
  {
    image: eventsPhoto, // Placeholder - Add a specific housewarming image
    title: 'Housewarming Photography',
    description: 'Documenting the joy of your new beginning.',
  },
  // 9. Naming ceremony
  {
    image: maternityShoot, // Placeholder - Add a specific naming ceremony image
    title: 'Naming Ceremony',
    description: 'Capturing the blessings of a special name.',
  },
  // 10. Album designs and printing
  {
    image: heroWedding, // Placeholder - Add a specific album image
    title: 'Album Design & Printing',
    description: 'Preserving your memories in beautifully crafted albums.',
  },
  // 11. Corporate photography
  {
    image: eventsPhoto,
    title: 'Corporate Photography',
    description: 'Professional images for your business needs.',
  },
  // 12. Camera Rentals
  {
    image: preweddingShoot, // Placeholder - Add a specific camera rental image
    title: 'Camera Rentals',
    description: 'High-quality equipment for your photography projects.',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-advances every 5 seconds
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
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
             <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
            {/* Caption overlay in bottom-right */}
             <div className="absolute bottom-8 right-8 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-[var(--shadow-soft)]">
              <p className="font-playfair text-foreground font-semibold text-lg">
                {slide.title}
              </p>
            </div>
          </div>
        ))}
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-[var(--shadow-pastel)]">
          {/* Animate title and description changes */}
          <div key={currentSlide} className="animate-fade-in">
             <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4 text-foreground">
               {slides[currentSlide].title}
             </h2>
             <p className="text-lg md:text-xl font-poppins text-foreground/80 mb-8">
               {slides[currentSlide].description}
             </p>
          </div>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="font-poppins text-lg px-8 py-6"
          >
            Book Now
          </Button>
        </div>
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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
    </section>
  );
};

export default HeroSection;