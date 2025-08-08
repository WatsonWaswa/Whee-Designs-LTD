import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle, Send, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formspree will handle the submission via the action attribute
    // We just need to show success message and reset form
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "watsonwaswa@gmail.com",
      link: "mailto:watsonwaswa@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+254 717629522",
      link: "tel:+254717629522"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Chat with us on WhatsApp",
      link: "https://wa.me/254717629522"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Facebook, href: "#", name: "Facebook" }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? We'd love to hear about your project. 
            Drop us a line and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have a project in mind or just want to say hello, 
                  we're here to help turn your ideas into reality.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="gradient-bg rounded-full p-3 flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{info.title}</h4>
                            <a 
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors duration-300"
                              target={info.title === "WhatsApp" ? "_blank" : undefined}
                              rel={info.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                            >
                              {info.content}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        asChild
                      >
                        <a href={social.href} aria-label={social.name}>
                          <IconComponent className="h-5 w-5" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-glow border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  action="https://formspree.io/f/xdkdpdld" 
                  method="POST" 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-bg shadow-elegant text-lg py-6"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="gradient-bg-hero rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              From concept to completion, we're with you every step of the way. 
              Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-bg shadow-elegant" asChild>
                <a href="https://wa.me/254717629522" target="_blank" rel="noopener noreferrer">
                  Schedule a Consultation
                </a>
              </Button>
              <Button variant="outline" className="hover:bg-primary/10" asChild>
                <a href="#gallery">
                  View Our Portfolio
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;