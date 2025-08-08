import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Share2, PenTool } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies. From simple landing pages to complex web applications.",
      features: ["React & Next.js", "Mobile-First Design", "SEO Optimized", "Fast Performance"],
      gradient: "from-brand-blue to-brand-teal"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Eye-catching visual designs that tell your brand's story. From logos to complete brand identities.",
      features: ["Brand Identity", "Print Design", "Digital Graphics", "UI/UX Design"],
      gradient: "from-brand-teal to-brand-mint"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategic social media campaigns that engage your audience and grow your brand presence online.",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics & Insights"],
      gradient: "from-brand-mint to-brand-accent"
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "Compelling copy that converts. From blog posts to marketing materials that resonate with your audience.",
      features: ["Blog Writing", "Website Copy", "Marketing Content", "SEO Content"],
      gradient: "from-brand-accent to-brand-blue"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in the modern world. 
            Each service is crafted with precision and creativity.
          </p>
        </div>

                {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className={`group hover:shadow-elegant transition-all duration-500 border-0 shadow-card overflow-hidden ${
                  index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'
                }`}
              >
                <CardHeader className="relative">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 w-full"
                  >
                    {service.title === "Web Development" && "Development"}
                    {service.title === "Graphic Design" && "Design"}
                    {service.title === "Social Media Management" && "Socials"}
                    {service.title === "Content Writing" && "Writing"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 glass-effect rounded-full px-8 py-4">
            <span className="text-lg font-medium">Ready to start your project?</span>
            <Button className="gradient-bg shadow-elegant" asChild>
              <a
                href={`https://wa.me/254717629522?text=${encodeURIComponent(
                  "Welcome To whee Designs. How may 'Whee' be of service to you?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Quote
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;