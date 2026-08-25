import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface FavouritesContextValue {
  favourites: string[];
  isFavourite: (id: string) => boolean;
  toggle: (id: string) => void;
  clear: () => void;
}

const FavouritesContext = createContext<FavouritesContextValue | null>(null);

const STORAGE_KEY = "accomodations_favourites";

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as string[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  }, [favourites]);

  function isFavourite(id: string) {
    return favourites.includes(id);
  }

  function toggle(id: string) {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  function clear() {
    setFavourites([]);
  }

  return (
    <FavouritesContext.Provider value={{ favourites, isFavourite, toggle, clear }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const ctx = useContext(FavouritesContext);
  if (!ctx) throw new Error("useFavourites must be used inside FavouritesProvider");
  return ctx;
}
