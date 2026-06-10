import { ServiceItem, GalleryItem, PackageItem, ExpertItem, TestimonialItem } from './types';

// Let's create high-end Unsplash images that perfectly match the luxury spaces of the physical TPS salon!
export const SALON_SPACES_IMAGES = {
  entrance: '/src/assets/images/tps_reception_fixed_1781093054695.png', // Lobby & L'Oreal models
  stylingStations: '/src/assets/images/tps_styling_fixed_1781093074186.png', // Arch mirrors & LED outline
  productDisplay: '/src/assets/images/tps_display_1781092109864.png', // L'Oreal products shelf
  spaRoom: '/src/assets/images/tps_spa_1781092072917.png', // Warm facial treatment room
  shampooStation: '/src/assets/images/tps_shampoo_1781092123942.png', // Washing sinks on wooden deck
  pedicureUnit: '/src/assets/images/tps_pedicure_1781092088004.png', // Gray luxury pedicure chair
  lounge: '/src/assets/images/tps_reception_fixed_1781093054695.png', // Luxurious velvet sofa lounge
  corridors: '/src/assets/images/tps_hallway_1781092098082.png', // Wainscoted chic hallways
};

export const HAIR_SERVICES: ServiceItem[] = [
  {
    id: 'h1',
    name: 'Luxury Hair Cut & Styling',
    description: 'Precision couture haircuts tailored to your facial structure, finished with a professional L\'Oréal styling routine.',
    category: 'hair',
    duration: '45 mins',
    price: '₹750 - ₹1,500',
    features: ['Personalized consultation', 'L\'Oréal professional wash', 'Blowdry & premium serum finishing']
  },
  {
    id: 'h2',
    name: 'Couture Blowdry & Styling',
    description: 'Red-carpet ready styling from voluptuous Parisian waves to sleek, glassy modern finishes.',
    category: 'hair',
    duration: '30 mins',
    price: '₹500 - ₹1,200',
    features: ['Thermal protection therapy', 'Volume or sleek styling option', 'Shine booster finish']
  },
  {
    id: 'h3',
    name: 'L\'Oréal Molecular Hair Spa',
    description: 'Ultra-reconstructive molecular system designed to repair inner hair structure, restore lipids and deliver sublime shine.',
    category: 'hair',
    duration: '60 mins',
    price: '₹1,500 - ₹3,000',
    features: ['Scalp detox therapy', 'Steam activation massage', 'Anti-frizz lipid envelope']
  },
  {
    id: 'h4',
    name: 'L\'Oréal Professionnel Hair Coloring',
    description: 'Rich, multidimensional high-fashion hair coloring powered by L\'Oréal Dia Light and iNOA ammonia-free technology.',
    category: 'hair',
    duration: '120 mins',
    price: '₹2,500 - ₹6,500',
    features: ['Ammonia-free gentle oil formula', 'Custom shade design', 'Color lock shampoo & mask']
  },
  {
    id: 'h5',
    name: 'Balayage & Couture Highlights',
    description: 'Artisanal hand-painted sun-kissed lights creating depth, fluidity, and radiant Parisian luxury.',
    category: 'hair',
    duration: '180 mins',
    price: '₹4,500 - ₹10,000',
    features: ['French balayage technique', 'Metal detox clarifying pre-treatment', 'Signature gloss toner']
  },
  {
    id: 'h6',
    name: 'Pro-Keratin Infusion Treatment',
    description: 'Intense reconstructive protein mask formulation that smoothens the cuticle, controls frizz, and leaves hair satiny soft.',
    category: 'hair',
    duration: '150 mins',
    price: '₹5,000 - ₹12,000',
    features: ['Deep cuticle sealing', 'Silk protein infusion', 'Long lasting volume control (up to 4 months)']
  },
  {
    id: 'h7',
    name: 'L\'Oréal Extenso Rebonding & Straightening',
    description: 'High-precision restructuring for absolute sleekness, fluid motion, and ultimate diamond shine.',
    category: 'hair',
    duration: '210 mins',
    price: '₹6,000 - ₹14,000',
    features: ['Deep smoothing technology', 'Inner bond protector shield', 'Neutralizing cream treatment']
  },
  {
    id: 'h8',
    name: 'Advanced Hair Smoothening',
    description: 'The sweet spot between control and volume: tames frizz, softens waves, and delivers luxurious natural motion.',
    category: 'hair',
    duration: '180 mins',
    price: '₹4,500 - ₹9,500',
    features: ['Custom strength formulation', 'Extreme moisture infusion', 'Heat shield treatment']
  }
];

