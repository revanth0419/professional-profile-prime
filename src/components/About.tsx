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
                We are a passionate real estate agency committed to helping people find their 
                dream homes in and around Vijayawada. With deep local knowledge and years of 
                experience, we understand the unique character of each neighborhood.
              </p>
              
              <p>
                Our dedicated team specializes in residential and commercial properties across 
                prime locations like Benz Circle, Moghalrajpuram, Auto Nagar, and Gannavaram. 
                We pride ourselves on providing transparent, honest, and personalized service.
              </p>
              
              <p>
                Whether you're a first-time buyer, seasoned investor, or looking to sell your 
                property, we're here to guide you through every step. Our mission is to make 
                your real estate journey smooth, informed, and successful.
              </p>
              
              <p className="text-primary font-semibold text-xl">
                Building trust, one home at a time.
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