// src/lib/servicesData.ts

// --- "What We Do" Images ---
import babyShowerWwd from '@/assets/Baby-Shower-wwd.jpg';
import babyWwd from '@/assets/Baby-wwd.jpg';
import family2Wwd from '@/assets/family-2-wwd.jpg';
import maternityWwd from '@/assets/Maternity-wwd.jpg';
import modelPhotoshootWwd from '@/assets/model-Photoshoot-wwd.jpg';
import preWeddingWwd from '@/assets/pre-wedding-wwd.jpg';
import wedding2Wwd from '@/assets/wedding-2-wwd.jpg';
import albumDesignWwd from '@/assets/album-design-wwd.jpg';
import brideLanding from '@/assets/br-2.jpeg';

// --- NEW IMAGES TO BE ADDED BY YOU ---
import housewarming from '@/assets/hpusewarming.jpeg';
import interior from '@/assets/interior.jpeg';
import eng1 from '@/assets/eng-1.jpeg';


// Define the structure for service data
export interface Service {
    slug: string; // URL-friendly identifier
    title: string; // Display title
    description: string; // Short description for cards
    image: string; // Image import path
    fullDescription?: string; // Optional longer description for the booking page
}

// Array holding all service details, using updated fullDescriptions
export const servicesData: Service[] = [
  {
    slug: 'wedding',
    title: 'Wedding',
    description: 'Capture your special day with our professional wedding photography and cinematography services',
    image: wedding2Wwd,
    fullDescription: 'Looking for the best wedding photographers in South India? Contact Wild horse Media today!'
  },
  {
    slug: 'pre-wedding',
    title: 'Pre-wedding',
    description: 'Beautiful pre-wedding shoots at stunning locations to celebrate your love story',
    image: preWeddingWwd,
    fullDescription: 'Searching for the Most Romantic Pre-Wedding Photographers in South India? Book your dreamy pre-wedding photography session with Wild Horse Media today!'
  },
  {
    slug: 'engagement-ceremony',
    title: 'Engagement Ceremony',
    description: 'Capture the joy and excitement of your engagement ceremony',
    image: eng1,
    fullDescription: 'Celebrate the beginning of your journey together. Book us for your engagement ceremony.'
  },
  {
    slug: 'bridal-photoshoot',
    title: 'Bridal Photoshoot',
    description: 'Your solo moment to shine with stunning bridal portraits',
    image: brideLanding,
    fullDescription: 'Want Stunning Bridal Portraits? Discover the Best Photographers for Your Wedding Day Look! Your solo moment to shine! Get a breathtaking bridal photoshoot package from Wild Horse Media.'
  },
  {
    slug: 'maternity',
    title: 'Maternity',
    description: 'Cherish the beautiful moments of motherhood with our maternity photography',
    image: maternityWwd,
    fullDescription: 'Where Can I Find the Best Maternity Photographers in Bengaluru? Cherish this journey forever. Contact Wild Horse Media for elegant maternity photoshoots!'
  },
  {
    slug: 'baby-shower',
    title: 'Baby Shower',
    description: "Capture the joy and celebration of your baby shower",
    image: babyShowerWwd,
    fullDescription: 'Need Creative Baby Shower Photographers and Coverage in South India? Capture the joy of your celebration! Enquire about Wild Horse Media\'s baby shower packages now!'
  },
  {
    slug: 'baby-photoshoots',
    title: 'Baby photoshoots',
    description: 'Adorable baby photography capturing precious early moments',
    image: babyWwd,
    fullDescription: 'Looking for Professional Newborn and Baby Photographers in Bengaluru? Tiny moments, lifelong memories. Schedule your baby photoshoot with Wild Horse Media!'
  },
  {
    slug: 'family-photoshoots',
    title: 'Family photoshoots',
    description: 'Create lasting memories with beautiful family portraits',
    image: family2Wwd,
    fullDescription: 'Searching for the Top Family Portrait Photographers to Capture Your Bond in South India? Create stunning family heirlooms. Contact Wild Horse Media for memorable family photoshoots!'
  },
  {
    slug: 'model-photoshoots',
    title: 'Model photoshoots',
    description: 'Professional portfolio shoots for aspiring and established models',
    image: modelPhotoshootWwd,
    fullDescription: 'Build a stunning and professional portfolio with our expert model photography services.'
  },
  {
    slug: 'house-warming',
    title: 'House Warming',
    description: 'Capture the memories of your new home with our photography services',
    image: housewarming,
    fullDescription: 'Celebrate your new beginning. We cover house warming ceremonies to capture every moment.'
  },
  {
    slug: 'product-interior',
    title: 'Product & Interior',
    description: 'Professional shots for your products and interior spaces',
    image: interior,
    fullDescription: 'Showcase your products or property with high-quality interior and product photography.'
  },
  {
    slug: 'album-design',
    title: 'Album designs and printing',
    description: 'Beautiful album designs and premium printing services to preserve your memories',
    image: albumDesignWwd,
    fullDescription: 'Preserve your cherished memories in beautifully designed, high-quality, custom photo albums.'
  },
];

// Helper function to find a service by its slug
export const getServiceBySlug = (slug: string | undefined): Service | undefined => {
    if (!slug) return undefined;
    return servicesData.find(service => service.slug === slug);
};
