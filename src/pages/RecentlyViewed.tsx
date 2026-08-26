import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { useRecentlyViewed } from "@/contexts/RecentlyViewedContext";

export default function RecentlyViewed() {
  const { items, clear } = useRecentlyViewed();

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
              History
            </span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-6xl">
              Recently Viewed
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {items.length > 0 ? (
            <>
              <div className="mb-8 flex items-center justify-between">
                <p className="font-body text-sm text-muted-foreground">
                  {items.length} recently {items.length === 1 ? "property" : "properties"}
                </p>
                <button
                  onClick={clear}
                  className="flex items-center gap-2 font-body text-xs text-muted-foreground transition-colors hover:text-destructive"
                >
                  <Clock size={13} /> Clear history
                </button>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((property, i) => (
                  <PropertyCard key={property.id} property={property} index={i} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Clock size={40} className="text-muted-foreground/30" />
              <p className="mt-4 font-heading text-2xl font-light text-foreground">
                No recently viewed properties
              </p>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Browse properties and view details to see them here.
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
