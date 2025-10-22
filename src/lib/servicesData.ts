// src/lib/servicesData.ts

// --- "What We Do" Images (Main Service Images) ---
import babyShowerWwd from '@/assets/Baby-Shower-wwd.jpg';
import babyWwd from '@/assets/Baby-wwd.jpg';
import family2Wwd from '@/assets/family-2-wwd.jpg';
import maternityWwd from '@/assets/Maternity-wwd.jpg';
import modelPhotoshootWwd from '@/assets/model-title.jpeg'; // Main card image for model photoshoots
import preWeddingWwd from '@/assets/pre-wedding-wwd.jpg';
import wedding2Wwd from '@/assets/wedding-2-wwd.jpg';
import albumDesignWwd from '@/assets/album-design-wwd.jpg';
import brideLanding from '@/assets/br-2.jpeg';
import housewarming from '@/assets/hpusewarming.jpeg';
import interior from '@/assets/pr-1.jpg';
import eng1 from '@/assets/eng-1.jpeg';

// --- Gallery Images (Import specific images for galleries) ---

// Wedding Gallery Images
import wedTile1 from '@/assets/wed-tile1.png';
import wedTile2 from '@/assets/wed-tile2.png';
import wedTile3 from '@/assets/wed-tile3.png';
import wedTile4 from '@/assets/wed-tile4.png';
import wedTile5 from '@/assets/wed-tile5.png';
import wedTile6 from '@/assets/wed-tile6.png';

// Pre-wedding Gallery Images
import prewedTile1 from '@/assets/prewed-tile1.png';
import prewedTile2 from '@/assets/prewed-tile2.png';
import prewedTile3 from '@/assets/prewed-tile3.png';
import prewedTile4 from '@/assets/prewed-tile4.png';
import prewedTile5 from '@/assets/prewed-tile5.png';
import prewedTile6 from '@/assets/prewed-tile6.png';
import prewedTile7 from '@/assets/prewed-tile7.png';
import prewedTile8 from '@/assets/prewed-tile8.png';

// Engagement Gallery Images
import engTile1 from '@/assets/eng-tile1.png';
import engTile2 from '@/assets/eng-tile2.png';
import engTile3 from '@/assets/eng-tile3.png';
import engTile4 from '@/assets/eng-tile4.png';
import engTile5 from '@/assets/eng-tile5.png';
import engTile6 from '@/assets/eng-tile6.png';
import engTile7 from '@/assets/eng-tile7.png';
import engTile8 from '@/assets/eng-tile8.png';

// Bridal Gallery
import copyWhm17Ow from '@/assets/Copy-of-whm-17ow.jpg';
import copyWhm348Ow from '@/assets/Copy-of-wildhorse-348ow.jpg';

// Maternity Gallery Images
import matTile1 from '@/assets/mat-tile1.png';
import matTile2 from '@/assets/mat-tile2.png';
import matTile3 from '@/assets/mat-tile3.png';
import matTile4 from '@/assets/mat-tile4.png';
import matTile5 from '@/assets/mat-tile5.png';
import matTile6 from '@/assets/mat-tile6.png';
import matTile7 from '@/assets/mat-tile7.png';
import matTile8 from '@/assets/mat-tile8.png';

// Baby Shower Gallery Images
import babysTile1 from '@/assets/babys-tile1_1.png';
import babysTile2 from '@/assets/babys-tile2_1.png';
import babysTile3 from '@/assets/babys-tile3_1.png';
import babysTile4 from '@/assets/babys-tile4_1.png';
import babysTile5 from '@/assets/babys-tile5_1.png';
import babysTile6 from '@/assets/babys-tile6_1.png';
import babysTile7 from '@/assets/babys-tile7_1.png';
import babysTile8 from '@/assets/babys-tile8_1.png';

// Baby Photoshoot Gallery Images
import babyshootTile1 from '@/assets/babyshoot-tile1.png';
import babyshootTile2 from '@/assets/babyshoot-tile2.png';
import babyshootTile3 from '@/assets/babyshoot-tile3.png';
import babyshootTile4 from '@/assets/babyshoot-tile4.png';
import babyshootTile5 from '@/assets/babyshoot-tile5.png';
import babyshootTile6 from '@/assets/babyshoot-tile6.png';
import babyshootTile7 from '@/assets/babyshoot-tile7.png';
import babyshootTile8 from '@/assets/babyshoot-tile8.png';

// Family Photoshoot Gallery
import familyLanding from '@/assets/family-landing.jpg';

// Model Photoshoot Gallery Images
import modelTile1 from '@/assets/model-tile1.png';
import modelTile2 from '@/assets/model-tile2.png';
import modelTile3 from '@/assets/model-tile3.png';
import modelOw from '@/assets/model-ow.jpg';
import model3 from '@/assets/model-3.jpeg';


// House Warming Gallery (using existing import)

// Product & Interior Gallery
import interiorJpeg from '@/assets/interior.jpeg';

