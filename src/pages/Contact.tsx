import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll respond within 24-48 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Chateau Bevvy Winery – Bessemer, Alabama</title>
        <meta
          name="description"
          content="Get in touch with Chateau Bevvy Winery. We'd love to hear from you about tastings, events, or just to say hello."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
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
            <h1 className="font-serif text-5xl md:text-7xl text-cream mb-4">Contact</h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto">
              We'd love to hear from you
            </p>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-gold uppercase tracking-widest text-sm">Get In Touch</span>
                <h2 className="font-serif text-4xl md:text-5xl text-wine-dark mt-4 mb-8">
                  Let's Connect
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-wine-dark font-medium mb-1">Location</h3>
                      <p className="text-charcoal/70">
                        First Avenue North<br />
                        Downtown Bessemer, AL 35020
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-wine-dark font-medium mb-1">Phone</h3>
                      <p className="text-charcoal/70">(205) 555-WINE</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-wine-dark font-medium mb-1">Email</h3>
                      <p className="text-charcoal/70">hello@chateaubevvy.com</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-charcoal/10">
                    <h3 className="text-wine-dark font-medium mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center text-wine hover:bg-wine hover:text-cream transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center text-wine hover:bg-wine hover:text-cream transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-12 aspect-video bg-charcoal/10 rounded-sm overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.4559565065897!2d-86.95431908479767!3d33.40118548078373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888911df5885c3eb%3A0x25507409eaba54c!2sBessemer%2C%20AL!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chateau Bevvy Location"
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-sm shadow-lg h-fit"
              >
                <h3 className="font-serif text-2xl text-wine-dark mb-6">Send a Message</h3>

                <div className="grid gap-6">
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

                  <div>
                    <label className="text-charcoal text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="border-charcoal/20 focus:border-gold"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="text-charcoal text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-charcoal/20 focus:border-gold resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <Button type="submit" variant="wine" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
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

export default Contact;
