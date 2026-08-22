import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import logo from "@/images/logo.png";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { user, loading } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        <Link
          to="/"
          className="z-50 block"
          aria-label="Accomodations home"
        >
          <img
            src={logo}
            alt="Accomodations"
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Auth link — only render once Firebase has resolved */}
          {!loading && (
            user ? (
              <Link
                to="/profile"
                aria-label="My profile"
                className={`ml-4 flex items-center gap-2 border border-primary bg-primary px-6 py-2.5 font-body text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary ${
                  location.pathname === "/profile" ? "bg-transparent text-primary" : ""
                }`}
              >
                <User size={14} />
                {user.displayName?.split(" ")[0] ?? "Profile"}
              </Link>
            ) : (
              <Link
                to="/login"
                className="ml-4 border border-primary bg-primary px-6 py-2.5 font-body text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                Sign In
              </Link>
            )
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className={`z-50 lg:hidden ${scrolled || mobileOpen ? "text-foreground" : "text-white"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`font-heading text-3xl tracking-wider ${
                    location.pathname === link.path ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            {!loading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {user ? (
                  <Link
                    to="/profile"
                    className="mt-4 flex items-center gap-2 border border-primary bg-primary px-8 py-3 font-body text-sm uppercase tracking-[0.15em] text-primary-foreground"
                  >
                    <User size={14} />
                    My Profile
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="mt-4 border border-primary bg-primary px-8 py-3 font-body text-sm uppercase tracking-[0.15em] text-primary-foreground"
                  >
                    Sign In
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
