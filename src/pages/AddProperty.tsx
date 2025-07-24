import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Upload, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AddProperty = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: '',
    contactNumber: '',
    email: '',
    propertyTitle: '',
    propertyType: '',
    location: '',
    price: '',
    size: '',
    bedrooms: '',
    bathrooms: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Property Submitted Successfully!",
      description: "Thank you! Your property has been submitted and is under review. We'll contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      ownerName: '',
      contactNumber: '',
      email: '',
      propertyTitle: '',
      propertyType: '',
      location: '',
      price: '',
      size: '',
      bedrooms: '',
      bathrooms: '',
      description: ''
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Add Your <span className="gradient-text">Property</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                List your property with RiverStone Realty and reach thousands of potential buyers
              </p>
            </div>

            <Card className="p-8">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-foreground">Property Submission Form</CardTitle>
                <p className="text-muted-foreground">
                  Fill in the details below to list your property. All fields marked with * are required.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Owner Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      Owner Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ownerName">Owner Name *</Label>
                        <Input
                          id="ownerName"
                          value={formData.ownerName}
                          onChange={(e) => handleInputChange('ownerName', e.target.value)}
                          placeholder="Enter full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber">Contact Number *</Label>
                        <Input
                          id="contactNumber"
                          value={formData.contactNumber}
                          onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      Property Details
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="propertyTitle">Property Title *</Label>
                      <Input
                        id="propertyTitle"
                        value={formData.propertyTitle}
                        onChange={(e) => handleInputChange('propertyTitle', e.target.value)}
                        placeholder="e.g., 3BHK Premium Apartment"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="propertyType">Property Type *</Label>
                        <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select property type" />
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
                        <Label htmlFor="location">Location *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          placeholder="e.g., Benz Circle, Vijayawada"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price">Price *</Label>
                        <Input
                          id="price"
                          value={formData.price}
                          onChange={(e) => handleInputChange('price', e.target.value)}
                          placeholder="e.g., ₹85 Lakhs"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="size">Size (sq ft) *</Label>
                        <Input
                          id="size"
                          value={formData.size}
                          onChange={(e) => handleInputChange('size', e.target.value)}
                          placeholder="e.g., 1,250 sq ft"
                          required
                        />
                      </div>
                    </div>

                    {(formData.propertyType === 'apartment' || formData.propertyType === 'villa') && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="bedrooms">Bedrooms</Label>
                          <Select value={formData.bedrooms} onValueChange={(value) => handleInputChange('bedrooms', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select bedrooms" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 BHK</SelectItem>
                              <SelectItem value="2">2 BHK</SelectItem>
                              <SelectItem value="3">3 BHK</SelectItem>
                              <SelectItem value="4">4 BHK</SelectItem>
                              <SelectItem value="5">5+ BHK</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bathrooms">Bathrooms</Label>
                          <Select value={formData.bathrooms} onValueChange={(value) => handleInputChange('bathrooms', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select bathrooms" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="description">Property Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Describe your property features, amenities, nearby facilities, etc."
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      Property Images
                    </h3>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">Upload property images (up to 5 images)</p>
                      <p className="text-sm text-muted-foreground">Drag & drop files or click to browse</p>
                      <Button variant="outline" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  {/* Backend Integration Note */}
                  <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                    <h4 className="font-semibold text-foreground mb-2">📝 Backend Integration Required</h4>
                    <p className="text-sm text-muted-foreground">
                      This form needs to be connected to a backend system like Supabase, Google Sheets, Firebase, or Airtable 
                      to store submitted property data and display new listings dynamically on the website.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full gap-2 py-6 text-lg" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Submitting Property...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Submit Property for Review
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddProperty;