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
                <Card className="overflow-hidden transition-all duration-300 border-border bg-card flex flex-col h-full group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:shadow-[hsl(var(--gold)/0.4)]">
                  <div className="aspect-square overflow-hidden">
                     <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                     />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                       {/* Title Section (adjusted for consistent height if needed) */}
                       <div className="mb-4 inline-flex items-center justify-center p-2 rounded-lg bg-primary/10 transition-colors duration-300 w-full h-16 group-hover:bg-[hsl(var(--gold)/0.9)]">
                        <CardTitle className="font-playfair text-xl text-primary text-center transition-colors duration-300 group-hover:text-primary-foreground">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="font-poppins text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardContent>
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