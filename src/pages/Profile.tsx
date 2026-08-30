import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, User, MapPin, Home, Wallet } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useProfilePreferences } from "@/contexts/ProfilePreferencesContext";
import { LOCATION_OPTIONS } from "@/data/properties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Profile() {
  const { user, logout } = useAuth();
  const { preferences, updatePreferences } = useProfilePreferences();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await logout();
    navigate("/", { replace: true });
  }

  if (!user) return null;

  const initials = user.displayName
    ? user.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : user.email?.[0].toUpperCase() ?? "?";

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative flex min-h-[50vh] items-center bg-primary pt-20">
        <div className="container mx-auto px-6 py-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              My Account
            </span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-6xl">
              Profile
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-lg space-y-8">
            {/* Avatar + name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-6"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName ?? "Profile"}
                  className="h-16 w-16 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center bg-primary">
                  <span className="font-heading text-xl font-medium text-primary-foreground">
                    {initials}
                  </span>
                </div>
              )}
              <div>
                <p className="font-heading text-2xl font-light text-foreground">
                  {user.displayName ?? "—"}
                </p>
                <p className="mt-1 font-body text-xs text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </motion.div>

            {/* Firebase details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 border-t border-border pt-8"
            >
              {[
                { label: "Full Name", value: user.displayName ?? "—", icon: User },
                { label: "Email Address", value: user.email ?? "—", icon: User },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary">
                    <item.icon size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-0.5 font-body text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Local preferences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 border-t border-border pt-8"
            >
              <h2 className="font-heading text-2xl font-light tracking-wide text-foreground">
                Preferences
              </h2>
              <p className="font-body text-xs text-muted-foreground">
                These settings are stored locally on this device only.
              </p>

              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                  Preferred Location
                </label>
                <div className="mt-2 flex items-center gap-3">
                  <MapPin size={16} className="shrink-0 text-muted-foreground" />
                  <select
                    value={preferences.preferredLocation}
                    onChange={(e) => updatePreferences({ preferredLocation: e.target.value })}
                    className="flex-1 border-b border-border bg-transparent py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                  >
                    <option value="">Select a location</option>
                    {LOCATION_OPTIONS.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                  Preferred Property Type
                </label>
                <div className="mt-2 flex items-center gap-3">
                  <Home size={16} className="shrink-0 text-muted-foreground" />
                  <select
                    value={preferences.preferredPropertyType}
                    onChange={(e) => updatePreferences({ preferredPropertyType: e.target.value })}
                    className="flex-1 border-b border-border bg-transparent py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                  >
                    <option value="">Select a type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Bedsitter">Bedsitter</option>
                    <option value="Studio">Studio</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Maisonette">Maisonette</option>
                    <option value="Single Room">Single Room</option>
                    <option value="Shared Accommodation">Shared Accommodation</option>
                    <option value="Student Housing">Student Housing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                  Preferred Budget (KES/month)
                </label>
                <div className="mt-2 flex items-center gap-3">
                  <Wallet size={16} className="shrink-0 text-muted-foreground" />
                  <input
                    type="number"
                    placeholder="e.g. 15000"
                    value={preferences.preferredBudget}
                    onChange={(e) => updatePreferences({ preferredBudget: e.target.value })}
                    min="0"
                    className="flex-1 border-b border-border bg-transparent py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>

            {/* Logout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-t border-border pt-8"
            >
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="flex items-center gap-3 border border-border px-6 py-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground disabled:opacity-60"
              >
                <LogOut size={14} />
                {loggingOut ? "Signing out…" : "Sign Out"}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
