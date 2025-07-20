import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Start Your Property Journey with RiverStone Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who found their dream properties with us. 
            Let our experts guide you to the perfect investment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="gap-2 px-8 py-6 text-lg bg-background text-foreground hover:bg-background/90"
            >
              <Phone className="w-5 h-5" />
              Request a Callback
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 px-8 py-6 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View All Properties
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;