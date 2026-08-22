import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const filters = ["All", "Completed", "Townhouses"];

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered = projects.filter((p) => {
    if (active === "All") return true;
    if (active === "Completed") return p.status === "Completed";
    if (active === "Townhouses") return p.type === "Townhouses";
    return true;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center bg-primary pt-20">
        <div className="container mx-auto px-6 py-20 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our Portfolio</span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-7xl">Projects</h1>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12 flex flex-wrap gap-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-body text-xs font-semibold uppercase tracking-[0.2em] px-6 py-2.5 transition-colors ${
                  active === f ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
