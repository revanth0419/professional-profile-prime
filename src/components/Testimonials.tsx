import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Lakshmi Prasad',
      location: 'Moghalrajpuram',
      text: 'We bought a 3BHK in Moghalrajpuram through RiverStone. They made the entire process so smooth and professional.',
      rating: 5
    },
    {
      name: 'Arjun Reddy',
      location: 'NRI Buyer',
      text: 'Very knowledgeable about Vijayawada\'s real estate market. Great for NRI buyers like me.',
      rating: 5
    },
    {
      name: 'Shalini G.',
      location: 'Benz Circle',
      text: 'Highly recommend for anyone wanting to invest in Vijayawada property!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real experiences from satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-8 text-center">
                <Quote className="w-10 h-10 text-primary mx-auto mb-6 opacity-60" />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;