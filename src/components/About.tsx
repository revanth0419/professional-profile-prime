import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, MapPin, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '750+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: MapPin, label: 'Key Localities', value: '15+' },
    { icon: TrendingUp, label: 'Properties Sold', value: '500+' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="gradient-text">RiverStone Realty</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                RiverStone Realty is a trusted name in the Vijayawada real estate market, 
                offering personalized property solutions for over a decade.
              </p>
              
              <p>
                Our team of local experts specializes in matching buyers and investors with 
                the best real estate options in Benz Circle, Moghalrajpuram, Kanuru, and 
                other key localities.
              </p>
              
              <p>
                With a focus on transparency, market insight, and customer care, RiverStone 
                Realty is your partner in navigating the fast-growing Vijayawada property 
                landscape. Whether you're looking for your first home, an investment property, 
                or a commercial space — we've got you covered.
              </p>
              
              <p className="text-primary font-semibold text-xl">
                Over 750+ happy customers and counting.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;