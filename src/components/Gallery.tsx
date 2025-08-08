import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Real graphic design gallery items from GD folder
  const galleryItems = [
    {
      id: 1,
      title: "Asal Analytics Logo",
      description: "Professional logo design for Asal Analytics company",
      image: "/GD/ASAL ANALYTICA LOGO.png",
      category: "Logo Design"
    },
    {
      id: 2,
      title: "Dic Dic Agrocare - Women's Day",
      description: "Special promotional design for Women's Day celebration",
      image: "/GD/DIC DIC AGROCARE - WOMENS DAY.png",
      category: "Social Media"
    },
    {
      id: 3,
      title: "Director Mulama - Labor Day Wishes",
      description: "Labor Day greeting design for Director Mulama",
      image: "/GD/DIRECTOR MULAMA - LABOR DAY WISHES.png",
      category: "Greeting Cards"
    },
    {
      id: 4,
      title: "Imarisha Microfinance Logo",
      description: "Corporate logo design for Imarisha Microfinance",
      image: "/GD/IMARISHA MICROFINANCE LOGO.png",
      category: "Logo Design"
    },
    {
      id: 5,
      title: "Nova Scotia Tourism Advert",
      description: "Tourism advertisement design for Nova Scotia",
      image: "/GD/Nova-scotia- Tourism advert.png",
      category: "Advertising"
    },
    {
      id: 6,
      title: "Traditional Wedding Poster",
      description: "Beautiful traditional wedding poster design",
      image: "/GD/TRADITIONAL WEDDING POSTER.png",
      category: "Event Design"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-24 gradient-bg-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our latest design work and creative projects. Each piece tells a unique story 
            and showcases our commitment to excellence.
          </p>
        </div>

        {/* Main Gallery Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-glow border-0">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={galleryItems[currentImage].image}
                  alt={galleryItems[currentImage].title}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white shadow-elegant"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white shadow-elegant"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="gradient-bg text-white px-3 py-1 rounded-full text-sm font-medium">
                  {galleryItems[currentImage].category}
                </span>
              </div>

              {/* View Button */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white shadow-elegant"
              >
                <Eye className="h-5 w-5" />
              </Button>
            </div>

            {/* Image Info */}
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{galleryItems[currentImage].title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {galleryItems[currentImage].description}
                  </p>
                </div>
                <Button variant="outline" className="hover:bg-primary/10">
                  View Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thumbnail Navigation */}
        <div className="relative -mx-4 px-4">
          <div
            className="flex justify-start md:justify-center gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentImage(index)}
                className={`snap-start flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImage
                    ? 'border-primary shadow-elegant scale-110'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">200+</div>
            <div className="text-muted-foreground">Designs Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;