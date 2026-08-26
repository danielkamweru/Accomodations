import { motion } from "framer-motion";
import { GitCompare, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useComparison } from "@/contexts/ComparisonContext";
import { formatRent } from "@/data/properties";

const fields = [
  { label: "Rent", key: "rentPerMonth", format: (p: typeof import("@/data/properties").properties[0]) => formatRent(p.rentPerMonth) },
  { label: "Deposit", key: "deposit", format: (p) => formatRent(p.deposit) },
  { label: "Location", key: "location" },
  { label: "Area", key: "area" },
  { label: "County", key: "county" },
  { label: "Property Type", key: "propertyType" },
  { label: "Room Type", key: "roomType" },
  { label: "Bedrooms", key: "bedrooms", format: (p) => p.bedrooms === 0 ? "Studio" : String(p.bedrooms) },
  { label: "Bathrooms", key: "bathrooms" },
  { label: "Furnished", key: "furnished", format: (p) => (p.furnished ? "Yes" : "No") },
  { label: "Availability", key: "availability" },
  { label: "Rating", key: "rating", format: (p) => `${p.rating.toFixed(1)} (${p.reviewCount})` },
];

export default function Compare() {
  const { items, remove, clear } = useComparison();

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
              Compare
            </span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-6xl">
              Property Comparison
            </h1>
            <p className="mt-4 max-w-xl font-body text-sm font-light text-primary-foreground/70">
              Compare up to 4 properties side by side to find the best fit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <GitCompare size={40} className="text-muted-foreground/40" />
              <p className="mt-4 font-heading text-2xl font-light text-foreground">
                No properties to compare
              </p>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Browse properties and use the compare icon to add them here.
              </p>
              <Link
                to="/properties"
                className="mt-6 bg-primary px-8 py-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Browse Properties
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8 flex items-center justify-between">
                <p className="font-body text-sm text-muted-foreground">
                  Comparing {items.length} {items.length === 1 ? "property" : "properties"}
                </p>
                <button
                  onClick={clear}
                  className="flex items-center gap-2 font-body text-xs text-muted-foreground transition-colors hover:text-destructive"
                >
                  <X size={13} /> Clear all
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border border-border">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="w-40 p-4 text-left font-body text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        Feature
                      </th>
                      {items.map((property) => (
                        <th key={property.id} className="p-4 text-left">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-heading text-lg font-medium tracking-wide text-foreground">
                                {property.title}
                              </p>
                              <p className="mt-1 font-body text-xs text-muted-foreground">
                                {property.location}
                              </p>
                            </div>
                            <button
                              onClick={() => remove(property.id)}
                              aria-label={`Remove ${property.title} from comparison`}
                              className="shrink-0 text-muted-foreground hover:text-foreground"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {fields.map((field) => (
                      <tr key={field.key} className="border-b border-border last:border-b-0">
                        <td className="p-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                          {field.label}
                        </td>
                        {items.map((property) => (
                          <td key={property.id} className="p-4 font-body text-sm text-foreground">
                            {field.format ? field.format(property) : String((property as Record<string, unknown>)[field.key] ?? "—")}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
