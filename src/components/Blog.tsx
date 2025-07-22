import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Vijayawada Real Estate Market Trends 2024',
      excerpt: 'Discover the latest trends in Vijayawada property market, including price movements and emerging localities.',
      author: 'RiverStone Team',
      date: 'March 15, 2024',
      category: 'Market Analysis',
      image: 'photo-1487958449943-2429e8be8625'
    },
    {
      id: 2,
      title: 'Best Localities to Invest in Vijayawada',
      excerpt: 'Complete guide to prime residential areas including Benz Circle, Moghalrajpuram, and emerging locations.',
      author: 'Property Expert',
      date: 'March 10, 2024',
      category: 'Investment Guide',
      image: 'photo-1518005020951-eccb494ad742'
    },
    {
      id: 3,
      title: 'Home Buying Process: A Complete Guide',
      excerpt: 'Step-by-step guide for first-time home buyers in Vijayawada, from documentation to final registration.',
      author: 'Legal Advisor',
      date: 'March 5, 2024',
      category: 'Buyer Guide',
      image: 'photo-1496307653780-42ee777d4833'
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest real estate trends and market insights in Vijayawada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="card-hover overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;