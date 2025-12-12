import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WineDetailModal from "@/components/WineDetailModal";
import WineBottleImage from "@/components/WineBottleImage";
import { cn } from "@/lib/utils";
import wineCellarImage from "@/assets/wine-cellar.jpg";
import { 
  fadeUp, 
  fadeUpSmall,
  staggerContainer, 
  staggerContainerSlow,
  cardReveal,
  heroReveal,
  lineReveal,
  viewportOnce,
  luxuryEase
} from "@/lib/animations";

// Import bottle images
import merlotBottle from "@/assets/bottles/merlot.png";
import cabernetBottle from "@/assets/bottles/cabernet.png";
import malbecBottle from "@/assets/bottles/malbec.png";
import chardonnayBottle from "@/assets/bottles/chardonnay.png";
import fallHarvestBottle from "@/assets/bottles/fall-harvest.png";
import trinityBottle from "@/assets/bottles/trinity.png";
import rieslingBottle from "@/assets/bottles/riesling.png";

const wines = [
  {
    id: 1,
    name: "Trinity",
    varietal: "Red Blend",
    category: "red",
    sweetness: "dry",
    price: 32,
    tastingNotes: "A sophisticated blend of three varietals, offering complex dark fruit, hints of spice, and a layered, elegant finish.",
    pairing: "Braised short ribs, aged gouda, dark chocolate",
    badge: "House Favorite",
    image: trinityBottle,
  },
  {
    id: 2,
    name: "Merlot",
    varietal: "Merlot",
    category: "red",
    sweetness: "dry",
    price: 28,
    tastingNotes: "Rich dark cherry, hints of chocolate, velvety smooth finish with subtle oak undertones.",
    pairing: "Grilled steak, aged cheeses, mushroom risotto",
    badge: null,
    image: merlotBottle,
  },
  {
    id: 3,
    name: "Cabernet Sauvignon",
    varietal: "Cabernet Sauvignon",
    category: "red",
    sweetness: "dry",
    price: 36,
    tastingNotes: "Bold blackberry, cassis, and cedar with firm tannins and a long, distinguished finish.",
    pairing: "Prime rib, lamb, hearty stews",
    badge: "Limited Release",
    image: cabernetBottle,
  },
  {
    id: 4,
    name: "Malbec",
    varietal: "Malbec",
    category: "red",
    sweetness: "dry",
    price: 30,
    tastingNotes: "Deep plum and blackberry with smoky undertones, velvety tannins, and a lingering spice finish.",
    pairing: "Grilled meats, empanadas, blue cheese",
    badge: null,
    image: malbecBottle,
  },
  {
    id: 5,
    name: "Fall Harvest",
    varietal: "Red Blend",
    category: "red",
    sweetness: "semi-sweet",
    price: 26,
    tastingNotes: "Jammy berries, warm autumn spices, and a smooth, approachable finish perfect for the season.",
    pairing: "BBQ, pumpkin dishes, casual gatherings",
    badge: "Seasonal",
    image: fallHarvestBottle,
  },
  {
    id: 6,
    name: "Chardonnay",
    varietal: "Chardonnay",
    category: "white",
    sweetness: "dry",
    price: 24,
    tastingNotes: "Crisp green apple, buttery vanilla, with a bright citrus finish and subtle oak influence.",
    pairing: "Seafood, creamy pasta, roasted chicken",
    badge: null,
    image: chardonnayBottle,
  },
  {
    id: 7,
    name: "Riesling",
    varietal: "Riesling",
    category: "white",
    sweetness: "semi-sweet",
    price: 22,
    tastingNotes: "Bright citrus and stone fruit with delicate floral notes and a refreshing, balanced sweetness.",
    pairing: "Spicy Asian cuisine, soft cheeses, fruit desserts",
    badge: null,
    image: rieslingBottle,
  },
];

const filters = {
  category: ["all", "red", "white"],
  sweetness: ["all", "dry", "semi-sweet"],
};

type Wine = typeof wines[0];

