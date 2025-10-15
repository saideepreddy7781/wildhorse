import { Camera, Heart, Baby, Users, Briefcase, Image } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Capture your special day with our professional wedding photography and cinematography services',
  },
  {
    icon: Camera,
    title: 'Pre-Wedding Photoshoot',
    description: 'Beautiful pre-wedding shoots at stunning locations to celebrate your love story',
  },
  {
    icon: Baby,
    title: 'Maternity & Baby Shower',
    description: 'Cherish the beautiful moments of motherhood with our maternity photography',
  },
  {
    icon: Users,
    title: 'Events Photography',
    description: 'Professional coverage for all your special events and celebrations',
  },
  {
    icon: Briefcase,
    title: 'Corporate Photography',
    description: 'Professional photography services for corporate events and product shoots',
  },
  {
    icon: Image,
    title: 'Album Design & Printing',
    description: 'Beautiful album designs and premium printing services to preserve your memories',
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
