import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Square, Phone, Mail } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number | null;
  bathrooms: number | null;
  area: string;
  type: string;
  description: string;
  image: string;
  amenities?: string[];
  features?: string[];
}

interface PropertyDetailModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetailModal = ({ property, isOpen, onClose }: PropertyDetailModalProps) => {
  if (!property) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {property.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="space-y-4">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            
            {/* Property Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{property.location}</span>
              </div>
              
              <div className="text-3xl font-bold text-primary">
                {property.price}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {property.bedrooms && (
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Square className="w-4 h-4" />
                  <span>{property.area}</span>
                </div>
              </div>
              
              <Badge variant="secondary" className="w-fit">
                {property.type}
              </Badge>
            </div>
          </div>
          
          {/* Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
              <p className="text-muted-foreground">{property.description}</p>
            </div>
            
            {property.amenities && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      • {amenity}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {property.features && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Features</h3>
                <div className="grid grid-cols-1 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Contact Actions */}
            <div className="space-y-3 pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground">Interested?</h3>
              <div className="flex flex-col sm:flex-row gap-3">
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
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailModal;