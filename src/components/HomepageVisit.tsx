import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import tastingRoomImage from "@/assets/tasting-room-interior.jpg";

const HomepageVisit = () => {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold uppercase tracking-widest text-sm">Visit Us</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black mt-4 mb-6">
              Your Table Awaits
            </h2>
            <p className="text-brand-black/80 leading-relaxed mb-8">
              Step off First Avenue North and into a space where time slows down. 
              Sink into vintage furniture, let soft jazz fill the air, and discover 
              wines that tell stories from around the world.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </div>
                <span className="text-brand-black">First Avenue North, Downtown Bessemer, AL</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </div>
                <span className="text-brand-black">Wed-Thu 4-9pm • Fri-Sat 2-11pm • Sun 1-6pm</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="wine" size="lg" asChild>
                <Link to="/visit">Plan Your Visit</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-cream" asChild>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-brand-brown/10 rounded-sm overflow-hidden">
              <img
                src={tastingRoomImage}
                alt="Chateau Bevvy tasting room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/20 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomepageVisit;
