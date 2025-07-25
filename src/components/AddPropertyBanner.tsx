import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Home, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AddPropertyBanner = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/30 border-primary/20">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/20 rounded-full">
                      <Plus className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    List Your <span className="gradient-text">Property</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Reach thousands of potential buyers and tenants. List your property with RiverStone Realty 
                    and get the best market exposure.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Home className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Easy Listing</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Simple form to add your property details and photos
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Maximum Exposure</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Your property will be featured across our platform
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Quick Process</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Get approved and listed within 24 hours
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="gap-2 px-8 py-4 text-lg" asChild>
                    <Link to="/add-property">
                      <Plus className="w-5 h-5" />
                      Add Your Property
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    No hidden fees • Quick approval • Professional support
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AddPropertyBanner;