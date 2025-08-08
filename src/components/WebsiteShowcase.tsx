import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Globe } from "lucide-react";

const WebsiteShowcase = () => {
  const [currentWebsite, setCurrentWebsite] = useState(0);

  // Real website portfolio items
  const websites = [
    {
      id: 1,
      title: "Hosale Real Estate",
      description: "A modern real estate website with property listings, search functionality, and agent profiles. Features include property evaluation, agent matching, and seamless property browsing experience.",
      image: "/hosale.png",
      url: "https://watsonwaswa.github.io/Hosale-RealEstate-Website/",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "My-Tibabu Hospital Management",
      description: "A comprehensive hospital management system with patient dashboard, doctor dashboard, and admin dashboard. Built with MERN stack for efficient healthcare management.",
      image: "/My-Tibabu.png",
      url: "https://my-tibabu-health-management-system.vercel.app/",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    }
  ];

  const nextWebsite = () => {
    setCurrentWebsite((prev) => (prev + 1) % websites.length);
  };

  const prevWebsite = () => {
    setCurrentWebsite((prev) => (prev - 1 + websites.length) % websites.length);
  };

  return (
    <section id="websites" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Websites</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the websites we've crafted for our clients. Each project represents 
            our commitment to modern design, functionality, and user experience.
          </p>
        </div>

        {/* Main Website Showcase */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-glow border-0">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-video overflow-hidden bg-gradient-subtle bg-gray-100">
                <img
                  src={websites[currentWebsite].image}
                  alt={websites[currentWebsite].title}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-elegant"
                onClick={prevWebsite}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-elegant"
                onClick={nextWebsite}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Visit Website Button */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white shadow-elegant"
                asChild
              >
                <a href={websites[currentWebsite].url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Website Info */}
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{websites[currentWebsite].title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {websites[currentWebsite].description}
                  </p>
                  
                  {/* Technologies Used */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {websites[currentWebsite].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Button className="gap-2 shadow-elegant hover:shadow-glow transition-all duration-300" asChild>
                    <a href={websites[currentWebsite].url} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-5 w-5" />
                      Visit Website
                    </a>
                  </Button>
                  <Button variant="outline" className="hover:bg-primary/5">
                    View Case Study
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
          {websites.map((website, index) => (
            <button
              key={website.id}
              onClick={() => setCurrentWebsite(index)}
              className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentWebsite 
                  ? "border-primary shadow-elegant scale-110" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <img
                src={website.image}
                alt={website.title}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

        {/* Website Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-muted-foreground">Websites Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">99%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteShowcase;