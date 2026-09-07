export interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  status: string;
  type: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  images: string[];
  amenities: string[];
  floorPlans: string[];
  units: number;
  bedrooms: number;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Muhoya Avenue Residences",
    slug: "muhoya-avenue",
    location: "Lavington, Nairobi",
    status: "Completed",
    type: "Townhouse",
    shortDescription: "Luxury townhouses in Lavington.",
    longDescription: "Exclusive collection of luxury townhouses.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [],
    amenities: [],
    floorPlans: [],
    units: 12,
    bedrooms: 4,
  },
  {
    id: "2",
    title: "Ridgeview Estate",
    slug: "ridgeview-estate",
    location: "Lavington, Nairobi",
    status: "Under Construction",
    type: "Townhouse",
    shortDescription: "Modern townhouses in Lavington.",
    longDescription: "Modern townhouses designed for discerning families.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    images: [],
    amenities: [],
    floorPlans: [],
    units: 8,
    bedrooms: 4,
  },
  {
    id: "3",
    title: "Palm Gardens",
    slug: "palm-gardens",
    location: "Lavington, Nairobi",
    status: "Completed",
    type: "Townhouse",
    shortDescription: "Tropical luxury townhouses.",
    longDescription: "Palm Gardens brings tropical luxury to Lavington.",
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    images: [],
    amenities: [],
    floorPlans: [],
    units: 6,
    bedrooms: 3,
  },
  {
    id: "4",
    title: "Square Residences",
    slug: "square-residences",
    location: "Lavington, Nairobi",
    status: "Planning",
    type: "Townhouse",
    shortDescription: "Contemporary architectural statement.",
    longDescription: "Bold architectural statement in Lavington.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [],
    amenities: [],
    floorPlans: [],
    units: 10,
    bedrooms: 4,
  },
  {
    id: "5",
    title: "708 Tende Drive",
    slug: "tende-drive",
    location: "Lavington, Nairobi",
    status: "Completed",
    type: "Townhouse",
    shortDescription: "Intimate luxury residences.",
    longDescription: "Intimate luxury development on a quiet street.",
    heroImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    images: [],
    amenities: [],
    floorPlans: [],
    units: 4,
    bedrooms: 5,
  },
  {
    id: "6",
    title: "56 Muhoya Avenue",
    slug: "56-muhoya",
    location: "Lavington, Nairobi",
    status: "Completed",
    type: "Townhouse",
    shortDescription: "Prestigious avenue collection.",
    longDescription: "Pinnacle of luxury living in Lavington.",
    heroImage: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    images: [],
    amenities: [],
    floorPlans: [],
    units: 8,
    bedrooms: 4,
  },
  {
    id: "7",
    title: "Westlands Heights",
    slug: "westlands-heights",
    location: "Westlands, Nairobi",
    status: "Under Construction",
    type: "Apartment",
    shortDescription: "Modern apartments in Westlands.",
    longDescription: "Contemporary apartments in the heart of Westlands.",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    images: [],
    amenities: [],
    floorPlans: [],
    units: 20,
    bedrooms: 2,
  },
];
