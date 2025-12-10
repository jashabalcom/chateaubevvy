import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Welcome to the Bevvy family!", {
      description: "We'll keep you updated on our grand opening.",
    });

    setFormData({ name: "", email: "", phone: "", interest: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="waitlist" className="relative overflow-hidden bg-charcoal py-24 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-texture-noise opacity-[0.02]" />
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-wine-merlot/20 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />

      <div className="container relative z-10 mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="mb-4 inline-block text-sm uppercase tracking-widest text-gold">
            Be The First To Know
          </span>
          <h2 className="mb-4 font-display text-4xl font-medium text-cream md:text-5xl">
            Join the Bevvy List
          </h2>
          <p className="mb-10 font-body text-lg text-cream/70">
            Sign up to receive exclusive updates, early access to events, and
            invitations to our grand opening celebration.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="group relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full rounded-lg border border-cream/20 bg-cream/5 px-4 pb-3 pt-6 font-body text-cream outline-none transition-all duration-300 placeholder:text-transparent focus:border-gold focus:bg-cream/10 focus:ring-1 focus:ring-gold/50"
              placeholder="Your name"
            />
            <label
              htmlFor="name"
              className="pointer-events-none absolute left-4 top-4 origin-left font-body text-cream/50 transition-all duration-200 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-75"
            >
              Your Name
            </label>
          </div>

          <div className="group relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full rounded-lg border border-cream/20 bg-cream/5 px-4 pb-3 pt-6 font-body text-cream outline-none transition-all duration-300 placeholder:text-transparent focus:border-gold focus:bg-cream/10 focus:ring-1 focus:ring-gold/50"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute left-4 top-4 origin-left font-body text-cream/50 transition-all duration-200 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-75"
            >
              Email Address
            </label>
          </div>

          <div className="group relative">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="peer w-full rounded-lg border border-cream/20 bg-cream/5 px-4 pb-3 pt-6 font-body text-cream outline-none transition-all duration-300 placeholder:text-transparent focus:border-gold focus:bg-cream/10 focus:ring-1 focus:ring-gold/50"
              placeholder="Phone"
            />
            <label
              htmlFor="phone"
              className="pointer-events-none absolute left-4 top-4 origin-left font-body text-cream/50 transition-all duration-200 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-75"
            >
              Phone (Optional)
            </label>
          </div>

          <div className="group relative">
            <select
              name="interest"
              id="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-cream/20 bg-cream/5 px-4 py-4 font-body text-cream outline-none transition-all duration-300 focus:border-gold focus:bg-cream/10 focus:ring-1 focus:ring-gold/50"
            >
              <option value="" className="bg-charcoal">
                I'm interested in...
              </option>
              <option value="tastings" className="bg-charcoal">
                Wine Tastings
              </option>
              <option value="events" className="bg-charcoal">
                Private Events
              </option>
              <option value="club" className="bg-charcoal">
                Wine Club Membership
              </option>
              <option value="all" className="bg-charcoal">
                Everything!
              </option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <svg
                className="h-4 w-4 text-cream/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <Button
            type="submit"
            variant="gold"
            size="xl"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining..." : "Join the Bevvy List"}
          </Button>

          <p className="text-center text-sm text-cream/40">
            We'll only send meaningful updates. No spam ever.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default WaitlistForm;
