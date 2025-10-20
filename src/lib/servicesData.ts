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

// --- Housewarming, Interior, Engagement ---
import housewarming from '@/assets/hpusewarming.jpeg';
import interior from '@/assets/interior.jpeg';
import eng1 from '@/assets/eng-1.jpeg';

// --- Other available images (use for gallery examples) ---
import weddingOw from '@/assets/weddingow.jpg';
import whm1460Ow from '@/assets/WHM-1460ow.jpg';
import dsc08189Ow from '@/assets/DSC08189ow.jpg';
import modelOw from '@/assets/model-3.jpeg'; // Example image
import matOw from '@/assets/mom-22.jpeg'; // Example image

// Define the structure for service data
export interface Service {
    slug: string; // URL-friendly identifier
    title: string; // Display title
    description: string; // Short description for cards
    image: string; // Image import path
    fullDescription?: string; // Optional longer description for the booking page
    galleryImages?: string[]; // --- NEW: Array for gallery images ---
}

// Array holding all service details
// --- ADDED galleryImages arrays (replace with your actual images) ---
export const servicesData: Service[] = [
  {
    slug: 'wedding',
    title: 'Wedding',
    description: 'Capture your special day with our professional wedding photography and cinematography services',
    image: wedding2Wwd,
    fullDescription: 'Looking for the best wedding photographers in South India? Contact Wild horse Media today!',
    galleryImages: [wedding2Wwd, weddingOw, whm1460Ow, dsc08189Ow] // Replace with actual wedding images
  },
  {
    slug: 'pre-wedding',
    title: 'Pre-wedding',
    description: 'Beautiful pre-wedding shoots at stunning locations to celebrate your love story',
    image: preWeddingWwd,
    fullDescription: 'Searching for the Most Romantic Pre-Wedding Photographers in South India? Book your dreamy pre-wedding photography session with Wild Horse Media today!',
    galleryImages: [preWeddingWwd, whm1460Ow, dsc08189Ow, weddingOw] // Replace with actual pre-wedding images
  },
  {
    slug: 'engagement-ceremony',
    title: 'Engagement Ceremony',
    description: 'Capture the joy and excitement of your engagement ceremony',
    image: eng1,
    fullDescription: 'Celebrate the beginning of your journey together. Book us for your engagement ceremony.',
    galleryImages: [eng1, weddingOw, whm1460Ow, dsc08189Ow] // Replace with actual engagement images
  },
  {
    slug: 'bridal-photoshoot',
    title: 'Bridal Photoshoot',
    description: 'Your solo moment to shine with stunning bridal portraits',
    image: brideLanding,
    fullDescription: 'Want Stunning Bridal Portraits? Discover the Best Photographers for Your Wedding Day Look! Your solo moment to shine! Get a breathtaking bridal photoshoot package from Wild Horse Media.',
    galleryImages: [brideLanding, wedding2Wwd, dsc08189Ow, whm1460Ow] // Replace with actual bridal images
  },
  {
    slug: 'maternity',
    title: 'Maternity',
    description: 'Cherish the beautiful moments of motherhood with our maternity photography',
    image: maternityWwd,
    fullDescription: 'Where Can I Find the Best Maternity Photographers in Bengaluru? Cherish this journey forever. Contact Wild Horse Media for elegant maternity photoshoots!',
    galleryImages: [maternityWwd, matOw, babyShowerWwd] // Replace with actual maternity images
  },
  {
    slug: 'baby-shower',
    title: 'Baby Shower',
    description: "Capture the joy and celebration of your baby shower",
    image: babyShowerWwd,
    fullDescription: 'Need Creative Baby Shower Photographers and Coverage in South India? Capture the joy of your celebration! Enquire about Wild Horse Media\'s baby shower packages now!',
    galleryImages: [babyShowerWwd, maternityWwd, matOw] // Replace with actual baby shower images
  },
  {
    slug: 'baby-photoshoots',
    title: 'Baby photoshoots',
    description: 'Adorable baby photography capturing precious early moments',
    image: babyWwd,
    fullDescription: 'Looking for Professional Newborn and Baby Photographers in Bengaluru? Tiny moments, lifelong memories. Schedule your baby photoshoot with Wild Horse Media!',
    galleryImages: [babyWwd, family2Wwd] // Replace with actual baby images
  },
  {
    slug: 'family-photoshoots',
    title: 'Family photoshoots',
    description: 'Create lasting memories with beautiful family portraits',
    image: family2Wwd,
    fullDescription: 'Searching for the Top Family Portrait Photographers to Capture Your Bond in South India? Create stunning family heirlooms. Contact Wild Horse Media for memorable family photoshoots!',
    galleryImages: [family2Wwd, babyWwd, weddingOw] // Replace with actual family images
  },
  {
    slug: 'model-photoshoots',
    title: 'Model photoshoots',
    description: 'Professional portfolio shoots for aspiring and established models',
    image: modelPhotoshootWwd,
    fullDescription: 'Build a stunning and professional portfolio with our expert model photography services.',
    galleryImages: [modelPhotoshootWwd, modelOw] // Replace with actual model images
  },
  {
    slug: 'house-warming',
    title: 'House Warming',
    description: 'Capture the memories of your new home with our photography services',
    image: housewarming,
    fullDescription: 'Celebrate your new beginning. We cover house warming ceremonies to capture every moment.',
    galleryImages: [housewarming, interior, dsc08189Ow] // Replace with actual house warming images
  },
  {
    slug: 'product-interior',
    title: 'Product & Interior',
    description: 'Professional shots for your products and interior spaces',
    image: interior,
    fullDescription: 'Showcase your products or property with high-quality interior and product photography.',
    galleryImages: [interior, housewarming, modelPhotoshootWwd, albumDesignWwd] // Replace with actual product/interior images
  },
  {
    slug: 'album-design',
    title: 'Album designs and printing',
    description: 'Beautiful album designs and premium printing services to preserve your memories',
    image: albumDesignWwd,
    fullDescription: 'Preserve your cherished memories in beautifully designed, high-quality, custom photo albums.',
    galleryImages: [albumDesignWwd, wedding2Wwd, preWeddingWwd, babyWwd] // Replace with actual album design examples
  },
];

// Helper function to find a service by its slug
export const getServiceBySlug = (slug: string | undefined): Service | undefined => {
    if (!slug) return undefined;
    return servicesData.find(service => service.slug === slug);
};