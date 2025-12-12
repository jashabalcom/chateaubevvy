import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Clock, Car, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import tastingRoomImage from "@/assets/tasting-room-interior.jpg";
import {
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  slideInLeft,
  slideInRight,
  scaleReveal,
  iconReveal,
  cardReveal,
  heroReveal,
  viewportOnce,
  luxuryEase
} from "@/lib/animations";

const faqs = [
  {
    question: "Do I need a reservation?",
    answer: "Walk-ins are always welcome! However, for groups of 6 or more, we recommend making a reservation to ensure we can accommodate you comfortably.",
  },
  {
    question: "Can I bring outside food?",
    answer: "We encourage you to bring light snacks or order from local restaurants. We also offer curated cheese and charcuterie boards to complement your tasting.",
  },
  {
    question: "Is there a dress code?",
    answer: "We welcome you as you are. Our space is casual yet refined—think 'nice dinner out' rather than formal attire.",
  },
  {
    question: "Do you host large groups?",
    answer: "Yes! We can accommodate groups up to 30 for private tastings and events. Please contact us for availability and pricing.",
  },
  {
    question: "Is parking available?",
    answer: "Free street parking is available on First Avenue North. There's also a public lot one block east of our location.",
  },
];

const Visit = () => {
  return (
    <>
      <Helmet>
        <title>Visit Us | Chateau Bevvy Winery – Bessemer, Alabama</title>
        <meta
          name="description"
          content="Plan your visit to Jefferson County's first urban winery. Find our hours, location, and parking information in downtown Bessemer."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-brand-black">
            <motion.img 
              src={tastingRoomImage} 
              alt="Tasting room" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: luxuryEase }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/50 via-transparent to-brand-black" />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center px-6"
          >
            <motion.h1 variants={heroReveal} className="font-serif text-5xl md:text-7xl text-brand-cream mb-4">Visit Us</motion.h1>
            <motion.p variants={fadeUpSmall} className="text-brand-cream/70 text-lg md:text-xl max-w-2xl mx-auto">
              Your table is waiting
            </motion.p>
          </motion.div>
        </section>

        {/* Experience */}
        <section className="py-24 bg-brand-cream">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <motion.span variants={fadeUpSmall} className="text-brand-gold uppercase tracking-widest text-sm block">The Experience</motion.span>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-brand-black mt-4 mb-6">
                  Step Into Warmth
                </motion.h2>
                <motion.p variants={fadeUpSmall} className="text-brand-black/80 leading-relaxed mb-6">
                  From the moment you walk through our doors, you're family. Settle into a vintage 
                  armchair, let the soft jazz wash over you, and watch the afternoon light play 
                  across exposed brick walls that have stood for over a century.
                </motion.p>
                <motion.p variants={fadeUpSmall} className="text-brand-black/80 leading-relaxed mb-6">
                  Our tasting room isn't about rushing through flights—it's about savoring the moment. 
                  Spend an hour or an afternoon. Strike up a conversation with the person next to you. 
                  Discover your new favorite wine.
                </motion.p>
                <motion.p variants={fadeUpSmall} className="text-brand-black/80 leading-relaxed">
                  A typical visit lasts about 45 minutes to an hour for a full tasting flight, but 
                  you're welcome to linger as long as you like.
                </motion.p>
              </motion.div>
              <motion.div
                variants={scaleReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="aspect-[4/3] bg-brand-brown/10 rounded-sm overflow-hidden"
              >
                <img
                  src={tastingRoomImage}
                  alt="Cozy tasting room interior"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hours & Location */}
        <section className="py-24 bg-brand-black">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Info */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <motion.span variants={fadeUpSmall} className="text-brand-gold uppercase tracking-widest text-sm block">Hours & Location</motion.span>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-brand-cream mt-4 mb-8">
                  Find Us
                </motion.h2>

                <motion.div variants={staggerContainer} className="space-y-8">
                  <motion.div variants={fadeUpSmall} className="flex items-start gap-4">
                    <motion.div variants={iconReveal}>
                      <MapPin className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="text-brand-cream font-medium mb-1">Address</h3>
                      <p className="text-brand-cream/70">
                        First Avenue North<br />
                        Downtown Bessemer, AL 35020
                      </p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-gold text-sm hover:underline mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUpSmall} className="flex items-start gap-4">
                    <motion.div variants={iconReveal}>
                      <Clock className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="text-brand-cream font-medium mb-1">Hours</h3>
                      <div className="text-brand-cream/70 space-y-1">
                        <p>Wednesday – Thursday: 4pm – 9pm</p>
                        <p>Friday – Saturday: 2pm – 11pm</p>
                        <p>Sunday: 1pm – 6pm</p>
                        <p className="text-brand-cream/50 text-sm mt-2">Closed Monday & Tuesday</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUpSmall} className="flex items-start gap-4">
                    <motion.div variants={iconReveal}>
                      <Car className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="text-brand-cream font-medium mb-1">Parking</h3>
                      <p className="text-brand-cream/70">
                        Free street parking available on First Avenue North. 
                        Additional parking in the public lot one block east.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUpSmall} className="flex items-start gap-4">
                    <motion.div variants={iconReveal}>
                      <Phone className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="text-brand-cream font-medium mb-1">Contact</h3>
                      <p className="text-brand-cream/70">
                        (205) 555-WINE<br />
                        hello@chateaubevvy.com
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                variants={scaleReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="aspect-square bg-brand-black/20 rounded-sm overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.4559565065897!2d-86.95431908479767!3d33.40118548078373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888911df5885c3eb%3A0x25507409eaba54c!2sBessemer%2C%20AL!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chateau Bevvy Location"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-brand-cream">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center mb-16"
            >
              <motion.span variants={fadeUpSmall} className="text-brand-gold uppercase tracking-widest text-sm block">Questions?</motion.span>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-brand-black mt-4">
                Frequently Asked
              </motion.h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-6"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={cardReveal}
                  className="bg-white p-6 rounded-sm shadow-sm"
                >
                  <h3 className="font-serif text-xl text-brand-black mb-2">{faq.question}</h3>
                  <p className="text-brand-black/70">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center mt-12"
            >
              <p className="text-brand-black/60 mb-4">Have another question?</p>
              <Button variant="wine" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Visit;