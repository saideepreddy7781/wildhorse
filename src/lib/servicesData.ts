// src/lib/servicesData.ts
import heroWedding from '@/assets/mar-2.jpeg';
import maternityShoot from '@/assets/mat-6.jpg';
import eventsPhoto from '@/assets/pr-6.jpg'; // Product/Ecomm image
import preweddingShoot from '@/assets/pwe-5.jpeg';
import babyPhotoshoot from '@/assets/baby-5.jpg';
import modelPhotoshoot from '@/assets/mod-2.jpg';
import familyPhotoshoot from '@/assets/famm-4.png';
import housewarmingPhoto from '@/assets/hwa-4.jpeg';
import namingCeremonyPhoto from '@/assets/mat-5.jpeg';
import albumDesignPhoto from '@/assets/br-3.jpg';
import productPhoto from '@/assets/cr-3.jpg'; // Corporate image
import cameraRentalPhoto from '@/assets/ren-2.jpg';

// Define the structure for service data
export interface Service {
    slug: string; // URL-friendly identifier
    title: string; // Display title
    description: string; // Short description for cards
    image: string; // Image import path
    fullDescription?: string; // Optional longer description for the booking page
}

// Array holding all service details
export const servicesData: Service[] = [
  { slug: 'wedding', title: 'Wedding', description: 'Capture your special day with our professional wedding photography and cinematography services', image: heroWedding, fullDescription: 'Book our award-winning wedding photography and cinematography to capture every magical moment of your big day.' },
  { slug: 'pre-wedding', title: 'Pre-wedding', description: 'Beautiful pre-wedding shoots at stunning locations to celebrate your love story', image: preweddingShoot, fullDescription: 'Tell your unique love story with a stunning pre-wedding shoot before tying the knot.' },
  { slug: 'maternity-baby-showers', title: 'Maternity & Baby showers', description: 'Cherish the beautiful moments of motherhood with our maternity photography', image: maternityShoot, fullDescription: 'Capture the radiant glow of pregnancy or the joyful celebration of your baby shower.' },
  { slug: 'product-ecommerce', title: 'Product / E-Commerce photography', description: 'Professional product photography for your online store and marketing needs', image: eventsPhoto, fullDescription: 'Get high-quality, professional images designed to make your products stand out online.' },
  { slug: 'baby-photoshoots', title: 'Baby photoshoots', description: 'Adorable baby photography capturing precious early moments', image: babyPhotoshoot, fullDescription: 'Create timeless portraits of your little one’s precious first smiles, steps, and milestones.' },
  { slug: 'model-photoshoots', title: 'Model photoshoots', description: 'Professional portfolio shoots for aspiring and established models', image: modelPhotoshoot, fullDescription: 'Build a stunning and professional portfolio with our expert model photography services.' },
  { slug: 'family-photoshoots', title: 'Family photoshoots', description: 'Create lasting memories with beautiful family portraits', image: familyPhotoshoot, fullDescription: 'Capture the unique love, connection, and personality of your family with a fun photoshoot.' },
  { slug: 'housewarming', title: 'Housewarming', description: 'Document your special housewarming celebration with professional photography', image: housewarmingPhoto, fullDescription: 'Remember the joy and excitement of starting a new chapter in your new home.' },
  { slug: 'naming-ceremony', title: 'Naming ceremony', description: "Capture the joy of your baby's naming ceremony", image: namingCeremonyPhoto, fullDescription: 'Document the important blessings, traditions, and family moments of your baby’s naming day.' },
  { slug: 'album-design', title: 'Album designs and printing', description: 'Beautiful album designs and premium printing services to preserve your memories', image: albumDesignPhoto, fullDescription: 'Preserve your cherished memories in beautifully designed, high-quality, custom photo albums.' },
  { slug: 'corporate-photography', title: 'Corporate photography', description: 'Professional photography services for corporate events and business needs', image: productPhoto, fullDescription: 'Enhance your brand image with professional corporate headshots, event coverage, and commercial photography.' },
  { slug: 'camera-rentals', title: 'Camera Rentals', description: 'High-quality camera equipment rental services for your photography needs', image: cameraRentalPhoto, fullDescription: 'Rent professional cameras, lenses, lighting, and other essential gear for your creative projects.' },
];

// Helper function to find a service by its slug
export const getServiceBySlug = (slug: string | undefined): Service | undefined => {
    if (!slug) return undefined;
    return servicesData.find(service => service.slug === slug);
};