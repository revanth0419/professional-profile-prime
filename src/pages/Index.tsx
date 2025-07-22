import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedListings from '@/components/FeaturedListings';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedListings />
        <Testimonials />
        <Blog />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
