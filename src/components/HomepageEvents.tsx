import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PartyPopper, Briefcase, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventSpaceImage from "@/assets/event-space.jpg";
import { 
  fadeUp, 
  fadeUpSmall, 
  staggerContainer, 
  slideInLeft,
  scaleReveal,
  iconReveal,
  viewportOnce 
} from "@/lib/animations";

const eventFeatures = [
  { icon: PartyPopper, text: "Birthdays, showers, and anniversaries" },
  { icon: Briefcase, text: "Corporate team tastings and client events" },
  { icon: BookOpen, text: "Book clubs and intimate gatherings" },
];

const HomepageEvents = () => {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={eventSpaceImage} alt="Event space" className="w-full h-full object-cover opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-2 lg:order-1"
          >
            <motion.div 
              variants={scaleReveal}
              className="aspect-[4/3] bg-brand-cream/10 rounded-sm overflow-hidden"
            >
              <img
                src={eventSpaceImage}
                alt="Private event at Chateau Bevvy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-1 lg:order-2"
          >
            <motion.span 
              variants={fadeUp}
              className="text-brand-gold uppercase tracking-widest text-sm inline-block"
            >
              Private Gatherings
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl text-brand-cream mt-4 mb-6"
            >
              Host Your Event
            </motion.h2>
            <motion.p 
              variants={fadeUpSmall}
              className="text-brand-cream/80 leading-relaxed mb-6"
            >
              From intimate celebrations to corporate tastings, our historic space provides 
              the perfect backdrop for your next gathering. Exposed brick, vintage charm, 
              and exceptional wine—all in the heart of downtown Bessemer.
            </motion.p>
            
            <motion.ul 
              variants={staggerContainer}
              className="space-y-4 text-brand-cream/80 mb-8"
            >
              {eventFeatures.map((feature, index) => (
                <motion.li 
                  key={index} 
                  variants={fadeUpSmall}
                  className="flex items-center gap-4"
                >
                  <motion.div 
                    variants={iconReveal}
                    className="w-8 h-8 rounded-full border border-brand-gold/30 bg-brand-gold/5 flex items-center justify-center"
                  >
                    <feature.icon className="w-4 h-4 text-brand-gold" strokeWidth={1.5} />
                  </motion.div>
                  {feature.text}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUpSmall}>
              <Button variant="gold" size="lg" asChild>
                <Link to="/events">Inquire About Events</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomepageEvents;
