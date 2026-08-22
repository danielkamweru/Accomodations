import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

const stats = [
  { value: 7, label: "Completed Projects", suffix: "" },
  { value: 100, label: "Prime Lavington Locations", suffix: "%" },
  { value: 7, label: "Luxury Developments", suffix: "+" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const BrandIntro = () => {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          subtitle="Who We Are"
          title="Crafting Luxury Residences"
          description="Pyramid Builders is a premium residential developer dedicated to creating exceptional townhouses in Lavington, Nairobi. Every development reflects our commitment to architectural excellence, refined finishes, and thoughtful design."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="font-heading text-6xl font-light tracking-wide text-primary md:text-7xl">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
