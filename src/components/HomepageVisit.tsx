import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import tastingRoomImage from "@/assets/tasting-room-interior.jpg";
import { 
  fadeUp, 
  fadeUpSmall, 
  staggerContainer, 
  slideInRight, 
  scaleReveal,
  decorReveal,
  iconReveal,
  viewportOnce 
} from "@/lib/animations";

const HomepageVisit = () => {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span 
              variants={fadeUp}
              className="text-brand-gold uppercase tracking-widest text-sm inline-block"
            >
              Visit Us
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl text-brand-black mt-4 mb-6"
            >
              Your Table Awaits
            </motion.h2>
            <motion.p 
              variants={fadeUpSmall}
              className="text-brand-black/80 leading-relaxed mb-8"
            >
              Step off First Avenue North and into a space where time slows down. 
              Sink into vintage furniture, let soft jazz fill the air, and discover 
              wines that tell stories from around the world.
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              className="space-y-4 mb-8"
            >
              <motion.div 
                variants={fadeUpSmall}
                className="flex items-center gap-4"
              >
                <motion.div 
                  variants={iconReveal}
                  className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center"
                >
                  <MapPin className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </motion.div>
                <span className="text-brand-black">First Avenue North, Downtown Bessemer, AL</span>
              </motion.div>
              <motion.div 
                variants={fadeUpSmall}
                className="flex items-center gap-4"
              >
                <motion.div 
                  variants={iconReveal}
                  className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center"
                >
                  <Clock className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </motion.div>
                <span className="text-brand-black">Wed-Thu 4-9pm • Fri-Sat 2-11pm • Sun 1-6pm</span>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeUpSmall}
              className="flex flex-wrap gap-4"
            >
              <Button variant="wine" size="lg" asChild>
                <Link to="/visit">Plan Your Visit</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-cream" asChild>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <motion.div 
              variants={scaleReveal}
              className="aspect-[4/3] bg-brand-brown/10 rounded-sm overflow-hidden"
            >
              <img
                src={tastingRoomImage}
                alt="Chateau Bevvy tasting room"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              variants={decorReveal}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/20 rounded-sm -z-10" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomepageVisit;
