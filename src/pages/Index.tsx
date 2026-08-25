import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import BrandIntro from "@/components/BrandIntro";
import SectionHeader from "@/components/SectionHeader";
import PropertyCard from "@/components/PropertyCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import GalleryPreview from "@/components/GalleryPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const featured = properties.filter((p) => p.featured).slice(0, 6);
  const navigate = useNavigate();

  const categories = [
    { label: "Near Campus", category: "near-campus", description: "Juja, Kahawa, Kasarani" },
    { label: "Near CBD", category: "near-cbd", description: "Kilimani, Westlands" },
    { label: "Near Transport", category: "near-transport", description: "Thika Road, Rongai" },
    { label: "Budget Friendly", category: "budget-friendly", description: "Under KES 20,000/mo" },
    { label: "Student Housing", category: "student-housing", description: "Purpose-built student homes" },
    { label: "Single Rooms", category: "single-rooms", description: "Affordable single rooms" },
    { label: "Bedsitters", category: "bedsitters", description: "Self-contained bedsitters" },
    { label: "One Bedroom", category: "one-bedroom", description: "1-bedroom apartments" },
    { label: "Shared", category: "shared", description: "Shared accommodation" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <BrandIntro />

      {/* Featured Properties */}
      <section className="bg-secondary/20 py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            subtitle="Featured Listings"
            title="Available Properties"
            description="Explore curated accommodation options across Nairobi, Kiambu, and surrounding counties — from bedsitters to two-bedroom apartments."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Categories */}
      <section className="bg-background py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            subtitle="Discover"
            title="Browse by Category"
            description="Quickly find accommodation that matches your lifestyle and budget."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => navigate(`/properties?category=${cat.category}`)}
                className="group border border-border bg-secondary/10 p-6 text-left transition-colors hover:border-foreground hover:bg-secondary/20"
              >
                <h3 className="font-heading text-xl font-medium tracking-wide text-foreground group-hover:text-accent transition-colors">
                  {cat.label}
                </h3>
                <p className="mt-2 font-body text-sm font-light text-muted-foreground">
                  {cat.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <GalleryPreview />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
