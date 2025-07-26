import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Building, Users, Car, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Buildings = () => {
  const buildings = [
    {
      id: 1,
      name: "Riverfront Towers",
      location: "Benz Circle, Vijayawada",
      price: "₹85 Lakhs onwards",
      floors: "G+10",
      units: ["3BHK", "4BHK"],
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      amenities: ["Lift", "Power Backup", "24/7 Security", "Parking"],
      description: "Modern riverside apartment building with premium amenities and excellent connectivity to major business districts."
    },
    {
      id: 2,
      name: "Skyview Residency",
      location: "Moghalrajpuram, Vijayawada",
      price: "₹72 Lakhs onwards",
      floors: "G+8", 
      units: ["2BHK", "3BHK"],
      image: "https://images.unsplash.com/photo-1497604401993-f2e9225f0cd0",
      amenities: ["Gym", "Children's Park", "Balcony Views", "Security"],
      description: "Tall building offering stunning sky-view balconies and spacious interiors with modern architectural design."
    },
    {
      id: 3,
      name: "Emerald Heights",
      location: "Gunadala, Vijayawada",
      price: "₹65 Lakhs onwards",
      floors: "G+7",
      units: ["2BHK", "3BHK"],
      image: "https://images.unsplash.com/photo-1487958449943-2426f577a8c",
      amenities: ["Garden", "Play Area", "Modern Bathrooms", "Ample Parking"],
      description: "Family-friendly apartment complex with green spaces and essential amenities for comfortable living."
    },
    {
      id: 4,
      name: "Elite Enclave",
      location: "Auto Nagar, Vijayawada",
      price: "₹90 Lakhs onwards",
      floors: "G+12",
      units: ["3BHK", "4BHK"],
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
      amenities: ["Gated Community", "Clubhouse", "High-Speed Lifts", "Advanced Security"],
      description: "Luxury gated high-rise building offering exclusive living with top-tier facilities and premium lifestyle."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Premium Buildings in{' '}
                <span className="gradient-text">Vijayawada</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover our collection of modern residential buildings offering luxury living and premium amenities
              </p>
            </div>
          </div>
        </section>

        {/* Buildings Grid */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {buildings.map((building) => (
                <Card key={building.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={building.image} 
                      alt={building.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90 text-foreground">
                        {building.floors}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {building.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{building.location}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="text-2xl font-bold text-primary">
                      {building.price}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span>{building.floors}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{building.units.join(', ')}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {building.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {building.amenities.slice(0, 3).map((amenity) => (
                        <Badge key={amenity} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {building.amenities.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{building.amenities.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <Button className="w-full gap-2" asChild>
                      <Link to={`/buildings/${building.id}`}>
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Buildings;