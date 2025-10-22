// src/components/ServicesSection.tsx
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { servicesData } from '@/lib/servicesData'; // Import the structured data

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

        {/* --- Updated Grid Layout --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <Link key={service.slug} to={`/service/${service.slug}`} className="group block h-full">
                <Card className="overflow-hidden transition-all duration-300 border-border bg-card flex flex-col h-full group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:shadow-[hsl(var(--gold)/0.4)] relative">
                  {/* Portrait orientation image container */}
                  <div className="aspect-[3/4] overflow-hidden relative">
                     <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                     />
                     {/* Overlay text at bottom */}
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pt-12">
                       <CardTitle className="font-playfair text-xl md:text-2xl text-white mb-2">
                         {service.title}
                       </CardTitle>
                       <CardDescription className="font-poppins text-white/90 text-sm">
                         {service.description}
                       </CardDescription>
                     </div>
                  </div>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;