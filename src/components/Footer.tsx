import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-3">NC</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Premium furniture & commercial kitchen equipment manufacturer based in Kanpur, serving businesses across India.
          </p>
          <p className="text-primary-foreground/50 text-xs mt-3">GSTIN: 09ABTPS2319E1ZC</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Products", path: "/products" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Products</h4>
          <nav className="flex flex-col gap-2">
            {["Furniture", "Kitchen Equipment", "Bakery Equipment"].map((cat) => (
              <Link key={cat} to="/products" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {cat}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <span className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Aaraji no.76, Mardanpur, Kanpur - 209305</span>
            <a href="mailto:Newcoolsindia@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground"><Mail className="h-4 w-4 shrink-0" /> Newcoolsindia@gmail.com</a>
            <div className="flex flex-col gap-1">
              <a href="tel:+919793122554" className="flex items-center gap-2 hover:text-primary-foreground"><Phone className="h-4 w-4 shrink-0" /> +91 97931 22554</a>
              <a href="tel:+919935597561" className="flex items-center gap-2 hover:text-primary-foreground"><Phone className="h-4 w-4 shrink-0" /> +91 99355 97561</a>
            </div>
            <a href="https://wa.me/919793122554" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground"><MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} NC — Furniture & Kitchen Equipment. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
