import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Search, MapPin, DollarSign, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Home = () => {
  const features = [
    {
      icon: Search,
      title: "Expert Property Search",
      description: "Find your perfect home with our advanced search and local expertise"
    },
    {
      icon: DollarSign,
      title: "Market Analysis",
      description: "Get accurate valuations and market insights for informed decisions"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal service from experienced agents throughout your journey"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized excellence in real estate service and client satisfaction"
    }
  ];

  const featuredProperties = [
    {
      id: 1,
      image: property1,
      price: "$1,250,000",
      title: "Modern Villa Estate",
      location: "Beverly Hills, CA",
      beds: 4,
      baths: 3,
      sqft: "3,200"
    },
    {
      id: 2,
      image: property2,
      price: "$2,100,000",
      title: "Waterfront Luxury Home",
      location: "Malibu, CA",
      beds: 5,
      baths: 4,
      sqft: "4,500"
    },
    {
      id: 3,
      image: property3,
      price: "$3,500,000",
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      beds: 3,
      baths: 3,
      sqft: "2,800"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Find Your
            <span className="block bg-gradient-to-r from-lion-blue to-accent bg-clip-text text-transparent animate-glow">
              Dream Home
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            Discover luxury properties with Lion Homes - where exceptional service meets extraordinary properties
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
            <Link to="/listings">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lion-blue to-accent hover:from-accent hover:to-lion-blue text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-blue hover:scale-105 transform"
              >
                View Listings
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white hover:text-lion-navy px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 transform"
              >
                Contact Agent
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-lion-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-lion-navy mb-4">Why Choose Lion Homes</h2>
            <p className="text-xl text-lion-gray max-w-2xl mx-auto">
              Experience the difference with our commitment to excellence and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className={`text-center border-0 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 group animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-lion-blue to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-lion-navy group-hover:text-lion-blue transition-colors duration-300">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lion-gray">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-lion-navy mb-4">Featured Properties</h2>
            <p className="text-xl text-lion-gray max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <Card 
                key={property.id} 
                className={`overflow-hidden border-0 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 group animate-scale-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-lion-blue to-accent text-white px-3 py-1 rounded-full text-sm font-semibold animate-glow">
                      {property.price}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-lion-navy mb-2 group-hover:text-lion-blue transition-colors duration-300">{property.title}</h3>
                  <p className="text-lion-gray mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </p>
                  <div className="flex justify-between text-sm text-lion-gray mb-4">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <Link to={`/listings/${property.id}`}>
                    <Button className="w-full bg-lion-navy hover:bg-lion-navy/90 text-white hover:scale-105 transform transition-all duration-300">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/listings">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-lion-blue text-lion-blue hover:bg-lion-blue hover:text-white px-8 py-3"
              >
                View All Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lion-navy to-lion-navy/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let our expert team guide you through every step of your real estate journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lion-blue to-accent hover:from-accent hover:to-lion-blue text-white font-semibold px-8 py-4 text-lg"
              >
                Get Started Today
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white hover:text-lion-navy px-8 py-4 text-lg"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;