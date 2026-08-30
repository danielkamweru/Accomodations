import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, MapPin, TrendingDown, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { formatRent } from "@/data/properties";

const LOCATION_OPTIONS = [
  "All Areas",
  "Kilimani",
  "Westlands",
  "Kasarani",
  "Roysambu",
  "Ngong Road",
  "Kahawa",
  "Kahawa West",
  "Rongai",
  "Thika Road",
  "Thika",
  "Kiambu Road",
  "Juja",
  "Lavington",
  "Ruaka",
];

export default function Affordability() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [preferredArea, setPreferredArea] = useState("All Areas");
  const [submitted, setSubmitted] = useState(false);

  const budgetRatio = useMemo(() => {
    if (!monthlyIncome || !maxBudget) return null;
    const income = Number(monthlyIncome);
    const budget = Number(maxBudget);
    if (income <= 0) return null;
    return budget / income;
  }, [monthlyIncome, maxBudget]);

  const matchingProperties = useMemo(() => {
    if (!submitted || !maxBudget) return [];
    const budget = Number(maxBudget);
    const area = preferredArea;

    return properties.filter((p) => {
      if (p.rentPerMonth > budget) return false;
      if (area !== "All Areas" && p.area !== area) return false;
      return true;
    });
  }, [submitted, maxBudget, preferredArea]);

  const recommendedProperties = useMemo(() => {
    if (!submitted || !maxBudget || !monthlyIncome) return [];
    const budget = Number(maxBudget);
    const income = Number(monthlyIncome);

    return matchingProperties
      .filter((p) => {
        const ratio = p.rentPerMonth / income;
        return ratio <= 0.4;
      })
      .sort((a, b) => a.rentPerMonth - b.rentPerMonth);
  }, [submitted, maxBudget, monthlyIncome, matchingProperties]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!monthlyIncome || !maxBudget) return;
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setMonthlyIncome("");
    setMaxBudget("");
    setPreferredArea("All Areas");
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center bg-primary pt-20">
        <div className="container mx-auto px-6 py-16 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Budget Tool
            </span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-6xl">
              What Can I Afford?
            </h1>
            <p className="mt-4 max-w-xl font-body text-sm font-light text-primary-foreground/70">
              Enter your monthly income and budget to see accommodation options that fit your finances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                    Monthly Income (KES)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 35000"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    required
                    min="0"
                    className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                    Max Accommodation Budget (KES)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 12000"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                    required
                    min="0"
                    className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                  Preferred Area
                </label>
                <select
                  value={preferredArea}
                  onChange={(e) => setPreferredArea(e.target.value)}
                  className="mt-2 w-full border border-border bg-background px-3 py-2 font-body text-sm text-foreground focus:border-accent focus:outline-none"
                >
                  {LOCATION_OPTIONS.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Find Options
              </button>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-12 space-y-8"
              >
                {/* Summary */}
                <div className="border border-border p-6">
                  <h3 className="font-heading text-2xl font-light text-foreground">
                    Results Summary
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="font-body text-xs text-muted-foreground">Monthly Income</p>
                      <p className="mt-1 font-body text-sm font-medium text-foreground">
                        {formatRent(Number(monthlyIncome))}
                      </p>
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground">Max Budget</p>
                      <p className="mt-1 font-body text-sm font-medium text-foreground">
                        {formatRent(Number(maxBudget))}
                      </p>
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground">Budget / Income</p>
                      <p className="mt-1 font-body text-sm font-medium text-foreground">
                        {budgetRatio !== null ? `${(budgetRatio * 100).toFixed(1)}%` : "—"}
                      </p>
                    </div>
                  </div>

                  {budgetRatio !== null && budgetRatio > 0.5 && (
                    <div className="mt-4 flex items-start gap-3 border border-destructive/30 bg-destructive/10 p-4">
                      <AlertCircle size={16} className="mt-0.5 shrink-0 text-destructive" />
                      <p className="font-body text-xs text-destructive">
                        Your accommodation budget exceeds 50% of your monthly income. This may leave insufficient funds for other expenses. Consider adjusting your budget.
                      </p>
                    </div>
                  )}

                  {budgetRatio !== null && budgetRatio <= 0.4 && (
                    <div className="mt-4 flex items-start gap-3 border border-green-200 bg-green-50 p-4">
                      <TrendingDown size={16} className="mt-0.5 shrink-0 text-green-700" />
                      <p className="font-body text-xs text-green-800">
                        Your budget-to-income ratio is healthy at {(budgetRatio * 100).toFixed(1)}%. Financial experts often recommend keeping housing costs below 40% of income.
                      </p>
                    </div>
                  )}
                </div>

                {/* Recommended */}
                {recommendedProperties.length > 0 && (
                  <div>
                    <h3 className="font-heading text-2xl font-light text-foreground">
                      Recommended Options
                    </h3>
                    <p className="mt-2 font-body text-sm text-muted-foreground">
                      {recommendedProperties.length} properties under {formatRent(Number(maxBudget))} with rent at or below 40% of your income.
                    </p>
                    <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {recommendedProperties.map((property, i) => (
                        <PropertyCard key={property.id} property={property} index={i} />
                      ))}
                    </div>
                  </div>
                )}

                {/* All matching */}
                {matchingProperties.length > recommendedProperties.length && (
                  <div>
                    <h3 className="font-heading text-2xl font-light text-foreground">
                      All Matching Properties
                    </h3>
                    <p className="mt-2 font-body text-sm text-muted-foreground">
                      {matchingProperties.length} properties match your budget and location.
                    </p>
                    <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {matchingProperties.map((property, i) => (
                        <PropertyCard key={property.id} property={property} index={i} />
                      ))}
                    </div>
                  </div>
                )}

                {matchingProperties.length === 0 && (
                  <div className="py-16 text-center">
                    <Calculator size={40} className="mx-auto text-muted-foreground/40" />
                    <p className="mt-4 font-heading text-2xl font-light text-foreground">
                      No matching properties
                    </p>
                    <p className="mt-2 font-body text-sm text-muted-foreground">
                      Try increasing your budget or changing the preferred area.
                    </p>
                  </div>
                )}

                <div className="flex justify-center">
                  <button
                    onClick={handleReset}
                    className="border border-border px-8 py-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground"
                  >
                    Reset Calculator
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
