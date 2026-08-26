import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Property } from "@/data/properties";

interface RecentlyViewedContextValue {
  items: Property[];
  add: (property: Property) => void;
  clear: () => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextValue | null>(null);

const STORAGE_KEY = "accomodations_recently_viewed";
const MAX_ITEMS = 8;

export function RecentlyViewedProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Property[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as Property[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function add(property: Property) {
    setItems((prev) => {
      const filtered = prev.filter((p) => p.id !== property.id);
      const next = [property, ...filtered];
      return next.slice(0, MAX_ITEMS);
    });
  }

  function clear() {
    setItems([]);
  }

  return (
    <RecentlyViewedContext.Provider value={{ items, add, clear }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const ctx = useContext(RecentlyViewedContext);
  if (!ctx) throw new Error("useRecentlyViewed must be used inside RecentlyViewedProvider");
  return ctx;
}
