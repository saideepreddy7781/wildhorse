import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection'; // Moved import up for clarity
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import YouTubeGallery from '@/components/YouTubeGallery';
import CameraRentalsSection from '@/components/CameraRentalsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ContactSection /> {/* Moved ContactSection here */}
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <YouTubeGallery />
        <CameraRentalsSection />
        {/* ContactSection removed from the bottom */}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;