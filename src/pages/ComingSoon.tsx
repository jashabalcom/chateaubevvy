import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import AnticipationSection from "@/components/AnticipationSection";
import TimelineSection from "@/components/TimelineSection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const ComingSoon = () => {
  return (
    <>
      <Helmet>
        <title>Chateau Bevvy Winery | Coming Soon – Jefferson County's First Urban Winery</title>
        <meta
          name="description"
          content="Jefferson County's first urban winery is coming to historic downtown Bessemer, Alabama. Join our waitlist for exclusive updates and early access."
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

export default ComingSoon;
