import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Lightbulb, Quote } from "lucide-react";

const DidYouKnow = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  // Placeholder quotes - will be replaced with dynamic content from admin panel
  const quotes = [
    {
      id: 1,
      text: "The first website ever created is still online today. It was created by Tim Berners-Lee in 1990 and explains what the World Wide Web is.",
      category: "Web History",
      icon: "💻"
    },
    {
      id: 2,
      text: "The human brain processes visual information 60,000 times faster than text, which is why good design is crucial for user engagement.",
      category: "Design Psychology",
      icon: "🧠"
    },
    {
      id: 3,
      text: "Social media users spend an average of 2.5 hours per day on social platforms, making it a powerful marketing channel.",
      category: "Social Media",
      icon: "📱"
    },
    {
      id: 4,
      text: "Content marketing generates 3x more leads than traditional marketing while costing 62% less.",
      category: "Content Marketing",
      icon: "✍️"
    },
    {
      id: 5,
      text: "Mobile devices account for over 50% of global website traffic, emphasizing the importance of responsive design.",
      category: "Mobile Trends",
      icon: "📲"
    }
  ];

  // Auto-advance quotes every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="py-24 gradient-bg-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 gradient-bg-accent rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 gradient-bg rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Lightbulb className="h-8 w-8 text-brand-teal animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Did You Know?</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover fascinating facts about the digital world. Learn something new 
            about web development, design, marketing, and technology.
          </p>
        </div>

        {/* Quote Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-glow border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="h-20 w-20 text-primary" />
              </div>

              {/* Category Badge */}
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center space-x-2 gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">
                  <span className="text-lg">{quotes[currentQuote].icon}</span>
                  <span>{quotes[currentQuote].category}</span>
                </span>
              </div>

              {/* Quote Text */}
              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium">
                  "{quotes[currentQuote].text}"
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevQuote}
                  className="hover:bg-primary/10"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                {/* Quote Indicators */}
                <div className="flex space-x-2">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuote(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentQuote 
                          ? "bg-primary scale-125" 
                          : "bg-border hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextQuote}
                  className="hover:bg-primary/10"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fun Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center glass-effect rounded-lg p-6">
            <div className="text-3xl mb-2">🌐</div>
            <div className="text-2xl font-bold gradient-text mb-1">4.9B</div>
            <div className="text-sm text-muted-foreground">Internet Users Worldwide</div>
          </div>
          <div className="text-center glass-effect rounded-lg p-6">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-2xl font-bold gradient-text mb-1">16.7M</div>
            <div className="text-sm text-muted-foreground">Colors Human Eye Can See</div>
          </div>
          <div className="text-center glass-effect rounded-lg p-6">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold gradient-text mb-1">0.05s</div>
            <div className="text-sm text-muted-foreground">Time to Form First Impression</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DidYouKnow;