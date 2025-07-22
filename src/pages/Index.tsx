import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedListings from '@/components/FeaturedListings';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedListings />
        <About />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
