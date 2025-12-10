import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import wineMerlot from "@/assets/wine-merlot.jpg";
import wineChardonnay from "@/assets/wine-chardonnay.jpg";
import wineCabernet from "@/assets/wine-cabernet.jpg";
import wineRose from "@/assets/wine-rose.jpg";

const featuredWines = [
  {
    name: "Bessemer Red",
    varietal: "Merlot",
    price: 28,
    description: "Rich dark cherry and velvety chocolate",
    badge: "House Favorite",
    image: wineMerlot,
  },
  {
    name: "Golden Hour",
    varietal: "Chardonnay",
    price: 24,
    description: "Crisp apple with buttery vanilla finish",
    badge: null,
    image: wineChardonnay,
  },
  {
    name: "First Avenue",
    varietal: "Cabernet Sauvignon",
    price: 36,
    description: "Bold blackberry with firm tannins",
    badge: "Limited Release",
    image: wineCabernet,
  },
  {
    name: "Southern Sunset",
    varietal: "Rosé",
    price: 22,
    description: "Fresh strawberry and delicate florals",
    badge: null,
    image: wineRose,
  },
];

const HomepageWines = () => {
  return (
    <section className="py-24 bg-wine-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-gold to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-widest text-sm font-body">Our Collection</span>
          <h2 className="heading-section text-cream mt-4 mb-4">
            Signature Wines
          </h2>
          <div className="divider-gold" />
          <p className="text-cream/70 max-w-2xl mx-auto font-body text-lg">
            Sourced from quality vineyards, crafted with care in our Bessemer barrel room
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredWines.map((wine, index) => (
            <motion.div
              key={wine.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-charcoal/40 backdrop-blur-sm rounded-sm overflow-hidden border border-gold/10 hover:border-gold/40 transition-all duration-300"
            >
              <div className="relative aspect-[3/4] bg-charcoal/20 overflow-hidden">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {wine.badge && (
                  <span className="absolute top-3 right-3 bg-gold text-charcoal text-xs uppercase tracking-wider px-2.5 py-1 rounded-sm font-body font-medium">
                    {wine.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                {/* Varietal & Price */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gold/80 text-xs uppercase tracking-widest font-body">{wine.varietal}</span>
                  <span className="font-display text-xl font-semibold text-gold">${wine.price}</span>
                </div>
                
                {/* Wine Name */}
                <h3 className="font-display text-2xl font-semibold text-cream tracking-wide mb-2">{wine.name}</h3>
                
                {/* Description */}
                <p className="text-cream/60 text-sm font-body italic">{wine.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
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
