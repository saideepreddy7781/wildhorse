import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from '@/assets/wh-logo.png';
import { useNavigate, useLocation } from 'react-router-dom'; // Import hooks

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation(); // Hook to get current path

  const handleNavigation = (id: string) => {
    setIsMenuOpen(false); // Close mobile menu first

    // Check if we are already on the home page
    if (location.pathname === '/') {
      // If on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80; // Adjust if header height changes
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      // If not on home page, navigate home and pass target section ID in state
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Name Wrapper */}
          {/* Changed link to use handleNavigation */}
          <button onClick={() => handleNavigation('home')} className="flex items-center gap-3 cursor-pointer text-left">
            <img
              src={logoImage}
              alt="Wild Horse Media Logo"
              className="h-10 md:h-12 w-auto"
            />
            <span className="text-2xl md:text-3xl font-great-vibes font-bold text-primary whitespace-nowrap">
              Wild Horse Media
            </span>
          </button>

          {/* Desktop Navigation - Updated onClick handlers */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => handleNavigation('home')} className="font-poppins text-foreground hover:text-primary transition-colors">Home</button>
            <button onClick={() => handleNavigation('services')} className="font-poppins text-foreground hover:text-primary transition-colors">Services</button>
            <button onClick={() => handleNavigation('rentals')} className="font-poppins text-foreground hover:text-primary transition-colors">Camera Rentals</button>
            <button onClick={() => handleNavigation('about')} className="font-poppins text-foreground hover:text-primary transition-colors">About Us</button>
            <button onClick={() => handleNavigation('testimonials')} className="font-poppins text-foreground hover:text-primary transition-colors">Testimonials</button>
            <Button onClick={() => handleNavigation('contact')} className="font-poppins">Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Updated onClick handlers */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => handleNavigation('home')} className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2">Home</button>
            <button onClick={() => handleNavigation('services')} className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2">Services</button>
            <button onClick={() => handleNavigation('rentals')} className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2">Camera Rentals</button>
            <button onClick={() => handleNavigation('about')} className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2">About Us</button>
            <button onClick={() => handleNavigation('testimonials')} className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2">Testimonials</button>
            <Button onClick={() => handleNavigation('contact')} className="w-full font-poppins">Contact Us</Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;