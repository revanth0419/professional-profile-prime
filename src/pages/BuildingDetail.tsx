import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Building, Users, Phone, Mail, Zap, Shield, Car, Home } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BuildingDetail = () => {
  const { id } = useParams();
  
  const buildingsData = {
    "1": {
      name: "Riverfront Towers",
      location: "Benz Circle, Vijayawada",
      price: "₹85 Lakhs onwards",
      floors: "G+10",
      units: ["3BHK", "4BHK"],
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      amenities: ["Lift", "Power Backup", "24/7 Security", "Parking", "River View", "Modern Interiors"],
      description: "Modern riverside apartment building with premium amenities and excellent connectivity to major business districts. Enjoy panoramic river views and premium lifestyle amenities.",
      videoId: "dQw4w9WgXcQ",
      features: [
        "Prime location on Krishna River banks",
        "High-speed elevators",
        "Backup power supply",
        "Multi-level car parking",
        "24/7 security with CCTV surveillance",
        "Modern fire safety systems"
      ]
    },
    "2": {
      name: "Skyview Residency",
      location: "Moghalrajpuram, Vijayawada",
      price: "₹72 Lakhs onwards",
      floors: "G+8",
      units: ["2BHK", "3BHK"],
      image: "https://images.unsplash.com/photo-1497604401993-f2e9225f0cd0",
      amenities: ["Gym", "Children's Park", "Balcony Views", "Security", "Fitness Center", "Rooftop Garden"],
      description: "Tall building offering stunning sky-view balconies and spacious interiors with modern architectural design. Perfect for families seeking comfort and convenience.",
      videoId: "3JZ_6Ch_qfA",
      features: [
        "Panoramic city views from all floors",
        "Equipped fitness center",
        "Children's play area with safety features",
        "Landscaped rooftop garden",
        "Intercom facility in all units",
        "Water treatment plant"
      ]
    },
    "3": {
      name: "Emerald Heights",
      location: "Gunadala, Vijayawada",
      price: "₹65 Lakhs onwards",
      floors: "G+7",
      units: ["2BHK", "3BHK"],
      image: "https://images.unsplash.com/photo-1487958449943-2426f577a8c",
      amenities: ["Garden", "Play Area", "Modern Bathrooms", "Ample Parking", "Community Hall", "Meditation Area"],
      description: "Family-friendly apartment complex with green spaces and essential amenities for comfortable living. Designed with nature in mind for a peaceful lifestyle.",
      videoId: "jNQXAC9IVRw",
      features: [
        "Landscaped gardens and green spaces",
        "Children's outdoor play equipment",
        "Community gathering spaces",
        "Rainwater harvesting system",
        "Dedicated parking for each unit",
        "Energy-efficient lighting"
      ]
    },
    "4": {
      name: "Elite Enclave",
      location: "Auto Nagar, Vijayawada",
      price: "₹90 Lakhs onwards",
      floors: "G+12",
      units: ["3BHK", "4BHK"],
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
      amenities: ["Gated Community", "Clubhouse", "High-Speed Lifts", "Advanced Security", "Swimming Pool", "Concierge Service"],
      description: "Luxury gated high-rise building offering exclusive living with top-tier facilities and premium lifestyle. Experience the pinnacle of modern urban living.",
      videoId: "6_b7RDuLwcI",
      features: [
        "Gated community with controlled access",
        "Premium clubhouse with recreational facilities",
        "High-speed elevators with advanced technology",
        "Swimming pool and spa facilities",
        "Concierge and valet services",
        "Smart home automation features"
      ]
    }
  };

  const building = id ? buildingsData[id as keyof typeof buildingsData] : null;

  if (!building) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Building Not Found</h1>
          <Button asChild>
            <Link to="/buildings">Back to Buildings</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="section-container py-6">
          <Button variant="outline" className="gap-2" asChild>
            <Link to="/buildings">
              <ArrowLeft className="w-4 h-4" />
              Back to Buildings
            </Link>
          </Button>
        </div>

        {/* Building Header */}
        <section className="pb-8">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="space-y-4">
                <img 
                  src={building.image} 
                  alt={building.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {building.name}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{building.location}</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-6">
                    {building.price}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Floors</div>
                      <div className="font-semibold text-foreground">{building.floors}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Units Available</div>
                      <div className="font-semibold text-foreground">{building.units.join(', ')}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
                  <p className="text-muted-foreground">{building.description}</p>
                </div>

                {/* Contact Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="gap-2 flex-1">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="gap-2 flex-1">
                    <Mail className="w-4 h-4" />
                    Email Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Walkthrough */}
        <section className="py-12 bg-secondary/20">
          <div className="section-container">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Building Walkthrough</h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${building.videoId}`}
                  title={`${building.name} Walkthrough`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities & Features */}
        <section className="py-12">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Amenities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    Amenities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {building.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {building.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-primary">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Interested in {building.name}?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to schedule a visit and learn more about this premium property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone className="w-5 h-5" />
                Schedule Visit
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Mail className="w-5 h-5" />
                Get Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BuildingDetail;