import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-24 md:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-texture-noise opacity-[0.02]" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mb-4 inline-block font-body text-sm uppercase tracking-widest text-brand-gold">
            A New Chapter for Downtown Bessemer
          </span>
          
          <h2 className="heading-section mb-8 text-brand-black">
            Crafted with Heart,{" "}
            <span className="text-accent text-brand-brown">Inspired by Travel</span>
          </h2>

          {/* Script Pull Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-script text-2xl md:text-3xl text-brand-gold mb-8"
          >
            "Where every glass tells a story"
          </motion.p>

          <div className="space-y-6 font-body text-lg leading-relaxed text-brand-black/70">
            <p>
              Inside a beautifully restored 1910 building—once a saloon and
              drugstore—lies Jefferson County's first urban winery. Founded by Army
              veteran La Fran Marks, Chateau Bevvy brings together the warmth of
              Southern hospitality with flavors discovered across Italy, France,
              Germany, and Greece.
            </p>
            <p>
              This isn't just a tasting room. It's a living room. A gathering place.
              A space where exposed brick meets vintage charm, where wine glasses
              clink amid laughter, and where every visitor feels like family.
            </p>
          </div>

          <div className="divider-gold-wide" />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <span className="block font-display text-4xl font-semibold text-brand-brown">
                1910
              </span>
              <span className="font-body text-sm uppercase tracking-widest text-brand-black/60">
                Historic Building
              </span>
            </motion.div>

            <div className="hidden h-12 w-px bg-brand-gray/30 sm:block" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <span className="block font-display text-4xl font-medium text-brand-brown">
                First
              </span>
              <span className="text-sm uppercase tracking-widest text-brand-black/60">
                In Jefferson County
              </span>
            </motion.div>

            <div className="hidden h-12 w-px bg-brand-gray/30 sm:block" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <span className="block font-display text-4xl font-medium text-brand-brown">
                Veteran
              </span>
              <span className="text-sm uppercase tracking-widest text-brand-black/60">
                Owned & Operated
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
