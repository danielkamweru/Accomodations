import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
];

const categories = ["All", "Exterior", "Interior"];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative flex min-h-[50vh] items-center bg-primary pt-20">
        <div className="container mx-auto px-6 py-20 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">Portfolio</span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-7xl">Gallery</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12 flex gap-4">
            {categories.map((c) => (
              <button key={c} className="font-body text-xs font-semibold uppercase tracking-[0.2em] border border-border px-6 py-2.5 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground first:bg-primary first:text-primary-foreground first:border-primary">
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group mb-4 cursor-pointer overflow-hidden break-inside-avoid"
                onClick={() => setLightbox(img)}
              >
                <img src={img} alt="" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4" onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} className="absolute right-6 top-6 text-background/80 hover:text-background"><X size={28} /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={lightbox} alt="" className="max-h-[85vh] max-w-full object-contain" />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
