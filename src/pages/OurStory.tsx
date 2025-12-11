import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import historicBuildingImage from "@/assets/historic-building.jpg";
import tastingRoomImage from "@/assets/tasting-room-interior.jpg";

const timelineEvents = [
  { year: "1910", title: "Building Constructed", description: "The historic building opens as a saloon on First Avenue North in downtown Bessemer." },
  { year: "1930s", title: "Drugstore Era", description: "The space transforms into a beloved neighborhood drugstore serving the community." },
  { year: "2020s", title: "Discovery", description: "Army veteran La Fran Marks discovers the abandoned gem and envisions its rebirth." },
  { year: "2024", title: "Restoration Begins", description: "Careful restoration work begins, preserving original brick, wood, and character." },
  { year: "2026", title: "Chateau Bevvy Opens", description: "Jefferson County's first urban winery welcomes guests to a new chapter." },
];

const OurStory = () => {
  return (
    <>
      <Helmet>
        <title>Our Story | Chateau Bevvy Winery – Bessemer, Alabama</title>
        <meta
          name="description"
          content="Discover the story behind Jefferson County's first urban winery. A 1910 historic building reimagined by Army veteran La Fran Marks."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-brand-black">
            <img src={historicBuildingImage} alt="Historic building" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/50 via-transparent to-brand-black" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="font-serif text-5xl md:text-7xl text-brand-cream mb-4">Our Story</h1>
            <p className="text-brand-cream/70 text-lg md:text-xl max-w-2xl mx-auto">
              Where history meets hospitality
            </p>
          </motion.div>
        </section>

        {/* The Building */}
        <section className="py-24 bg-brand-cream">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-brand-gold uppercase tracking-widest text-sm">The Building</span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-black mt-4 mb-6">
                  A 1910 Landmark Reborn
                </h2>
                <p className="text-brand-black/80 leading-relaxed mb-6">
                  Standing proudly on First Avenue North in downtown Bessemer, our building has witnessed 
                  over a century of Alabama history. Originally constructed in 1910 as a neighborhood saloon, 
                  it later served as a beloved drugstore, its walls absorbing the stories of generations.
                </p>
                <p className="text-brand-black/80 leading-relaxed">
                  Today, exposed brick walls tell tales of the past while vintage furniture—lovingly collected 
                  from thrift stores and estate sales—creates an atmosphere that feels like stepping into a 
                  cherished family home. Every crack in the original wood floors, every patina on the brass 
                  fixtures, adds to the authentic character we've preserved.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-brand-brown/10 rounded-sm overflow-hidden">
                  <img
                    src={historicBuildingImage}
                    alt="Historic interior of Chateau Bevvy with exposed brick"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-gold/10 rounded-sm -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Founder */}
        <section className="py-24 bg-brand-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-brand-gold to-transparent" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="aspect-[3/4] bg-brand-cream/10 rounded-sm overflow-hidden">
                  <img
                    src={tastingRoomImage}
                    alt="La Fran Marks, founder of Chateau Bevvy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <span className="text-brand-gold uppercase tracking-widest text-sm">The Founder</span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-cream mt-4 mb-6">
                  La Fran Marks
                </h2>
                <p className="text-brand-cream/80 leading-relaxed mb-6">
                  As an Army veteran, La Fran traveled the world—from the rolling vineyards of Tuscany 
                  to the sun-drenched hills of Greece, from the elegant wine bars of Paris to the 
                  cozy taverns of Germany. Each destination deepened his appreciation for wine culture 
                  and the way it brings people together.
                </p>
                <p className="text-brand-cream/80 leading-relaxed mb-6">
                  Returning home to Alabama, he dreamed of creating a space that captured that magic—
                  a place where fine wine and warm hospitality intersect, where every guest feels like family.
                </p>
                <p className="text-brand-cream/80 leading-relaxed">
                  When he discovered the abandoned 1910 building in Bessemer, he knew he'd found his home. 
                  Chateau Bevvy was born from that moment of recognition.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-brand-cream">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-brand-gold uppercase tracking-widest text-sm">Our Journey</span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-black mt-4">
                A Century of Stories
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-brand-gold/30 hidden md:block" />

              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <span className="font-serif text-3xl text-brand-gold">{event.year}</span>
                      <h3 className="font-serif text-2xl text-brand-black mt-2">{event.title}</h3>
                      <p className="text-brand-black/70 mt-2">{event.description}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-brand-gold ring-4 ring-brand-gold/20 z-10" />
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24 bg-brand-black">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-gold uppercase tracking-widest text-sm">Our Vision</span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-cream mt-4 mb-8">
                "Feels Like Home, Tastes Like the World"
              </h2>
              <p className="text-brand-cream/80 text-lg leading-relaxed">
                Chateau Bevvy isn't a nightclub or a bar. It's a cozy, community-focused tasting room 
                where the wine is excellent and the company is even better. We source quality juice 
                from East Coast and international partners, then handle fermentation, aging, and 
                bottling right here in Bessemer. Every bottle tells a story of craft, community, 
                and connection.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default OurStory;