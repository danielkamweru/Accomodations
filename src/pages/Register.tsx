import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FirebaseError } from "firebase/app";
import { useAuth } from "@/contexts/AuthContext";
import { getAuthErrorMessage } from "@/lib/authErrors";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      await register(email, password, displayName.trim());
      navigate("/", { replace: true });
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(getAuthErrorMessage(err.code));
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

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
              Get Started
            </span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-6xl">
              Create Account
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-md">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {error && (
                <div
                  role="alert"
                  className="border border-destructive/30 bg-destructive/10 px-4 py-3 font-body text-sm text-destructive"
                >
                  {error}
                </div>
              )}

              <div>
                <label
                  htmlFor="displayName"
                  className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground"
                >
                  Full Name
                </label>
                <input
                  id="displayName"
                  type="text"
                  autoComplete="name"
                  required
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-sm font-light text-foreground focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-sm font-light text-foreground focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-sm font-light text-foreground focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="confirm"
                  className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-sm font-light text-foreground focus:border-accent focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {loading ? "Creating account…" : "Create Account"}
              </button>

              <p className="text-center font-body text-sm font-light text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-foreground transition-colors hover:text-accent"
                >
                  Sign in
                </Link>
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
