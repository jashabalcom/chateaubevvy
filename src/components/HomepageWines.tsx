import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WineBottleImage from "@/components/WineBottleImage";
import { 
  fadeUp, 
  staggerContainer, 
  staggerContainerSlow,
  cardReveal,
  lineReveal,
  viewportOnce 
} from "@/lib/animations";

// Import bottle images
import trinityBottle from "@/assets/bottles/trinity.png";
import chardonnayBottle from "@/assets/bottles/chardonnay.png";
import cabernetBottle from "@/assets/bottles/cabernet.png";
import merlotBottle from "@/assets/bottles/merlot.png";

const featuredWines = [
  {
    name: "Trinity",
    varietal: "Red Blend",
    price: 32,
    description: "Complex dark fruit with elegant, layered finish",
    badge: "House Favorite",
    image: trinityBottle,
  },
  {
    name: "Chardonnay",
    varietal: "Chardonnay",
    price: 24,
    description: "Crisp apple with buttery vanilla finish",
    badge: null,
    image: chardonnayBottle,
  },
  {
    name: "Cabernet Sauvignon",
    varietal: "Cabernet Sauvignon",
    price: 36,
    description: "Bold blackberry with firm tannins",
    badge: "Limited Release",
    image: cabernetBottle,
  },
  {
    name: "Merlot",
    varietal: "Merlot",
    price: 28,
    description: "Rich dark cherry and velvety chocolate",
    badge: null,
    image: merlotBottle,
  },
];

const HomepageWines = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-brand-gold to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-10 md:mb-16"
        >
          <motion.span 
            variants={fadeUp}
            className="text-brand-gold uppercase tracking-widest text-sm font-body inline-block"
          >
            Our Collection
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="heading-section text-brand-cream mt-4 mb-4"
          >
            Signature Wines
          </motion.h2>
          <motion.div 
            variants={lineReveal}
            className="divider-gold origin-center" 
          />
          <motion.p 
            variants={fadeUp}
            className="text-brand-cream/70 max-w-2xl mx-auto font-body text-lg"
          >
            Sourced from quality vineyards, crafted with care in our Bessemer barrel room
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {featuredWines.map((wine) => (
            <motion.div
              key={wine.name}
              variants={cardReveal}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-gradient-to-b from-brand-black/60 to-brand-black/40 backdrop-blur-sm rounded-sm overflow-hidden border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-500"
            >
              {/* Bottle Image */}
              <div className="relative aspect-[3/4] bg-gradient-to-b from-brand-black/20 via-brand-cream/5 to-brand-black/20 overflow-hidden flex items-center justify-center p-4">
                <WineBottleImage
                  src={wine.image}
                  alt={wine.name}
                  containerClassName="h-full w-auto"
                  className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                />
                {wine.badge && (
                  <span className="absolute top-3 right-3 bg-brand-gold text-brand-black text-xs uppercase tracking-wider px-2.5 py-1 rounded-sm font-body font-medium">
                    {wine.badge}
                  </span>
                )}
              </div>
              
              {/* Card Content */}
              <div className="p-3 sm:p-4 md:p-5">
                {/* Varietal & Price */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-brand-gold/80 text-[10px] sm:text-xs uppercase tracking-widest font-body truncate">{wine.varietal}</span>
                  <span className="font-display text-lg sm:text-xl font-semibold text-brand-gold">${wine.price}</span>
                </div>
                
                {/* Wine Name */}
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-brand-cream tracking-wide mb-1 sm:mb-2">{wine.name}</h3>
                
                {/* Description */}
                <p className="text-brand-cream/60 text-xs sm:text-sm font-body italic line-clamp-2">{wine.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-8 md:mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/wines">Explore All Wines</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomepageWines;
