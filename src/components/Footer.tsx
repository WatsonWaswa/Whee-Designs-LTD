import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Graphic Design", href: "#services" },
      { name: "Social Media Marketing", href: "#services" },
      { name: "Content Writing", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#team" },
      { name: "Our Work", href: "#gallery" },
      { name: "Contact", href: "#contact" }
    ]
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-primary"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                                 <div className="flex flex-col items-start space-y-1">
                   <img 
                     src="/logo-homepage.png" 
                     alt="WHEE DESIGNS" 
                     className="h-8 w-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                   />
                   <h3 className="text-sm font-semibold gradient-text">WHEE DESIGNS</h3>
                 </div>
              </div>
              <p className="text-background/80 leading-relaxed mb-8 max-w-lg text-lg">
                Creating digital experiences that inspire, engage, and convert. 
                Your vision, our expertise, extraordinary results.
              </p>
              <div className="flex items-center space-x-2 text-sm text-background/60">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-primary fill-current" />
                <span>by WHEE DESIGNS</span>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-xl mb-8 text-background">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors duration-300 text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-xl mb-8 text-background">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors duration-300 text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="bg-background/20 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2022 WHEE DESIGNS. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-background/60 hover:text-background text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-background text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 gradient-bg shadow-glow rounded-full w-12 h-12 p-0 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;