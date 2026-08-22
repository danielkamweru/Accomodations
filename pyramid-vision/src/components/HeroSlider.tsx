import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    title: "Luxury Living\nin Lavington",
    subtitle: "Bespoke townhouses crafted for discerning families",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    title: "Architectural\nExcellence",
    subtitle: "Where design meets refined urban living",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    title: "Your Sanctuary\nAwaits",
    subtitle: "Premium residences in Nairobi's most coveted address",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        speed={1500}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: "linear" }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/10" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 lg:px-12">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h1 className="font-heading text-5xl font-light leading-tight tracking-wide text-background md:text-7xl lg:text-8xl whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <p className="mt-6 max-w-lg font-body text-sm font-light tracking-wider text-background/80 md:text-base">
                      {slide.subtitle}
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                      <Link
                        to="/projects"
                        className="border border-background/30 bg-background/10 px-8 py-3.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-background backdrop-blur-sm transition-all hover:bg-background hover:text-foreground"
                      >
                        Explore Projects
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-accent px-8 py-3.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground transition-colors hover:bg-accent/90"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown size={24} className="text-background/60" />
      </motion.div>
    </section>
  );
};

export default HeroSlider;
