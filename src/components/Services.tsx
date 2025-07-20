import { Card, CardContent } from '@/components/ui/card';
import { Home, TrendingUp, Building, Handshake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Property Sales',
      description: 'Flats, Villas, and Gated Communities',
      features: ['Expert Property Valuation', 'Legal Documentation Support', 'Home Loan Assistance', 'Post-Sale Services']
    },
    {
      icon: TrendingUp,
      title: 'Real Estate Investment Advisory',
      description: 'For NRIs and Domestic Investors',
      features: ['Market Analysis & Trends', 'ROI Calculations', 'Portfolio Management', 'Risk Assessment']
    },
    {
      icon: Building,
      title: 'Commercial Property Leasing & Sales',
      description: 'Offices, Shops, Showrooms',
      features: ['Prime Location Sourcing', 'Lease Negotiation', 'Commercial Valuation', 'Tenant Screening']
    },
    {
      icon: Handshake,
      title: 'Selling Assistance',
      description: 'Complete Guidance from Pricing to Marketing',
      features: ['Market Price Analysis', 'Professional Photography', 'Marketing Strategy', 'Buyer Matching']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;