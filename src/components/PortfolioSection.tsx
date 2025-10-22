import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

// --- Import images from the Our Works folder ---
const portfolioModules = import.meta.glob('@/assets/ourworks/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const portfolioImages = Object.values(portfolioModules) as string[];


const PortfolioSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Individual position control for each image (format: 'horizontal% vertical%')
  const imagePositions = [
    '50% 25%', // Image 1
    '50% 30%', // Image 2
    '50% 20%', // Image 3
    '50% 35%', // Image 4
    '50% 25%', // Image 5
    '50% 30%', // Image 6
    '50% 25%', // Image 7
    '50% 30%', // Image 8
    '50% 25%', // Image 9
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Our Works
          </h2>
          <p className="text-lg font-poppins text-muted-foreground">
            A glimpse of our photography portfolio
          </p>
        </div>

        {/* --- Updated Grid Layout with Hover Effects --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {portfolioImages.map((imageSrc, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={imageSrc}
                alt={`Portfolio image ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                style={{ objectPosition: imagePositions[index] || '50% 30%' }}
                loading="lazy"
              />
              
              {/* Warm Overlay on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 90, 60, 0.3) 0%, rgba(80, 50, 30, 0.4) 100%)',
                }}
              />
              
              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-90">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl group-hover:rotate-90 transition-transform duration-700">
                  <ZoomIn className="h-8 w-8 text-[hsl(var(--gold))]" />
                </div>
              </div>

              {/* Bottom Gradient for Better Aesthetics */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={portfolioImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
