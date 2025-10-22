// src/lib/servicesData.ts

// --- "What We Do" Images (Main Service Images - Tile Cards) ---
import weddingTileCard from '@/assets/categories/wedding.jpg';
import preWeddingTileCard from '@/assets/categories/prewedding.jpg';
import engagementTileCard from '@/assets/categories/engagement.jpg';
import albumDesignTileCard from '@/assets/categories/album-designs.jpg';
import maternityTileCard from '@/assets/categories/maternity.jpg';
import babyShowerTileCard from '@/assets/categories/baby-shower.jpg';
import babyPhotoshootTileCard from '@/assets/categories/baby-photoshoot.jpg';
import modelPhotoshootTileCard from '@/assets/categories/model-photoshoot.jpg';
import familyTileCard from '@/assets/categories/family.jpg';
import interiorTileCard from '@/assets/categories/interior-photoshoot.jpg';
import productInteriorTileCard from '@/assets/gallery/product-interior/pr-1.jpg';
import housewarmingTileCard from '@/assets/categories/house-warming.jpg';

// Bridal image (kept for legacy bridal gallery)
import brideLanding from '@/assets/br-2.jpeg';

// --- Dynamic Gallery Image Imports using Vite Glob ---
// Import ALL images from each gallery folder
const weddingGalleryModules = import.meta.glob('@/assets/gallery/wedding/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const preweddingGalleryModules = import.meta.glob('@/assets/gallery/prewedding/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const maternityGalleryModules = import.meta.glob('@/assets/gallery/maternity/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const babyshowerGalleryModules = import.meta.glob('@/assets/gallery/babyshower/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const babyshootGalleryModules = import.meta.glob('@/assets/gallery/babyshoot/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const modelGalleryModules = import.meta.glob('@/assets/gallery/model/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const albumsGalleryModules = import.meta.glob('@/assets/gallery/albums/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const engagementGalleryModules = import.meta.glob('@/assets/gallery/engagement/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const productInteriorGalleryModules = import.meta.glob('@/assets/gallery/product-interior/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const familyGalleryModules = import.meta.glob('@/assets/gallery/family/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const housewarmingGalleryModules = import.meta.glob('@/assets/gallery/housewarming/*.{jpg,JPG,jpeg,png}', { eager: true, query: '?url', import: 'default' });

// Convert glob imports to arrays of image URLs
const weddingGalleryImages = Object.values(weddingGalleryModules) as string[];
const preweddingGalleryImages = Object.values(preweddingGalleryModules) as string[];
const maternityGalleryImages = Object.values(maternityGalleryModules) as string[];
const babyshowerGalleryImages = Object.values(babyshowerGalleryModules) as string[];
const babyshootGalleryImages = Object.values(babyshootGalleryModules) as string[];
const modelGalleryImages = Object.values(modelGalleryModules) as string[];
const albumsGalleryImages = Object.values(albumsGalleryModules) as string[];
const engagementGalleryImages = Object.values(engagementGalleryModules) as string[];
const productInteriorGalleryImages = Object.values(productInteriorGalleryModules) as string[];
const familyGalleryImages = Object.values(familyGalleryModules) as string[];
const housewarmingGalleryImages = Object.values(housewarmingGalleryModules) as string[];


// Define the structure for service data
export interface Service {
    slug: string; // URL-friendly identifier
    title: string; // Display title
    description: string; // Short description for cards
    image: string; // Image import path (for service card)
    fullDescription?: string; // Optional longer description for the booking page
    galleryImages?: string[]; // Array for gallery images on the service page
    videos?: string[]; // Array for YouTube video URLs
}

// Array holding all service details
export const servicesData: Service[] = [
  // --- Row 1 ---
  {
    slug: 'wedding',
    title: 'Wedding',
    description: 'Capture your special day with our professional wedding photography and cinematography services',
    image: weddingTileCard,
    fullDescription: 'Looking for the best wedding photographers in South India? Contact Wild horse Media today!',
    galleryImages: weddingGalleryImages, // ALL 60 wedding images
    
  },
  {
    slug: 'pre-wedding',
    title: 'Pre-wedding',
    description: 'Beautiful pre-wedding shoots at stunning locations to celebrate your love story',
    image: preWeddingTileCard,
    fullDescription: 'Searching for the Most Romantic Pre-Wedding Photographers in South India? Book your dreamy pre-wedding photography session with Wild Horse Media today!',
    galleryImages: preweddingGalleryImages, // ALL 34 prewedding images
    videos: [
      'https://youtu.be/7VXcWCwqI88',
      'https://youtu.be/e11WgcN4MWU'
    ]
  },
  {
    slug: 'engagement-ceremony',
    title: 'Engagement Ceremony',
    description: 'Capture the joy and excitement of your engagement ceremony',
    image: engagementTileCard,
    fullDescription: 'Celebrate the beginning of your journey together. Book us for your engagement ceremony.',
    galleryImages: engagementGalleryImages // ALL 9 engagement images
  },
  {
    slug: 'album-design',
    title: 'Album designs and printing',
    description: 'Beautiful album designs and premium printing services to preserve your memories',
    image: albumDesignTileCard,
    fullDescription: 'Preserve your cherished memories in beautifully designed, high-quality, custom photo albums.',
    galleryImages: albumsGalleryImages // ALL 43 album images
  },
  // --- Row 2 ---
  {
    slug: 'maternity',
    title: 'Maternity',
    description: 'Cherish the beautiful moments of motherhood with our maternity photography',
    image: maternityTileCard,
    fullDescription: 'Where Can I Find the Best Maternity Photographers in Bengaluru? Cherish this journey forever. Contact Wild Horse Media for elegant maternity photoshoots!',
    galleryImages: maternityGalleryImages // ALL 33 maternity images
  },
  {
    slug: 'baby-shower',
    title: 'Baby Shower',
    description: "Capture the joy and celebration of your baby shower",
    image: babyShowerTileCard,
    fullDescription: 'Need Creative Baby Shower Photographers and Coverage in South India? Capture the joy of your celebration! Enquire about Wild Horse Media\'s baby shower packages now!',
    galleryImages: babyshowerGalleryImages, // ALL 23 baby shower images
    videos: [
      'https://youtu.be/upxSk4dhwoc'
    ]
  },
  {
    slug: 'baby-photoshoots',
    title: 'Baby photoshoots',
    description: 'Adorable baby photography capturing precious early moments',
    image: babyPhotoshootTileCard,
    fullDescription: 'Looking for Professional Newborn and Baby Photographers in Bengaluru? Tiny moments, lifelong memories. Schedule your baby photoshoot with Wild Horse Media!',
    galleryImages: babyshootGalleryImages // ALL 38 baby photoshoot images
  },
  {
    slug: 'bridal-photoshoot',
    title: 'Bridal Photoshoot',
    description: 'Your solo moment to shine with stunning bridal portraits',
    image: brideLanding,
    fullDescription: 'Want Stunning Bridal Portraits? Discover the Best Photographers for Your Wedding Day Look! Your solo moment to shine! Get a breathtaking bridal photoshoot package from Wild Horse Media.',
    galleryImages: [brideLanding] // Using wedding gallery for bridal photos
  },
  // --- Row 3 ---
  {
    slug: 'model-photoshoots',
    title: 'Model photoshoots',
    description: 'Professional portfolio shoots for aspiring and established models',
    image: modelPhotoshootTileCard,
    fullDescription: 'Build a stunning and professional portfolio with our expert model photography services.',
    galleryImages: modelGalleryImages, // ALL 38 model photography images
    videos: [
      'https://youtu.be/jtPGobSFe-o',
      'https://youtu.be/nn2xv4eq_Ro',
      'https://youtu.be/hzjD77lEy8M'
    ]
  },
  {
    slug: 'family-photoshoots',
    title: 'Family photoshoots',
    description: 'Create lasting memories with beautiful family portraits',
    image: familyTileCard,
    fullDescription: 'Searching for the Top Family Portrait Photographers to Capture Your Bond in South India? Create stunning family heirlooms. Contact Wild Horse Media for memorable family photoshoots!',
    galleryImages: familyGalleryImages
  },
  {
    slug: 'product-interior',
    title: 'Product & Interior',
    description: 'Professional shots for your products and interior spaces',
    image: productInteriorTileCard,
    fullDescription: 'Showcase your products or property with high-quality interior and product photography.',
    galleryImages: productInteriorGalleryImages,
    videos: [
      'https://youtu.be/sKNIkPRAG7g',
      'https://youtu.be/jLkcyBHz420'
    ]
  },
  {
    slug: 'house-warming',
    title: 'House Warming',
    description: 'Capture the memories of your new home with our photography services',
    image: housewarmingTileCard,
    fullDescription: 'Celebrate your new beginning. We cover house warming ceremonies to capture every moment.',
    galleryImages: housewarmingGalleryImages,
    videos: [
      'https://youtu.be/xbp_w0pJ1Ws'
    ]
  },
];

// Helper function to find a service by its slug (remains unchanged)
export const getServiceBySlug = (slug: string | undefined): Service | undefined => {
    if (!slug) return undefined;
    return servicesData.find(service => service.slug === slug);
};
