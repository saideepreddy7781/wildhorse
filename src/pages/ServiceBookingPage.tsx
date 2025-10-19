// src/pages/ServiceBookingPage.tsx
import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm'; // Import the reusable form
import { getServiceBySlug } from '@/lib/servicesData'; // Import data helper and getter

const ServiceBookingPage = () => {
    const { serviceSlug } = useParams<{ serviceSlug: string }>(); // Get slug from URL parameter
    const service = getServiceBySlug(serviceSlug); // Find service data using the helper

    // If service slug is invalid/not found, redirect to the home page
    if (!service) {
        console.error(`Service not found for slug: ${serviceSlug}`);
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {/* Main content area */}
            <main className="flex-grow">
                {/* Section with dynamic background image */}
                <div className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-4 overflow-hidden">
                    {/* Background image with lazy loading */}
                    <img
                        src={service.image}
                        alt={service.title}
                        loading="eager"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    {/* Darkening overlay for text contrast */}
                    <div className="absolute inset-0 bg-black/60 z-0"></div>

                    {/* Content grid */}
                    <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

                        {/* Left Side: Text Content */}
                        <div className="text-white space-y-4 md:space-y-6 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold ">
                                {service.title} Photography
                            </h1>
                            <p className="text-lg md:text-xl font-poppins text-gray-200 leading-relaxed">
                                {/* Use fullDescription or fallback */}
                                {service.fullDescription || `Looking for ${service.title} photography? Contact Wild Horse Media today for the best packages.`}
                            </p>
                            {/* Bullet points mimicking the example */}
                             <ul className="list-disc list-inside font-poppins text-gray-200 space-y-1 pt-4 text-left inline-block">
                                <li>Please fill out the form</li>
                                <li>Get Customized Photoshoot Packages</li>
                                <li>Get your {service.title} shoot done with Us</li>
                            </ul>
                        </div>

                        {/* Right Side: Form */}
                        <div className="w-full max-w-lg mx-auto md:mx-0"> {/* Constrain form width */}
                            {/* Render the BookingForm, passing the specific service title */}
                            <BookingForm defaultService={service.title} />
                        </div>
                    </div>
                </div>
                 {/* Optional: Add more sections below if needed for specific service details */}
            </main>
            <Footer />
        </div>
    );
};

export default ServiceBookingPage;