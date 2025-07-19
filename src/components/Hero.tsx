import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Your Name</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Final Year Engineering Student
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Passionate about technology and innovation, with expertise in software development, 
                engineering design, and problem-solving. Ready to make an impact in the tech industry.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="hover:bg-secondary/80 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:bg-secondary/50">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-secondary/50">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-secondary/50">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img 
                  src={profilePhoto} 
                  alt="Your Name - Profile Photo"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-full bg-gradient-primary opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => scrollToSection('#about')}
            className="rounded-full hover:bg-secondary/50"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;