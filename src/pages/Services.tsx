import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  DollarSign, 
  Building, 
  Users, 
  TrendingUp, 
  Shield,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Buying",
      description: "Find your perfect home with our comprehensive buying services",
      features: [
        "Personalized property search",
        "Market analysis and pricing",
        "Negotiation expertise",
        "Transaction coordination",
        "Post-purchase support"
      ],
      highlight: "First-time buyer friendly"
    },
    {
      icon: DollarSign,
      title: "Property Selling",
      description: "Maximize your property value with our proven selling strategies",
      features: [
        "Professional property valuation",
        "Strategic marketing campaigns",
        "Professional photography",
        "Staging consultation",
        "Multiple offer management"
      ],
      highlight: "Average 15 days on market"
    },
    {
      icon: Building,
      title: "Investment Properties",
      description: "Build wealth through strategic real estate investments",
      features: [
        "ROI analysis and projections",
        "Market trend insights",
        "Portfolio optimization",
        "Rental property management",
        "1031 exchange facilitation"
      ],
      highlight: "20%+ average returns"
    },
    {
      icon: Users,
      title: "Property Management",
      description: "Full-service property management for maximum returns",
      features: [
        "Tenant screening and placement",
        "Rent collection and accounting",
        "Maintenance coordination",
        "Legal compliance",
        "Performance reporting"
      ],
      highlight: "98% occupancy rate"
    },
    {
      icon: TrendingUp,
      title: "Market Consultation",
      description: "Expert insights and strategies for any real estate decision",
      features: [
        "Market condition analysis",
        "Investment strategy planning",
        "Property development consulting",
        "Zoning and permits guidance",
        "Financial planning integration"
      ],
      highlight: "Data-driven insights"
    },
    {
      icon: Shield,
      title: "Luxury Estates",
      description: "Specialized service for high-end and luxury properties",
      features: [
        "Discreet and confidential service",
        "Global marketing network",
        "Luxury property expertise",
        "Concierge-level support",
        "Exclusive listing access"
      ],
      highlight: "White-glove service"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "Home Buyer",
      content: "Lion Homes made our first home purchase seamless. Their expertise and patience throughout the process was incredible.",
      rating: 5
    },
    {
      name: "Robert Kim",
      role: "Property Investor",
      content: "The investment analysis provided by Lion Homes helped me build a portfolio that's exceeded all expectations.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Luxury Seller",
      content: "Their luxury property expertise and marketing strategy sold our estate 20% above asking price.",
      rating: 5
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your goals, timeline, and preferences to create a personalized strategy."
    },
    {
      step: "02", 
      title: "Market Analysis",
      description: "Comprehensive market research and analysis to inform your real estate decisions."
    },
    {
      step: "03",
      title: "Strategic Planning",
      description: "Develop a customized plan tailored to your specific needs and objectives."
    },
    {
      step: "04",
      title: "Execution",
      description: "Professional implementation with regular updates and seamless coordination."
    },
    {
      step: "05",
      title: "Completion",
      description: "Successful transaction completion with ongoing support for future needs."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lion-light to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-lion-navy mb-6">Our Services</h1>
          <p className="text-xl text-lion-gray leading-relaxed">
            Comprehensive real estate services designed to exceed your expectations and achieve your property goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-lion-gold to-accent rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-lion-gold/10 text-lion-gold w-fit">
                      {service.highlight}
                    </Badge>
                    <CardTitle className="text-2xl text-lion-navy">{service.title}</CardTitle>
                    <CardDescription className="text-lion-gray text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-lion-gold mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lion-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-border">
                      <Link to="/contact">
                        <Button className="w-full bg-lion-navy hover:bg-lion-navy/90 text-white">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-background to-lion-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lion-navy mb-4">Our Process</h2>
            <p className="text-xl text-lion-gray max-w-2xl mx-auto">
              A proven methodology that ensures success at every step of your real estate journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-lion-gold to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-lion-navy mb-3">{step.title}</h3>
                <p className="text-lion-gray text-sm leading-relaxed">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-lion-gold to-accent transform -translate-x-8"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lion-navy mb-4">Client Testimonials</h2>
            <p className="text-xl text-lion-gray max-w-2xl mx-auto">
              Hear what our satisfied clients have to say about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-lion-gold fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lion-gray italic mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-lion-navy">{testimonial.name}</p>
                    <p className="text-sm text-lion-gray">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lion-navy to-lion-navy/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our services can help you achieve your real estate goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lion-gold to-accent hover:from-accent hover:to-lion-gold text-white font-semibold px-8 py-4 text-lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/listings">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white hover:text-lion-navy px-8 py-4 text-lg"
              >
                View Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;