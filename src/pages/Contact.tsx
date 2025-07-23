import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  User
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactMethod: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      contactMethod: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@lionhomes.com", "sales@lionhomes.com"],
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["1234 Luxury Avenue", "Beverly Hills, CA 90210"],
      description: "Visit our beautiful showroom"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9:00 AM - 7:00 PM", "Sat-Sun: 10:00 AM - 5:00 PM"],
      description: "We're here when you need us"
    }
  ];

  const services = [
    "Property Buying",
    "Property Selling", 
    "Investment Consultation",
    "Property Management",
    "Market Analysis",
    "Luxury Properties",
    "Other"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lion-light to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-lion-navy mb-6">Contact Us</h1>
          <p className="text-xl text-lion-gray leading-relaxed">
            Ready to start your real estate journey? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-card hover:shadow-luxury transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-lion-blue to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-lion-navy">{info.title}</CardTitle>
                    <CardDescription className="text-lion-gray">{info.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-lion-navy font-medium">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-lion-navy mb-4">Send us a Message</h2>
                <p className="text-lion-gray">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-lion-navy font-medium">
                          Full Name *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lion-gray w-4 h-4" />
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="pl-10"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-lion-navy font-medium">
                          Email Address *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lion-gray w-4 h-4" />
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="pl-10"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-lion-navy font-medium">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lion-gray w-4 h-4" />
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="pl-10"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-lion-navy font-medium">
                          Service Interest
                        </Label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactMethod" className="text-lion-navy font-medium">
                        Preferred Contact Method
                      </Label>
                      <Select value={formData.contactMethod} onValueChange={(value) => handleInputChange("contactMethod", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How would you like us to contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="text">Text Message</SelectItem>
                          <SelectItem value="any">Any Method</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-lion-navy font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your real estate needs..."
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-lion-blue to-accent hover:from-accent hover:to-lion-blue text-white font-semibold py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-lion-navy mb-4">Visit Our Office</h2>
                <p className="text-lion-gray mb-6">
                  Stop by our beautiful showroom in the heart of Beverly Hills to meet our team and explore our luxury property portfolio.
                </p>
              </div>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-card">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-lion-light to-lion-gray rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-lion-blue mx-auto mb-4" />
                      <p className="text-lion-navy font-semibold">Interactive Map</p>
                      <p className="text-lion-gray text-sm">1234 Luxury Avenue, Beverly Hills, CA 90210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-0 shadow-card hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-10 h-10 text-lion-blue mx-auto mb-3" />
                    <h3 className="font-semibold text-lion-navy mb-2">Schedule a Meeting</h3>
                    <p className="text-sm text-lion-gray mb-4">Book a personalized consultation</p>
                    <Button variant="outline" className="border-lion-blue text-lion-blue hover:bg-lion-blue hover:text-white">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <MessageSquare className="w-10 h-10 text-lion-blue mx-auto mb-3" />
                    <h3 className="font-semibold text-lion-navy mb-2">Live Chat</h3>
                    <p className="text-sm text-lion-gray mb-4">Get instant answers to your questions</p>
                    <Button variant="outline" className="border-lion-blue text-lion-blue hover:bg-lion-blue hover:text-white">
                      Start Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-gradient-to-r from-lion-navy to-lion-navy/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Urgent Assistance?</h2>
          <p className="text-white/90 mb-6">
            For time-sensitive matters or emergencies, call our 24/7 hotline
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-lion-blue to-accent hover:from-accent hover:to-lion-blue text-white font-semibold"
          >
            <Phone className="w-5 h-5 mr-2" />
            +1 (555) 911-LION
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;