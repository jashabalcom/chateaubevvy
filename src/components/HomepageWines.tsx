import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const featuredWines = [
  {
    name: "Bessemer Red",
    varietal: "Merlot",
    description: "Rich dark cherry and velvety chocolate",
    badge: "House Favorite",
  },
  {
    name: "Golden Hour",
    varietal: "Chardonnay",
    description: "Crisp apple with buttery vanilla finish",
    badge: null,
  },
  {
    name: "First Avenue",
    varietal: "Cabernet Sauvignon",
    description: "Bold blackberry with firm tannins",
    badge: "Limited Release",
  },
  {
    name: "Southern Sunset",
    varietal: "Rosé",
    description: "Fresh strawberry and delicate florals",
    badge: null,
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
          <span className="text-gold uppercase tracking-widest text-sm">Our Collection</span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 mb-4">
            Signature Wines
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
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
              className="group bg-cream/5 backdrop-blur-sm rounded-sm overflow-hidden border border-gold/10 hover:border-gold/30 transition-all"
            >
              <div className="relative aspect-[3/4] bg-charcoal/20 overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt={wine.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {wine.badge && (
                  <span className="absolute top-3 right-3 bg-gold text-wine-dark text-xs uppercase tracking-wider px-2 py-1 rounded-sm">
                    {wine.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <span className="text-gold text-xs uppercase tracking-wider">{wine.varietal}</span>
                <h3 className="font-serif text-xl text-cream mt-1 mb-2">{wine.name}</h3>
                <p className="text-cream/60 text-sm">{wine.description}</p>
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
