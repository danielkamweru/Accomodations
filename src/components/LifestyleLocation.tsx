import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { GraduationCap, ShoppingBag, Heart, Bus } from "lucide-react";

const amenities = [
  { icon: GraduationCap, title: "Schools", description: "Top international and local schools within minutes." },
  { icon: ShoppingBag, title: "Shopping Centers", description: "Premium malls and boutiques in the neighborhood." },
  { icon: Heart, title: "Hospitals", description: "World-class healthcare facilities nearby." },
  { icon: Bus, title: "Transport Access", description: "Excellent road networks and proximity to the CBD." },
];

const LifestyleLocation = () => {
  return (
    <section className="bg-secondary/30 py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              subtitle="Location"
              title="Life in Lavington"
              description="Lavington is one of Nairobi's most prestigious residential neighborhoods, offering a perfect blend of tranquility, convenience, and cosmopolitan living."
              align="left"
            />

            <div className="grid gap-6 sm:grid-cols-2">
              {amenities.map((amenity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary">
                    <amenity.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-medium text-foreground">{amenity.title}</h4>
                    <p className="mt-1 font-body text-xs font-light text-muted-foreground">{amenity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center bg-muted"
          >
            <div className="flex h-full min-h-[400px] w-full items-center justify-center border border-border">
              <p className="font-body text-sm text-muted-foreground">Map Integration Placeholder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleLocation;
