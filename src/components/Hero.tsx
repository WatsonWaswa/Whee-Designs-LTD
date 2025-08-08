import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import classicPcBackground from "@/assets/classic-pc-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg-hero relative overflow-hidden">
      {/* Classic PC background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${classicPcBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/60"></div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-bg-secondary rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-bg-accent rounded-full blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-4 mt-24">
            <img 
              src="/logo-homepage.png" 
              alt="WHEE DESIGNS Logo" 
              className="h-16 md:h-24 w-auto transition-all duration-300"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">WHEE</span>{" "}
            <span className="text-foreground">DESIGNS</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into stunning digital experiences through innovative 
            <span className="gradient-text font-semibold"> web development</span>, 
            <span className="gradient-text font-semibold"> graphic design</span>, 
            <span className="gradient-text font-semibold"> social media management</span>, and 
            <span className="gradient-text font-semibold"> content writing</span>.
          </p>

          {/* Service highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
            {[
              "Web Development",
              "Graphic Design", 
              "Social Media Management",
              "Content Writing"
            ].map((service, index) => (
              <div key={service} className="glass-effect rounded-lg p-3 text-sm font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                {service}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="gradient-bg shadow-glow hover:shadow-elegant transition-all duration-300 text-lg px-6 py-4"
              asChild
            >
              <a href="#gallery">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 text-lg px-6 py-4"
              asChild
            >
              <a href={encodeURI("https://wa.me/254717629522?text=Hello%20WHEE%20DESIGNS%2C%20I%20would%20like%20to%20book%20a%20service.")} target="_blank" rel="noopener noreferrer">
                Book Service
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">50+</div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">100%</div>
              <div className="text-xs text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-xs text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;