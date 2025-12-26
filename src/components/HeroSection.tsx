import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-winery.jpg";
import logo from "@/assets/logo-circular.png";
import { staggerContainer, heroReveal, fadeUp, luxuryEase } from "@/lib/animations";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: luxuryEase }}
          className="h-full w-full"
        >
          <img
            src={heroImage}
            alt="Chateau Bevvy Winery tasting room with exposed brick walls and warm lighting"
            className="h-full w-full object-cover"
          />
        </motion.div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-texture-noise opacity-[0.03]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 pt-16 md:pt-0 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Brand Logo */}
          <motion.img
            src={logo}
            alt="Chateau Bevvy Winery"
            initial={{ opacity: 0, filter: "drop-shadow(0 0 0px rgba(220, 176, 131, 0))" }}
            animate={{ 
              opacity: 1, 
              filter: "drop-shadow(0 0 30px rgba(220, 176, 131, 0.5))"
            }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 mb-4 sm:mb-6 rounded-full"
          />

          <motion.div
            variants={fadeUp}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-block rounded-full border border-brand-cream/30 bg-brand-cream/10 px-3 sm:px-4 py-2 text-xs sm:text-sm tracking-widest text-brand-cream/90 backdrop-blur-sm">
              COMING SOON • JEFFERSON COUNTY, AL
            </span>
          </motion.div>

          <motion.h1
            variants={heroReveal}
            className="heading-hero mb-4 sm:mb-6 max-w-4xl text-brand-cream px-2"
          >
            Jefferson County's First{" "}
            <span className="text-accent italic text-brand-gold">Urban Winery</span>
          </motion.h1>

          <motion.p
            variants={heroReveal}
            className="font-script text-2xl sm:text-3xl md:text-4xl text-brand-gold mb-4 sm:mb-6"
          >
            Crafted with heart, poured with soul
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-body-large mb-8 sm:mb-10 max-w-2xl text-brand-cream/80 px-2"
          >
            A historic Bessemer landmark reimagined as a warm, intimate wine
            experience. Black-owned. Veteran-owned. Opening soon.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:gap-4 sm:flex-row w-full sm:w-auto px-4 sm:px-0"
          >
            <Button variant="hero" size="xl" onClick={scrollToWaitlist} className="w-full sm:w-auto">
              Join the Waitlist
            </Button>
            <Button variant="hero-outline" size="xl" onClick={scrollToWaitlist} className="w-full sm:w-auto">
              Get Updates
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToWaitlist}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-brand-cream/60 transition-colors hover:text-brand-cream"
            aria-label="Scroll down"
          >
            <span className="text-xs uppercase tracking-widest">Discover</span>
            <ChevronDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
