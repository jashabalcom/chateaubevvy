import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tastingRoomImage from "@/assets/tasting-room-interior.jpg";
import { 
  fadeUp, 
  fadeUpSmall, 
  staggerContainer, 
  slideInLeft, 
  slideInRight, 
  scaleReveal, 
  decorReveal,
  statReveal,
  viewportOnce 
} from "@/lib/animations";

const HomepageAbout = () => {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <motion.div 
              variants={scaleReveal}
              className="aspect-[4/5] bg-brand-brown/10 rounded-sm overflow-hidden"
            >
              <img
                src={tastingRoomImage}
                alt="Inside Chateau Bevvy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              variants={decorReveal}
              className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/20 rounded-sm -z-10" 
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span 
              variants={fadeUp}
              className="text-brand-gold uppercase tracking-widest text-sm font-body inline-block"
            >
              Our Story
            </motion.span>
            
            <motion.h2 
              variants={fadeUp}
              className="heading-section text-brand-black mt-4 mb-4"
            >
              A 1910 Landmark Reimagined
            </motion.h2>
            
            <motion.p 
              variants={fadeUp}
              className="font-script text-2xl text-brand-gold mb-6"
            >
              Where history meets hospitality
            </motion.p>
            
            <motion.p 
              variants={fadeUpSmall}
              className="text-brand-black/80 leading-relaxed mb-6 font-body"
            >
              Standing on First Avenue North in downtown Bessemer, our building has witnessed 
              over a century of Alabama history. Originally a saloon, then a beloved drugstore, 
              its exposed brick walls and original wood floors now welcome a new chapter.
            </motion.p>
            
            <motion.p 
              variants={fadeUpSmall}
              className="text-brand-black/80 leading-relaxed mb-8 font-body"
            >
              Founded by Army veteran La Fran Marks, Chateau Bevvy brings together worldly 
              wine sensibilities shaped by travels through Italy, France, and Greece with 
              the warm hospitality of the Deep South. This isn't just a tasting room—it's 
              a homecoming.
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              className="flex flex-wrap gap-8 mb-8"
            >
              <motion.div variants={statReveal}>
                <span className="font-display text-4xl font-semibold text-brand-gold">1910</span>
                <p className="text-brand-black/60 text-sm mt-1 font-body">Historic Building</p>
              </motion.div>
              <motion.div variants={statReveal}>
                <span className="font-display text-4xl font-semibold text-brand-gold">1st</span>
                <p className="text-brand-black/60 text-sm mt-1 font-body">Winery in Jefferson County</p>
              </motion.div>
              <motion.div variants={statReveal}>
                <span className="font-display text-4xl font-semibold text-brand-gold">♥</span>
                <p className="text-brand-black/60 text-sm mt-1 font-body">Veteran Owned</p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUpSmall}>
              <Button variant="wine" size="lg" asChild>
                <Link to="/our-story">Read Our Story</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomepageAbout;
