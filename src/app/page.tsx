import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import LiveCounter from "../components/LiveCounter";
import Testimonials from "../components/Testimonials";
import DemoVideo from "../components/DemoVideo";
import HowItWorks from "../components/HowItWorks";
import UserRoles from "../components/UserRoles";
import PerformanceMetrics from "../components/PerformanceMetrics";
import TechBadges from "../components/TechBadges";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import BackToTop from "../components/BackToTop";
import LoadingScreen from "../components/LoadingScreen";
import StatusBadge from "../components/StatusBadge";
import DeveloperBadge from "../components/DeveloperBadge";

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <LiveCounter />
      <Testimonials />
      <DemoVideo />
      <HowItWorks />
      <UserRoles />
      <PerformanceMetrics />
      <TechBadges />
      <FAQ />
      <Contact />
      <Footer />
      <CookieBanner />
      <BackToTop />
      <StatusBadge />
      <DeveloperBadge />
    </main>
  );
}