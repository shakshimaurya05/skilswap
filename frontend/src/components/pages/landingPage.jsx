import Navbar from "../layout/navbar";
import Hero from "../landing/HeroSection";
import HowItWorks from "../landing/HowItWorks";
import Footer from "../layout/footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Footer />
    </>
  );
}