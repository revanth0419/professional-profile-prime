import { Card, CardContent } from '@/components/ui/card';
import { Home, TrendingUp, Building, Handshake, Shield, FileText, Calculator, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    },
    {
      icon: Shield,
      title: 'Property Legal Services',
      description: 'Complete Legal Documentation Support',
      features: ['Title Verification', 'Registration Assistance', 'NOC Clearances', 'Legal Compliance Check']
    },
    {
      icon: FileText,
      title: 'Property Management',
      description: 'End-to-End Property Management Solutions',
      features: ['Rental Management', 'Maintenance Coordination', 'Tenant Relations', 'Regular Inspections']
    },
    {
      icon: Calculator,
      title: 'Home Loan Assistance',
      description: 'Expert Guidance for Home Financing',
      features: ['Loan Eligibility Check', 'Bank Liaison', 'Documentation Support', 'Best Rate Negotiation']
    },
    {
      icon: Users,
      title: 'NRI Services',
      description: 'Specialized Services for Non-Resident Indians',
      features: ['Remote Property Viewing', 'Power of Attorney Services', 'Investment Guidance', 'Property Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive real estate solutions tailored to your needs in Vijayawada and surrounding areas
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

            {/* Additional Service Information */}
            <div className="mt-16 text-center">
              <Card className="bg-secondary/20">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Why Choose <span className="gradient-text">RiverStone Realty</span>?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">10+</div>
                      <div className="text-muted-foreground">Years of Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">750+</div>
                      <div className="text-muted-foreground">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">500+</div>
                      <div className="text-muted-foreground">Properties Sold</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;