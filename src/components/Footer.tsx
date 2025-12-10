import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer 
      ref={ref}
      className="relative overflow-hidden bg-charcoal py-16 md:py-20"
      role="contentinfo"
    >
      <div className="absolute inset-0 bg-texture-noise opacity-[0.02]" aria-hidden="true" />

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
          <p className="mb-8 font-display text-sm italic text-cream/70">
            Jefferson County's First Urban Winery
          </p>

          {/* Location */}
          <address className="mb-8 flex items-center gap-2 text-cream/80 not-italic">
            <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} aria-hidden="true" />
            <span className="font-body text-sm">
              First Avenue North, Downtown Bessemer, Alabama
            </span>
          </address>

          {/* Social Links */}
          <nav aria-label="Social media links" className="mb-10 flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream/80 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] focus-visible-ring"
              aria-label="Follow us on Instagram (opens in new tab)"
            >
              <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream/80 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] focus-visible-ring"
              aria-label="Follow us on Facebook (opens in new tab)"
            >
              <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href="mailto:hello@chateaubevvy.com"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream/80 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] focus-visible-ring"
              aria-label="Email us at hello@chateaubevvy.com"
            >
              <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </nav>

          {/* Divider */}
          <div className="mb-8 h-px w-48 bg-cream/20" role="separator" aria-hidden="true" />

          {/* Copyright */}
          <p className="font-body text-xs text-cream/60">
            © {new Date().getFullYear()} Chateau Bevvy Winery. All rights
            reserved.
          </p>
          <p className="mt-2 font-body text-xs text-cream/50">
            Black-owned • Veteran-owned • Bessemer, Alabama
          </p>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;