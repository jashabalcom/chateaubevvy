import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import logo from "@/assets/logo-circular.png";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "Our Story", path: "/our-story" },
  { name: "Wines", path: "/wines" },
  { name: "Visit Us", path: "/visit" },
  { name: "Events", path: "/events" },
  { name: "Wine Club", path: "/wine-club" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Skip Navigation Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-brand-black/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        )}
        role="banner"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/home" 
            className="group relative z-10 focus-visible-ring rounded-full"
            aria-label="Chateau Bevvy - Home"
          >
            {!isLogoLoaded && (
              <Skeleton 
                className={cn(
                  "rounded-full transition-all duration-500 bg-brand-cream/10",
                  isScrolled ? "h-12 w-12 md:h-14 md:w-14" : "h-14 w-14 md:h-16 md:w-16"
                )} 
              />
            )}
            <motion.img
              src={logo}
              alt="Chateau Bevvy"
              className={cn(
                "rounded-full transition-all duration-500",
                isScrolled ? "h-12 w-12 md:h-14 md:w-14" : "h-14 w-14 md:h-16 md:w-16",
                !isLogoLoaded && "absolute opacity-0"
              )}
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 0 25px rgba(220, 176, 131, 0.5)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onLoad={() => setIsLogoLoaded(true)}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-body text-sm uppercase tracking-widest transition-colors duration-300 relative focus-visible-ring rounded-sm",
                  location.pathname === link.path
                    ? "text-brand-gold"
                    : "text-brand-cream/90 hover:text-brand-gold"
                )}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-brand-gold"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-brand-cream p-2 focus-visible-ring rounded-md"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X size={28} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu size={28} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-brand-black/98 backdrop-blur-md border-t border-brand-gold/20"
              aria-label="Mobile navigation"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "block py-3 text-lg uppercase tracking-widest transition-colors focus-visible-ring rounded-sm",
                        location.pathname === link.path
                          ? "text-brand-gold"
                          : "text-brand-cream/90 hover:text-brand-gold"
                      )}
                      aria-current={location.pathname === link.path ? "page" : undefined}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;