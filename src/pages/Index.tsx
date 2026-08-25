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

const Index = () => {
  const featured = properties.filter((p) => p.featured).slice(0, 6);

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

      <WhyChooseUs />
      <GalleryPreview />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
