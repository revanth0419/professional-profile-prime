import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MapPin, Bed, Bath, Square, Eye, Filter, Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Listings = () => {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      setActiveFilter(typeParam);
    }
  }, [searchParams]);

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
    },
    {
      id: 7,
      title: "2BHK Modern Flat",
      location: "Auto Nagar",
      price: "₹58 Lakhs",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,050 sq ft",
      type: "Apartment",
      description: "Well-ventilated apartment with modern fixtures",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      title: "Office Space",
      location: "Benz Circle",
      price: "₹75 Lakhs",
      bedrooms: null,
      bathrooms: 2,
      area: "1,200 sq ft",
      type: "Commercial",
      description: "Prime office space in business district",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      id: 9,
      title: "Duplex Villa",
      location: "Gannavaram",
      price: "₹1.8 Crores",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,200 sq ft",
      type: "Villa",
      description: "Luxurious duplex with swimming pool and garden",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
    }
  ];

  const filterTypes = [
    { id: 'all', label: 'All Properties', icon: Filter },
    { id: 'apartment', label: 'Apartments', icon: null },
    { id: 'villa', label: 'Villas', icon: null },
    { id: 'commercial', label: 'Commercial', icon: null },
    { id: 'plot', label: 'Plots', icon: null },
  ];

  const filteredListings = listings.filter(listing => {
    const matchesFilter = activeFilter === 'all' || listing.type.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = searchTerm === '' || 
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Property <span className="gradient-text">Listings</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the finest properties in Vijayawada's most sought-after locations
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="mb-12 space-y-6">
              {/* Search Bar */}
              <Card className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by location, property type, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </Card>

              {/* Filter Tabs */}
              <Card className="p-6">
                <div className="flex flex-wrap gap-4 items-center">
                  {filterTypes.map((filter) => (
                    <Button
                      key={filter.id}
                      variant={activeFilter === filter.id ? "default" : "outline"}
                      className="gap-2"
                      onClick={() => setActiveFilter(filter.id)}
                    >
                      {filter.icon && <filter.icon className="w-4 h-4" />}
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((listing) => (
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
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {listing.description}
                    </p>
                    
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
                Load More Properties
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Listings;