import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-20 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold tracking-wider">
              ACCOMODATIONS
            </h3>
            <p className="mt-4 font-body text-sm font-light leading-relaxed opacity-80">
              Premium residential developer crafting luxury townhouses in Lavington, Nairobi. Where architectural excellence meets refined living.
            </p>
            <div className="mt-6 flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="opacity-60 transition-opacity hover:opacity-100">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="mt-6 space-y-3">
              {["About", "Projects", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="font-body text-sm font-light opacity-70 transition-opacity hover:opacity-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em]">Contact</h4>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 opacity-60" />
                <span className="font-body text-sm font-light opacity-80">Lavington, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 opacity-60" />
                <span className="font-body text-sm font-light opacity-80">+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 opacity-60" />
                <span className="font-body text-sm font-light opacity-80">info@accomodations.co.ke</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em]">Newsletter</h4>
            <p className="mt-6 font-body text-sm font-light opacity-80">Stay updated with our latest developments and exclusive offerings.</p>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border border-primary-foreground/20 bg-transparent px-4 py-2.5 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none"
              />
              <button className="bg-accent px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs font-light opacity-50">
            © {new Date().getFullYear()} Accomodations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
