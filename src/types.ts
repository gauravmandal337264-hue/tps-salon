export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  category: 'hair' | 'beauty' | 'bridal';
  duration?: string;
  price?: string;
  features?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'skin' | 'bridal' | 'salon-interior';
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
}

export interface PackageItem {
  id: string;
  title: string;
  description: string;
  price: string;
  category: 'hair' | 'beauty' | 'bridal' | 'makeover';
  services: string[];
  isFeatured?: boolean;
}

export interface ExpertItem {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  specialties: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  role?: string;
  image?: string;
}
