import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomepageAbout from "@/components/HomepageAbout";
import HomepageWines from "@/components/HomepageWines";
import HomepageVisit from "@/components/HomepageVisit";
import HomepageEvents from "@/components/HomepageEvents";
import HomepageClub from "@/components/HomepageClub";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Chateau Bevvy Winery | Jefferson County's First Urban Winery – Bessemer, Alabama</title>
        <meta
          name="description"
          content="Jefferson County's first urban winery in historic downtown Bessemer, Alabama. Experience fine wine in a warm, community-focused tasting room. Black-owned, veteran-owned."
        />
        <meta property="og:title" content="Chateau Bevvy Winery – Bessemer, Alabama" />
        <meta
          property="og:description"
          content="A historic Bessemer landmark reimagined as a warm, intimate wine experience. Plan your visit today."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://chateaubevvy.com" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        <HeroSection />
        
        <SectionDivider variant="gold" className="bg-cream" />
        
        <HomepageAbout />
        
        <SectionDivider variant="light" className="bg-wine-burgundy" />
        
        <HomepageWines />
        
        <SectionDivider variant="gold" className="bg-cream" />
        
        <HomepageVisit />
        
        <SectionDivider variant="wine" className="bg-secondary" />
        
        <HomepageEvents />
        
        <SectionDivider variant="gold" className="bg-cream" />
        
        <HomepageClub />
        
        <SectionDivider variant="light" className="bg-wine-burgundy" />
        
        <WaitlistForm />
        <Footer />
      </main>
    </>
  );
};

export default Index;
