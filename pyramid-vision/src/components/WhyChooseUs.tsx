import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { MapPin, Compass, Gem, TreePine, ShieldCheck, Users } from "lucide-react";

const features = [
  { icon: MapPin, title: "Prime Locations", description: "Strategically located in Lavington, one of Nairobi's most prestigious neighborhoods." },
  { icon: Compass, title: "Architectural Design", description: "Contemporary architecture that harmonizes with the natural surroundings." },
  { icon: Gem, title: "Luxury Finishes", description: "Premium materials and meticulous craftsmanship in every detail." },
  { icon: TreePine, title: "Private Gardens", description: "Lush landscaped gardens providing tranquil outdoor living spaces." },
  { icon: ShieldCheck, title: "Secure Communities", description: "Gated developments with 24/7 security and controlled access." },
  { icon: Users, title: "Family Friendly", description: "Thoughtful layouts designed for modern family living." },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-primary py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          subtitle="Why Choose Us"
          title="The Pyramid Difference"
          description="Every Pyramid Builders development is a testament to our uncompromising standards of quality, design, and attention to detail."
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
