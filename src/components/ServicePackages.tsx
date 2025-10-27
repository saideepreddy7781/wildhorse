// src/components/ServicePackages.tsx

import { Check } from 'lucide-react';

interface Package {
  name: string;
  image: string;
  features: string[];
}

interface ServicePackagesProps {
  packages: Package[];
  serviceTitle: string;
}

const ServicePackages = ({ packages, serviceTitle }: ServicePackagesProps) => {
  if (!packages || packages.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">
            {serviceTitle} Packages
          </h2>
          <p className="text-lg font-poppins text-muted-foreground">
            Choose the perfect package for your special moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
            >
              {/* Package Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Package Details */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-4 text-foreground">
                  {pkg.name}
                </h3>
                
                {pkg.features && pkg.features.length > 0 && (
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm font-poppins text-muted-foreground">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
