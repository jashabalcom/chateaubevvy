import { motion } from "framer-motion";

const timelineSteps = [
  { label: "Construction & Restoration", status: "complete" },
  { label: "Barrel Room Prep", status: "current" },
  { label: "Soft Opening Nights", status: "upcoming" },
  { label: "Grand Opening", status: "upcoming" },
];

const TimelineSection = () => {
  return (
    <section className="relative overflow-hidden bg-brand-brown py-16 md:py-20">
      <div className="absolute inset-0 bg-texture-noise opacity-[0.03]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm uppercase tracking-widest text-brand-gold">
            Our Journey
          </span>
          <h2 className="font-display text-3xl font-medium text-brand-cream md:text-4xl">
            The Road to Opening
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-8 hidden h-0.5 w-[calc(100%-120px)] -translate-x-1/2 bg-brand-cream/20 md:block" />

          <div className="grid gap-6 md:grid-cols-4 md:gap-4">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    step.status === "complete"
                      ? "border-brand-gold bg-brand-gold text-brand-black"
                      : step.status === "current"
                        ? "border-brand-gold bg-brand-brown text-brand-gold"
                        : "border-brand-cream/30 bg-brand-brown text-brand-cream/50"
                  }`}
                >
                  {step.status === "complete" ? (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span className="font-display text-lg font-medium">
                      {index + 1}
                    </span>
                  )}
                </div>

                <span
                  className={`font-display text-sm font-medium md:text-base ${
                    step.status === "upcoming" ? "text-brand-cream/60" : "text-brand-cream"
                  }`}
                >
                  {step.label}
                </span>

                {step.status === "current" && (
                  <span className="mt-2 inline-block rounded-full bg-brand-gold/20 px-3 py-1 text-xs uppercase tracking-wider text-brand-gold">
                    In Progress
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
