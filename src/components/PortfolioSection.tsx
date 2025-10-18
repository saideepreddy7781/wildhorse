import heroWedding from '@/assets/mar-3.jpeg';
import heroWedding1 from '@/assets/mar-2.jpeg';
import heroWedding3 from '@/assets/mar-1.jpeg';

import maternityShoot from '@/assets/mat-3.jpg';
import maternityShoot2 from '@/assets/mat-2.jpg';
import eventsPhoto from '@/assets/eng-3.jpeg';
import eventsPhoto2 from '@/assets/eng-2.jpeg';
import eventsPhoto3 from '@/assets/eng-1.jpeg';

import preweddingShoot from '@/assets/pwe-1.jpg';
import preweddingShoot2 from '@/assets/pwe-2.jpg';
import preweddingShoot3 from '@/assets/pwe-3.jpg';
import babyPhotoshoot3 from '@/assets/baby-3.jpg';


import babyPhotoshoot1 from '@/assets/baby-2.jpg';
import modelPhotoshoot from '@/assets/mod-2.jpg';
import familyPhotoshoot from '@/assets/famm-2.jpeg';
import housewarmingPhoto from '@/assets/hwa-2.jpeg';
import namingCeremonyPhoto from '@/assets/mat-3.jpg';
import albumDesignPhoto from '@/assets/br-3.jpg';
import productPhoto from '@/assets/pr-3.jpeg';
import cameraRentalPhoto from '@/assets/br-2.jpg';

// Updated categories to be more specific and reduce duplicates
const portfolioItems = [
  { image: heroWedding, title: 'Wedding Moments', category: 'Wedding Ceremony' }, // More specific
  { image: maternityShoot, title: 'Glowing Motherhood', category: 'Maternity' },
  { image: preweddingShoot, title: 'Sunset Romance', category: 'Pre-Wedding' },
  { image: eventsPhoto, title: 'Elegant Event Setup', category: 'Event Decor' }, // More specific
  { image: heroWedding1, title: 'Candid Ceremony', category: 'Candid Wedding' }, // More specific
  { image: preweddingShoot2, title: 'Couple\'s Embrace', category: 'Couple Shoot' }, // More specific
  { image: maternityShoot2, title: 'Garden Maternity', category: 'Outdoor Maternity' }, // More specific
  { image: eventsPhoto2, title: 'Corporate Gala', category: 'Corporate Event' }, // More specific
  { image: heroWedding3, title: 'Bridal Portrait', category: 'Bridal Shoot' }, // More specific
  { image: preweddingShoot3, title: 'Love in Nature', category: 'Outdoor Pre-Wedding' }, // More specific
  { image: babyPhotoshoot3, title: 'Baby Shower Joy', category: 'Baby Shower' },
  { image: eventsPhoto3, title: 'Wedding', category: 'Wedding Ceremony' }, // More specific
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Our Works
          </h2>
          <p className="text-lg font-poppins text-muted-foreground">
            A glimpse of our photography portfolio
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-primary-foreground">
                  <p className="text-xs font-poppins uppercase tracking-wider mb-0.5">
                    {item.category}
                  </p>
                  <h3 className="text-base font-playfair font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;