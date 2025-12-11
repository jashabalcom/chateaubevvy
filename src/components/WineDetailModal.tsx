import { motion, AnimatePresence } from "framer-motion";
import { X, Wine, Grape, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WineData {
  id: number;
  name: string;
  varietal: string;
  category: string;
  sweetness: string;
  price: number;
  tastingNotes: string;
  pairing: string;
  badge: string | null;
  image: string;
}

interface WineDetailModalProps {
  wine: WineData | null;
  isOpen: boolean;
  onClose: () => void;
}

const WineDetailModal = ({ wine, isOpen, onClose }: WineDetailModalProps) => {
  if (!wine) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-4xl md:w-full md:max-h-[90vh] bg-brand-cream rounded-sm shadow-2xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-black/10 hover:bg-brand-black/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-brand-black" />
            </button>

            <div className="flex flex-col md:flex-row h-full max-h-[calc(100vh-2rem)] md:max-h-[90vh] overflow-auto">
              {/* Bottle Image Section */}
              <div className="md:w-2/5 bg-gradient-to-b from-brand-black/10 via-brand-cream to-brand-cream p-8 flex items-center justify-center relative">
                {wine.badge && (
                  <span className="absolute top-4 left-4 bg-brand-gold text-brand-black text-xs uppercase tracking-wider px-3 py-1.5 rounded-sm font-body font-medium">
                    {wine.badge}
                  </span>
                )}
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  src={wine.image}
                  alt={wine.name}
                  className="h-[300px] md:h-[400px] w-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <span className="text-brand-gold text-xs uppercase tracking-widest font-body">
                    {wine.varietal}
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-black tracking-wide mt-2">
                    {wine.name}
                  </h2>
                  <div className="w-16 h-px bg-gradient-to-r from-brand-gold to-transparent my-4" />
                  
                  {/* Price & Sweetness */}
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl font-semibold text-brand-brown">
                      ${wine.price}
                    </span>
                    <span className={cn(
                      "px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm font-body",
                      wine.sweetness === "dry" 
                        ? "bg-brand-black/5 text-brand-black border border-brand-black/10" 
                        : "bg-brand-gold/10 text-brand-brown border border-brand-gold/20"
                    )}>
                      {wine.sweetness}
                    </span>
                  </div>
                </div>

                {/* Tasting Notes */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Wine className="w-4 h-4 text-brand-gold" />
                    <span className="text-xs uppercase tracking-widest text-brand-gold font-body font-medium">
                      Tasting Notes
                    </span>
                  </div>
                  <p className="text-brand-black/80 font-body text-base leading-relaxed italic">
                    {wine.tastingNotes}
                  </p>
                </div>

                {/* Food Pairing */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <UtensilsCrossed className="w-4 h-4 text-brand-gold" />
                    <span className="text-xs uppercase tracking-widest text-brand-gold font-body font-medium">
                      Pairs Beautifully With
                    </span>
                  </div>
                  <p className="text-brand-black/80 font-body text-base">
                    {wine.pairing}
                  </p>
                </div>

                {/* Wine Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-brand-black/5 rounded-sm">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-black/50 font-body">Type</span>
                    <p className="text-brand-black font-body font-medium capitalize">{wine.category}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-black/50 font-body">Varietal</span>
                    <p className="text-brand-black font-body font-medium">{wine.varietal}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-black/50 font-body">Sweetness</span>
                    <p className="text-brand-black font-body font-medium capitalize">{wine.sweetness}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-brand-black/50 font-body">Origin</span>
                    <p className="text-brand-black font-body font-medium">Bessemer, AL</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="gold" 
                    size="lg" 
                    className="flex-1"
                    asChild
                  >
                    <a href="/visit">Reserve a Tasting</a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-cream"
                    asChild
                  >
                    <a href="/contact">Inquire About This Wine</a>
                  </Button>
                </div>

                {/* Note */}
                <p className="text-brand-black/50 text-xs font-body text-center mt-4">
                  Available for tasting and purchase at our Bessemer location
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WineDetailModal;