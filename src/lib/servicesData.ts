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

// Package interface for service packages
export interface Package {
    name: string; // Package name (e.g., "Silver", "Gold", "Platinum")
    price?: string; // Price (optional, can be "Starting from ₹XX,XXX" or specific price)
    features: string[]; // List of features included in the package
    popular?: boolean; // Flag to highlight popular packages
}

// Define the structure for service data
export interface Service {
    slug: string; // URL-friendly identifier
    title: string; // Display title
    description: string; // Short description for cards
    image: string; // Image import path (for service card)
    fullDescription?: string; // Optional longer description for the booking page
    galleryImages?: string[]; // Array for gallery images on the service page
    videos?: string[]; // Array for YouTube video URLs
    packages?: Package[]; // Array of packages for the service
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
    packages: [
      {
        name: 'Silver Package',
        price: 'Starting from ₹50,000',
        features: [
          '1 Photographer',
          '1 Videographer',
          '300+ Edited Photos',
          'Cinematic Video Highlights (3-5 mins)',
          'Online Gallery',
          'All Raw Files'
        ]
      },
      {
        name: 'Gold Package',
        price: 'Starting from ₹80,000',
        popular: true,
        features: [
          '2 Photographers',
          '1 Videographer',
          '500+ Edited Photos',
          'Cinematic Video Highlights (5-8 mins)',
          'Traditional Video Coverage',
          'Drone Coverage',
          'Online Gallery',
          'All Raw Files',
          'Premium Album (20 pages)'
        ]
      },
      {
        name: 'Platinum Package',
        price: 'Starting from ₹1,20,000',
        features: [
          '2 Photographers',
          '2 Videographers',
          '800+ Edited Photos',
          'Cinematic Video Highlights (8-12 mins)',
          'Traditional Video Coverage',
          'Drone Coverage',
          'Pre-wedding Shoot',
          'Online Gallery',
          'All Raw Files',
          'Premium Album (30 pages)',
          'Same Day Edit Video'
        ]
      }
    ]
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
    ],
    packages: [
      {
        name: 'Basic Package',
        price: 'Starting from ₹25,000',
        features: [
          '1 Photographer',
          '1 Location',
          '4 Hours Coverage',
          '150+ Edited Photos',
          'Online Gallery',
          'All Raw Files'
        ]
      },
      {
        name: 'Premium Package',
        price: 'Starting from ₹40,000',
        popular: true,
        features: [
          '1 Photographer + 1 Videographer',
          '2 Locations',
          '6 Hours Coverage',
          '250+ Edited Photos',
          'Cinematic Video Highlights (3-5 mins)',
          'Drone Coverage',
          'Online Gallery',
          'All Raw Files'
        ]
      },
      {
        name: 'Luxury Package',
        price: 'Starting from ₹60,000',
        features: [
          '2 Photographers + 1 Videographer',
          '3 Locations',
          '8 Hours Coverage',
          '400+ Edited Photos',
          'Cinematic Video Highlights (5-8 mins)',
          'Drone Coverage',
          'Premium Costumes & Props',
          'Online Gallery',
          'All Raw Files',
          'Photo Album (15 pages)'
        ]
      }
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
    galleryImages: maternityGalleryImages, // ALL 33 maternity images
    packages: [
      {
        name: 'Standard Package',
        price: 'Starting from ₹15,000',
        features: [
          '1 Photographer',
          'Indoor/Outdoor Shoot',
          '2 Hours Coverage',
          '100+ Edited Photos',
          'Online Gallery',
          'All Raw Files'
        ]
      },
      {
        name: 'Deluxe Package',
        price: 'Starting from ₹25,000',
        popular: true,
        features: [
          '1 Photographer',
          'Indoor & Outdoor Shoot',
          '3 Hours Coverage',
          '150+ Edited Photos',
          '2 Outfit Changes',
          'Props & Accessories',
          'Online Gallery',
          'All Raw Files',
          'Printed Photos (10 prints)'
        ]
      }
    ]
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
    ],
    packages: [
      {
        name: 'Basic Package',
        price: 'Starting from ₹12,000',
        features: [
          '1 Photographer',
          '2 Hours Coverage',
          '100+ Edited Photos',
          'Event Coverage',
          'Online Gallery',
          'All Raw Files'
        ]
      },
      {
        name: 'Premium Package',
        price: 'Starting from ₹20,000',
        popular: true,
        features: [
          '1 Photographer + 1 Videographer',
          '4 Hours Coverage',
          '200+ Edited Photos',
          'Event Highlights Video (2-3 mins)',
          'Decoration Coverage',
          'Games & Activities Coverage',
          'Online Gallery',
          'All Raw Files'
        ]
      }
    ]
  },
  {
    slug: 'baby-photoshoots',
    title: 'Baby photoshoots',
    description: 'Adorable baby photography capturing precious early moments',
    image: babyPhotoshootTileCard,
    fullDescription: 'Looking for Professional Newborn and Baby Photographers in Bengaluru? Tiny moments, lifelong memories. Schedule your baby photoshoot with Wild Horse Media!',
    galleryImages: babyshootGalleryImages, // ALL 38 baby photoshoot images
    packages: [
      {
        name: 'Newborn Package',
        price: 'Starting from ₹10,000',
        features: [
          '1 Photographer',
          'Home/Studio Shoot',
          '2 Hours Coverage',
          '80+ Edited Photos',
          'Baby Props & Accessories',
          'Online Gallery',
          'All Raw Files'
        ]
      },
      {
        name: 'Baby Milestone Package',
        price: 'Starting from ₹15,000',
        popular: true,
        features: [
          '1 Photographer',
          'Home/Studio Shoot',
          '3 Hours Coverage',
          '120+ Edited Photos',
          'Multiple Outfit Changes',
          'Themed Props & Backgrounds',
          'Cake Smash (if applicable)',
          'Online Gallery',
          'All Raw Files',
          'Photo Album (10 pages)'
        ]
      }
    ]
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
    ],
    packages: [
      {
        name: 'Portfolio Starter',
        price: 'Starting from ₹15,000',
        features: [
          '1 Photographer',
          'Studio/Outdoor Location',
          '3 Hours Coverage',
          '100+ Edited Photos',
          '3 Outfit Changes',
          'Online Gallery',
          'All Raw Files'
        ]
      },
      {
        name: 'Professional Portfolio',
        price: 'Starting from ₹25,000',
        popular: true,
        features: [
          '1 Photographer + 1 Assistant',
          'Studio & Outdoor Locations',
          '5 Hours Coverage',
          '200+ Edited Photos',
          '5 Outfit Changes',
          'Professional Makeup & Hair',
          'Online Gallery',
          'All Raw Files',
          'Digital Portfolio Book'
        ]
      }
    ]
  },
  {
    slug: 'family-photoshoots',
    title: 'Family photoshoots',
    description: 'Create lasting memories with beautiful family portraits',
    image: familyTileCard,
    fullDescription: 'Searching for the Top Family Portrait Photographers to Capture Your Bond in South India? Create stunning family heirlooms. Contact Wild Horse Media for memorable family photoshoots!',
    galleryImages: familyGalleryImages,
    packages: [
      {
        name: 'Family Session',
        price: 'Starting from ₹12,000',
        features: [
          '1 Photographer',
          'Indoor/Outdoor Location',
          '2 Hours Coverage',
          '100+ Edited Photos',
          'Online Gallery',
          'All Raw Files'
        ]
      },
      {
        name: 'Extended Family Package',
        price: 'Starting from ₹20,000',
        popular: true,
        features: [
          '1 Photographer',
          'Indoor & Outdoor Locations',
          '4 Hours Coverage',
          '200+ Edited Photos',
          'Multiple Family Groupings',
          'Individual Portraits',
          'Online Gallery',
          'All Raw Files',
          'Printed Photos (15 prints)'
        ]
      }
    ]
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
    ],
    packages: [
      {
        name: 'Product Photography',
        price: 'Starting from ₹8,000',
        features: [
          '1 Photographer',
          'Studio Setup',
          'Up to 20 Products',
          '50+ Edited Photos',
          'White Background',
          'Online Gallery',
          'All Raw Files'
        ]
      },
      {
        name: 'Interior Photography',
        price: 'Starting from ₹15,000',
        features: [
          '1 Photographer',
          'On-Location Shoot',
          'Up to 10 Rooms/Spaces',
          '100+ Edited Photos',
          'HDR Processing',
          'Online Gallery',
          'All Raw Files'
        ]
      },
      {
        name: 'Commercial Package',
        price: 'Starting from ₹30,000',
        popular: true,
        features: [
          '1 Photographer + 1 Assistant',
          'Full Property/Product Line Coverage',
          'Full Day Coverage',
          '200+ Edited Photos',
          'Drone Footage (for properties)',
          'Professional Lighting Setup',
          'HDR & 360° Views',
          'Online Gallery',
          'All Raw Files',
          'Commercial Usage Rights'
        ]
      }
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
      'https://youtu.be/pV4UcdYM30s'
    ],
    packages: [
      {
        name: 'Basic Coverage',
        price: 'Starting from ₹10,000',
        features: [
          '1 Photographer',
          '3 Hours Coverage',
          '100+ Edited Photos',
          'Ceremony Coverage',
          'Online Gallery',
          'All Raw Files'
        ]
      },
      {
        name: 'Complete Package',
        price: 'Starting from ₹18,000',
        popular: true,
        features: [
          '1 Photographer + 1 Videographer',
          '5 Hours Coverage',
          '200+ Edited Photos',
          'Event Highlights Video (3-5 mins)',
          'Ceremony & Celebration Coverage',
          'Guest Candid Photos',
          'Online Gallery',
          'All Raw Files'
        ]
      }
    ]
  },
];

// Helper function to find a service by its slug (remains unchanged)
export const getServiceBySlug = (slug: string | undefined): Service | undefined => {
    if (!slug) return undefined;
    return servicesData.find(service => service.slug === slug);
};
