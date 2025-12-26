import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Wine, Calendar, Star, Gift, Check, Crown, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import tastingRoomImage from "@/assets/tasting-room-interior.jpg";
import eventSpaceImage from "@/assets/event-space.jpg";
import wineMerlot from "@/assets/wine-merlot.jpg";
import wineRose from "@/assets/wine-rose.jpg";
import { 
  fadeUp, 
  fadeUpSmall,
  staggerContainer, 
  staggerContainerSlow,
  cardReveal,
  heroReveal,
  lineReveal,
  iconReveal,
  scaleReveal,
  viewportOnce,
  luxuryEase
} from "@/lib/animations";

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

const membershipTiers = [
  {
    id: "explorer",
    name: "Explorer",
    icon: Wine,
    price: 49,
    frequency: "quarterly",
    bottles: 2,
    description: "Perfect for those beginning their wine journey",
    features: [
      "2 bottles per quarter",
      "10% discount on all purchases",
      "Member newsletter",
      "Access to member events",
      "Complimentary tasting for 2",
    ],
    popular: false,
  },
  {
    id: "connoisseur",
    name: "Connoisseur",
    icon: Sparkles,
    price: 89,
    frequency: "quarterly",
    bottles: 4,
    description: "Our most popular membership for wine enthusiasts",
    features: [
      "4 bottles per quarter",
      "15% discount on all purchases",
      "Member newsletter + tasting notes",
      "Priority event invitations",
      "Complimentary tasting for 4",
      "Early access to limited releases",
      "Birthday bottle gift",
    ],
    popular: true,
  },
  {
    id: "collector",
    name: "Collector",
    icon: Crown,
    price: 149,
    frequency: "quarterly",
    bottles: 6,
    description: "The ultimate experience for serious collectors",
    features: [
      "6 bottles per quarter",
      "20% discount on all purchases",
      "Exclusive collector newsletter",
      "VIP event access + guest passes",
      "Complimentary tasting for 6",
      "First access to all limited releases",
      "Birthday bottle gift",
      "Private tasting experience annually",
      "Personalized wine recommendations",
    ],
    popular: false,
  },
];

