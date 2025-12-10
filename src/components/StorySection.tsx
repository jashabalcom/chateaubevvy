import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-32">
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
          <span className="mb-4 inline-block text-sm uppercase tracking-widest text-gold-muted">
            A New Chapter for Downtown Bessemer
          </span>
          
          <h2 className="mb-8 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
            Crafted with Heart,{" "}
            <span className="italic text-wine-merlot">Inspired by Travel</span>
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
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

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-border pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <span className="block font-display text-4xl font-medium text-wine-merlot">
                1910
              </span>
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Historic Building
              </span>
            </motion.div>

            <div className="hidden h-12 w-px bg-border sm:block" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <span className="block font-display text-4xl font-medium text-wine-merlot">
                First
              </span>
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                In Jefferson County
              </span>
            </motion.div>

            <div className="hidden h-12 w-px bg-border sm:block" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <span className="block font-display text-4xl font-medium text-wine-merlot">
                Veteran
              </span>
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
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
