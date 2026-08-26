import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Bed, Bath, Building, CheckCircle, X, Star,
  Heart, BadgeCheck, Calendar, Home, ArrowLeft,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getPropertyBySlug, formatRent } from "@/data/properties";
import { useFavourites } from "@/contexts/FavouritesContext";
import { useRecentlyViewed } from "@/contexts/RecentlyViewedContext";

const tabs = ["Overview", "Amenities", "Gallery", "Location", "Enquiry"] as const;
type Tab = typeof tabs[number];

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const property = getPropertyBySlug(slug ?? "");
  const { isFavourite, toggle } = useFavourites();
  const { add: addToRecentlyViewed } = useRecentlyViewed();
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (property) {
      addToRecentlyViewed(property);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, addToRecentlyViewed]);

  if (!property) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
          <p className="font-heading text-3xl font-light text-foreground">Property not found</p>
          <Link
            to="/properties"
            className="flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} /> Back to properties
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const fav = isFavourite(property.id);

  function scrollTo(tab: Tab) {
    setActiveTab(tab);
    document.getElementById(tab)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const availabilityColor =
    property.availability === "Available"
      ? "bg-green-100 text-green-800"
      : property.availability === "Available Soon"
      ? "bg-accent/20 text-accent-foreground"
      : "bg-muted text-muted-foreground";

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[65vh] overflow-hidden">
        <img
          src={property.heroImage}
          alt={property.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.15em] ${availabilityColor}`}>
                {property.availability}
              </span>
              {property.verification === "Verified" && (
                <span className="inline-flex items-center gap-1 bg-primary px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground">
                  <BadgeCheck size={11} className="text-accent" /> Verified
                </span>
              )}
            </div>
            <h1 className="mt-3 font-heading text-4xl font-light tracking-wide text-background md:text-6xl">
              {property.title}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <p className="flex items-center gap-1.5 font-body text-sm text-background/80">
                <MapPin size={13} /> {property.location}
              </p>
              <div className="flex items-center gap-1">
                <Star size={13} className="fill-accent text-accent" />
                <span className="font-body text-sm font-semibold text-background">
                  {property.rating.toFixed(1)}
                </span>
                <span className="font-body text-xs text-background/70">
                  ({property.reviewCount} reviews)
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Favourite button */}
        <button
          onClick={() => toggle(property.id)}
          aria-label={fav ? "Remove from favourites" : "Save to favourites"}
          className="absolute right-6 top-24 flex h-10 w-10 items-center justify-center bg-background/90 backdrop-blur-sm transition-colors hover:bg-background"
        >
          <Heart size={18} className={fav ? "fill-accent text-accent" : "text-foreground/60"} />
        </button>
      </section>

      {/* Sticky tabs */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex overflow-x-auto px-6 lg:px-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => scrollTo(tab)}
              className={`whitespace-nowrap border-b-2 px-5 py-4 font-body text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                activeTab === tab
                  ? "border-accent text-accent"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Overview */}
      <section id="Overview" className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-light tracking-wide text-foreground">
                {property.title}
              </h2>
              <p className="mt-6 font-body text-sm font-light leading-relaxed text-muted-foreground">
                {property.description}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
                {[
                  { icon: Building, label: "Type", value: property.propertyType },
                  { icon: Home, label: "Room", value: property.roomType },
                  { icon: Bed, label: "Bedrooms", value: property.bedrooms === 0 ? "Studio" : `${property.bedrooms}` },
                  { icon: Bath, label: "Bathrooms", value: `${property.bathrooms}` },
                  { icon: MapPin, label: "Location", value: property.area },
                  { icon: Calendar, label: "Available", value: property.availableFrom },
                ].map((d) => (
                  <div key={d.label} className="flex items-start gap-3">
                    <d.icon size={16} className="mt-0.5 shrink-0 text-accent" />
                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-0.5 font-body text-sm font-medium text-foreground">
                        {d.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price card */}
            <div className="border border-border p-6">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Monthly Rent
              </p>
              <p className="mt-2 font-heading text-4xl font-light text-primary">
                {formatRent(property.rentPerMonth)}
              </p>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                Deposit: {formatRent(property.deposit)}
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-body text-xs text-muted-foreground">Furnished</span>
                  <span className="font-body text-xs font-medium text-foreground">
                    {property.furnished ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-body text-xs text-muted-foreground">County</span>
                  <span className="font-body text-xs font-medium text-foreground">
                    {property.county}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-muted-foreground">Verification</span>
                  <span className="flex items-center gap-1 font-body text-xs font-medium text-foreground">
                    {property.verification === "Verified" && (
                      <BadgeCheck size={12} className="text-accent" />
                    )}
                    {property.verification}
                  </span>
                </div>
              </div>

              <button
                onClick={() => scrollTo("Enquiry")}
                className="mt-6 w-full bg-primary py-3.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Enquire Now
              </button>
              <button
                onClick={() => toggle(property.id)}
                className={`mt-3 flex w-full items-center justify-center gap-2 border py-3.5 font-body text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                  fav
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-foreground hover:border-foreground"
                }`}
              >
                <Heart size={13} className={fav ? "fill-accent" : ""} />
                {fav ? "Saved" : "Save Property"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="Amenities" className="bg-secondary/20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-3xl font-light tracking-wide text-foreground">
            Amenities
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {property.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-3 border border-border bg-background p-4"
              >
                <CheckCircle size={16} className="shrink-0 text-accent" />
                <span className="font-body text-sm font-light text-foreground">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="Gallery" className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-3xl font-light tracking-wide text-foreground">
            Gallery
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {property.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightbox(img)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={`${property.title} — photo ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="Location" className="bg-secondary/20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-3xl font-light tracking-wide text-foreground">
            Location
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div className="flex min-h-[280px] items-center justify-center border border-border bg-muted">
              <div className="text-center">
                <MapPin size={28} className="mx-auto text-muted-foreground/40" />
                <p className="mt-3 font-body text-sm text-muted-foreground">
                  {property.location}
                </p>
                <p className="mt-1 font-body text-xs text-muted-foreground/60">
                  Map view not available in demo
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                Located in <strong className="font-medium text-foreground">{property.area}</strong>,{" "}
                {property.county} County. The area offers convenient access to public transport,
                shopping centres, schools, and healthcare facilities.
              </p>
              <div className="mt-6 space-y-2">
                {[
                  `${property.area}, ${property.county}`,
                  `${property.bedrooms === 0 ? "Studio" : `${property.bedrooms}-bedroom`} ${property.propertyType.toLowerCase()}`,
                  property.furnished ? "Fully furnished" : "Unfurnished",
                  `Available from ${property.availableFrom}`,
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={13} className="shrink-0 text-accent" />
                    <span className="font-body text-sm font-light text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="Enquiry" className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-center font-heading text-3xl font-light tracking-wide text-primary-foreground">
              Make an Enquiry
            </h2>
            <p className="mt-3 text-center font-body text-sm font-light text-primary-foreground/60">
              Interested in {property.title}? Send us a message.
            </p>
            <EnquiryForm propertyTitle={property.title} />
          </div>
        </div>
      </section>

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
              aria-label="Close image"
              className="absolute right-6 top-6 text-background/80 hover:text-background"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt=""
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

// Inline enquiry form — same style as ContactForm
function EnquiryForm({ propertyTitle }: { propertyTitle: string }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend — show confirmation UI only
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8 border border-primary-foreground/20 p-8 text-center">
        <CheckCircle size={32} className="mx-auto text-accent" />
        <p className="mt-4 font-heading text-2xl font-light text-primary-foreground">
          Enquiry received
        </p>
        <p className="mt-2 font-body text-sm font-light text-primary-foreground/60">
          Thank you for your interest in {propertyTitle}. We'll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      {[
        { name: "name", label: "Full Name", type: "text" },
        { name: "email", label: "Email Address", type: "email" },
        { name: "phone", label: "Phone Number", type: "tel" },
      ].map((field) => (
        <div key={field.name}>
          <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/70">
            {field.label}
          </label>
          <input
            type={field.type}
            required
            value={form[field.name as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="mt-2 w-full border-b border-primary-foreground/20 bg-transparent py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none"
          />
        </div>
      ))}
      <div>
        <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/70">
          Message
        </label>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2 w-full resize-none border-b border-primary-foreground/20 bg-transparent py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none"
          placeholder={`I'm interested in ${propertyTitle}…`}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-colors hover:bg-accent/90"
      >
        Send Enquiry
      </button>
    </form>
  );
}
