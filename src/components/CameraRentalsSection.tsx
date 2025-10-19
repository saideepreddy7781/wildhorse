import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Using preweddingShoot as placeholder - replace with your actual rental image import
import rentalPlaceholderImage from '@/assets/ren-1.jpg';

const CameraRentalsSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: 'rental', // Pre-select service
    city: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Camera Rental Inquiry`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nService Request: Camera Rental\nCity: ${formData.city}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:teamwildhorse@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast({
      title: 'Opening email client...',
      description: 'Your rental inquiry will be sent to teamwildhorse@gmail.com',
    });

    setFormData({
      name: '',
      mobile: '',
      email: '',
      service: 'rental',
      city: '',
      message: '',
    });
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

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image Carousel & Description */}
          <div className="space-y-6">
            <Carousel className="w-full max-w-md mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                {/* Add more CarouselItems if you have multiple rental images */}
                <CarouselItem>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                       <img
                         src={rentalPlaceholderImage} // Use your imported image
                         alt="Camera Rental Equipment"
                         className="object-cover w-full h-full"
                       />
                    </CardContent>
                  </Card>
                </CarouselItem>
                {/* Example of a second item:
                <CarouselItem>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                       <img src={anotherRentalImage} alt="Another Rental Item" className="object-cover w-full h-full"/>
                    </CardContent>
                  </Card>
                </CarouselItem>
                 */}
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
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-poppins"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                  className="font-poppins"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-poppins"
                />
              </div>

              {/* Service is pre-filled, so we hide this select */}
               <input type="hidden" name="service" value="rental" />

              <div>
                <Select
                  value={formData.city}
                  onValueChange={(value) => setFormData({ ...formData, city: value })}
                >
                  <SelectTrigger className="font-poppins">
                    <SelectValue placeholder="Select Your City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                     <SelectItem value="mysore">Mysore</SelectItem>
                     <SelectItem value="tumkur">Tumkur</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder="Equipment needed, rental duration, etc. (Optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="font-poppins min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full font-poppins" size="lg">
                Submit Rental Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraRentalsSection;