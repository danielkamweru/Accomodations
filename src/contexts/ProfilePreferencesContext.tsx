import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ProfilePreferences = {
  preferredLocation: string;
  preferredPropertyType: string;
  preferredBudget: string;
};

interface ProfilePreferencesContextValue {
  preferences: ProfilePreferences;
  updatePreferences: (values: Partial<ProfilePreferences>) => void;
}

const ProfilePreferencesContext = createContext<ProfilePreferencesContextValue | null>(null);

const STORAGE_KEY = "accomodations_profile_preferences";

const defaultPreferences: ProfilePreferences = {
  preferredLocation: "",
  preferredPropertyType: "",
  preferredBudget: "",
};

export function ProfilePreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<ProfilePreferences>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ProfilePreferences;
        return { ...defaultPreferences, ...parsed };
      }
    } catch {
      // ignore parse errors
    }
    return defaultPreferences;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  function updatePreferences(values: Partial<ProfilePreferences>) {
    setPreferences((prev) => ({ ...prev, ...values }));
  }

  return (
    <ProfilePreferencesContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </ProfilePreferencesContext.Provider>
  );
}

export function useProfilePreferences() {
  const ctx = useContext(ProfilePreferencesContext);
  if (!ctx) throw new Error("useProfilePreferences must be used inside ProfilePreferencesProvider");
  return ctx;
}
