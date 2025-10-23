// src/pages/Index.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection'; // Includes Intro Text, "Get in Touch" title & Form
import ServicesSection from '@/components/ServicesSection';
import YouTubeGallery from '@/components/YouTubeGallery'; // Phometo's Videography section
import PortfolioSection from '@/components/PortfolioSection'; // "Our Works"
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CameraRentalsSection from '@/components/CameraRentalsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 1. Hero Section (Slider) */}
        <HeroSection />

        {/* 2. Services Section ("What We Do?") - Moved Up */}
        <ServicesSection />

        {/* 3. Videography Portfolio - Moved Up */}
        <YouTubeGallery />

        {/* 4. Image Portfolio ("Our Works") - Moved Up */}
        <PortfolioSection />

        {/* 5. Get in Touch (Intro Text & Booking Form) - MOVED HERE */}
        <ContactSection />

        {/* 6. About Section */}
        <AboutSection />

        {/* 7. Testimonials */}
        <TestimonialsSection />

        {/* 8. Camera Rentals */}
        <CameraRentalsSection />

        {/* 9. FAQs */}
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;