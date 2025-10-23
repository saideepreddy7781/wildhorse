// src/pages/ServiceBookingPage.tsx
import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm'; // Import the reusable form
import ImageLightbox from '@/components/ImageLightbox';
import { getServiceBySlug } from '@/lib/servicesData'; // Import data helper and getter
import { PlayCircle, ZoomIn } from 'lucide-react'; // Import icons

// Helper function to extract YouTube Video ID from URL
const getYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.substring(1); // Get path after "/"
    }
    if (urlObj.hostname.includes('youtube.com')) {
      const params = new URLSearchParams(urlObj.search);
      return params.get('v'); // Get the 'v' parameter
    }
  } catch (e) {
    console.error("Error parsing YouTube URL:", e);
  }
  return null;
};


const ServiceBookingPage = () => {
    const { serviceSlug } = useParams<{ serviceSlug: string }>();
    const service = getServiceBySlug(serviceSlug);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!service) {
        console.error(`Service not found for slug: ${serviceSlug}`);
        return <Navigate to="/" replace />;
    }

    // Extract video IDs
    const videoIds = (service.videos ?? []).map(getYouTubeVideoId).filter(id => id !== null) as string[];

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        if (service.galleryImages) {
            setCurrentImageIndex((prev) => (prev + 1) % service.galleryImages!.length);
        }
    };

    const previousImage = () => {
        if (service.galleryImages) {
            setCurrentImageIndex((prev) => (prev - 1 + service.galleryImages!.length) % service.galleryImages!.length);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Section 1: Booking Form and Title */}
                <div
                    className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-4 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${service.image})` }}
                >
                    <div className="absolute inset-0 bg-black/60 z-0"></div>
                    <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="text-white space-y-4 md:space-y-6 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold ">
                                {service.title} Photography
                            </h1>
                            <p className="text-lg md:text-xl font-poppins text-gray-200 leading-relaxed">
                                {service.fullDescription || `Looking for ${service.title} photography? Contact Wild Horse Media today for the best packages.`}
                            </p>
                             <ul className="list-disc list-inside font-poppins text-gray-200 space-y-1 pt-4 text-left inline-block">
                                <li>Please fill out the form</li>
                                <li>Get Customized Photoshoot Packages</li>
                                <li>Get your {service.title} shoot done with Us</li>
                            </ul>
                        </div>
                        <div className="w-full max-w-lg mx-auto md:mx-0">
                            <BookingForm defaultService={service.title} />
                        </div>
                    </div>
                </div>

                {/* Section 2: Service-Specific Gallery */}
                {service.galleryImages && service.galleryImages.length > 0 && (
                    <section className="py-16 md:py-20 bg-background">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center text-foreground">
                                Our {service.title} Work
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                                {service.galleryImages.map((imgSrc, index) => (
                                    <div 
                                        key={index} 
                                        onClick={() => openLightbox(index)}
                                        className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                                    >
                                        <img
                                            src={imgSrc}
                                            alt={`${service.title} example ${index + 1}`}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
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
                                            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl group-hover:rotate-90 transition-transform duration-700">
                                                <ZoomIn className="h-6 w-6 text-[hsl(var(--gold))]" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                 {/* ** NEW Section 3: Service-Specific Videos ** */}
                {videoIds.length > 0 && (
                    <section className="py-16 md:py-20 bg-muted/30"> {/* Different background */}
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center text-foreground">
                                {service.title} Videos
                            </h2>
                            {/* Grid layout for videos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                {videoIds.map((videoId) => (
                                    <div key={videoId} className="aspect-video rounded-lg overflow-hidden shadow-lg border border-border">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title={`YouTube video player - ${service.title}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                 {/* Optional: Add more sections below if needed */}
            </main>
            <Footer />

            {/* Lightbox */}
            {lightboxOpen && service.galleryImages && (
                <ImageLightbox
                    images={service.galleryImages}
                    currentIndex={currentImageIndex}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrevious={previousImage}
                />
            )}
        </div>
    );
};

export default ServiceBookingPage;