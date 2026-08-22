export interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  type: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  images: string[];
  amenities: string[];
  floorPlans: string[];
  units: number;
  bedrooms: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "56 Muhoya Avenue",
    slug: "56-muhoya-avenue",
    location: "Lavington, Nairobi",
    status: "Completed",
    type: "Townhouses",
    shortDescription: "An exclusive collection of luxury townhouses set along one of Lavington's most prestigious avenues.",
    longDescription: "56 Muhoya Avenue represents the pinnacle of luxury living in Lavington. This exclusive development features meticulously designed townhouses that blend contemporary architecture with timeless elegance. Each residence offers expansive living spaces, premium finishes, and private gardens, creating a sanctuary of refined urban living.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    amenities: ["Private Garden", "Indoor & Outdoor Kitchen", "DSQ", "24/7 Security", "Family Room", "2-Car Parking"],
    floorPlans: ["https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80"],
    units: 6,
    bedrooms: "4-5",
  },
  {
    id: "2",
    title: "28 Apple Cross",
    slug: "28-apple-cross",
    location: "Lavington, Nairobi",
    status: "Completed",
    type: "Townhouses",
    shortDescription: "Modern townhouses designed for discerning families in the heart of Lavington.",
    longDescription: "28 Apple Cross is a premium residential development offering modern townhouses with sophisticated interiors and lush surroundings. Located in one of Nairobi's most sought-after neighborhoods, this development combines architectural excellence with everyday luxury.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    ],
    amenities: ["Private Garden", "Open Plan Kitchen", "DSQ", "Security", "Family Room", "Parking"],
    floorPlans: ["https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80"],
    units: 8,
    bedrooms: "4",
  },
  {
    id: "3",
    title: "Pyramid Ridge",
    slug: "pyramid-ridge",
    location: "Lavington, Nairobi",
    status: "Completed",
    type: "Townhouses",
    shortDescription: "Elevated living at its finest with panoramic views and architectural mastery.",
    longDescription: "Pyramid Ridge is an architectural masterpiece offering elevated luxury townhouses with sweeping views of the surrounding landscape. Each unit is designed to maximize natural light and create seamless indoor-outdoor living experiences.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    ],
    amenities: ["Private Garden", "Chef's Kitchen", "DSQ", "24/7 Security", "Rooftop Terrace", "3-Car Parking"],
    floorPlans: ["https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80"],
    units: 5,
    bedrooms: "5",
  },
  {
    id: "4",
    title: "Apple Creek",
    slug: "apple-creek",
    location: "Lavington, Nairobi",
    status: "Completed",
    type: "Townhouses",
    shortDescription: "A serene residential haven where nature meets contemporary luxury.",
    longDescription: "Apple Creek offers a serene living experience surrounded by mature trees and landscaped gardens. This exclusive development features contemporary townhouses with premium finishes and thoughtful design details throughout.",
    heroImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    ],
    amenities: ["Private Garden", "Indoor & Outdoor Kitchen", "DSQ", "Security", "Lounge", "2-Car Parking"],
    floorPlans: ["https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80"],
    units: 7,
    bedrooms: "4",
  },
  {
    id: "5",
    title: "Pyramid Palms",
    slug: "pyramid-palms",
    location: "Lavington, Nairobi",
    status: "Completed",
    type: "Townhouses",
    shortDescription: "Tropical luxury living with palm-lined gardens and refined interiors.",
    longDescription: "Pyramid Palms brings tropical luxury to Lavington with palm-lined gardens and beautifully appointed townhouses. Every detail has been carefully considered to create an oasis of calm in the heart of Nairobi.",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    ],
    amenities: ["Private Garden", "Kitchen Island", "DSQ", "24/7 Security", "Family Room", "Parking"],
    floorPlans: ["https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80"],
    units: 6,
    bedrooms: "4-5",
  },
  {
    id: "6",
    title: "Pyramid Square",
    slug: "pyramid-square",
    location: "Lavington, Nairobi",
    status: "Completed",
    type: "Townhouses",
    shortDescription: "Contemporary urban townhouses with bold architectural lines and spacious interiors.",
    longDescription: "Pyramid Square is a bold architectural statement in Lavington, featuring contemporary townhouses with expansive floor plans and premium materials. The development is designed for modern families seeking space, style, and security.",
    heroImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    ],
    amenities: ["Private Garden", "Open Plan Kitchen", "DSQ", "Security", "Entertainment Area", "2-Car Parking"],
    floorPlans: ["https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80"],
    units: 8,
    bedrooms: "4",
  },
  {
    id: "7",
    title: "708 Tende Drive",
    slug: "708-tende-drive",
    location: "Lavington, Nairobi",
    status: "Completed",
    type: "Townhouses",
    shortDescription: "An intimate collection of luxury residences on one of Lavington's quietest streets.",
    longDescription: "708 Tende Drive is an intimate luxury development situated on one of Lavington's most serene streets. The townhouses offer generous proportions, refined finishes, and private outdoor spaces perfect for family living.",
    heroImage: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    amenities: ["Private Garden", "Gourmet Kitchen", "DSQ", "24/7 Security", "Study Room", "Parking"],
    floorPlans: ["https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80"],
    units: 4,
    bedrooms: "5",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
