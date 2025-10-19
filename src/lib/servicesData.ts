// --- NEW "What We Do" Images ---
import babyShowerWwd from '@/assets/Baby-Shower-wwd.jpg';
import babyWwd from '@/assets/Baby-wwd.jpg';
import family2Wwd from '@/assets/family-2-wwd.jpg';
import maternityWwd from '@/assets/Maternity-wwd.jpg';
import modelPhotoshootWwd from '@/assets/model-Photoshoot-wwd.jpg';
import preWeddingWwd from '@/assets/pre-wedding-wwd.jpg';
import wedding2Wwd from '@/assets/wedding-2-wwd.jpg';
import albumDesignWwd from '@/assets/album-design-wwd.jpg';
// --- NEWLY ADDED IMAGES ---
import housewarmingWwd from '@/assets/hpusewarming.jpeg'; // Corrected filename extension if it's jpeg
import interiorWwd from '@/assets/interior.jpeg';      // Corrected filename extension if it's jpeg


// Define the structure for service data
export interface Service {
    slug: string; // URL-friendly identifier
    title: string; // Display title
    description: string; // Short description for cards
    image: string; // Image import path
    fullDescription?: string; // Optional longer description for the booking page
}

// Array holding all service details, now updated with new images
export const servicesData: Service[] = [
  { slug: 'wedding', title: 'Wedding', description: 'Capture your special day with our professional wedding photography and cinematography services', image: wedding2Wwd, fullDescription: 'Book our award-winning wedding photography and cinematography to capture every magical moment of your big day.' },
  { slug: 'pre-wedding', title: 'Pre-wedding', description: 'Beautiful pre-wedding shoots at stunning locations to celebrate your love story', image: preWeddingWwd, fullDescription: 'Tell your unique love story with a stunning pre-wedding shoot before tying the knot.' },
  { slug: 'maternity-baby-showers', title: 'Maternity & Baby showers', description: 'Cherish the beautiful moments of motherhood with our maternity photography', image: maternityWwd, fullDescription: 'Capture the radiant glow of pregnancy or the joyful celebration of your baby shower.' },
  { slug: 'product-ecommerce', title: 'Product / E-Commerce photography', description: 'Professional product photography for your online store and marketing needs', image: interiorWwd, fullDescription: 'Get high-quality, professional images designed to make your products stand out online.' }, // Mapped to interior
  { slug: 'baby-photoshoots', title: 'Baby photoshoots', description: 'Adorable baby photography capturing precious early moments', image: babyWwd, fullDescription: 'Create timeless portraits of your little one’s precious first smiles, steps, and milestones.' },
  { slug: 'model-photoshoots', title: 'Model photoshoots', description: 'Professional portfolio shoots for aspiring and established models', image: modelPhotoshootWwd, fullDescription: 'Build a stunning and professional portfolio with our expert model photography services.' },
  { slug: 'family-photoshoots', title: 'Family photoshoots', description: 'Create lasting memories with beautiful family portraits', image: family2Wwd, fullDescription: 'Capture the unique love, connection, and personality of your family with a fun photoshoot.' },
  { slug: 'housewarming', title: 'Housewarming', description: 'Document your special housewarming celebration with professional photography', image: housewarmingWwd, fullDescription: 'Remember the joy and excitement of starting a new chapter in your new home.' }, // Mapped to housewarming
  { slug: 'naming-ceremony', title: 'Naming ceremony', description: "Capture the joy of your baby's naming ceremony", image: babyShowerWwd, fullDescription: 'Document the important blessings, traditions, and family moments of your baby’s naming day.' },
  { slug: 'album-design', title: 'Album designs and printing', description: 'Beautiful album designs and premium printing services to preserve your memories', image: albumDesignWwd, fullDescription: 'Preserve your cherished memories in beautifully designed, high-quality, custom photo albums.' },
  { slug: 'Interior-photography', title: 'Interior photography', description: 'Interior photography services', image: interiorWwd, fullDescription: 'Enhance your brand image with professional corporate headshots and event coverage.' }, // Reusing interior for corporate
];

// Helper function to find a service by its slug
export const getServiceBySlug = (slug: string | undefined): Service | undefined => {
    if (!slug) return undefined;
    return servicesData.find(service => service.slug === slug);
};

