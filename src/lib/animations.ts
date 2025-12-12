import { Variants } from "framer-motion";

// Luxury easing curve - smooth and refined
export const luxuryEase = [0.22, 1, 0.36, 1] as const;

// Fade up with subtle blur for text elements
export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(4px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.6, 
      ease: luxuryEase 
    }
  }
};

// Smaller fade up for body text
export const fadeUpSmall: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(2px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

// Stagger container for parent elements
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

// Slower stagger for dramatic effect
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15
    }
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -40,
    filter: "blur(4px)"
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.7, 
      ease: luxuryEase 
    }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 40,
    filter: "blur(4px)"
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.7, 
      ease: luxuryEase 
    }
  }
};

// Scale reveal for images
export const scaleReveal: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: luxuryEase 
    }
  }
};

// Line/divider reveal animation
export const lineReveal: Variants = {
  hidden: { 
    scaleX: 0,
    opacity: 0
  },
  visible: { 
    scaleX: 1,
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      delay: 0.2
    }
  }
};

// Card reveal with subtle lift
export const cardReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 25,
    filter: "blur(3px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

// Icon reveal with subtle scale
export const iconReveal: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: [0.34, 1.56, 0.64, 1] // Slight bounce
    }
  }
};

// Decorative element reveal
export const decorReveal: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    rotate: -3
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.8, 
      ease: luxuryEase,
      delay: 0.3
    }
  }
};

// Stat number reveal
export const statReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

// Timeline dot reveal with pulse effect
export const timelineDotReveal: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
};

// Hero text reveal - slower and more dramatic
export const heroReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: luxuryEase 
    }
  }
};

// Viewport settings
export const viewportOnce = { once: true, margin: "-50px" };
export const viewportAlways = { once: false, margin: "-50px" };
