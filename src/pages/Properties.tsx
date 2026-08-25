import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties, formatRent, LOCATION_OPTIONS, AMENITY_OPTIONS } from "@/data/properties";
import type { PropertyType, AvailabilityStatus, RoomType } from "@/data/properties";

type SortOption = "relevance" | "price-asc" | "price-desc" | "rating";

const PROPERTY_TYPES: PropertyType[] = [
  "Apartment", "Bedsitter", "Studio", "Townhouse", "Bungalow", "Maisonette",
  "Single Room", "Shared Accommodation", "Student Housing",
];

const BEDROOM_OPTIONS = [
  { label: "Studio", value: 0 },
  { label: "1 BR", value: 1 },
  { label: "2 BR", value: 2 },
  { label: "3 BR", value: 3 },
  { label: "4+ BR", value: 4 },
];

export default function Properties() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState<PropertyType | "">("");
  const [bedrooms, setBedrooms] = useState<number | "">("");
  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");
  const [furnished, setFurnished] = useState<boolean | "">("");
  const [availability, setAvailability] = useState<AvailabilityStatus | "">("");
  const [sort, setSort] = useState<SortOption>("relevance");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeFilterCount = [location, type, bedrooms !== "", minRent, maxRent, furnished !== "", availability]
    .filter(Boolean).length;

  function clearFilters() {
    setLocation("");
    setType("");
    setBedrooms("");
    setMinRent("");
    setMaxRent("");
    setFurnished("");
    setAvailability("");
    setSearch("");
  }

  const filtered = useMemo(() => {
    let result = [...properties];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.area.toLowerCase().includes(q) ||
          p.propertyType.toLowerCase().includes(q)
      );
    }
    if (location) result = result.filter((p) => p.area === location);
    if (type) result = result.filter((p) => p.propertyType === type);
    if (bedrooms !== "") {
      result = result.filter((p) =>
        bedrooms === 4 ? p.bedrooms >= 4 : p.bedrooms === bedrooms
      );
    }
    if (minRent) result = result.filter((p) => p.rentPerMonth >= Number(minRent));
    if (maxRent) result = result.filter((p) => p.rentPerMonth <= Number(maxRent));
    if (furnished !== "") result = result.filter((p) => p.furnished === furnished);
    if (availability) result = result.filter((p) => p.availability === availability);

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.rentPerMonth - b.rentPerMonth);
        break;
      case "price-desc":
        result.sort((a, b) => b.rentPerMonth - a.rentPerMonth);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [search, location, type, bedrooms, minRent, maxRent, furnished, availability, sort]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center bg-primary pt-20">
        <div className="container mx-auto px-6 py-16 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Browse Listings
            </span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-7xl">
              Properties
            </h1>
            <p className="mt-4 max-w-xl font-body text-sm font-light text-primary-foreground/70">
              Discover accommodation across Nairobi, Kiambu, and beyond. Filter by location, budget, and property type.
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex max-w-2xl items-center gap-0 border border-primary-foreground/20 bg-background/10 backdrop-blur-sm"
          >
            <Search size={16} className="ml-4 shrink-0 text-primary-foreground/60" />
            <input
              type="search"
              placeholder="Search by name, location, or type…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent px-4 py-3.5 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="mr-3 text-primary-foreground/60 hover:text-primary-foreground"
              >
                <X size={14} />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Toolbar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className={`flex items-center gap-2 border px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  filtersOpen || activeFilterCount > 0
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                <SlidersHorizontal size={13} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 font-body text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X size={12} /> Clear all
                </button>
              )}

              <span className="font-body text-xs text-muted-foreground">
                {filtered.length} {filtered.length === 1 ? "property" : "properties"}
              </span>
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="border border-border bg-background px-4 py-2 font-body text-xs text-foreground focus:border-accent focus:outline-none"
            >
              <option value="relevance">Sort: Relevance</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Filter panel */}
          {filtersOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 grid gap-4 border border-border bg-secondary/10 p-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {/* Location */}
              <div>
                <label className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-2 w-full border border-border bg-background px-3 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="">All locations</option>
                  {LOCATION_OPTIONS.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              {/* Property type */}
              <div>
                <label className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Property Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as PropertyType | "")}
                  className="mt-2 w-full border border-border bg-background px-3 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="">All types</option>
                  {PROPERTY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Bedrooms
                </label>
                <select
                  value={bedrooms}
                  onChange={(e) =>
                    setBedrooms(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  className="mt-2 w-full border border-border bg-background px-3 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="">Any</option>
                  {BEDROOM_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              {/* Availability */}
              <div>
                <label className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Availability
                </label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value as AvailabilityStatus | "")}
                  className="mt-2 w-full border border-border bg-background px-3 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="">Any</option>
                  <option value="Available">Available</option>
                  <option value="Available Soon">Available Soon</option>
                  <option value="Occupied">Occupied</option>
                </select>
              </div>

              {/* Min rent */}
              <div>
                <label className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Min Rent (KES)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 10000"
                  value={minRent}
                  onChange={(e) => setMinRent(e.target.value)}
                  className="mt-2 w-full border border-border bg-background px-3 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                />
              </div>

              {/* Max rent */}
              <div>
                <label className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Max Rent (KES)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 50000"
                  value={maxRent}
                  onChange={(e) => setMaxRent(e.target.value)}
                  className="mt-2 w-full border border-border bg-background px-3 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                />
              </div>

              {/* Furnished */}
              <div>
                <label className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Furnished
                </label>
                <select
                  value={furnished === "" ? "" : furnished ? "yes" : "no"}
                  onChange={(e) =>
                    setFurnished(e.target.value === "" ? "" : e.target.value === "yes")
                  }
                  className="mt-2 w-full border border-border bg-background px-3 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="">Any</option>
                  <option value="yes">Furnished</option>
                  <option value="no">Unfurnished</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Results grid */}
          {filtered.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Search size={40} className="text-muted-foreground/40" />
              <p className="mt-4 font-heading text-2xl font-light text-foreground">
                No properties found
              </p>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 border border-border px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