export const BEAUTY_SERVICES: ServiceItem[] = [
  {
    id: 'b1',
    name: 'L\'Oréal Glycolic Skin Polish & Cleanup',
    description: 'Micro-exfoliating skin renewal that unclogs pores, targets pigmentation, and leaves a radiant glass-skin reflection.',
    category: 'beauty',
    duration: '40 mins',
    price: '₹950 - ₹1,800',
    features: ['Steam extraction & peel', 'Hydrolipid balanced massage', 'Satin glow skin shield']
  },
  {
    id: 'b2',
    name: 'Gold Radiance Facial Therapy',
    description: 'Imperial luxury treatment using multi-mineral gold flakes to stimulate cellular renewal and restore luminosity.',
    category: 'beauty',
    duration: '75 mins',
    price: '₹2,500 - ₹4,500',
    features: ['24k gold essence therapy', 'Lymphatic drainage massage', 'Collagen structural firming mask']
  },
  {
    id: 'b3',
    name: 'Dermal Moisture Infusion Facial',
    description: 'Hydrating cellular therapy for tired, dry, or dehydrated skin, providing long-lasting plumpness and dewiness.',
    category: 'beauty',
    duration: '60 mins',
    price: '₹1,800 - ₹3,500',
    features: ['Hyaluronic dermal infusion', 'Soothing floral vapor mist', 'Algae cooling peel-off mask']
  },
  {
    id: 'b4',
    name: 'Couture Manicure & Pedicure Spa',
    description: 'Restorative luxury care inside our custom pedicure sanctuary. Combines exfoliation, structural shaping, and divine massage.',
    category: 'beauty',
    duration: '60 mins',
    price: '₹1,200 - ₹2,500',
    features: ['Organic mineral foot soak', 'Gently exfoliating scrub', 'Essential oil deep-hydration massage']
  },
  {
    id: 'b5',
    name: 'Organic Herb Waxing & Grooming',
    description: 'Extremely gentle waxing options infused with extracts of Honey, Lavender, or Tea Tree to soothe sensitive dermis.',
    category: 'beauty',
    duration: '30 mins',
    price: '₹300 - ₹1,500',
    features: ['Antiseptic pre-wax care', 'Anti-irritant lavender post-spray', 'Soothed, uniform finish']
  }
];

export const BRIDAL_SERVICES: ServiceItem[] = [
  {
    id: 'br1',
    name: 'Signature HD Bridal Makeup',
    description: 'Flawless camera-ready high-definition bride styling utilizing luxury foundations, custom contouring, and artistic detailing.',
    category: 'bridal',
    duration: '180 mins',
    price: '₹12,000 - ₹18,000',
    features: ['Premium HD foundation blending', 'Precision custom eye contour', 'Sari pleating & draping', 'Bridal hair styling session']
  },
  {
    id: 'br2',
    name: 'Elite Airbrush Bridal Makeup',
    description: 'The pinnacle of global makeup science: lightweight, water-resistant, ultra-consistent flawless airbrush finish.',
    category: 'bridal',
    duration: '150 mins',
    price: '₹18,000 - ₹25,000',
    features: ['Silicone-based micro-droplet finish', 'Flawless 18-hour sebum control', 'Jewelry set & dupatta styling', 'High-shine body glow shimmer']
  },
  {
    id: 'br3',
    name: 'Engagement & Reception Couture Styling',
    description: 'Striking modern glamorous details for your pre-wedding and post-wedding celebrations, tailored to ambient lighting.',
    category: 'bridal',
    duration: '120 mins',
    price: '₹8,000 - ₹14,000',
    features: ['Glamorous soft-focus setting', 'Contemporary high-fashion bun / curls', 'Outfit draping perfection']
  },
  {
    id: 'br4',
    name: 'Royal Pre-Bridal Wellness Ritual',
    description: 'The ultimate intensive luxury prep starting weeks before your wedding day to guarantee flawless skin and crowning locks.',
    category: 'bridal',
    duration: '3 Sessions',
    price: '₹15,000 - ₹22,000',
    features: ['2 Facial therapies of choice', 'Pro-Keratin hair spa therapy', 'Glow body scrub & wrapping ritual', 'Couture manicure & pedicure spa']
  }
];

export const ALL_SERVICES = [...HAIR_SERVICES, ...BEAUTY_SERVICES, ...BRIDAL_SERVICES];

