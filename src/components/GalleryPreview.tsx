import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { X } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
];

const GalleryPreview = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          subtitle="Gallery"
          title="A Closer Look"
          description="Explore the craftsmanship and design details that define every Pyramid Builders residence."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer overflow-hidden"
              onClick={() => setLightbox(img)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt="Gallery"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 text-background/80 hover:text-background"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Gallery"
              className="max-h-[85vh] max-w-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;
