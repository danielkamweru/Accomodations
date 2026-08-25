import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FirebaseError } from "firebase/app";
import { useAuth } from "@/contexts/AuthContext";
import { getAuthErrorMessage } from "@/lib/authErrors";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ForgotPassword() {
  const { resetPassword, disabled } = useAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await resetPassword(email);
      setSent(true);
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
              Account Recovery
            </span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-6xl">
              Reset Password
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-md">
            {disabled && (
              <div className="mb-6 border border-destructive/30 bg-destructive/10 px-4 py-3 font-body text-sm text-destructive">
                Authentication is currently unavailable. Please contact support or try again later.
              </div>
            )}
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 text-center"
              >
                <div className="border border-border bg-secondary/20 px-6 py-8">
                  <p className="font-heading text-2xl font-light text-foreground">
                    Check your inbox
                  </p>
                  <p className="mt-4 font-body text-sm font-light leading-relaxed text-muted-foreground">
                    We've sent a password reset link to{" "}
                    <span className="font-medium text-foreground">{email}</span>.
                    Follow the link in the email to reset your password.
                  </p>
                </div>
                <Link
                  to="/login"
                  className="inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  ← Back to sign in
                </Link>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                  Enter your email address and we'll send you a link to reset your password.
                </p>

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

                <button
                  type="submit"
                  disabled={loading || disabled}
                  className="w-full bg-primary py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Reset Link"}
                </button>

                <p className="text-center">
                  <Link
                    to="/login"
                    className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    ← Back to sign in
                  </Link>
                </p>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
