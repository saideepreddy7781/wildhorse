import heroWedding from '@/assets/hero-wedding.jpg';
import maternityShoot from '@/assets/maternity-shoot.jpg';
import preweddingShoot from '@/assets/prewedding-shoot.jpg';
import eventsPhoto from '@/assets/events-photo.jpg';

// Updated categories to be more specific and reduce duplicates
const portfolioItems = [
  { image: heroWedding, title: 'Wedding Moments', category: 'Wedding Ceremony' }, // More specific
  { image: maternityShoot, title: 'Glowing Motherhood', category: 'Maternity' },
  { image: preweddingShoot, title: 'Sunset Romance', category: 'Pre-Wedding' },
  { image: eventsPhoto, title: 'Elegant Event Setup', category: 'Event Decor' }, // More specific
  { image: heroWedding, title: 'Candid Ceremony', category: 'Candid Wedding' }, // More specific
  { image: preweddingShoot, title: 'Couple\'s Embrace', category: 'Couple Shoot' }, // More specific
  { image: maternityShoot, title: 'Garden Maternity', category: 'Outdoor Maternity' }, // More specific
  { image: eventsPhoto, title: 'Corporate Gala', category: 'Corporate Event' }, // More specific
  { image: heroWedding, title: 'Bridal Portrait', category: 'Bridal Shoot' }, // More specific
  { image: preweddingShoot, title: 'Love in Nature', category: 'Outdoor Pre-Wedding' }, // More specific
  { image: maternityShoot, title: 'Baby Shower Joy', category: 'Baby Shower' },
  { image: eventsPhoto, title: 'Conference Capture', category: 'Corporate Photography' }, // More specific
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