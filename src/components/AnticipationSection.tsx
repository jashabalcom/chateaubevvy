import { motion } from "framer-motion";
import { Wine, Users, Calendar } from "lucide-react";

const experiences = [
  {
    icon: Wine,
    title: "Tasting Room",
    description:
      "Intimate wine flights in a warm, vintage-inspired space with exposed brick and cozy seating.",
  },
  {
    icon: Users,
    title: "Signature Wines",
    description:
      "Carefully crafted wines sourced from premier partners, fermented and bottled in-house.",
  },
  {
    icon: Calendar,
    title: "Private Gatherings",
    description:
      "Book our historic space for birthdays, showers, and intimate celebrations.",
  },
];

const AnticipationSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute inset-0 bg-texture-noise opacity-[0.02]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm uppercase tracking-widest text-gold-muted">
            What Awaits
          </span>
          <h2 className="font-display text-4xl font-medium text-foreground md:text-5xl">
            Intimate Tastings. Warm Company.{" "}
            <span className="italic text-wine-merlot">Beautiful Wine.</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-elevated"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-wine-merlot/5 transition-all duration-500 group-hover:scale-150" />

              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-wine-merlot/10 text-wine-merlot transition-colors duration-300 group-hover:bg-wine-merlot group-hover:text-cream">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 font-display text-2xl font-medium text-foreground">
                  {item.title}
                </h3>

                <p className="font-body text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnticipationSection;
