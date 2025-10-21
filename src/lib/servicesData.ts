// src/lib/servicesData.ts

// --- "What We Do" Images (Main Service Images) ---
import babyShowerWwd from '@/assets/Baby-Shower-wwd.jpg';
import babyWwd from '@/assets/Baby-wwd.jpg';
import family2Wwd from '@/assets/family-2-wwd.jpg';
import maternityWwd from '@/assets/Maternity-wwd.jpg';
import modelPhotoshootWwd from '@/assets/model-Photoshoot-wwd.jpg';
import preWeddingWwd from '@/assets/pre-wedding-wwd.jpg';
import wedding2Wwd from '@/assets/wedding-2-wwd.jpg';
import albumDesignWwd from '@/assets/album-design-wwd.jpg';
import brideLanding from '@/assets/br-2.jpeg'; // Used as main image for Bridal
import housewarming from '@/assets/hpusewarming.jpeg';
import interior from '@/assets/pr-1.jpg'; // Using pr-1 for Product/Interior main
import eng1 from '@/assets/eng-1.jpeg';

// --- Gallery Images (Import specific images for galleries) ---
// Wedding Gallery
import weddingOw from '@/assets/weddingow.jpg';
import whm1460Ow from '@/assets/WHM-1460ow.jpg';
import dsc08189Ow from '@/assets/DSC08189ow.jpg';
import copyWhm348Ow from '@/assets/Copy-of-wildhorse-348ow.jpg';

// Pre-wedding Gallery
import pweLanding from '@/assets/pwe-landing.jpg'; // Can reuse hero image
import copyWhm3Ow from '@/assets/Copy-of-whm3ow.jpg';

// Engagement Gallery (Using wedding-related for now, replace if specific ones exist)
// Using eng1 already imported

// Bridal Gallery
import brideFullLanding from '@/assets/Bride-landing.jpg'; // Wider version
import copyWhm17Ow from '@/assets/Copy-of-whm-17ow.jpg';

// Maternity Gallery
import matOw from '@/assets/mom-ow.jpeg'; // Original mom-ow
import matLandingPage from '@/assets/mat-landing page.jpg'; // Angel wings
import matLandingJpeg from '@/assets/mat-landing.jpeg'; // Triple image

// Baby Shower Gallery
import babyShower2 from '@/assets/baby-shower2.jpeg'; // More specific baby shower
// Using babyShowerWwd already imported

// Baby Photoshoot Gallery
import babyLanding from '@/assets/baby-landing.jpg'; // Double bath image
import copyWhm443Ow from '@/assets/Copy-of-WHM-443ow.jpg'; // Baby sitting on grass

// Family Photoshoot Gallery
import familyLanding from '@/assets/family-landing.jpg'; // Main family image from hero/service
// Using family2Wwd already imported

// Model Photoshoot Gallery
import modelOw from '@/assets/model-ow.jpg'; // Different model shot
import model3 from '@/assets/model-3.jpeg'; // Another model shot

// House Warming Gallery
// Using housewarming already imported

// Product & Interior Gallery
import interiorJpeg from '@/assets/interior.jpeg'; // Ceiling shot
// Using interior (pr-1.jpg) already imported

// Album Design Gallery
// Using albumDesignWwd already imported


// Define the structure for service data
export interface Service {
    slug: string; // URL-friendly identifier
    title: string; // Display title
    description: string; // Short description for cards
    image: string; // Image import path (for service card)
    fullDescription?: string; // Optional longer description for the booking page
    galleryImages?: string[]; // Array for gallery images on the service page
}

