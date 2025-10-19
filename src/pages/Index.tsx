// src/pages/Index.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import YouTubeGallery from '@/components/YouTubeGallery'; // Import remains the same
import CameraRentalsSection from '@/components/CameraRentalsSection';
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
        {/* --- Moved YouTubeGallery before PortfolioSection --- */}
        <YouTubeGallery />
        <PortfolioSection />
        {/* --- End of change --- */}
        <AboutSection />
        <TestimonialsSection />
        {/* YouTubeGallery removed from here */}
        <CameraRentalsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;