export const PACKAGES: PackageItem[] = [
  {
    id: 'p1',
    title: 'L\'Oréal Silk & Glow Makeover',
    description: 'The ultimate professional treatment plan to rejuvenate both your hair structure and facial skin glow in a single day.',
    price: '₹4,999',
    category: 'makeover',
    services: ['Premium Contour Haircut', 'L\'Oréal Molecular Hair Spa', 'Glycolic Skin Polish Dermal Cleanup', 'Glow Booster Mask'],
    isFeatured: true
  },
  {
    id: 'p2',
    title: 'Absolute Hair Restoration Plan',
    description: 'Intense reconstructive treatment aimed at frizzy, dry, chemical-treated or weak hair to achieve mirror-like sleekness.',
    price: '₹6,499',
    category: 'hair',
    services: ['L\'Oréal Pro-Bond Strengthening Shield', 'Pro-Keratin Hair Spa Activator', 'Satinizing Hair Trimming', 'Rich Argan Take-Home Serum']
  },
  {
    id: 'p3',
    title: 'Imperial Glow & Bridal Pre-Prep',
    description: 'Carefully curated multi-module skin wellness to hydrate, smooth, and illuminate the epidermis ahead of bridal makeovers.',
    price: '₹8,999',
    category: 'bridal',
    services: ['24k Gold Radiance Facial Treatment', 'Rose Gold Body Exfoliating Spa', 'Couture Milk Pedicure & Manicure', 'Eye Revitalization Lip Balm Care'],
    isFeatured: false
  },
  {
    id: 'p4',
    title: 'TPS Signature Complete Grooming Plan',
    description: 'Perfect for regular upkeep or immediate event prep: comprehensive aesthetic groom featuring facial cleaning and pro styling.',
    price: '₹2,499',
    category: 'beauty',
    services: ['Scalp Energizing Hair Wash', 'Executive Hair Styling & Wax styling', 'Herbal Face Deep Clarifying Clean', 'Express Pedicure Spa']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Bridal Glow Transformation',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=600',
    beforeImage: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=85&w=600&blur=10', // Blurred placeholder or similar high-end representation
    afterImage: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=600',
    description: 'HD Bridal Makeover with traditional Assamese Mekhela Chador and gold jewelry matching.'
  },
  {
    id: 'g2',
    title: 'French Balayage Couture',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
    beforeImage: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=600', // Darker frizzy hair
    afterImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600', // Beautiful rich blonde caramel balayage
    description: 'Stunning seamless melt of caramel tones on rich natural chocolate base utilizing L\'Oréal Professional Majirel.'
  },
  {
    id: 'g3',
    title: 'L\'Oréal Extenso Smoothing',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=600',
    beforeImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600', // Frizzy puffy curls
    afterImage: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=600', // Satin soft straight hair
    description: 'Absolute frizz elimination with active hydration locks, yielding flowy straight hair with natural weight.'
  },
  {
    id: 'g4',
    title: 'Skin Radiance Luxury Treatment',
    category: 'skin',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600',
    description: 'Intense moisture peel & hyaluronic infusion providing immediate plumping, brightening, and structural balance.'
  }
];

export const EXPERTS: ExpertItem[] = [
  {
    id: 'e1',
    name: 'Tapas Sen',
    role: 'Creative Director & Master Hair Artist',
    description: 'Certified L\'Oréal Professional Expert with over 15 years of couture hair design, specialize in balayage color melts, rebonding, and structural hair correction.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600', // High-end portrait
    specialties: ['French Balayage', 'Couture Hair Cuts', 'Vibrancy Locking', 'Personalized Consultation']
  },
  {
    id: 'e2',
    name: 'Priyanka Sen',
    role: 'Lead Bridal Designer & Makeup Maestro',
    description: 'Renowned bridal designer specializing in HD Airbrush makeup, traditional Assamese Mekhela Chador styling, as well as editorial fashion layout glamor.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600', // High-end beauty portrait
    specialties: ['Airbrush Makeup', 'Traditional Indian Brides', 'Vogue Editorial Look', 'Dupatta Drapery']
  },
  {
    id: 'e3',
    name: 'Kabita Das',
    role: 'Senior Dermal Therapist & Skin Specialist',
    description: 'Deep expert in cellular facial systems, glycolic peel micro-exfoliation, and premium manicure/pedicure massage wellness.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    specialties: ['Cellular Facials', 'Dermal Massage Care', 'Skin Polish Healing', 'Organic Spa Therapies']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Anamika Kalita',
    role: 'Bride from Bongaigaon',
    rating: 5,
    text: 'I got my bridal airbrush makeup done by Priyanka. I was absolutely amazed! The details starting from skin hydration, flawless look to sari draping were premium. It stayed perfect for more than 16 hours. TPS is the best salon in Assam!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Rajdeep Baruah',
    role: 'L\'Oréal Hair Styling Client',
    rating: 5,
    text: 'Tapas is amazing with scissors! He gave me a structured consultation, analyzed my hair type, and did a balayage coloring that transformed my look completely. The L\'Oréal product range they maintain is superb.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't3',
    name: 'Jyotishna pathak',
    role: 'Moisture Infusion Facial Client',
    rating: 5,
    text: 'Unmatched hygiene standards. The salon spaces are so luxurious-especially the backlit styling arches and quiet spa zone. Kabita gave me the gold facial and a luxury massage that was pure bliss.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  }
];
