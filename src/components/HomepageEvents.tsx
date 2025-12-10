import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PartyPopper, Briefcase, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventSpaceImage from "@/assets/event-space.jpg";

const eventFeatures = [
  { icon: PartyPopper, text: "Birthdays, showers, and anniversaries" },
  { icon: Briefcase, text: "Corporate team tastings and client events" },
  { icon: BookOpen, text: "Book clubs and intimate gatherings" },
];

const HomepageEvents = () => {
  return (
    <section className="py-24 bg-wine-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={eventSpaceImage} alt="Event space" className="w-full h-full object-cover opacity-10" />
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
                src={eventSpaceImage}
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
            <ul className="space-y-4 text-cream/80 mb-8">
              {eventFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  {feature.text}
                </li>
              ))}
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
