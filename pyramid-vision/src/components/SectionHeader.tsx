import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}

const SectionHeader = ({ subtitle, title, description, light, align = "center" }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <span
          className={`font-body text-xs font-semibold uppercase tracking-[0.3em] ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`mt-4 font-heading text-4xl font-light tracking-wide md:text-5xl lg:text-6xl ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-6 max-w-2xl font-body text-sm font-light leading-relaxed ${
            light ? "text-primary-foreground/70" : "text-muted-foreground"
          } ${align === "left" ? "mx-0" : ""}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
