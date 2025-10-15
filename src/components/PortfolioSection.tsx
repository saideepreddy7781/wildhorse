import heroWedding from '@/assets/hero-wedding.jpg';
import maternityShoot from '@/assets/maternity-shoot.jpg';
import preweddingShoot from '@/assets/prewedding-shoot.jpg';
import eventsPhoto from '@/assets/events-photo.jpg';

const portfolioItems = [
  { image: heroWedding, title: 'Wedding Photography', category: 'Wedding' },
  { image: maternityShoot, title: 'Maternity Shoot', category: 'Maternity' },
  { image: preweddingShoot, title: 'Pre-Wedding Shoot', category: 'Pre-Wedding' },
  { image: eventsPhoto, title: 'Event Photography', category: 'Events' },
  { image: heroWedding, title: 'Candid Wedding', category: 'Wedding' },
  { image: preweddingShoot, title: 'Couple Shoot', category: 'Pre-Wedding' },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-primary-foreground">
                  <p className="text-sm font-poppins uppercase tracking-wider mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-playfair font-bold">{item.title}</h3>
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
