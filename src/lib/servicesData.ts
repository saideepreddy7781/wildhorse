// src/lib/servicesData.ts

// --- "What We Do" Images ---
import babyShowerWwd from '@/assets/Baby-Shower-wwd.jpg';
import babyWwd from '@/assets/Baby-wwd.jpg';
import family2Wwd from '@/assets/family-2-wwd.jpg';
import maternityWwd from '@/assets/Maternity-wwd.jpg';
import modelPhotoshootWwd from '@/assets/model-Photoshoot-wwd.jpg'; // Corrected truncated filename
import preWeddingWwd from '@/assets/pre-wedding-wwd.jpg';
import wedding2Wwd from '@/assets/wedding-2-wwd.jpg';
import albumDesignWwd from '@/assets/album-design-wwd.jpg';

// Define the structure for service data
export interface Service {
    slug: string; // URL-friendly identifier
    title: string; // Display title
    description: string; // Short description for cards
    image: string; // Image import path
    fullDescription?: string; // Optional longer description for the booking page
}

// Array holding all service details, using only the provided "wwd" images
export const servicesData: Service[] = [
  { slug: 'wedding', title: 'Wedding', description: 'Capture your special day with our professional wedding photography and cinematography services', image: wedding2Wwd, fullDescription: 'Book our award-winning wedding photography and cinematography to capture every magical moment of your big day.' },
  { slug: 'pre-wedding', title: 'Pre-wedding', description: 'Beautiful pre-wedding shoots at stunning locations to celebrate your love story', image: preWeddingWwd, fullDescription: 'Tell your unique love story with a stunning pre-wedding shoot before tying the knot.' },
  { slug: 'maternity-baby-showers', title: 'Maternity & Baby showers', description: 'Cherish the beautiful moments of motherhood with our maternity photography', image: maternityWwd, fullDescription: 'Capture the radiant glow of pregnancy or the joyful celebration of your baby shower.' },
  { slug: 'baby-photoshoots', title: 'Baby photoshoots', description: 'Adorable baby photography capturing precious early moments', image: babyWwd, fullDescription: 'Create timeless portraits of your little one’s precious first smiles, steps, and milestones.' },
  { slug: 'model-photoshoots', title: 'Model photoshoots', description: 'Professional portfolio shoots for aspiring and established models', image: modelPhotoshootWwd, fullDescription: 'Build a stunning and professional portfolio with our expert model photography services.' },
  { slug: 'family-photoshoots', title: 'Family photoshoots', description: 'Create lasting memories with beautiful family portraits', image: family2Wwd, fullDescription: 'Capture the unique love, connection, and personality of your family with a fun photoshoot.' },
  { slug: 'baby-shower', title: 'Baby Shower', description: "Capture the joy of your baby shower", image: babyShowerWwd, fullDescription: 'Document the important blessings, traditions, and family moments of baby shower.' },
  { slug: 'album-design', title: 'Album designs and printing', description: 'Beautiful album designs and premium printing services to preserve your memories', image: albumDesignWwd, fullDescription: 'Preserve your cherished memories in beautifully designed, high-quality, custom photo albums.' },
];

// Helper function to find a service by its slug
export const getServiceBySlug = (slug: string | undefined): Service | undefined => {
    if (!slug) return undefined;
    return servicesData.find(service => service.slug === slug);
};
