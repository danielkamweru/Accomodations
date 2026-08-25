import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { MapPin, Compass, Gem, TreePine, ShieldCheck, Users } from "lucide-react";

const features = [
  { icon: MapPin, title: "Wide Location Coverage", description: "Search across Nairobi, Kiambu, Kajiado, and surrounding areas — from Kasarani to Rongai, Juja to Kilimani." },
  { icon: Compass, title: "Powerful Filters", description: "Filter by budget, property type, room type, amenities, and furnishing to narrow down options fast." },
  { icon: Gem, title: "Verified Listings", description: "Curated demo listings with clear rent, deposit, and availability details so you can compare with confidence." },
  { icon: TreePine, title: "Budget-Friendly Options", description: "Discover affordable bedsitters, single rooms, and shared accommodation suited for students and young professionals." },
  { icon: ShieldCheck, title: "Save & Compare", description: "Save favourites, compare properties side-by-side, and track recently viewed homes — all in one place." },
  { icon: Users, title: "Built for Students & Professionals", description: "Designed for the unique needs of Kenyan students and young professionals looking for convenient, affordable housing." },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-primary py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          subtitle="Why Choose Us"
          title="The Accomodations Difference"
          description="Every Accomodations development is a testament to our uncompromising standards of quality, design, and attention to detail."
          light
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-primary-foreground/10 p-8 transition-colors hover:border-accent/30"
            >
              <feature.icon size={28} className="text-accent" />
              <h3 className="mt-5 font-heading text-2xl font-medium tracking-wide text-primary-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 font-body text-sm font-light leading-relaxed text-primary-foreground/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
