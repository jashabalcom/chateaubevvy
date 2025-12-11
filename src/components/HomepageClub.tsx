import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomepageClub = () => {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold uppercase tracking-widest text-sm">Coming Soon</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black mt-4 mb-6">
              The Bevvy Club
            </h2>
            <p className="text-brand-black/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              An exclusive membership for those who appreciate fine wine and warm company. 
              Quarterly releases, member-only events, and VIP perks await.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-8 mb-12"
          >
            <div className="p-6">
              <span className="font-serif text-5xl text-brand-gold">4x</span>
              <p className="text-brand-black/70 mt-2">Quarterly wine releases delivered to your door</p>
            </div>
            <div className="p-6">
              <span className="font-serif text-5xl text-brand-gold">15%</span>
              <p className="text-brand-black/70 mt-2">Off all wine purchases year-round</p>
            </div>
            <div className="p-6">
              <span className="font-serif text-5xl text-brand-gold">VIP</span>
              <p className="text-brand-black/70 mt-2">Exclusive events and priority reservations</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
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
