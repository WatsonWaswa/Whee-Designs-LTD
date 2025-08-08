import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import Team from "@/components/Team";
import DidYouKnow from "@/components/DidYouKnow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <WebsiteShowcase />
      <Team />
      <DidYouKnow />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
