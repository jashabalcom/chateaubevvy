import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-charcoal py-16 md:py-20">
      <div className="absolute inset-0 bg-texture-noise opacity-[0.02]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo / Wordmark */}
          <h3 className="mb-2 font-display text-3xl font-medium tracking-wide text-cream">
            Chateau Bevvy
          </h3>
          <p className="mb-8 font-display text-sm italic text-cream/60">
            Jefferson County's First Urban Winery
          </p>

          {/* Location */}
          <div className="mb-8 flex items-center gap-2 text-cream/70">
            <MapPin className="h-4 w-4 text-gold" />
            <span className="font-body text-sm">
              First Avenue North, Downtown Bessemer, Alabama
            </span>
          </div>

          {/* Social Links */}
          <div className="mb-10 flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@chateaubevvy.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
              aria-label="Email us"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Divider */}
          <div className="mb-8 h-px w-48 bg-cream/10" />

          {/* Copyright */}
          <p className="font-body text-xs text-cream/40">
            © {new Date().getFullYear()} Chateau Bevvy Winery. All rights
            reserved.
          </p>
          <p className="mt-2 font-body text-xs text-cream/30">
            Black-owned • Veteran-owned • Bessemer, Alabama
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
