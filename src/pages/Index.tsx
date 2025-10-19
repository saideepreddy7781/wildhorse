import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import CameraRentalsSection from '@/components/CameraRentalsSection'; // Import CameraRentalsSection
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import YouTubeGallery from '@/components/YouTubeGallery';
import FaqSection from '@/components/FaqSection'; // Import the new FAQ section
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const { scrollTo } = location.state;
      const element = document.getElementById(scrollTo);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ContactSection />
        <ServicesSection />
        <PortfolioSection />
        <CameraRentalsSection /> {/* Moved Camera Rentals after Portfolio */}
        <AboutSection />
        <TestimonialsSection />
        <YouTubeGallery />
        <FaqSection /> {/* Added the new FAQ section at the end */}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
