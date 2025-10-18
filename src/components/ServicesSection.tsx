import { Camera, Heart, Baby, Users, Briefcase, Image, ShoppingBag, Home, Cake, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Heart,
    title: 'Wedding',
    description: 'Capture your special day with our professional wedding photography and cinematography services',
  },
  {
    icon: Camera,
    title: 'Pre-wedding',
    description: 'Beautiful pre-wedding shoots at stunning locations to celebrate your love story',
  },
  {
    icon: Baby,
    title: 'Maternity & Baby showers',
    description: 'Cherish the beautiful moments of motherhood with our maternity photography',
  },
  {
    icon: ShoppingBag,
    title: 'Product / E-Commerce photography',
    description: 'Professional product photography for your online store and marketing needs',
  },
  {
    icon: Baby,
    title: 'Baby photoshoots',
    description: 'Adorable baby photography capturing precious early moments',
  },
  {
    icon: Users,
    title: 'Model photoshoots',
    description: 'Professional portfolio shoots for aspiring and established models',
  },
  {
    icon: Users,
    title: 'Family photoshoots',
    description: 'Create lasting memories with beautiful family portraits',
  },
  {
    icon: Home,
    title: 'Housewarming',
    description: 'Document your special housewarming celebration with professional photography',
  },
  {
    icon: Cake,
    title: 'Naming ceremony',
    description: "Capture the joy of your baby's naming ceremony",
  },
  {
    icon: Image,
    title: 'Album designs and printing',
    description: 'Beautiful album designs and premium printing services to preserve your memories',
  },
  {
    icon: Briefcase,
    title: 'Corporate photography',
    description: 'Professional photography services for corporate events and business needs',
  },
  {
    icon: Video,
    title: 'Camera Rentals',
    description: 'High-quality camera equipment rental services for your photography needs',
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
              className="group hover:shadow-[var(--shadow-pastel)] transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader>
                <div className="mb-4 inline-block p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-poppins text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
