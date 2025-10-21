// src/pages/Index.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection'; // Will include intro text + form
import ServicesSection from '@/components/ServicesSection';
import YouTubeGallery from '@/components/YouTubeGallery'; // Phometo's Videography section
import PortfolioSection from '@/components/PortfolioSection'; // "Our Works"
import AboutSection from '@/components/AboutSection'; // Will include Hire CTA
import TestimonialsSection from '@/components/TestimonialsSection';
import CameraRentalsSection from '@/components/CameraRentalsSection'; // Keeping this section
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

        {/* 2. Intro Text & Booking Form */}
        <ContactSection />

        {/* 3. Services ("What We Do?") */}
        <ServicesSection />

        {/* 4. Videography Portfolio */}
        <YouTubeGallery />

        {/* 5. Image Portfolio ("Our Works") */}
        <PortfolioSection />

        {/* 6. About Section */}
        <AboutSection />

        {/* 7. Testimonials */}
        <TestimonialsSection />

        {/* 8. Camera Rentals (Keeping as a distinct section) */}
        <CameraRentalsSection />

        {/* 9. FAQs (Includes Top Searches from Phometo example) */}
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;