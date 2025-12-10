import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const wines = [
  {
    id: 1,
    name: "Bessemer Red",
    varietal: "Merlot",
    category: "red",
    sweetness: "dry",
    tastingNotes: "Rich dark cherry, hints of chocolate, velvety smooth finish with subtle oak undertones.",
    pairing: "Grilled steak, aged cheeses, dark chocolate",
    badge: "House Favorite",
  },
  {
    id: 2,
    name: "Golden Hour",
    varietal: "Chardonnay",
    category: "white",
    sweetness: "dry",
    tastingNotes: "Crisp green apple, buttery vanilla, with a bright citrus finish.",
    pairing: "Seafood, creamy pasta, roasted chicken",
    badge: null,
  },
  {
    id: 3,
    name: "First Avenue",
    varietal: "Cabernet Sauvignon",
    category: "red",
    sweetness: "dry",
    tastingNotes: "Bold blackberry, cassis, and cedar with firm tannins and a long finish.",
    pairing: "Prime rib, lamb, mushroom dishes",
    badge: "Limited Release",
  },
  {
    id: 4,
    name: "Southern Sunset",
    varietal: "Rosé",
    category: "rosé",
    sweetness: "semi-sweet",
    tastingNotes: "Fresh strawberry, watermelon, with delicate floral notes and a refreshing finish.",
    pairing: "Light salads, grilled shrimp, summer fruits",
    badge: null,
  },
  {
    id: 5,
    name: "Magnolia White",
    varietal: "Moscato",
    category: "white",
    sweetness: "sweet",
    tastingNotes: "Sweet peach, honeysuckle, and jasmine with a light, effervescent quality.",
    pairing: "Spicy cuisine, fruit desserts, brunch",
    badge: "Local Favorite",
  },
  {
    id: 6,
    name: "Heritage Blend",
    varietal: "Red Blend",
    category: "red",
    sweetness: "semi-sweet",
    tastingNotes: "Jammy berries, warm spices, and a smooth, approachable finish.",
    pairing: "BBQ, pizza, casual gatherings",
    badge: null,
  },
];

const filters = {
  category: ["all", "red", "white", "rosé"],
  sweetness: ["all", "dry", "semi-sweet", "sweet"],
};

const Wines = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSweetness, setActiveSweetness] = useState("all");

  const filteredWines = wines.filter((wine) => {
    const categoryMatch = activeCategory === "all" || wine.category === activeCategory;
    const sweetnessMatch = activeSweetness === "all" || wine.sweetness === activeSweetness;
    return categoryMatch && sweetnessMatch;
  });

  return (
    <>
      <Helmet>
        <title>Our Wines | Chateau Bevvy Winery – Bessemer, Alabama</title>
        <meta
          name="description"
          content="Explore our signature wines at Jefferson County's first urban winery. From bold reds to crisp whites, discover your new favorite."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-wine-dark">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/50 via-transparent to-wine-dark" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="font-serif text-5xl md:text-7xl text-cream mb-4">Our Wines</h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto">
              Crafted with heart, inspired by travel
            </p>
          </motion.div>
        </section>

        {/* Filters & Wines */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8 mb-16"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-charcoal/60 text-sm uppercase tracking-wider">Type:</span>
                {filters.category.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-4 py-2 text-sm uppercase tracking-wider transition-all rounded-sm",
                      activeCategory === cat
                        ? "bg-wine text-cream"
                        : "bg-transparent text-charcoal hover:bg-wine/10"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-charcoal/60 text-sm uppercase tracking-wider">Sweetness:</span>
                {filters.sweetness.map((sweet) => (
                  <button
                    key={sweet}
                    onClick={() => setActiveSweetness(sweet)}
                    className={cn(
                      "px-4 py-2 text-sm uppercase tracking-wider transition-all rounded-sm",
                      activeSweetness === sweet
                        ? "bg-wine text-cream"
                        : "bg-transparent text-charcoal hover:bg-wine/10"
                    )}
                  >
                    {sweet}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Wine Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWines.map((wine, index) => (
                <motion.div
                  key={wine.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] bg-wine-dark/5 overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt={wine.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {wine.badge && (
                      <span className="absolute top-4 right-4 bg-gold text-wine-dark text-xs uppercase tracking-wider px-3 py-1 rounded-sm">
                        {wine.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-gold text-sm uppercase tracking-wider">{wine.varietal}</span>
                    <h3 className="font-serif text-2xl text-wine-dark mt-1 mb-3">{wine.name}</h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{wine.tastingNotes}</p>
                    <div className="pt-4 border-t border-charcoal/10">
                      <span className="text-xs uppercase tracking-wider text-charcoal/50">Pairs with:</span>
                      <p className="text-charcoal/70 text-sm mt-1">{wine.pairing}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className={cn(
                        "px-2 py-1 text-xs uppercase tracking-wider rounded-sm",
                        wine.sweetness === "dry" ? "bg-charcoal/10 text-charcoal" :
                        wine.sweetness === "semi-sweet" ? "bg-gold/20 text-wine-dark" :
                        "bg-wine/10 text-wine"
                      )}>
                        {wine.sweetness}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredWines.length === 0 && (
              <p className="text-center text-charcoal/60 py-12">
                No wines match your current filters. Try adjusting your selection.
              </p>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Wines;
