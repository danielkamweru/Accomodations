import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import BrandIntro from "@/components/BrandIntro";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedDevelopment from "@/components/FeaturedDevelopment";
import GalleryPreview from "@/components/GalleryPreview";
import LifestyleLocation from "@/components/LifestyleLocation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <BrandIntro />

      {/* Featured Projects */}
      <section className="bg-secondary/20 py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            subtitle="Our Portfolio"
            title="Featured Projects"
            description="Explore our collection of luxury townhouse developments in Lavington, Nairobi."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <FeaturedDevelopment />
      <GalleryPreview />
      <LifestyleLocation />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
