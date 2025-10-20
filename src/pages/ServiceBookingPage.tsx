// src/pages/ServiceBookingPage.tsx
import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm'; // Import the reusable form
import { getServiceBySlug } from '@/lib/servicesData'; // Import data helper and getter

const ServiceBookingPage = () => {
    const { serviceSlug } = useParams<{ serviceSlug: string }>();
    const service = getServiceBySlug(serviceSlug);

    if (!service) {
        console.error(`Service not found for slug: ${serviceSlug}`);
        return <Navigate to="/" replace />;
    }

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

                {/* --- NEW Section 2: Service-Specific Gallery --- */}
                {service.galleryImages && service.galleryImages.length > 0 && (
                    <section className="py-16 md:py-20 bg-background">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center text-foreground">
                                Our {service.title} Work
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                                {service.galleryImages.map((imgSrc, index) => (
                                    <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                        <img
                                            src={imgSrc}
                                            alt={`${service.title} example ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy" // Add lazy loading for gallery images
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
        </div>
    );
};

export default ServiceBookingPage;