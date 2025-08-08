import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobileMenuOpen) return;
      const target = event.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-elegant" : "bg-transparent"
    }`} style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo-nav.png" 
              alt="WHEE DESIGNS" 
              className="h-10 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="gradient-bg shadow-elegant" asChild>
              <a href={encodeURI("https://wa.me/254717629522?text=Hello%20WHEE%20DESIGNS%2C%20I%27m%20interested%20in%20your%20services.")}
                 target="_blank" rel="noopener noreferrer">
                Book Service
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 z-[9998] border-t border-border shadow-elegant transition-all duration-500 ease-in-out
            ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto bg-background/95 backdrop-blur-md' : '-translate-y-8 opacity-0 pointer-events-none'}
          `}
          ref={menuRef}
          style={{
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          }}
        >
          <div className="flex flex-col space-y-3 p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="gradient-bg shadow-elegant w-full mt-3" asChild>
              <a href={encodeURI("https://wa.me/254717629522?text=Hello%20WHEE%20DESIGNS%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services.")}
                 target="_blank" rel="noopener noreferrer">
                Book Service
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;