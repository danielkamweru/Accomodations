import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Property } from "@/data/properties";

interface ComparisonContextValue {
  items: Property[];
  add: (property: Property) => void;
  remove: (id: string) => void;
  clear: () => void;
  canAdd: (id: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextValue | null>(null);

const STORAGE_KEY = "accomodations_comparison";
const MAX_ITEMS = 4;

export function ComparisonProvider({ children }: { children: ReactNode }) {
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
      if (prev.some((p) => p.id === property.id)) return prev;
      if (prev.length >= MAX_ITEMS) return prev;
      return [...prev, property];
    });
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }

  function clear() {
    setItems([]);
  }

  function canAdd(id: string) {
    return items.length < MAX_ITEMS && !items.some((p) => p.id === id);
  }

  return (
    <ComparisonContext.Provider value={{ items, add, remove, clear, canAdd }}>
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const ctx = useContext(ComparisonContext);
  if (!ctx) throw new Error("useComparison must be used inside ComparisonProvider");
  return ctx;
}
