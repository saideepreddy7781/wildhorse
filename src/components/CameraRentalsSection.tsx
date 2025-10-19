import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import rentalPlaceholderImage from '@/assets/ren-3.avif';

// --- Google Form Details ---
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
  const [formKey, setFormKey] = useState(Date.now());
  const defaultService = "Camera Rentals";

  const handleSubmit = () => {
    setTimeout(() => {
      toast({
        title: 'Inquiry Submitted!',
        description: "Thank you for your rental inquiry. We'll get back to you soon.",
      });
      setFormKey(Date.now());
    }, 500);
  };

  return (
    <section id="rentals" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Camera & Equipment Rentals
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Rent the best cameras and equipment for your photography and videography projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-6">
            <Carousel className="w-full max-w-md mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                <CarouselItem>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                      <img src={rentalPlaceholderImage} alt="Camera Rental Equipment" className="object-cover w-full h-full" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            <p className="font-poppins text-foreground/80 text-center leading-relaxed">
              We offer a wide range of high-quality cameras, lenses, lighting, and accessories to meet the demands of any project. Get professional-grade gear without the investment.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-center text-foreground">
              Rental Inquiry
            </h3>
            <form
              key={formKey}
              action={GOOGLE_FORM_ACTION_URL}
              method="POST"
              target="hidden_iframe_rentals"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <Input name={NAME_FIELD_ID} type="text" placeholder="Your Name" required className="font-poppins" />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input name={MOBILE_FIELD_ID} type="tel" placeholder="Mobile Number" required className="font-poppins pl-10" />
              </div>
              <div>
                <Input name={EMAIL_FIELD_ID} type="email" placeholder="Email" required className="font-poppins" />
              </div>
              <input type="hidden" name={SERVICE_FIELD_ID} value={defaultService} />
              <p className='text-sm font-poppins text-muted-foreground'>Service: <span className='font-medium text-foreground'>{defaultService}</span></p>
              <div>
                <Input name={CITY_FIELD_ID} type="text" placeholder="Your City" required className="font-poppins" />
              </div>
              <div>
                <Textarea name={MESSAGE_FIELD_ID} placeholder="Equipment needed, rental duration, event date, etc." className="font-poppins min-h-[100px]" />
              </div>
              <Button type="submit" className="w-full font-poppins" size="lg">
                Submit Rental Inquiry
              </Button>
            </form>
            <iframe name="hidden_iframe_rentals" id="hidden_iframe_rentals" style={{ display: 'none' }}></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CameraRentalsSection;
