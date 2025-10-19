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
// --- Add Bridal image if available, otherwise reuse one ---
import brideLanding from '@/assets/br-2.jpeg'; // Assuming this can be used for bridal portraits

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
    slug: 'maternity', // Combined slug for Maternity & Baby Showers for simplicity if needed, or keep separate
    title: 'Maternity', // Specific title
    description: 'Cherish the beautiful moments of motherhood with our maternity photography',
    image: maternityWwd,
    fullDescription: 'Where Can I Find the Best Maternity Photographers in Bengaluru? Cherish this journey forever. Contact Wild Horse Media for elegant maternity photoshoots!'
  },
  {
    slug: 'baby-shower',
    title: 'Baby Shower', // Kept separate as requested
    description: "Capture the joy of your baby shower",
    image: babyShowerWwd, // Specific baby shower image
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
    slug: 'model-photoshoots',
    title: 'Model photoshoots',
    description: 'Professional portfolio shoots for aspiring and established models',
    image: modelPhotoshootWwd,
    fullDescription: 'Build a stunning and professional portfolio with our expert model photography services.' // Keeping original as no new text was provided for this
  },
  {
    slug: 'family-photoshoots',
    title: 'Family photoshoots',
    description: 'Create lasting memories with beautiful family portraits',
    image: family2Wwd,
    fullDescription: 'Searching for the Top Family Portrait Photographers to Capture Your Bond in South India? Create stunning family heirlooms. Contact Wild Horse Media for memorable family photoshoots!'
  },
  {
    slug: 'bridal-photoshoot', // Added slug for Bridal Photoshoot
    title: 'Bridal Photoshoot', // Added title
    description: 'Your solo moment to shine with stunning bridal portraits', // New short description
    image: brideLanding, // Using the bride landing image
    fullDescription: 'Want Stunning Bridal Portraits? Discover the Best Photographers for Your Wedding Day Look! Your solo moment to shine! Get a breathtaking bridal photoshoot package from Wild Horse Media.' // Updated wording
  },
  {
    slug: 'album-design',
    title: 'Album designs and printing',
    description: 'Beautiful album designs and premium printing services to preserve your memories',
    image: albumDesignWwd,
    fullDescription: 'Preserve your cherished memories in beautifully designed, high-quality, custom photo albums.' // Keeping original as no new text was provided
  },
  // Ensure 'maternity-baby-showers' slug is handled if it existed before, maybe remove or redirect if separating them fully.
  // The 'Maternity & Baby showers' entry might need adjustment if you want completely separate pages.
  // If you keep it combined in servicesData but want separate text, you might need logic elsewhere.
  // For now, I've separated 'Maternity' and 'Baby Shower'.
];

// Helper function to find a service by its slug
export const getServiceBySlug = (slug: string | undefined): Service | undefined => {
    if (!slug) return undefined;
    // Added 'bridal-photoshoot' to the find logic
    return servicesData.find(service => service.slug === slug || (slug === 'maternity' && service.slug === 'maternity') || (slug === 'baby-shower' && service.slug === 'baby-shower') || (slug === 'bridal-photoshoot' && service.slug === 'bridal-photoshoot'));
};

// You might need to adjust imports/exports based on your project structure if the bridal image isn't already handled.
// Also, ensure the routing in App.tsx accounts for the 'bridal-photoshoot' slug if it wasn't there before.