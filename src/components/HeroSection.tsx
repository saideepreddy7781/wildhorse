import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import heroWedding from '@/assets/hero-wedding.jpg';
import maternityShoot from '@/assets/maternity-shoot.jpg';
import preweddingShoot from '@/assets/prewedding-shoot.jpg';

const slides = [
  {
    image: heroWedding,
    title: 'Wedding Photography',
    description: 'Looking for the Best Wedding Photographers? Contact Wild Horse Media today',
  },
  {
    image: maternityShoot,
    title: 'Maternity Photoshoot',
    description: 'Contact Wild Horse Media today to get the Best Photography Service',
  },
  {
    image: preweddingShoot,
    title: 'Pre-Wedding Photoshoot',
    description: 'Capture your love story with our professional pre-wedding photography',
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with 16:9 aspect ratio */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          transform: `scale(${currentSlide % 2 === 0 ? 1.1 : 1})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
        
        {/* Caption overlay in bottom-right */}
        <div className="absolute bottom-8 right-8 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-[var(--shadow-soft)]">
          <p className="font-playfair text-foreground font-semibold text-lg">
            {slides[currentSlide].title}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto bg-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-[var(--shadow-pastel)]">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4 text-foreground animate-fade-in">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg md:text-xl font-poppins text-foreground/80 mb-8">
            {slides[currentSlide].description}
          </p>
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
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-muted'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
