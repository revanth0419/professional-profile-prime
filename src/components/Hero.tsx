import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import heroImage from '@/assets/hero-vijayawada.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const [searchFilters, setSearchFilters] = useState({
    propertyType: '',
    priceRange: '',
    bedrooms: ''
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchFilters.propertyType) params.set('type', searchFilters.propertyType);
    if (searchFilters.priceRange) params.set('price', searchFilters.priceRange);
    if (searchFilters.bedrooms) params.set('bedrooms', searchFilters.bedrooms);
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">RiverStone Realty • Vijayawada, Andhra Pradesh</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Find Your Perfect Property in{' '}
            <span className="gradient-text">Vijayawada</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Apartments, Villas, Plots, and Commercial Spaces — All in One Place.
          </p>
          
          {/* Property Search Filter */}
          <Card className="mb-12 p-6 bg-secondary/50 backdrop-blur-sm border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Property Type</label>
                <Select value={searchFilters.propertyType} onValueChange={(value) => setSearchFilters({...searchFilters, propertyType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Price Range</label>
                <Select value={searchFilters.priceRange} onValueChange={(value) => setSearchFilters({...searchFilters, priceRange: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-50">Below ₹50 Lakhs</SelectItem>
                    <SelectItem value="50-100">₹50 Lakhs - ₹1 Crore</SelectItem>
                    <SelectItem value="100-200">₹1 Crore - ₹2 Crores</SelectItem>
                    <SelectItem value="above-200">Above ₹2 Crores</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Bedrooms</label>
                <Select value={searchFilters.bedrooms} onValueChange={(value) => setSearchFilters({...searchFilters, bedrooms: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select BHK" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 BHK</SelectItem>
                    <SelectItem value="2">2 BHK</SelectItem>
                    <SelectItem value="3">3 BHK</SelectItem>
                    <SelectItem value="4">4+ BHK</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button onClick={handleSearch} className="gap-2 px-8 h-10">
                <Search className="w-4 h-4" />
                Search Properties
              </Button>
            </div>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="gap-2 px-8 py-6 text-lg" asChild>
              <Link to="/listings">
                View Listings
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
          
          {/* Property Type Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { type: 'Buildings', icon: '🏢', route: '/buildings' },
              { type: 'Apartments', icon: '🏘️', route: '/listings?type=apartment' },
              { type: 'Commercial Spaces', icon: '📈', route: '/listings?type=commercial' },
              { type: 'Plots', icon: '🏞️', route: '/listings?type=plot' }
            ].map((item) => (
              <Link 
                key={item.type} 
                to={item.route}
                className="group bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:bg-secondary/80 card-hover text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.type}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;