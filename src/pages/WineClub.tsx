import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Wine, Calendar, Star, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: Wine,
    title: "Quarterly Releases",
    description: "Be the first to taste our newest wines, delivered to your door four times a year.",
  },
  {
    icon: Calendar,
    title: "Member Events",
    description: "Exclusive invitations to release parties, vertical tastings, and behind-the-scenes experiences.",
  },
  {
    icon: Star,
    title: "VIP Treatment",
    description: "Complimentary tastings for you and a guest, plus priority reservations for events.",
  },
  {
    icon: Gift,
    title: "Member Discounts",
    description: "Enjoy 15% off all wine purchases and 10% off merchandise year-round.",
  },
];

const WineClub = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "You're on the list!",
      description: "We'll notify you as soon as the Bevvy Club launches.",
    });

    setFormData({ name: "", email: "", phone: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Bevvy Club | Chateau Bevvy Winery – Wine Membership</title>
        <meta
          name="description"
          content="Join the Bevvy Club for exclusive wines, member events, and VIP perks at Jefferson County's first urban winery."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-wine-dark">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/50 via-transparent to-wine-dark" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Coming Soon</span>
            <h1 className="font-serif text-5xl md:text-7xl text-cream mb-4">The Bevvy Club</h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto">
              An exclusive membership for those who appreciate fine wine and warm company
            </p>
          </motion.div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-gold uppercase tracking-widest text-sm">Member Benefits</span>
              <h2 className="font-serif text-4xl md:text-5xl text-wine-dark mt-4">
                Why Join the Club?
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-wine/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-wine" />
                  </div>
                  <h3 className="font-serif text-xl text-wine-dark mb-2">{benefit.title}</h3>
                  <p className="text-charcoal/70 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section className="py-24 bg-wine-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold to-transparent" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-gold uppercase tracking-widest text-sm">Be First In Line</span>
                <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 mb-6">
                  Join the Waitlist
                </h2>
                <p className="text-cream/80 mb-8">
                  The Bevvy Club launches with our grand opening. Sign up now to be among 
                  the first members and receive exclusive founding member perks.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="bg-cream/10 backdrop-blur-sm p-8 rounded-sm border border-gold/20"
              >
                <div className="grid gap-4">
                  <Input
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-cream/10 border-gold/30 text-cream placeholder:text-cream/50 focus:border-gold"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-cream/10 border-gold/30 text-cream placeholder:text-cream/50 focus:border-gold"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone (Optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-cream/10 border-gold/30 text-cream placeholder:text-cream/50 focus:border-gold"
                  />
                  <Button type="submit" variant="gold" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Joining..." : "Join the Bevvy Club Waitlist"}
                  </Button>
                </div>
                <p className="text-cream/50 text-xs mt-4">
                  By signing up, you agree to receive updates about the Bevvy Club and Chateau Bevvy Winery.
                </p>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Lifestyle Gallery */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-wine-dark">
                The Club Experience
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-square bg-wine/10 rounded-sm overflow-hidden"
                >
                  <img
                    src="/placeholder.svg"
                    alt="Wine club experience"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default WineClub;
