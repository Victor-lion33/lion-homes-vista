import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "$2B+", label: "Properties Sold" },
    { icon: Star, value: "4.9", label: "Client Rating" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      experience: "15+ years",
      specialties: ["Luxury Properties", "Investment"],
      description: "Sarah founded Lion Homes with a vision to revolutionize the real estate experience through personalized service and market expertise."
    },
    {
      name: "Michael Chen",
      role: "Senior Agent",
      experience: "12+ years",
      specialties: ["Residential", "First-time Buyers"],
      description: "Michael specializes in helping families find their perfect home, with a focus on understanding unique needs and preferences."
    },
    {
      name: "Emily Rodriguez",
      role: "Luxury Specialist",
      experience: "10+ years",
      specialties: ["Luxury Estates", "Waterfront"],
      description: "Emily brings unparalleled expertise in luxury real estate, serving high-net-worth clients with discretion and excellence."
    }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We conduct business with unwavering honesty and transparency in every transaction."
    },
    {
      title: "Excellence",
      description: "We strive for perfection in service delivery and continuously exceed client expectations."
    },
    {
      title: "Innovation",
      description: "We embrace technology and modern practices to enhance the real estate experience."
    },
    {
      title: "Community",
      description: "We're committed to building stronger communities through responsible real estate practices."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lion-light to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-lion-navy mb-6">About Lion Homes</h1>
          <p className="text-xl text-lion-gray leading-relaxed">
            For over 15 years, Lion Homes has been the premier choice for luxury real estate in Southern California. 
            We combine deep market knowledge with personalized service to deliver exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-lion-blue to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-lion-navy mb-2">{stat.value}</h3>
                  <p className="text-lion-gray">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-lion-navy to-lion-navy/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            To provide unparalleled real estate services that exceed expectations, build lasting relationships, 
            and help our clients achieve their property dreams. We believe that buying or selling a home should 
            be an exciting and rewarding experience, not a stressful one.
          </p>
          <blockquote className="text-2xl italic text-lion-blue">
            "Excellence is not a skill, it's an attitude we bring to every client interaction."
          </blockquote>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lion-navy mb-4">Meet Our Team</h2>
            <p className="text-xl text-lion-gray max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing you with the highest level of service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-lion-blue to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <CardTitle className="text-xl text-lion-navy">{member.name}</CardTitle>
                  <CardDescription className="text-lion-gray text-lg">{member.role}</CardDescription>
                  <Badge variant="secondary" className="bg-lion-light text-lion-navy">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <h4 className="font-semibold text-lion-navy mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="border-lion-blue text-lion-blue">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-lion-gray text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-background to-lion-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lion-navy mb-4">Our Values</h2>
            <p className="text-xl text-lion-gray max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl text-lion-navy flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-lion-blue to-accent rounded-full mr-3"></div>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lion-gray leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;