const WineClub = () => {
  const { toast } = useToast();
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTier) {
      toast({
        title: "Please select a membership tier",
        description: "Choose your preferred membership level above.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("wine_club_signups")
        .insert({
          first_name: formData.firstName.trim(),
          last_name: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          membership_tier: selectedTier,
        });

      if (error) throw error;

      const tier = membershipTiers.find((t) => t.id === selectedTier);
      toast({
        title: "Welcome to the Bevvy Club!",
        description: `You've joined as a ${tier?.name} member. We'll be in touch soon!`,
      });

      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      setSelectedTier(null);
    } catch (error) {
      console.error("Error submitting wine club form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedTierData = membershipTiers.find((t) => t.id === selectedTier);

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
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-brand-black">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: luxuryEase }}
              src={tastingRoomImage} 
              alt="Wine club experience" 
              className="absolute inset-0 w-full h-full object-cover opacity-30" 
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
            <motion.span 
              variants={fadeUp}
              className="text-brand-gold uppercase tracking-widest text-sm mb-4 block font-body"
            >
              Exclusive Membership
            </motion.span>
            <motion.h1 
              variants={heroReveal}
              className="heading-hero text-brand-cream mb-3 md:mb-4"
            >
              The Bevvy Club
            </motion.h1>
            <motion.p 
              variants={heroReveal}
              className="font-script text-xl sm:text-2xl md:text-3xl text-brand-gold"
            >
              An exclusive circle of wine lovers
            </motion.p>
          </motion.div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-brand-cream">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center mb-16"
            >
              <motion.span 
                variants={fadeUp}
                className="text-brand-gold uppercase tracking-widest text-sm font-body inline-block"
              >
                Member Benefits
              </motion.span>
              <motion.h2 
                variants={fadeUp}
                className="font-display text-4xl md:text-5xl text-brand-black mt-4"
              >
                Why Join the Club?
              </motion.h2>
              <motion.div 
                variants={lineReveal}
                className="w-16 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-6 origin-center" 
              />
            </motion.div>

            <motion.div 
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={cardReveal}
                  className="text-center group"
                >
                  <motion.div 
                    variants={iconReveal}
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 border border-brand-gold/20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(220,176,131,0.2)]"
                  >
                    <benefit.icon className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-display text-xl text-brand-black mb-2">{benefit.title}</h3>
                  <p className="text-brand-black/70 text-sm font-body">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-24 bg-brand-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-brand-gold to-transparent" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center mb-16"
            >
              <motion.span 
                variants={fadeUp}
                className="text-brand-gold uppercase tracking-widest text-sm font-body inline-block"
              >
                Membership Options
              </motion.span>
              <motion.h2 
                variants={fadeUp}
                className="font-display text-4xl md:text-5xl text-brand-cream mt-4"
              >
                Choose Your Experience
              </motion.h2>
              <motion.div 
                variants={lineReveal}
                className="w-16 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-6 origin-center" 
              />
              <motion.p 
                variants={fadeUpSmall}
                className="text-brand-cream/70 max-w-2xl mx-auto mt-6 font-body"
              >
                Select the membership tier that best fits your wine journey
              </motion.p>
            </motion.div>

            <motion.div 
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
            >
              {membershipTiers.map((tier) => (
                <motion.div
                  key={tier.id}
                  variants={cardReveal}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className={cn(
                    "relative rounded-sm overflow-hidden transition-all duration-500",
                    tier.popular
                      ? "bg-gradient-to-b from-brand-gold/20 to-brand-black/60 border-2 border-brand-gold shadow-[0_0_40px_rgba(220,176,131,0.15)] md:-mt-4 md:mb-4"
                      : "bg-brand-cream/5 border border-brand-gold/20 hover:border-brand-gold/40",
                    selectedTier === tier.id && "ring-2 ring-brand-gold ring-offset-2 ring-offset-brand-black"
                  )}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-brand-gold text-brand-black text-xs uppercase tracking-widest py-2 text-center font-body font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className={cn("p-8", tier.popular && "pt-12")}>
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4",
                        tier.popular ? "bg-brand-gold/20" : "bg-brand-gold/10"
                      )}>
                        <tier.icon className={cn(
                          "w-7 h-7",
                          tier.popular ? "text-brand-gold" : "text-brand-gold/80"
                        )} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-2xl text-brand-cream">{tier.name}</h3>
                      <p className="text-brand-cream/60 text-sm font-body mt-1">{tier.description}</p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6 pb-6 border-b border-brand-gold/20">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="font-display text-5xl text-brand-gold">${tier.price}</span>
                        <span className="text-brand-cream/60 font-body">/{tier.frequency}</span>
                      </div>
                      <p className="text-brand-cream/70 text-sm font-body mt-2">
                        {tier.bottles} bottles per shipment
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className={cn(
                            "w-5 h-5 mt-0.5 flex-shrink-0",
                            tier.popular ? "text-brand-gold" : "text-brand-gold/70"
                          )} />
                          <span className="text-brand-cream/80 text-sm font-body">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      onClick={() => handleTierSelect(tier.id)}
                      variant={tier.popular ? "gold" : "outline"}
                      size="lg"
                      className={cn(
                        "w-full",
                        !tier.popular && "border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-black"
                      )}
                    >
                      {selectedTier === tier.id ? "Selected" : "Select Plan"}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Signup Form */}
        <section id="signup-form" className="py-24 bg-brand-cream">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="text-center mb-12"
              >
                <motion.span 
                  variants={fadeUp}
                  className="text-brand-gold uppercase tracking-widest text-sm font-body inline-block"
                >
                  Join Today
                </motion.span>
                <motion.h2 
                  variants={fadeUp}
                  className="font-display text-4xl md:text-5xl text-brand-black mt-4"
                >
                  Complete Your Membership
                </motion.h2>
                <motion.div 
                  variants={lineReveal}
                  className="w-16 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-6 origin-center" 
                />
              </motion.div>

              {/* Selected Tier Display */}
              {selectedTierData && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-brown/10 border border-brand-gold/30 rounded-sm p-6 mb-8 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center">
                      <selectedTierData.icon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-display text-xl text-brand-black">{selectedTierData.name} Membership</p>
                      <p className="text-brand-black/60 text-sm font-body">
                        ${selectedTierData.price}/{selectedTierData.frequency} • {selectedTierData.bottles} bottles
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTier(null)}
                    className="text-brand-brown hover:text-brand-black text-sm font-body underline"
                  >
                    Change
                  </button>
                </motion.div>
              )}

              {!selectedTierData && (
                <motion.div 
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="bg-brand-black/5 border border-brand-gray/20 rounded-sm p-6 mb-8 text-center"
                >
                  <p className="text-brand-black/70 font-body">
                    Please select a membership tier above to continue
                  </p>
                </motion.div>
              )}

              <motion.form
                variants={fadeUpSmall}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-sm border border-brand-gray/20 shadow-lg"
              >
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-black/70 text-sm font-body mb-2">First Name *</label>
                      <Input
                        placeholder="First name"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="bg-brand-cream/30 border-brand-gray/30 text-brand-black placeholder:text-brand-black/40 focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-black/70 text-sm font-body mb-2">Last Name *</label>
                      <Input
                        placeholder="Last name"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="bg-brand-cream/30 border-brand-gray/30 text-brand-black placeholder:text-brand-black/40 focus:border-brand-gold"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-brand-black/70 text-sm font-body mb-2">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-brand-cream/30 border-brand-gray/30 text-brand-black placeholder:text-brand-black/40 focus:border-brand-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-black/70 text-sm font-body mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="(555) 555-5555"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-brand-cream/30 border-brand-gray/30 text-brand-black placeholder:text-brand-black/40 focus:border-brand-gold"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="gold" 
                    size="lg" 
                    disabled={isSubmitting || !selectedTier}
                    className="mt-4"
                  >
                    {isSubmitting ? "Processing..." : selectedTierData ? `Join as ${selectedTierData.name} Member` : "Select a Membership First"}
                  </Button>
                </div>
                <p className="text-brand-black/50 text-xs font-body mt-4 text-center">
                  By joining, you confirm you are 21+ and agree to our membership terms. 
                  Cancel anytime before your next shipment.
                </p>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Lifestyle Gallery */}
        <section className="py-24 bg-brand-black">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center mb-12"
            >
              <motion.h2 
                variants={fadeUp}
                className="font-display text-3xl md:text-4xl text-brand-cream"
              >
                The Club Experience
              </motion.h2>
              <motion.div 
                variants={lineReveal}
                className="w-16 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-6 origin-center" 
              />
            </motion.div>

            <motion.div 
              variants={staggerContainerSlow}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[tastingRoomImage, wineMerlot, eventSpaceImage, wineRose].map((image, index) => (
                <motion.div
                  key={index}
                  variants={scaleReveal}
                  className="aspect-square bg-brand-brown/10 rounded-sm overflow-hidden"
                >
                  <img
                    src={image}
                    alt="Wine club experience"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default WineClub;
