import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative flex min-h-[50vh] items-center bg-primary pt-20">
        <div className="container mx-auto px-6 py-20 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">Get In Touch</span>
            <h1 className="mt-4 font-heading text-5xl font-light tracking-wide text-primary-foreground md:text-7xl">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-accent">Reach Out</span>
              <h2 className="mt-4 font-heading text-4xl font-light tracking-wide text-foreground">We'd Love to<br />Hear From You</h2>
              <p className="mt-6 font-body text-sm font-light leading-relaxed text-muted-foreground">
                Whether you're interested in one of our developments or simply want to learn more about Accomodations, our team is here to help.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { icon: MapPin, label: "Visit Us", value: "Lavington, Nairobi, Kenya" },
                  { icon: Phone, label: "Call Us", value: "+254 723 832 126" },
                  { icon: Mail, label: "Email Us", value: "kamwerudaniel5@gmail.com" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary">
                      <item.icon size={18} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{item.label}</p>
                      <p className="mt-1 font-body text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border p-8 lg:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
