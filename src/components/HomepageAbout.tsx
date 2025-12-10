import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomepageAbout = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-wine/10 rounded-sm overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Inside Chateau Bevvy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-sm -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-wine-dark mt-4 mb-6">
              A 1910 Landmark Reimagined
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Standing on First Avenue North in downtown Bessemer, our building has witnessed 
              over a century of Alabama history. Originally a saloon, then a beloved drugstore, 
              its exposed brick walls and original wood floors now welcome a new chapter.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-8">
              Founded by Army veteran La Fran Marks, Chateau Bevvy brings together worldly 
              wine sensibilities shaped by travels through Italy, France, and Greece with 
              the warm hospitality of the Deep South. This isn't just a tasting room—it's 
              a homecoming.
            </p>

            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <span className="font-serif text-4xl text-gold">1910</span>
                <p className="text-charcoal/60 text-sm mt-1">Historic Building</p>
              </div>
              <div>
                <span className="font-serif text-4xl text-gold">1st</span>
                <p className="text-charcoal/60 text-sm mt-1">Winery in Jefferson County</p>
              </div>
              <div>
                <span className="font-serif text-4xl text-gold">♥</span>
                <p className="text-charcoal/60 text-sm mt-1">Veteran Owned</p>
              </div>
            </div>

            <Button variant="wine" size="lg" asChild>
              <Link to="/our-story">Read Our Story</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomepageAbout;
