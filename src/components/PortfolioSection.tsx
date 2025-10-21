// --- Import the new "Our Works" images ---
import modelOw from '@/assets/model-3.jpeg';
import matOw from '@/assets/mom-22.jpeg';
import whm17Ow from '@/assets/Copy-of-whm-17ow.jpg';
import whm443Ow from '@/assets/Copy-of-WHM-443ow.jpg';
import whm3Ow from '@/assets/Copy-of-whm3ow.jpg';
import wildhors8Ow from '@/assets/Copy-of-wildhorse-348ow.jpg'; // Assuming full filename is similar
import dsc08189Ow from '@/assets/DSC08189ow.jpg';
import weddingOw from '@/assets/weddingow.jpg';
import whm1460Ow from '@/assets/WHM-1460ow.jpg';

// --- Create an array with just the imported images ---
const portfolioImages = [
  dsc08189Ow,
  weddingOw,
  modelOw,
  matOw,
  whm17Ow,
  whm3Ow,
  wildhors8Ow,
  whm443Ow,
  
  whm1460Ow,

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

        {/* --- Updated Grid Layout --- */}
        {/* Changed to 2 columns on medium screens and up, with a larger gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {portfolioImages.map((imageSrc, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer" // Using aspect-video for a wider feel
            >
              <img
                src={imageSrc}
                alt={`Portfolio image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* The overlay div with title and category has been removed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
