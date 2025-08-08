import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, Globe } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "LIWA WATSON",
      position: "Founder | Software Engineer | Graphic Designer | Writer",
      bio: "A dedicated and skilled Software Engineer and Graphic Designer with expertise in software development, computer maintenance, networking, and creative design. Through industrial attachments, work experience and freelance work, I have honed my technical and creative skills, including full-stack web development, system configuration, and visual communication.",
      image: "/Liwa.jpg",
      skills: ["React", "Node.js", "Graphic Design", "Content Writing"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "watsonliwa@yahoo.com",
        github: "https://github.com/WatsonWaswa"
      }
    },
    {
      id: 2,
      name: "SARAH JOSHUA",
      position: "Software Engineer | Data Analyst | Social Media Manager",
      bio: "A dedicated and ambitious software engineer with expertise in front-end development, data analysis, and machine learning. Possesses hands-on experience through attachments in both the private and public sectors, contributing to impactful software solutions.",
      image: "/Akira.jpg",
      skills: ["Frontend Development", "Data Analysis", "Machine Learning", "Social Media"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarahjoshua010@gmail.com"
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Behind every great project is a passionate team of experts. Get to know the creative minds 
            who bring your vision to life with skill, dedication, and innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id} 
              className="group hover:shadow-elegant transition-all duration-500 border-0 shadow-card overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/80 to-accent/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white" asChild>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats & CTA */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Why Choose <span className="gradient-text">Our Team?</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team brings together complementary skills and fresh perspectives 
              to deliver exceptional results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>

          <div className="text-center">
            <Button className="gradient-bg shadow-elegant text-lg px-8 py-6" asChild>
              <a href={encodeURI("https://wa.me/254717629522?text=Hello%20WHEE%20DESIGNS%2C%20I%27d%20like%20to%20work%20with%20the%20team.")} target="_blank" rel="noopener noreferrer">
                Work With Our Team
                <Globe className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;