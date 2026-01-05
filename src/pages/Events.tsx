import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import eventSpaceImage from "@/assets/event-space.jpg";
import {
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  staggerContainerSlow,
  slideInLeft,
  slideInRight,
  scaleReveal,
  iconReveal,
  cardReveal,
  heroReveal,
  viewportOnce,
  luxuryEase
} from "@/lib/animations";

const eventTypes = [
  {
    icon: Heart,
    title: "Celebrations",
    description: "Birthdays, anniversaries, showers, and intimate gatherings in a space that feels like home.",
    capacity: "Up to 30 guests",
    features: ["Private space", "Custom wine flights", "Cheese boards available"],
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Team tastings, client appreciation nights, and networking events with a sophisticated touch.",
    capacity: "Up to 25 guests",
    features: ["AV capabilities", "Catering coordination", "Branded experiences"],
  },
  {
    icon: Users,
    title: "Intimate Gatherings",
    description: "Book clubs, date nights, and small group tastings for a cozy, memorable experience.",
    capacity: "6-12 guests",
    features: ["Guided tastings", "Flexible timing", "No venue fee for smaller groups"],
  },
];

const Events = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error } = await supabase
        .from("event_inquiries")
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          event_type: formData.eventType,
          preferred_date: formData.date || null,
          estimated_guests: formData.guests ? parseInt(formData.guests) : null,
          message: formData.message.trim() || null,
        });

      if (error) throw error;

      // Send to Go High Level
      supabase.functions.invoke('send-to-ghl', {
        body: {
          source: 'event_inquiry',
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          eventType: formData.eventType,
          preferredDate: formData.date || undefined,
          estimatedGuests: formData.guests || undefined,
          message: formData.message.trim() || undefined,
        }
      }).catch(err => console.error('GHL send failed:', err));

      toast({
        title: "Inquiry Received",
        description: "We'll be in touch within 24-48 hours to discuss your event.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        guests: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting event inquiry:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Events & Private Gatherings | Chateau Bevvy Winery</title>
        <meta
          name="description"
          content="Host your next celebration at Jefferson County's first urban winery. Private tastings, corporate events, and intimate gatherings in historic downtown Bessemer."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-brand-black">
            <motion.img 
              src={eventSpaceImage} 
              alt="Event space" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: luxuryEase }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/50 via-transparent to-brand-black" />
            <div className="absolute inset-0 bg-texture-noise opacity-[0.03]" />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center px-4 sm:px-6"
          >
            <motion.h1 variants={heroReveal} className="heading-hero text-brand-cream mb-3 md:mb-4">Events</motion.h1>
            <motion.p variants={heroReveal} className="font-script text-xl sm:text-2xl md:text-3xl text-brand-gold">
              Celebrate life's moments
            </motion.p>
          </motion.div>
        </section>

        {/* Event Types */}
        <section className="py-12 md:py-24 bg-brand-cream">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center mb-8 md:mb-16"
            >
              <motion.span variants={fadeUpSmall} className="text-brand-gold uppercase tracking-widest text-xs sm:text-sm block">Private Gatherings</motion.span>
              <motion.h2 variants={fadeUp} className="heading-section text-brand-black mt-3 sm:mt-4">
                Your Event, Your Way
              </motion.h2>
            </motion.div>

            <motion.div 
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            >
              {eventTypes.map((event) => (
                <motion.div
                  key={event.title}
                  variants={cardReveal}
                  whileHover={{ y: -8 }}
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <motion.div variants={iconReveal}>
                    <event.icon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold mb-3 sm:mb-4" />
                  </motion.div>
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-black mb-2">{event.title}</h3>
                  <p className="text-brand-black/70 text-sm sm:text-base mb-3 sm:mb-4">{event.description}</p>
                  <p className="text-brand-gold text-xs sm:text-sm font-medium mb-3 sm:mb-4">{event.capacity}</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {event.features.map((feature) => (
                      <li key={feature} className="text-brand-black/60 text-xs sm:text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-12 md:py-24 bg-brand-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <motion.span variants={fadeUpSmall} className="text-brand-gold uppercase tracking-widest text-xs sm:text-sm block">Book Your Event</motion.span>
                <motion.h2 variants={fadeUp} className="heading-section text-brand-cream mt-3 sm:mt-4 mb-4 sm:mb-6">
                  Let's Plan Together
                </motion.h2>
                <motion.p variants={fadeUpSmall} className="text-brand-cream/80 leading-relaxed mb-6">
                  Whether you're celebrating a milestone, hosting clients, or simply gathering 
                  friends for an unforgettable evening, we'd love to help make it special.
                </motion.p>
                <motion.p variants={fadeUpSmall} className="text-brand-cream/80 leading-relaxed mb-8">
                  Fill out the form and we'll reach out within 24-48 hours to discuss your 
                  vision and availability.
                </motion.p>
                <motion.div variants={scaleReveal} className="bg-brand-cream/10 p-4 sm:p-6 rounded-sm">
                  <h3 className="text-brand-cream font-medium mb-3 sm:mb-4 text-sm sm:text-base">What's Included</h3>
                  <ul className="space-y-1.5 sm:space-y-2 text-brand-cream/70 text-sm">
                    <li>• Exclusive use of the tasting room</li>
                    <li>• Personalized wine selection guidance</li>
                    <li>• Flexible setup and timing</li>
                    <li>• Coordination with preferred caterers</li>
                  </ul>
                </motion.div>
              </motion.div>

              <motion.form
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                onSubmit={handleSubmit}
                className="bg-brand-cream p-4 sm:p-6 md:p-8 rounded-sm"
              >
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="grid gap-6"
                >
                  <motion.div variants={fadeUpSmall} className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-brand-black text-sm font-medium mb-2 block">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-brand-black/20 focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="text-brand-black text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-brand-black/20 focus:border-brand-gold"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUpSmall} className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-brand-black text-sm font-medium mb-2 block">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="border-brand-black/20 focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="text-brand-black text-sm font-medium mb-2 block">Event Type *</label>
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-brand-black/20 focus:border-brand-gold focus:outline-none bg-white text-brand-black"
                      >
                        <option value="">Select...</option>
                        <option value="celebration">Celebration</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="intimate">Intimate Gathering</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUpSmall} className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-brand-black text-sm font-medium mb-2 block">Preferred Date</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="border-brand-black/20 focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="text-brand-black text-sm font-medium mb-2 block">Estimated Guests</label>
                      <Input
                        type="number"
                        min="1"
                        max="50"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="border-brand-black/20 focus:border-brand-gold"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUpSmall}>
                    <label className="text-brand-black text-sm font-medium mb-2 block">
                      Tell us about your event
                    </label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-brand-black/20 focus:border-brand-gold resize-none"
                      placeholder="What's the occasion? Any special requests?"
                    />
                  </motion.div>

                  <motion.div variants={fadeUpSmall}>
                    <Button type="submit" variant="wine" size="lg" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? "Sending..." : "Inquire About Events"}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Events;