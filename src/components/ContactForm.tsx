import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-border p-8 text-center">
        <CheckCircle size={32} className="mx-auto text-accent" />
        <p className="mt-4 font-heading text-2xl font-light text-foreground">
          Enquiry received
        </p>
        <p className="mt-2 font-body text-sm font-light text-muted-foreground">
          Thank you for reaching out. We'll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {[
        { name: "name", label: "Full Name", type: "text" },
        { name: "email", label: "Email Address", type: "email" },
        { name: "phone", label: "Phone Number", type: "tel" },
      ].map((field) => (
        <div key={field.name}>
          <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
            {field.label}
          </label>
          <input
            type={field.type}
            value={form[field.name as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-sm font-light text-foreground focus:border-accent focus:outline-none resize-none"
            required
          />
        </div>
      ))}
      <div>
        <label className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          className="mt-2 w-full border-b border-border bg-transparent py-3 font-body text-sm font-light text-foreground focus:border-accent focus:outline-none resize-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Send Enquiry
      </button>
    </motion.form>
  );
};

export default ContactForm;
