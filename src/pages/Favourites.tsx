import { motion } from "framer-motion";
import { Heart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { useFavourites } from "@/contexts/FavouritesContext";

export default function Favourites() {
  const { favourites, clear } = useFavourites();
  const saved = properties.filter((p) => favourites.includes(p.id));

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative flex min-h-[40vh] items-center bg-primary pt-20">
        <div className="container mx-auto px-6 py-16 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              My Account
            </span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-6xl">
              Saved Properties
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {saved.length > 0 ? (
            <>
              <div className="mb-8 flex items-center justify-between">
                <p className="font-body text-sm text-muted-foreground">
                  {saved.length} saved {saved.length === 1 ? "property" : "properties"}
                </p>
                <button
                  onClick={clear}
                  className="flex items-center gap-2 font-body text-xs text-muted-foreground transition-colors hover:text-destructive"
                >
                  <Trash2 size={13} /> Clear all
                </button>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {saved.map((property, i) => (
                  <PropertyCard key={property.id} property={property} index={i} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Heart size={40} className="text-muted-foreground/30" />
              <p className="mt-4 font-heading text-2xl font-light text-foreground">
                No saved properties
              </p>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Browse properties and tap the heart icon to save them here.
              </p>
              <Link
                to="/properties"
                className="mt-6 bg-primary px-8 py-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Browse Properties
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
