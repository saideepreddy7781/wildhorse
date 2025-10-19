import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import OptimizedImage from './OptimizedImage';

// Using the specific rental image
import rentalPlaceholderImage from '@/assets/ren-2.jpg';

// --- Google Form Details (Copied) ---
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc42uRVxbUP0zs41vNcNUcKw0dC9NSW2NJuI-0VgCxrmGZQ6w/formResponse';
const NAME_FIELD_ID = 'entry.1889392158';
const MOBILE_FIELD_ID = 'entry.169121633';
const EMAIL_FIELD_ID = 'entry.1119777017';
const SERVICE_FIELD_ID = 'entry.1507775531';
const CITY_FIELD_ID = 'entry.101705663';
const MESSAGE_FIELD_ID = 'entry.1011311059';
// --- End Google Form details ---

const CameraRentalsSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '', // User types the city
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const defaultService = "Camera Rentals"; // Fixed service for this form

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const googleFormData = new FormData();
    googleFormData.append(NAME_FIELD_ID, formData.name);
    googleFormData.append(MOBILE_FIELD_ID, formData.mobile);
    googleFormData.append(EMAIL_FIELD_ID, formData.email);
    googleFormData.append(SERVICE_FIELD_ID, defaultService); // Use fixed service
    googleFormData.append(CITY_FIELD_ID, formData.city);
    googleFormData.append(MESSAGE_FIELD_ID, formData.message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(googleFormData as any),
      });
      toast({
        title: 'Inquiry Submitted!',
        description: "Thank you for your rental inquiry. We'll get back to you soon.",
      });
      setFormData({ name: '', mobile: '', email: '', city: '', message: '' }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: 'Submission Failed',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rentals" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* ... Section Title ... */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Camera & Equipment Rentals
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Rent the best cameras and equipment for your photography and videography projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Image Carousel & Description */}
          <div className="space-y-6">
             {/* ... Carousel ... */}
             <Carousel className="w-full max-w-md mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                <CarouselItem>
                  <Card>
                    <CardContent className="flex items-center justify-center p-0 overflow-hidden rounded-lg">
                       <OptimizedImage
                         src={rentalPlaceholderImage}
                         alt="Camera Rental Equipment"
                         aspectRatio="aspect-square"
                         priority={false}
                       />
                    </CardContent>
                  </Card>
                </CarouselItem>
                 {/* Add more rental images here if needed */}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
             <p className="font-poppins text-foreground/80 text-center leading-relaxed">
              We offer a wide range of high-quality cameras, lenses, lighting, and accessories to meet the demands of any project. Get professional-grade gear without the investment.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-soft)]">
             <h3 className="text-2xl font-playfair font-semibold mb-6 text-center text-foreground">
                Rental Inquiry
             </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="font-poppins" />
              </div>
              {/* Mobile */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required className="font-poppins pl-10" />
              </div>
              {/* Email */}
              <div>
                <Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="font-poppins" />
              </div>
              {/* Service is hidden */}
              <input type="hidden" name="service" value={defaultService} />
              <p className='text-sm font-poppins text-muted-foreground'>Service: <span className='font-medium text-foreground'>{defaultService}</span></p>

              {/* City (Input instead of Select) */}
              <div>
                 <Input type="text" placeholder="Your City" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required className="font-poppins" />
              </div>
              {/* Message */}
              <div>
                <Textarea placeholder="Equipment needed, rental duration, event date, etc." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="font-poppins min-h-[100px]" />
              </div>
              {/* Submit Button */}
              <Button type="submit" className="w-full font-poppins" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Rental Inquiry'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CameraRentalsSection;