const Wines = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSweetness, setActiveSweetness] = useState("all");
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWineClick = (wine: Wine) => {
    setSelectedWine(wine);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedWine(null), 300);
  };

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
          <div className="absolute inset-0 bg-brand-black">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: luxuryEase }}
              src={wineCellarImage} 
              alt="Wine cellar" 
              className="absolute inset-0 w-full h-full object-cover opacity-30" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/50 via-transparent to-brand-black" />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center px-6"
          >
            <motion.h1 
              variants={heroReveal}
              className="heading-hero text-brand-cream mb-4"
            >
              Our Wines
            </motion.h1>
            <motion.p 
              variants={heroReveal}
              className="font-script text-2xl md:text-3xl text-brand-gold"
            >
              Crafted with heart, inspired by travel
            </motion.p>
          </motion.div>
        </section>

        {/* Filters & Wines */}
        <section className="py-24 bg-brand-cream">
          <div className="container mx-auto px-6">
            {/* Filters */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-wrap justify-center gap-8 mb-16"
            >
              <motion.div 
                variants={fadeUpSmall}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="text-brand-black/60 text-sm uppercase tracking-wider font-body">Type:</span>
                {filters.category.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-4 py-2 text-sm uppercase tracking-wider transition-all rounded-sm font-body",
                      activeCategory === cat
                        ? "bg-brand-brown text-brand-cream"
                        : "bg-transparent text-brand-black hover:bg-brand-brown/10"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
              <motion.div 
                variants={fadeUpSmall}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="text-brand-black/60 text-sm uppercase tracking-wider font-body">Sweetness:</span>
                {filters.sweetness.map((sweet) => (
                  <button
                    key={sweet}
                    onClick={() => setActiveSweetness(sweet)}
                    className={cn(
                      "px-4 py-2 text-sm uppercase tracking-wider transition-all rounded-sm font-body",
                      activeSweetness === sweet
                        ? "bg-brand-brown text-brand-cream"
                        : "bg-transparent text-brand-black hover:bg-brand-brown/10"
                    )}
                  >
                    {sweet}
                  </button>
                ))}
              </motion.div>
            </motion.div>

            {/* Wine Grid */}
            <motion.div 
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredWines.map((wine) => (
                <motion.div
                  key={wine.id}
                  variants={cardReveal}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => handleWineClick(wine)}
                  className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-gray/20 cursor-pointer"
                >
                  {/* Bottle Image Container */}
                  <div className="relative aspect-[3/4] bg-gradient-to-b from-brand-black/5 via-brand-cream to-brand-cream overflow-hidden flex items-center justify-center p-6">
                    <WineBottleImage
                      src={wine.image}
                      alt={wine.name}
                      containerClassName="h-full w-auto"
                      className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                    />
                    {wine.badge && (
                      <span className="absolute top-4 right-4 bg-brand-gold text-brand-black text-xs uppercase tracking-wider px-3 py-1.5 rounded-sm font-body font-medium shadow-md">
                        {wine.badge}
                      </span>
                    )}
                    {/* View Details Overlay */}
                    <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-cream/90 text-brand-black px-4 py-2 rounded-sm text-sm font-body uppercase tracking-wider">
                        View Details
                      </span>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 bg-white relative">
                    {/* Varietal & Price Row */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-brand-gold text-xs uppercase tracking-widest font-body">{wine.varietal}</span>
                      <span className="font-display text-2xl font-semibold text-brand-brown">${wine.price}</span>
                    </div>
                    
                    {/* Wine Name */}
                    <h3 className="font-display text-2xl font-semibold text-brand-black tracking-wide mb-1">{wine.name}</h3>
                    
                    {/* Decorative Line */}
                    <div className="w-12 h-px bg-gradient-to-r from-brand-gold to-transparent my-4" />
                    
                    {/* Tasting Notes */}
                    <p className="text-brand-black/70 font-body text-sm leading-relaxed mb-4 italic line-clamp-3">{wine.tastingNotes}</p>
                    
                    {/* Pairing Section */}
                    <div className="pt-4 border-t border-brand-gray/20">
                      <span className="text-xs uppercase tracking-widest text-brand-gold font-body">Pairs with</span>
                      <p className="text-brand-black/80 font-body text-sm mt-1">{wine.pairing}</p>
                    </div>
                    
                    {/* Sweetness Badge */}
                    <div className="mt-4 flex items-center gap-2">
                      <span className={cn(
                        "px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm font-body",
                        wine.sweetness === "dry" ? "bg-brand-black/5 text-brand-black border border-brand-black/10" :
                        "bg-brand-gold/10 text-brand-brown border border-brand-gold/20"
                      )}>
                        {wine.sweetness}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredWines.length === 0 && (
              <motion.p 
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-center text-brand-black/60 py-12"
              >
                No wines match your current filters. Try adjusting your selection.
              </motion.p>
            )}
          </div>
        </section>

        <Footer />
      </main>

      {/* Wine Detail Modal */}
      <WineDetailModal 
        wine={selectedWine} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default Wines;
