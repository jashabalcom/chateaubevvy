import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  fadeUp, 
  fadeUpSmall, 
  staggerContainer, 
  staggerContainerSlow,
  statReveal,
  viewportOnce 
} from "@/lib/animations";

const clubStats = [
  { value: "4x", description: "Quarterly wine releases delivered to your door" },
  { value: "15%", description: "Off all wine purchases year-round" },
  { value: "VIP", description: "Exclusive events and priority reservations" },
];

const HomepageClub = () => {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
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
              Coming Soon
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl text-brand-black mt-4 mb-6"
            >
              The Bevvy Club
            </motion.h2>
            <motion.p 
              variants={fadeUpSmall}
              className="text-brand-black/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              An exclusive membership for those who appreciate fine wine and warm company. 
              Quarterly releases, member-only events, and VIP perks await.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid sm:grid-cols-3 gap-8 mb-12"
          >
            {clubStats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={statReveal}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6"
              >
                <span className="font-serif text-5xl text-brand-gold">{stat.value}</span>
                <p className="text-brand-black/70 mt-2">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Button variant="wine" size="lg" asChild>
              <Link to="/wine-club">Join the Waitlist</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomepageClub;
