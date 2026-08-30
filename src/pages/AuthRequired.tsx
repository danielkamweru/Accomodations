import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AuthRequired() {
  const location = useLocation();
  const fromPath = location.pathname;

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative flex min-h-[60vh] items-center bg-primary pt-20">
        <div className="container mx-auto px-6 py-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-xl text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center bg-accent/20">
              <Lock size={28} className="text-accent" />
            </div>
            <h1 className="mt-6 font-heading text-4xl font-light tracking-wide text-primary-foreground md:text-5xl">
              Sign in to continue
            </h1>
            <p className="mt-4 font-body text-sm font-light leading-relaxed text-primary-foreground/70">
              This section is available to signed-in Accomodations users. Please sign in or create an account to explore the full platform.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/login"
                state={{ from: { pathname: fromPath } }}
                className="bg-accent px-10 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                state={{ from: { pathname: fromPath } }}
                className="border border-primary-foreground/30 bg-primary-foreground/10 px-10 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground hover:text-foreground"
              >
                Create Account
              </Link>
            </div>
            <Link
              to="/"
              className="mt-8 inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
