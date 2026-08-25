import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface FavouritesContextValue {
  favourites: string[];
  isFavourite: (id: string) => boolean;
  toggle: (id: string) => void;
  clear: () => void;
}

const FavouritesContext = createContext<FavouritesContextValue | null>(null);

const STORAGE_KEY = "accomodations_favourites";

function getStorageKey(uid: string | undefined): string {
  return uid ? `${STORAGE_KEY}_${uid}` : STORAGE_KEY;
}

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const storageKey = getStorageKey(user?.uid);

  const [favourites, setFavourites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? (JSON.parse(stored) as string[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(favourites));
  }, [favourites, storageKey]);

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
