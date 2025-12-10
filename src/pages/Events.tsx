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
import eventSpaceImage from "@/assets/event-space.jpg";

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

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
    setIsSubmitting(false);
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
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-wine-dark">
            <img src={eventSpaceImage} alt="Event space" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/50 via-transparent to-wine-dark" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="font-serif text-5xl md:text-7xl text-cream mb-4">Events</h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto">
              Celebrate life's moments in a space that feels like home
            </p>
          </motion.div>
        </section>

        {/* Event Types */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-gold uppercase tracking-widest text-sm">Private Gatherings</span>
              <h2 className="font-serif text-4xl md:text-5xl text-wine-dark mt-4">
                Your Event, Your Way
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {eventTypes.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <event.icon className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-serif text-2xl text-wine-dark mb-2">{event.title}</h3>
                  <p className="text-charcoal/70 mb-4">{event.description}</p>
                  <p className="text-gold text-sm font-medium mb-4">{event.capacity}</p>
                  <ul className="space-y-2">
                    {event.features.map((feature) => (
                      <li key={feature} className="text-charcoal/60 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="py-24 bg-wine-dark">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-gold uppercase tracking-widest text-sm">Book Your Event</span>
                <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 mb-6">
                  Let's Plan Together
                </h2>
                <p className="text-cream/80 leading-relaxed mb-6">
                  Whether you're celebrating a milestone, hosting clients, or simply gathering 
                  friends for an unforgettable evening, we'd love to help make it special.
                </p>
                <p className="text-cream/80 leading-relaxed mb-8">
                  Fill out the form and we'll reach out within 24-48 hours to discuss your 
                  vision and availability.
                </p>
                <div className="bg-cream/10 p-6 rounded-sm">
                  <h3 className="text-cream font-medium mb-4">What's Included</h3>
                  <ul className="space-y-2 text-cream/70">
                    <li>• Exclusive use of the tasting room</li>
                    <li>• Personalized wine selection guidance</li>
                    <li>• Flexible setup and timing</li>
                    <li>• Coordination with preferred caterers</li>
                  </ul>
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-cream p-8 rounded-sm"
              >
                <div className="grid gap-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-charcoal text-sm font-medium mb-2 block">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-charcoal/20 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="text-charcoal text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-charcoal/20 focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-charcoal text-sm font-medium mb-2 block">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="border-charcoal/20 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="text-charcoal text-sm font-medium mb-2 block">Event Type *</label>
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-charcoal/20 focus:border-gold focus:outline-none bg-white text-charcoal"
                      >
                        <option value="">Select...</option>
                        <option value="celebration">Celebration</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="intimate">Intimate Gathering</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-charcoal text-sm font-medium mb-2 block">Preferred Date</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="border-charcoal/20 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="text-charcoal text-sm font-medium mb-2 block">Estimated Guests</label>
                      <Input
                        type="number"
                        min="1"
                        max="50"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="border-charcoal/20 focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-charcoal text-sm font-medium mb-2 block">
                      Tell us about your event
                    </label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-charcoal/20 focus:border-gold resize-none"
                      placeholder="What's the occasion? Any special requests?"
                    />
                  </div>

                  <Button type="submit" variant="wine" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Inquire About Events"}
                  </Button>
                </div>
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
