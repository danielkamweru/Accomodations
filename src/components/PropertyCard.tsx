import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, Heart, BadgeCheck, Bed, Bath } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatRent } from "@/data/properties";
import { useFavourites } from "@/contexts/FavouritesContext";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const verificationColors: Record<Property["verification"], string> = {
  Verified: "bg-accent/20 text-accent-foreground",
  Pending: "bg-secondary text-secondary-foreground",
  Unverified: "bg-muted text-muted-foreground",
};

const availabilityColors: Record<Property["availability"], string> = {
  Available: "text-green-700",
  "Available Soon": "text-accent-foreground",
  Occupied: "text-destructive",
};

const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  const { isFavourite, toggle } = useFavourites();
  const fav = isFavourite(property.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={property.heroImage}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Verification badge */}
        {property.verification === "Verified" && (
          <div className="absolute left-3 top-3 flex items-center gap-1 bg-primary px-2 py-1">
            <BadgeCheck size={11} className="text-accent" />
            <span className="font-body text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
              Verified
            </span>
          </div>
        )}

        {/* Favourite button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggle(property.id);
          }}
          aria-label={fav ? "Remove from favourites" : "Save to favourites"}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-background/90 backdrop-blur-sm transition-colors hover:bg-background"
        >
          <Heart
            size={15}
            className={fav ? "fill-accent text-accent" : "text-foreground/60"}
          />
        </button>
      </div>

      {/* Content */}
      <Link to={`/properties/${property.slug}`} className="flex flex-1 flex-col pt-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="flex items-center gap-1 font-body text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              <MapPin size={10} />
              {property.location}
            </p>
            <h3 className="mt-1 font-heading text-xl font-medium leading-snug tracking-wide text-foreground group-hover:text-accent transition-colors">
              {property.title}
            </h3>
          </div>
          <div className="flex shrink-0 items-center gap-1 pt-1">
            <Star size={12} className="fill-accent text-accent" />
            <span className="font-body text-xs font-semibold text-foreground">
              {property.rating.toFixed(1)}
            </span>
            <span className="font-body text-[10px] text-muted-foreground">
              ({property.reviewCount})
            </span>
          </div>
        </div>

        {/* Meta row */}
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
            <Bed size={12} />
            {property.bedrooms === 0 ? "Studio" : `${property.bedrooms} BR`}
          </span>
          <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
            <Bath size={12} />
            {property.bathrooms} Bath
          </span>
          <span className="font-body text-xs text-muted-foreground">
            {property.propertyType}
          </span>
          {property.furnished && (
            <span className="font-body text-xs text-muted-foreground">Furnished</span>
          )}
        </div>

        {/* Price + availability */}
        <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
          <div>
            <span className="font-heading text-xl font-medium text-primary">
              {formatRent(property.rentPerMonth)}
            </span>
            <span className="font-body text-xs text-muted-foreground"> /mo</span>
          </div>
          <span
            className={`font-body text-[10px] font-semibold uppercase tracking-wider ${availabilityColors[property.availability]}`}
          >
            {property.availability}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
