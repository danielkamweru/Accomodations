import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Home, Bed, Building, CheckCircle, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProjectBySlug } from "@/data/projects";

const tabs = ["Overview", "Amenities", "Plans", "Gallery", "Location", "Enquiry"];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");
  const [activeTab, setActiveTab] = useState("Overview");
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="font-body text-lg">Project not found.</p>
      </div>
    );
  }

  const scrollTo = (id: string) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={project.heroImage} alt={project.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-accent px-4 py-1.5 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
              {project.status}
            </span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-background md:text-7xl">{project.title}</h1>
            <p className="mt-2 flex items-center gap-2 font-body text-sm text-background/80">
              <MapPin size={14} /> {project.location}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Tabs */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex gap-0 overflow-x-auto px-6 lg:px-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => scrollTo(tab)}
              className={`whitespace-nowrap border-b-2 px-6 py-4 font-body text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                activeTab === tab ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Overview */}
      <section id="Overview" className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover" />
              </div>
            </motion.div>
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-4xl font-light tracking-wide text-foreground">{project.title}</h2>
              <p className="mt-6 font-body text-sm font-light leading-relaxed text-muted-foreground">{project.longDescription}</p>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { icon: CheckCircle, label: "Status", value: project.status },
                  { icon: MapPin, label: "Location", value: project.location },
                  { icon: Building, label: "Type", value: project.type },
                  { icon: Home, label: "Units", value: `${project.units} Units` },
                  { icon: Bed, label: "Bedrooms", value: `${project.bedrooms} BR` },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <d.icon size={18} className="mt-0.5 text-accent" />
                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">{d.label}</p>
                      <p className="mt-0.5 font-body text-sm font-medium text-foreground">{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="Amenities" className="bg-secondary/20 py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-4xl font-light tracking-wide text-foreground">Amenities</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.amenities.map((amenity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 border border-border bg-background p-5"
              >
                <CheckCircle size={20} className="shrink-0 text-accent" />
                <span className="font-body text-sm font-light text-foreground">{amenity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="Plans" className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-4xl font-light tracking-wide text-foreground">Floor Plans</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {project.floorPlans.map((plan, i) => (
              <div key={i} className="overflow-hidden border border-border">
                <img src={plan} alt="Floor Plan" className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="Gallery" className="bg-secondary/20 py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-4xl font-light tracking-wide text-foreground">Gallery</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer overflow-hidden"
                onClick={() => setLightbox(img)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="Location" className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-4xl font-light tracking-wide text-foreground">Location</h2>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <div className="flex min-h-[300px] items-center justify-center border border-border bg-muted">
              <p className="font-body text-sm text-muted-foreground">Map Integration Placeholder</p>
            </div>
            <div>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                Located in {project.location}, one of Nairobi's most prestigious neighborhoods. The area offers excellent access to international schools, premium shopping centers, world-class healthcare, and major transport routes.
              </p>
              <ul className="mt-6 space-y-3">
                {["International schools within 5 min", "Lavington Mall & Westgate nearby", "Nairobi Hospital & Aga Khan", "Easy access to Ngong Road & James Gichuru"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-sm font-light text-foreground">
                    <CheckCircle size={14} className="text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="Enquiry" className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-xl">
            <h2 className="text-center font-heading text-4xl font-light tracking-wide text-primary-foreground">Make an Enquiry</h2>
            <p className="mt-4 text-center font-body text-sm font-light text-primary-foreground/60">
              Interested in {project.title}? Get in touch with our team.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4" onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} className="absolute right-6 top-6 text-background/80 hover:text-background"><X size={28} /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={lightbox} alt="" className="max-h-[85vh] max-w-full object-contain" />
          </motion.div>
        )}
      </AnimatePresence>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
