import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
// Import the logo file
import logoImage from '@/assets/wh-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust if your header height changes
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      {/* Adjusted padding slightly */}
      <nav className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Name Wrapper */}
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center gap-3 cursor-pointer"> {/* Added flex, items-center, gap-3 */}
            <img
              src={logoImage} // Use the imported logo variable
              alt="Wild Horse Media Logo"
              // Adjust height classes as needed
              className="h-10 md:h-12 w-auto" // Slightly reduced height to accommodate text
            />
            {/* Added Span for the text */}
            <span className="text-xl md:text-2xl font-playfair font-bold text-primary">
              Wild Horse Media
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="font-poppins text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="font-poppins text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('rentals')}
              className="font-poppins text-foreground hover:text-primary transition-colors"
            >
              Camera Rentals
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="font-poppins text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="font-poppins text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="font-poppins"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {/* Mobile nav links remain the same */}
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('rentals')}
              className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2"
            >
              Camera Rentals
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full font-poppins"
            >
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;