import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomepageEvents = () => {
  return (
    <section className="py-24 bg-wine-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/3] bg-cream/10 rounded-sm overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Private event at Chateau Bevvy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold uppercase tracking-widest text-sm">Private Gatherings</span>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 mb-6">
              Host Your Event
            </h2>
            <p className="text-cream/80 leading-relaxed mb-6">
              From intimate celebrations to corporate tastings, our historic space provides 
              the perfect backdrop for your next gathering. Exposed brick, vintage charm, 
              and exceptional wine—all in the heart of downtown Bessemer.
            </p>
            <ul className="space-y-3 text-cream/70 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Birthdays, showers, and anniversaries
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Corporate team tastings and client events
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Book clubs and intimate gatherings
              </li>
            </ul>

            <Button variant="gold" size="lg" asChild>
              <Link to="/events">Inquire About Events</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomepageEvents;
