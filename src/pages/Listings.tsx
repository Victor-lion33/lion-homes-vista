import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Bed, Bath, Square, Heart, Search, Filter } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price-desc");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const properties = [
    {
      id: 1,
      image: property1,
      price: 1250000,
      title: "Modern Villa Estate",
      location: "Beverly Hills, CA",
      beds: 4,
      baths: 3,
      sqft: 3200,
      type: "Villa",
      status: "For Sale",
      features: ["Pool", "Garden", "Garage"],
      description: "Stunning modern villa with panoramic city views, designer finishes, and resort-style amenities."
    },
    {
      id: 2,
      image: property2,
      price: 2100000,
      title: "Waterfront Luxury Home",
      location: "Malibu, CA",
      beds: 5,
      baths: 4,
      sqft: 4500,
      type: "House",
      status: "For Sale",
      features: ["Waterfront", "Pool", "Private Beach"],
      description: "Exquisite waterfront property with private beach access and breathtaking ocean views."
    },
    {
      id: 3,
      image: property3,
      price: 3500000,
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      beds: 3,
      baths: 3,
      sqft: 2800,
      type: "Penthouse",
      status: "For Sale",
      features: ["City Views", "Luxury Finishes", "Rooftop"],
      description: "Spectacular penthouse with floor-to-ceiling windows and panoramic city skyline views."
    },
    {
      id: 4,
      image: property1,
      price: 1850000,
      title: "Contemporary Family Home",
      location: "Pasadena, CA",
      beds: 4,
      baths: 3.5,
      sqft: 3800,
      type: "House",
      status: "For Sale",
      features: ["Garden", "Office", "Wine Cellar"],
      description: "Beautiful family home in prestigious neighborhood with modern amenities and classic charm."
    },
    {
      id: 5,
      image: property2,
      price: 1750000,
      title: "Luxury Townhouse",
      location: "San Francisco, CA",
      beds: 3,
      baths: 2.5,
      sqft: 2400,
      type: "Townhouse",
      status: "For Sale",
      features: ["Garage", "Balcony", "Smart Home"],
      description: "Sophisticated townhouse featuring smart home technology and designer interiors."
    },
    {
      id: 6,
      image: property3,
      price: 2850000,
      title: "Hillside Modern Estate",
      location: "Hollywood Hills, CA",
      beds: 5,
      baths: 4.5,
      sqft: 5200,
      type: "Estate",
      status: "For Sale",
      features: ["Pool", "View", "Guest House"],
      description: "Architectural masterpiece with infinity pool and guest house overlooking the city."
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = propertyType === "all" || property.type.toLowerCase() === propertyType.toLowerCase();
    
    const matchesPrice = priceRange === "all" || (() => {
      switch (priceRange) {
        case "under-1m": return property.price < 1000000;
        case "1m-2m": return property.price >= 1000000 && property.price < 2000000;
        case "2m-3m": return property.price >= 2000000 && property.price < 3000000;
        case "over-3m": return property.price >= 3000000;
        default: return true;
      }
    })();

    return matchesSearch && matchesType && matchesPrice;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case "price-asc": return a.price - b.price;
      case "price-desc": return b.price - a.price;
      case "size-asc": return a.sqft - b.sqft;
      case "size-desc": return b.sqft - a.sqft;
      default: return 0;
    }
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lion-light to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-lion-navy mb-6">Property Listings</h1>
          <p className="text-xl text-lion-gray leading-relaxed">
            Discover your perfect home from our curated selection of premium properties
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lion-gray w-5 h-5" />
              <Input
                placeholder="Search by location or property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="estate">Estate</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-1m">Under $1M</SelectItem>
                <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                <SelectItem value="2m-3m">$2M - $3M</SelectItem>
                <SelectItem value="over-3m">Over $3M</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="size-desc">Size: Large to Small</SelectItem>
                <SelectItem value="size-asc">Size: Small to Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 bg-lion-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lion-gray">
            <span className="font-semibold text-lion-navy">{sortedProperties.length}</span> properties found
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden border-0 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-lion-gold to-accent text-white">
                      {property.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-10 h-10 p-0 bg-white/90 hover:bg-white border-0"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-lion-navy px-3 py-1 rounded-full text-lg font-bold">
                      {formatPrice(property.price)}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-lion-navy mb-2">{property.title}</h3>
                  <p className="text-lion-gray mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4 text-sm text-lion-gray">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      {property.beds} beds
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.baths} baths
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      {property.sqft.toLocaleString()} sqft
                    </div>
                  </div>

                  <p className="text-lion-gray text-sm mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-lion-light text-lion-navy text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-lion-navy hover:bg-lion-navy/90 text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProperties.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-lion-gray mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-lion-navy mb-2">No properties found</h3>
              <p className="text-lion-gray">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lion-navy to-lion-navy/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-white/90 mb-8">
            Our agents can help you find the perfect property that meets all your criteria
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-lion-gold to-accent hover:from-accent hover:to-lion-gold text-white font-semibold px-8 py-4 text-lg"
          >
            Contact Our Agents
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Listings;