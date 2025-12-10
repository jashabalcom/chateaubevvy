import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-winery.jpg";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "easeOut" }}
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
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-cream/30 bg-cream/10 px-4 py-2 text-sm tracking-widest text-cream/90 backdrop-blur-sm">
            COMING SOON • JEFFERSON COUNTY, ALABAMA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 max-w-4xl font-display text-5xl font-medium leading-tight tracking-tight text-cream md:text-6xl lg:text-7xl"
        >
          Jefferson County's First{" "}
          <span className="italic text-gold">Urban Winery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-10 max-w-2xl font-body text-lg leading-relaxed text-cream/80 md:text-xl"
        >
          A historic Bessemer landmark reimagined as a warm, intimate wine
          experience. Black-owned. Veteran-owned. Opening soon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button variant="hero" size="xl" onClick={scrollToWaitlist}>
            Join the Bevvy Waitlist
          </Button>
          <Button variant="hero-outline" size="xl" onClick={scrollToWaitlist}>
            Get Opening Updates
          </Button>
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
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-cream/60 transition-colors hover:text-cream"
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
