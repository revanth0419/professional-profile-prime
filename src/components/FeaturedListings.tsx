import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Eye } from 'lucide-react';

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      title: "3BHK Premium Apartment",
      location: "Benz Circle",
      price: "₹85 Lakhs",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,250 sq ft",
      type: "Apartment",
      description: "Modern apartment with premium amenities and parking",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Luxury Villa with Garden",
      location: "Moghalrajpuram",
      price: "₹1.5 Crores",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,800 sq ft",
      type: "Villa",
      description: "Spacious villa with landscaped garden and car parking",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Commercial Space",
      location: "Auto Nagar",
      price: "₹55 Lakhs",
      bedrooms: null,
      bathrooms: 1,
      area: "900 sq ft",
      type: "Commercial",
      description: "Prime commercial space perfect for retail business",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Gated Community Flat",
      location: "Gannavaram",
      price: "₹72 Lakhs",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,150 sq ft",
      type: "Apartment",
      description: "Secure gated community with club house and amenities",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Independent House",
      location: "Benz Circle",
      price: "₹1.2 Crores",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,200 sq ft",
      type: "Villa",
      description: "Independent house with terrace and two-wheeler parking",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Residential Plot",
      location: "Moghalrajpuram",
      price: "₹42 Lakhs",
      bedrooms: null,
      bathrooms: null,
      area: "1,800 sq ft",
      type: "Plot",
      description: "DTCP approved plot ready for immediate construction",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="listings" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the finest properties in Vijayawada's most sought-after locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <Card key={listing.id} className="group card-hover overflow-hidden">
              <div className="relative">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {listing.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm"
                >
                  {listing.type}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{listing.location}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {listing.title}
                </h3>
                
                <div className="text-2xl font-bold text-primary mb-4">
                  {listing.price}
                </div>
                
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  {listing.bedrooms && (
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{listing.bedrooms} Beds</span>
                    </div>
                  )}
                  {listing.bathrooms && (
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{listing.bathrooms} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{listing.area}</span>
                  </div>
                </div>
                
                <Button className="w-full gap-2">
                  <Eye className="w-4 h-4" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;