// Album Design Gallery Images
import albTile1 from '@/assets/alb-tile1.png';
import albTile2 from '@/assets/alb-tile2.png';
import albTile3 from '@/assets/alb-tile3.png';
import albTile4 from '@/assets/alb-tile4.png';
import albTile5 from '@/assets/alb-tile5.png';
import albTile6 from '@/assets/alb-tile6.png';
import albTile7 from '@/assets/alb-tile7.png';
import albTile8 from '@/assets/alb-tile8.png';


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
    image: wedding2Wwd,
    fullDescription: 'Looking for the best wedding photographers in South India? Contact Wild horse Media today!',
    galleryImages: [wedTile1, wedTile2, wedTile3, wedTile4, wedTile5, wedTile6],
    
  },
  {
    slug: 'pre-wedding',
    title: 'Pre-wedding',
    description: 'Beautiful pre-wedding shoots at stunning locations to celebrate your love story',
    image: preWeddingWwd,
    fullDescription: 'Searching for the Most Romantic Pre-Wedding Photographers in South India? Book your dreamy pre-wedding photography session with Wild Horse Media today!',
    galleryImages: [prewedTile1, prewedTile2, prewedTile3, prewedTile4, prewedTile5, prewedTile6, prewedTile7, prewedTile8],
    // ** ADDED Pre-wedding Videos **
    videos: [
      'https://youtu.be/7VXcWCwqI88',
      'https://youtu.be/e11WgcN4MWU'
    ]
  },
  {
    slug: 'engagement-ceremony',
    title: 'Engagement Ceremony',
    description: 'Capture the joy and excitement of your engagement ceremony',
    image: eng1,
    fullDescription: 'Celebrate the beginning of your journey together. Book us for your engagement ceremony.',
    galleryImages: [engTile1, engTile2, engTile3, engTile4, engTile5, engTile6, engTile7, engTile8]
  },
  {
    slug: 'album-design',
    title: 'Album designs and printing',
    description: 'Beautiful album designs and premium printing services to preserve your memories',
    image: albumDesignWwd,
    fullDescription: 'Preserve your cherished memories in beautifully designed, high-quality, custom photo albums.',
    galleryImages: [albTile1, albTile2, albTile3, albTile4, albTile5, albTile6, albTile7, albTile8]
  },
  // --- Row 2 ---
  {
    slug: 'maternity',
    title: 'Maternity',
    description: 'Cherish the beautiful moments of motherhood with our maternity photography',
    image: maternityWwd,
    fullDescription: 'Where Can I Find the Best Maternity Photographers in Bengaluru? Cherish this journey forever. Contact Wild Horse Media for elegant maternity photoshoots!',
    galleryImages: [matTile1, matTile2, matTile3, matTile4, matTile5, matTile6, matTile7, matTile8]
  },
  {
    slug: 'baby-shower',
    title: 'Baby Shower',
    description: "Capture the joy and celebration of your baby shower",
    image: babyShowerWwd,
    fullDescription: 'Need Creative Baby Shower Photographers and Coverage in South India? Capture the joy of your celebration! Enquire about Wild Horse Media\'s baby shower packages now!',
    galleryImages: [babysTile1, babysTile2, babysTile3, babysTile4, babysTile5, babysTile6, babysTile7, babysTile8],
    videos: [
      'https://youtu.be/upxSk4dhwoc',
      'https://youtu.be/_Wm9iFbuJHY',
    ]
  },
  {
    slug: 'baby-photoshoots',
    title: 'Baby photoshoots',
    description: 'Adorable baby photography capturing precious early moments',
    image: babyWwd,
    fullDescription: 'Looking for Professional Newborn and Baby Photographers in Bengaluru? Tiny moments, lifelong memories. Schedule your baby photoshoot with Wild Horse Media!',
    galleryImages: [babyshootTile1, babyshootTile2, babyshootTile3, babyshootTile4, babyshootTile5, babyshootTile6, babyshootTile7, babyshootTile8]
  },
  {
    slug: 'bridal-photoshoot',
    title: 'Bridal Photoshoot',
    description: 'Your solo moment to shine with stunning bridal portraits',
    image: brideLanding,
    fullDescription: 'Want Stunning Bridal Portraits? Discover the Best Photographers for Your Wedding Day Look! Your solo moment to shine! Get a breathtaking bridal photoshoot package from Wild Horse Media.',
    galleryImages: [brideLanding, copyWhm17Ow, copyWhm348Ow]
  },
  // --- Row 3 ---
  {
    slug: 'model-photoshoots',
    title: 'Model photoshoots',
    description: 'Professional portfolio shoots for aspiring and established models',
    image: modelPhotoshootWwd,
    fullDescription: 'Build a stunning and professional portfolio with our expert model photography services.',
    galleryImages: [modelTile1, modelTile2, modelTile3, modelPhotoshootWwd, modelOw, model3],
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
    image: family2Wwd,
    fullDescription: 'Searching for the Top Family Portrait Photographers to Capture Your Bond in South India? Create stunning family heirlooms. Contact Wild Horse Media for memorable family photoshoots!',
    galleryImages: [family2Wwd, familyLanding]
  },
  {
    slug: 'product-interior',
    title: 'Product & Interior',
    description: 'Professional shots for your products and interior spaces',
    image: interior, // Card image (pr-1.jpg)
    fullDescription: 'Showcase your products or property with high-quality interior and product photography.',
    galleryImages: [interior, interiorJpeg],
    videos: [
      'https://youtu.be/sKNIkPRAG7g',
      'https://youtu.be/jLkcyBHz420'
    ]
  },
  {
    slug: 'house-warming',
    title: 'House Warming',
    description: 'Capture the memories of your new home with our photography services',
    image: housewarming,
    fullDescription: 'Celebrate your new beginning. We cover house warming ceremonies to capture every moment.',
    galleryImages: [housewarming],
    videos: [
      'https://youtu.be/pV4UcdYM30s',
    ]
      
  },
];

// Helper function to find a service by its slug (remains unchanged)
export const getServiceBySlug = (slug: string | undefined): Service | undefined => {
    if (!slug) return undefined;
    return servicesData.find(service => service.slug === slug);
};
