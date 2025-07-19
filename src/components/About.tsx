import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  const qualities = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Passionate about writing clean, efficient code and staying updated with latest technologies."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always looking for creative solutions to complex problems and challenges."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality results within deadlines and exceeding expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Excellent team player with strong communication and leadership skills."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Learn more about my journey, passion, and what drives me as an engineering student
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a final-year engineering student, I've developed a deep passion for technology 
                and its potential to solve real-world problems. My academic journey has been 
                enriched with hands-on projects, internships, and continuous learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of innovation and collaboration. Whether it's developing 
                software solutions, working on engineering designs, or leading team projects, 
                I approach every challenge with enthusiasm and dedication.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Currently pursuing Bachelor's in Engineering</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Expected graduation: 2024</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Actively seeking internship and job opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Content - Qualities Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {qualities.map((quality, index) => (
              <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <quality.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">{quality.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {quality.description}
                  </p>
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