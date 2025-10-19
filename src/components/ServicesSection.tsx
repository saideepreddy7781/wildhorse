import { Camera, Heart, Baby, Users, Briefcase, Image, ShoppingBag, Home, Cake, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

// Import existing images
import heroWedding from '@/assets/mar-2.jpeg';
import maternityShoot from '@/assets/mat-3.jpeg';
import eventsPhoto from '@/assets/pr-6.jpg';
import preweddingShoot from '@/assets/pwe-2.jpeg';
import babyPhotoshoot from '@/assets/baby-5.jpg';
import modelPhotoshoot from '@/assets/mod-2.jpg';
import familyPhotoshoot from '@/assets/famm-2.jpeg';
import housewarmingPhoto from '@/assets/hwa-2.jpeg';
import namingCeremonyPhoto from '@/assets/mat-5.jpeg';
import albumDesignPhoto from '@/assets/br-3.jpg';
import productPhoto from '@/assets/cr-3.jpg';
import cameraRentalPhoto from '@/assets/ren-2.jpg';
import productPhoto1 from '@/assets/pr-3.jpeg';



const services = [
  // 1. Wedding
  {
    icon: Heart, // Icon reference kept for potential future use, but not rendered
    title: 'Wedding',
    description: 'Capture your special day with our professional wedding photography and cinematography services',
    image: heroWedding,
  },
  // 2. Pre-wedding
  {
    icon: Camera,
    title: 'Pre-wedding',
    description: 'Beautiful pre-wedding shoots at stunning locations to celebrate your love story',
    image: preweddingShoot,
  },
  // 3. Maternity & Baby showers
  {
    icon: Baby,
    title: 'Maternity & Baby showers',
    description: 'Cherish the beautiful moments of motherhood with our maternity photography',
    image: maternityShoot,
  },
  // 4. Product / E-Commerce photography
  {
    icon: ShoppingBag,
    title: 'Product / E-Commerce photography',
    description: 'Professional product photography for your online store and marketing needs',
    image: eventsPhoto, // Placeholder - Add productPhoto
  },
  // 5. Baby photoshoots
  {
    icon: Baby,
    title: 'Baby photoshoots',
    description: 'Adorable baby photography capturing precious early moments',
    image: babyPhotoshoot, // Placeholder - Add babyPhotoshoot
  },
  // 6. Model photoshoots
  {
    icon: Users,
    title: 'Model photoshoots',
    description: 'Professional portfolio shoots for aspiring and established models',
    image: modelPhotoshoot, // Placeholder - Add modelPhotoshoot
  },
  // 7. Family photoshoots
  {
    icon: Users,
    title: 'Family photoshoots',
    description: 'Create lasting memories with beautiful family portraits',
    image: familyPhotoshoot, // Placeholder - Add familyPhotoshoot
  },
  // 8. Housewarming
  {
    icon: Home,
    title: 'Housewarming',
    description: 'Document your special housewarming celebration with professional photography',
    image: housewarmingPhoto, // Placeholder - Add housewarmingPhoto
  },
  // 9. Naming ceremony
  {
    icon: Cake,
    title: 'Naming ceremony',
    description: "Capture the joy of your baby's naming ceremony",
    image: namingCeremonyPhoto, // Placeholder - Add namingCeremonyPhoto
  },
  // 10. Album designs and printing
  {
    icon: Image,
    title: 'Album designs and printing',
    description: 'Beautiful album designs and premium printing services to preserve your memories',
    image: albumDesignPhoto, // Placeholder - Add albumDesignPhoto
  },
  // 11. Corporate photography
  {
    icon: Briefcase,
    title: 'Corporate photography',
    description: 'Professional photography services for corporate events and business needs',
    image: productPhoto,
  },
  // 12. Camera Rentals
  {
    icon: Video,
    title: 'Camera Rentals',
    description: 'High-quality camera equipment rental services for your photography needs',
    image: cameraRentalPhoto, // Placeholder - Add cameraRentalPhoto
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            What We Do?
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Professional photography services for all your special moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-[var(--shadow-pastel)] transition-all duration-300 hover:-translate-y-2 border-border bg-card flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                 <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                 />
              </div>
              <div className="flex flex-col flex-grow">
                <CardHeader>
                  {/* Container for the title with background */}
                  <div className="mb-4 inline-flex items-center justify-center p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-full h-16">
                    {/* Moved CardTitle here, removed icon */}
                    <CardTitle className="font-playfair text-xl text-primary text-center">
                      {service.title}
                    </CardTitle>
                  </div>
                  {/* Removed the original CardTitle placement */}
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="font-poppins text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;