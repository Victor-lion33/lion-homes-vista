import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, ArrowRight, Search, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "2024 Real Estate Market Trends: What Buyers Need to Know",
      excerpt: "Discover the latest market trends shaping the real estate landscape in 2024, including interest rates, inventory levels, and buyer behavior patterns.",
      content: "The real estate market in 2024 continues to evolve with changing economic conditions...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: 8,
      category: "Market Analysis",
      tags: ["market trends", "buying tips", "2024 forecast"],
      featured: true
    },
    {
      id: 2,
      title: "First-Time Homebuyer's Complete Guide to Success",
      excerpt: "Navigate the home buying process with confidence using our comprehensive guide designed specifically for first-time buyers.",
      content: "Buying your first home is an exciting milestone, but it can also feel overwhelming...",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: 12,
      category: "Buying Guide",
      tags: ["first-time buyers", "home buying", "tips"],
      featured: false
    },
    {
      id: 3,
      title: "Luxury Property Investment: Maximizing Returns in High-End Markets",
      excerpt: "Learn proven strategies for investing in luxury real estate and understand the unique dynamics of high-end property markets.",
      content: "Luxury real estate investment requires a different approach than traditional property investment...",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: 10,
      category: "Investment",
      tags: ["luxury properties", "investment", "returns"],
      featured: true
    },
    {
      id: 4,
      title: "Home Staging Secrets: Sell Your Property Faster",
      excerpt: "Professional staging tips that can help your property stand out in the market and attract serious buyers quickly.",
      content: "Home staging is one of the most effective ways to sell your property faster and for more money...",
      author: "Sarah Johnson",
      date: "2024-01-08",
      readTime: 6,
      category: "Selling Tips",
      tags: ["home staging", "selling", "tips"],
      featured: false
    },
    {
      id: 5,
      title: "Understanding Property Valuations: What Determines Your Home's Worth",
      excerpt: "Get insights into the factors that influence property valuations and learn how to accurately assess your home's market value.",
      content: "Property valuation is both an art and a science, involving multiple factors...",
      author: "Michael Chen",
      date: "2024-01-05",
      readTime: 9,
      category: "Market Analysis",
      tags: ["valuation", "market value", "assessment"],
      featured: false
    },
    {
      id: 6,
      title: "Smart Home Technology: Adding Value to Your Property",
      excerpt: "Explore how smart home technologies can increase your property value and appeal to modern buyers.",
      content: "Smart home technology has evolved from a luxury to an expectation for many homebuyers...",
      author: "Emily Rodriguez",
      date: "2024-01-03",
      readTime: 7,
      category: "Technology",
      tags: ["smart home", "technology", "property value"],
      featured: false
    }
  ];

  const categories = ["all", "Market Analysis", "Buying Guide", "Investment", "Selling Tips", "Technology"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lion-light to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-lion-navy mb-6">Real Estate Insights</h1>
          <p className="text-xl text-lion-gray leading-relaxed">
            Stay informed with expert insights, market trends, and valuable tips from our real estate professionals.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lion-gray w-5 h-5" />
              <Input
                placeholder="Search articles by title, content, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-lion-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-lion-navy mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-lion-gold to-accent flex items-center justify-center">
                      <span className="text-white text-6xl font-bold opacity-20">{post.category.charAt(0)}</span>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-white text-lion-navy">
                      Featured
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-lion-gray mb-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime} min read
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-lion-navy mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-lion-gray mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-lion-gold/10 text-lion-gold">
                        {post.category}
                      </Badge>
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="border-lion-gray text-lion-gray text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button className="w-full bg-lion-navy hover:bg-lion-navy/90 text-white">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-lion-navy">Latest Articles</h2>
            <p className="text-lion-gray">
              <span className="font-semibold text-lion-navy">{filteredPosts.length}</span> articles found
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="h-32 bg-gradient-to-br from-lion-light to-lion-gray flex items-center justify-center">
                  <Tag className="w-8 h-8 text-lion-gold" />
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center space-x-4 text-sm text-lion-gray mb-3">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime} min
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-lion-navy mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-lion-gray mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-lion-gold/10 text-lion-gold text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-lion-gray">{formatDate(post.date)}</span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" className="border-lion-gold text-lion-gold hover:bg-lion-gold hover:text-white">
                        Read More
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-lion-gray mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-lion-navy mb-2">No articles found</h3>
              <p className="text-lion-gray">Try adjusting your search terms or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-lion-navy to-lion-navy/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for the latest real estate insights and market updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button 
              className="bg-gradient-to-r from-lion-gold to-accent hover:from-accent hover:to-lion-gold text-white font-semibold px-6"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;