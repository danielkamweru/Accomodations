import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const highlights = [
  "5 Bedroom Luxury Townhouses",
  "Private Landscaped Gardens",
  "Premium Interior Finishes",
  "24/7 Gated Security",
  "Prime Lavington Location",
];

const FeaturedDevelopment = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="overflow-hidden bg-background py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img
                style={{ y }}
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80"
                alt="56 Muhoya Avenue"
                className="h-[110%] w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Featured Development
            </span>
            <h2 className="mt-4 font-heading text-4xl font-light tracking-wide text-foreground md:text-5xl">
              56 Muhoya Avenue
            </h2>
            <p className="mt-6 font-body text-sm font-light leading-relaxed text-muted-foreground">
              An exclusive collection of luxury townhouses set along one of Lavington's most prestigious avenues.
              Each residence offers expansive living spaces, premium finishes, and private gardens.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check size={16} className="text-accent" />
                  <span className="font-body text-sm font-light text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/projects/56-muhoya-avenue"
              className="mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Project <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDevelopment;
