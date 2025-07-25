import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Eye, Building, Home, Store, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedListings = () => {
  // Property categories for homepage sections
  const categories = [
    {
      id: 'apartments',
      title: 'Apartments',
      icon: Building,
      emoji: '🏢',
      description: 'Modern apartments in prime locations',
      filter: 'apartment'
    },
    {
      id: 'villas',
      title: 'Villas',
      icon: Home,
      emoji: '🏡',
      description: 'Luxury villas with premium amenities',
      filter: 'villa'
    },
    {
      id: 'plots',
      title: 'Plots',
      icon: Trees,
      emoji: '🌿',
      description: 'DTCP approved residential plots',
      filter: 'plot'
    },
    {
      id: 'commercial',
      title: 'Commercial Properties',
      icon: Store,
      emoji: '🏬',
      description: 'Prime commercial spaces for business',
      filter: 'commercial'
    }
  ];

  // All listings organized by category
  const allListings = {
    apartment: [
      {
        id: 1,
        title: "3BHK Premium Apartment",
        location: "Benz Circle",
        price: "₹85 Lakhs",
        bedrooms: 3,
        bathrooms: 2,
        area: "1,250 sq ft",
        type: "Apartment",
        description: "Modern 3BHK apartment in Benz Circle with luxury amenities and excellent connectivity.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        featured: true
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
        description: "Secure gated community with club house and swimming pool amenities",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
      },
      {
        id: 7,
        title: "Luxury 4BHK Penthouse",
        location: "Governorpet",
        price: "₹1.8 Crores",
        bedrooms: 4,
        bathrooms: 4,
        area: "2,500 sq ft",
        type: "Apartment",
        description: "Spacious penthouse with panoramic city views and modern amenities",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
      },
      {
        id: 8,
        title: "Modern 2BHK Apartment",
        location: "Patamata",
        price: "₹65 Lakhs",
        bedrooms: 2,
        bathrooms: 2,
        area: "980 sq ft",
        type: "Apartment",
        description: "Well-designed 2BHK apartment with modular kitchen and parking",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
      },
      {
        id: 15,
        title: "Furnished Studio Apartment",
        location: "Labbipet",
        price: "₹42 Lakhs",
        bedrooms: 1,
        bathrooms: 1,
        area: "650 sq ft",
        type: "Apartment",
        description: "Fully furnished studio apartment perfect for young professionals",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
      },
      {
        id: 16,
        title: "Duplex Apartment",
        location: "One Town",
        price: "₹1.2 Crores",
        bedrooms: 3,
        bathrooms: 3,
        area: "1,800 sq ft",
        type: "Apartment",
        description: "Spacious duplex with private terrace and premium fittings",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop"
      },
      {
        id: 17,
        title: "Budget 1BHK Flat",
        location: "Kandrika",
        price: "₹35 Lakhs",
        bedrooms: 1,
        bathrooms: 1,
        area: "580 sq ft",
        type: "Apartment",
        description: "Affordable 1BHK apartment with basic amenities and parking",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop"
      },
      {
        id: 18,
        title: "High-Rise Apartment",
        location: "Tadepalli",
        price: "₹95 Lakhs",
        bedrooms: 3,
        bathrooms: 2,
        area: "1,350 sq ft",
        type: "Apartment",
        description: "Premium high-rise apartment with city views and modern amenities",
        image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop"
      }
    ],
    villa: [
      {
        id: 2,
        title: "Luxury Villa with Garden",
        location: "Moghalrajpuram",
        price: "₹1.5 Crores",
        bedrooms: 4,
        bathrooms: 3,
        area: "2,800 sq ft",
        type: "Villa",
        description: "Premium villa in Moghalrajpuram with landscaped garden, spacious interiors, and privacy.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
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
        description: "Independent house with terrace, garage and two-wheeler parking",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop"
      },
      {
        id: 9,
        title: "Modern Villa with Pool",
        location: "Tadepalli",
        price: "₹2.2 Crores",
        bedrooms: 5,
        bathrooms: 4,
        area: "3,500 sq ft",
        type: "Villa",
        description: "Contemporary villa with swimming pool, home theater, and smart automation",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop"
      },
      {
        id: 10,
        title: "Heritage Style Villa",
        location: "One Town",
        price: "₹1.8 Crores",
        bedrooms: 4,
        bathrooms: 3,
        area: "3,000 sq ft",
        type: "Villa",
        description: "Traditional architecture villa with modern amenities and courtyard",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop"
      }
    ],
    plot: [
      {
        id: 6,
        title: "Residential Plot",
        location: "Moghalrajpuram",
        price: "₹42 Lakhs",
        bedrooms: null,
        bathrooms: null,
        area: "1,800 sq ft",
        type: "Plot",
        description: "DTCP approved plot ready for immediate construction with clear title",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
      },
      {
        id: 11,
        title: "Corner Plot",
        location: "Gannavaram",
        price: "₹35 Lakhs",
        bedrooms: null,
        bathrooms: null,
        area: "1,500 sq ft",
        type: "Plot",
        description: "Prime corner plot with east facing and 30x50 dimensions",
        image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=400&h=300&fit=crop"
      },
      {
        id: 12,
        title: "Gated Community Plot",
        location: "Amaravati",
        price: "₹65 Lakhs",
        bedrooms: null,
        bathrooms: null,
        area: "2,400 sq ft",
        type: "Plot",
        description: "Premium plot in gated community with all infrastructure facilities",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
      },
      {
        id: 19,
        title: "Agricultural Land",
        location: "Kankipadu",
        price: "₹25 Lakhs",
        bedrooms: null,
        bathrooms: null,
        area: "3,000 sq ft",
        type: "Plot",
        description: "Fertile agricultural land suitable for farming with water facility",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
      },
      {
        id: 20,
        title: "Industrial Plot",
        location: "Autonagar",
        price: "₹85 Lakhs",
        bedrooms: null,
        bathrooms: null,
        area: "4,000 sq ft",
        type: "Plot",
        description: "Industrial plot with all utilities and permissions for manufacturing",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
      },
      {
        id: 21,
        title: "Villa Plot",
        location: "Benz Circle",
        price: "₹55 Lakhs",
        bedrooms: null,
        bathrooms: null,
        area: "2,000 sq ft",
        type: "Plot",
        description: "Prime villa plot in residential area with 40x50 dimensions",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
      }
    ],
    commercial: [
      {
        id: 3,
        title: "Commercial Space",
        location: "Auto Nagar",
        price: "₹55 Lakhs",
        bedrooms: null,
        bathrooms: 1,
        area: "1,600 sq ft",
        type: "Commercial",
        description: "Ideal showroom or retail unit in the busy Auto Nagar market area.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
      },
      {
        id: 13,
        title: "Office Space",
        location: "Labbipet",
        price: "₹45 Lakhs",
        bedrooms: null,
        bathrooms: 2,
        area: "1,200 sq ft",
        type: "Commercial",
        description: "Modern office space in commercial complex with parking and lift",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
      },
      {
        id: 14,
        title: "Retail Showroom",
        location: "Besant Road",
        price: "₹85 Lakhs",
        bedrooms: null,
        bathrooms: 2,
        area: "2,000 sq ft",
        type: "Commercial",
        description: "Ground floor retail space with high visibility and customer parking",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
      },
      {
        id: 22,
        title: "Warehouse Space",
        location: "Mylavaram",
        price: "₹1.2 Crores",
        bedrooms: null,
        bathrooms: 1,
        area: "5,000 sq ft",
        type: "Commercial",
        description: "Large warehouse with loading dock and storage facilities",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
      },
      {
        id: 23,
        title: "Restaurant Space",
        location: "Governorpet",
        price: "₹75 Lakhs",
        bedrooms: null,
        bathrooms: 3,
        area: "1,800 sq ft",
        type: "Commercial",
        description: "Ready-to-use restaurant space with kitchen setup and dining area",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
      },
      {
        id: 24,
        title: "Shopping Complex",
        location: "Patamata",
        price: "₹3.5 Crores",
        bedrooms: null,
        bathrooms: 5,
        area: "8,000 sq ft",
        type: "Commercial",
        description: "Multi-floor shopping complex with escalator and ample parking",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
      }
    ]
  };

  const PropertyCard = ({ listing }: { listing: any }) => (
    <Card className="group card-hover overflow-hidden">
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
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
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
  );

  return (
    <section id="listings" className="py-20 bg-background">
      <div className="section-container">
        {categories.map((category) => (
          <div key={category.id} className="mb-20">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl">{category.emoji}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {category.title}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Property Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {allListings[category.filter as keyof typeof allListings]?.slice(0, 4).map((listing) => (
                <PropertyCard key={listing.id} listing={listing} />
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="px-8" asChild>
                <Link to={`/listings?type=${category.filter}`}>
                  View More {category.title}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;