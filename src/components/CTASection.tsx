import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-28 lg:py-36">
      <div className="container relative z-10 mx-auto px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Begin Your Journey
          </span>
          <h2 className="mt-6 font-heading text-4xl font-light tracking-wide text-primary-foreground md:text-5xl lg:text-6xl">
            Discover Your Next Home<br />in Lavington
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-sm font-light leading-relaxed text-primary-foreground/70">
            Schedule a private viewing of our luxury townhouse developments and experience the Accomodations difference firsthand.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-accent px-10 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Schedule Viewing
            </Link>
            <Link
              to="/contact"
              className="border border-primary-foreground/30 px-10 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Send Enquiry
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
