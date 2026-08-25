import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Target, Eye, Heart, Award } from "lucide-react";

const leaders = [
  { name: "Daniel Kamweru", role: "Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Wanjiku Njoroge", role: "Head of Product", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "James Otieno", role: "Community Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

const values = [
  { icon: Award, title: "Transparency", description: "Clear rent, deposit, and availability details on every listing." },
  { icon: Target, title: "Accessibility", description: "Making housing discovery simple for students and young professionals across Kenya." },
  { icon: Heart, title: "Trust", description: "Curated listings with honest descriptions and verified details." },
  { icon: Eye, title: "Innovation", description: "Smart tools to compare, save, and find the best fit for your lifestyle and budget." },
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
              Making accommodation discovery simple, transparent, and accessible for Kenyan students and young professionals.
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
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80" alt="About" className="h-full w-full object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col justify-center">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Legacy</span>
              <h2 className="mt-4 font-heading text-4xl font-light tracking-wide text-foreground md:text-5xl">Housing for the\nNext Generation</h2>
              <p className="mt-6 font-body text-sm font-light leading-relaxed text-muted-foreground">
                Accomodations was founded with a singular vision: to make finding accommodation in Kenya easier for students and young professionals. We believe everyone deserves a transparent, simple way to discover housing that fits their lifestyle and budget.
              </p>
              <p className="mt-4 font-body text-sm font-light leading-relaxed text-muted-foreground">
                From affordable bedsitters in Kasarani to modern apartments in Kilimani, we are building the tools that help Kenyans find homes near universities, workplaces, and transport routes.
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
              { label: "Our Mission", text: "To simplify accommodation discovery for Kenyan students and young professionals by providing transparent, easy-to-use tools to search, compare, and choose suitable housing across the country." },
              { label: "Our Vision", text: "To be Kenya's most trusted housing discovery platform — known for transparency, accessibility, and empowering young Kenyans to find homes that match their budgets and lifestyles." },
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
