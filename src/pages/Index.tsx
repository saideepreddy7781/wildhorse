import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import YouTubeGallery from '@/components/YouTubeGallery';
import CameraRentalsSection from '@/components/CameraRentalsSection';
import FaqSection from '@/components/FaqSection'; // Import the new component
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ContactSection />
        <ServicesSection />
        <YouTubeGallery />
        <PortfolioSection />
        <CameraRentalsSection /> {/* Moved after PortfolioSection */}
        <AboutSection />
        <TestimonialsSection />
        <FaqSection /> {/* Added at the end */}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
