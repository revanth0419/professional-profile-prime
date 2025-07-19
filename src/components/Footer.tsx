import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Left Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Your Name</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Final-year engineering student passionate about technology, 
              innovation, and creating solutions that make a difference.
            </p>
          </div>

          {/* Middle Section */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">Education</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">Achievements</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <h4 className="font-semibold">Currently</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>🎓 Completing final year of Engineering</p>
              <p>💼 Open to internship opportunities</p>
              <p>🚀 Building innovative projects</p>
              <p>📚 Continuous learning and growth</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by Your Name</span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-secondary/50 rounded-full"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;