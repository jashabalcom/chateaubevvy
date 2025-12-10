import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import AnticipationSection from "@/components/AnticipationSection";
import TimelineSection from "@/components/TimelineSection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Chateau Bevvy Winery – Coming Soon | Bessemer, Alabama</title>
        <meta
          name="description"
          content="Join the waitlist for Jefferson County's first urban winery. Opening soon in historic downtown Bessemer, Alabama. Black-owned, veteran-owned."
        />
        <meta property="og:title" content="Chateau Bevvy Winery – Coming Soon" />
        <meta
          property="og:description"
          content="A historic Bessemer landmark reimagined as a warm, intimate wine experience. Join the waitlist today."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://chateaubevvy.com" />
      </Helmet>

      <main className="min-h-screen">
        <HeroSection />
        <StorySection />
        <AnticipationSection />
        <TimelineSection />
        <WaitlistForm />
        <Footer />
      </main>
    </>
  );
};

export default Index;
