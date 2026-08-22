import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Target, Eye, Heart, Award } from "lucide-react";

const leaders = [
  { name: "John Kamau", role: "Managing Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Sarah Wanjiku", role: "Head of Architecture", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "David Ochieng", role: "Project Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

const values = [
  { icon: Award, title: "Excellence", description: "Uncompromising quality in every detail of construction and design." },
  { icon: Target, title: "Precision", description: "Meticulous attention to architectural detail and finish." },
  { icon: Heart, title: "Integrity", description: "Transparent dealings and honest relationships with our clients." },
  { icon: Eye, title: "Vision", description: "Forward-thinking design that stands the test of time." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center bg-primary pt-20">
        <div className="container mx-auto px-6 py-20 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">About Us</span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-7xl">
              Our Story
            </h1>
            <p className="mt-6 max-w-xl font-body text-sm font-light leading-relaxed text-primary-foreground/70">
              Building legacy homes in Nairobi's most coveted neighborhood since our inception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" alt="About" className="h-full w-full object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col justify-center">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Legacy</span>
              <h2 className="mt-4 font-heading text-4xl font-light tracking-wide text-foreground md:text-5xl">Crafting Homes,<br />Building Legacies</h2>
              <p className="mt-6 font-body text-sm font-light leading-relaxed text-muted-foreground">
                Accomodations was founded with a singular vision: to create exceptional residential developments that redefine luxury living in Nairobi. Based in the prestigious Lavington neighborhood, we have established ourselves as a premier developer of luxury townhouses.
              </p>
              <p className="mt-4 font-body text-sm font-light leading-relaxed text-muted-foreground">
                With 7 completed projects and a reputation for architectural excellence, we continue to raise the standard for premium residential developments in Kenya's capital.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/20 py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2">
            {[
              { label: "Our Mission", text: "To develop premium residential properties that exceed expectations in design, quality, and livability, creating homes that families cherish for generations." },
              { label: "Our Vision", text: "To be East Africa's most respected luxury residential developer, known for architectural innovation, uncompromising quality, and creating thriving communities." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="border border-border p-10">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">{item.label}</span>
                <p className="mt-6 font-heading text-2xl font-light leading-relaxed text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-background py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader subtitle="Leadership" title="Our Team" description="Meet the visionaries behind Accomodations." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0" />
                </div>
                <h3 className="mt-4 font-heading text-2xl font-medium tracking-wide text-foreground">{leader.name}</h3>
                <p className="mt-1 font-body text-xs font-light uppercase tracking-[0.15em] text-muted-foreground">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary py-28 lg:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader subtitle="Our Values" title="What Drives Us" light />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center">
                <value.icon size={32} className="mx-auto text-accent" />
                <h3 className="mt-4 font-heading text-2xl font-medium text-primary-foreground">{value.title}</h3>
                <p className="mt-2 font-body text-sm font-light text-primary-foreground/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