// Array holding all service details with updated galleryImages
export const servicesData: Service[] = [
  {
    slug: 'wedding',
    title: 'Wedding',
    description: 'Capture your special day with our professional wedding photography and cinematography services',
    image: wedding2Wwd, // Card image
    fullDescription: 'Looking for the best wedding photographers in South India? Contact Wild horse Media today!',
    galleryImages: [wedding2Wwd, weddingOw, whm1460Ow, dsc08189Ow, copyWhm348Ow] // Unique wedding gallery
  },
  {
    slug: 'pre-wedding',
    title: 'Pre-wedding',
    description: 'Beautiful pre-wedding shoots at stunning locations to celebrate your love story',
    image: preWeddingWwd, // Card image
    fullDescription: 'Searching for the Most Romantic Pre-Wedding Photographers in South India? Book your dreamy pre-wedding photography session with Wild Horse Media today!',
    galleryImages: [preWeddingWwd, pweLanding, copyWhm3Ow] // Unique pre-wedding gallery
  },
  {
    slug: 'engagement-ceremony',
    title: 'Engagement Ceremony',
    description: 'Capture the joy and excitement of your engagement ceremony',
    image: eng1, // Card image
    fullDescription: 'Celebrate the beginning of your journey together. Book us for your engagement ceremony.',
    galleryImages: [eng1] // Specific engagement gallery (add more relevant images if available)
  },
  {
    slug: 'bridal-photoshoot',
    title: 'Bridal Photoshoot',
    description: 'Your solo moment to shine with stunning bridal portraits',
    image: brideLanding, // Card image (br-2.jpeg)
    fullDescription: 'Want Stunning Bridal Portraits? Discover the Best Photographers for Your Wedding Day Look! Your solo moment to shine! Get a breathtaking bridal photoshoot package from Wild Horse Media.',
    galleryImages: [brideLanding, brideFullLanding, copyWhm17Ow, copyWhm348Ow] // Unique bridal gallery
  },
  {
    slug: 'maternity',
    title: 'Maternity',
    description: 'Cherish the beautiful moments of motherhood with our maternity photography',
    image: maternityWwd, // Card image
    fullDescription: 'Where Can I Find the Best Maternity Photographers in Bengaluru? Cherish this journey forever. Contact Wild Horse Media for elegant maternity photoshoots!',
    galleryImages: [maternityWwd, matOw, matLandingPage, matLandingJpeg] // Unique maternity gallery
  },
  {
    slug: 'baby-shower',
    title: 'Baby Shower',
    description: "Capture the joy and celebration of your baby shower",
    image: babyShowerWwd, // Card image
    fullDescription: 'Need Creative Baby Shower Photographers and Coverage in South India? Capture the joy of your celebration! Enquire about Wild Horse Media\'s baby shower packages now!',
    galleryImages: [babyShowerWwd, babyShower2, matLandingJpeg] // Unique baby shower gallery (can include related maternity)
  },
  {
    slug: 'baby-photoshoots',
    title: 'Baby photoshoots',
    description: 'Adorable baby photography capturing precious early moments',
    image: babyWwd, // Card image
    fullDescription: 'Looking for Professional Newborn and Baby Photographers in Bengaluru? Tiny moments, lifelong memories. Schedule your baby photoshoot with Wild Horse Media!',
    galleryImages: [babyWwd, babyLanding, copyWhm443Ow] // Unique baby gallery
  },
  {
    slug: 'family-photoshoots',
    title: 'Family photoshoots',
    description: 'Create lasting memories with beautiful family portraits',
    image: family2Wwd, // Card image
    fullDescription: 'Searching for the Top Family Portrait Photographers to Capture Your Bond in South India? Create stunning family heirlooms. Contact Wild Horse Media for memorable family photoshoots!',
    galleryImages: [family2Wwd, familyLanding] // Unique family gallery
  },
  {
    slug: 'model-photoshoots',
    title: 'Model photoshoots',
    description: 'Professional portfolio shoots for aspiring and established models',
    image: modelPhotoshootWwd, // Card image
    fullDescription: 'Build a stunning and professional portfolio with our expert model photography services.',
    galleryImages: [modelPhotoshootWwd, modelOw, model3] // Unique model gallery
  },
  {
    slug: 'house-warming',
    title: 'House Warming',
    description: 'Capture the memories of your new home with our photography services',
    image: housewarming, // Card image
    fullDescription: 'Celebrate your new beginning. We cover house warming ceremonies to capture every moment.',
    galleryImages: [housewarming] // Specific house warming gallery (add more if available)
  },
  {
    slug: 'product-interior',
    title: 'Product & Interior',
    description: 'Professional shots for your products and interior spaces',
    image: interior, // Card image (pr-1.jpg)
    fullDescription: 'Showcase your products or property with high-quality interior and product photography.',
    galleryImages: [interior, interiorJpeg] // Unique product/interior gallery
  },
  {
    slug: 'album-design',
    title: 'Album designs and printing',
    description: 'Beautiful album designs and premium printing services to preserve your memories',
    image: albumDesignWwd, // Card image
    fullDescription: 'Preserve your cherished memories in beautifully designed, high-quality, custom photo albums.',
    galleryImages: [albumDesignWwd] // Specific album design gallery (add more examples if available)
  },
];

// Helper function to find a service by its slug (remains unchanged)
export const getServiceBySlug = (slug: string | undefined): Service | undefined => {
    if (!slug) return undefined;
    return servicesData.find(service => service.slug === slug);
};