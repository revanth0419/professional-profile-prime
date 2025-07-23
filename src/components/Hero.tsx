import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-vijayawada.jpg';

const Hero = () => {
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Vijayawada, Andhra Pradesh</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Find Your Perfect{' '}
            <span className="gradient-text">Property</span>{' '}
            in Vijayawada
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore luxury apartments, premium villas, secure plots, and thriving commercial spaces — all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          
          {/* Key Areas */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {['Benz Circle', 'Moghalrajpuram', 'Kanuru', 'Bhavanipuram'].map((area) => (
              <div key={area} className="bg-secondary/50 backdrop-blur-sm rounded-lg p-3 border border-border">
                <span className="text-sm font-medium text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;