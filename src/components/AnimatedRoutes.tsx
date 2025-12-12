import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import ComingSoon from "../pages/ComingSoon";
import Index from "../pages/Index";
import OurStory from "../pages/OurStory";
import Wines from "../pages/Wines";
import Visit from "../pages/Visit";
import Events from "../pages/Events";
import WineClub from "../pages/WineClub";
import Contact from "../pages/Contact";
import GenerateBottles from "../pages/GenerateBottles";
import NotFound from "../pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <ComingSoon />
            </PageTransition>
          }
        />
        <Route
          path="/home"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/our-story"
          element={
            <PageTransition>
              <OurStory />
            </PageTransition>
          }
        />
        <Route
          path="/wines"
          element={
            <PageTransition>
              <Wines />
            </PageTransition>
          }
        />
        <Route
          path="/visit"
          element={
            <PageTransition>
              <Visit />
            </PageTransition>
          }
        />
        <Route
          path="/events"
          element={
            <PageTransition>
              <Events />
            </PageTransition>
          }
        />
        <Route
          path="/wine-club"
          element={
            <PageTransition>
              <WineClub />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/admin/generate-bottles"
          element={
            <PageTransition>
              <GenerateBottles />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
