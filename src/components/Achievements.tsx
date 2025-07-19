import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, Star, Target, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "First Place - National Coding Competition",
      description: "Won first place in the national level coding competition with 500+ participants",
      date: "2023",
      category: "Competition",
      color: "text-yellow-500"
    },
    {
      icon: Award,
      title: "Dean's List Recognition",
      description: "Consistently maintained high academic performance and recognized by the Dean",
      date: "2022, 2023",
      category: "Academic",
      color: "text-blue-500"
    },
    {
      icon: Medal,
      title: "Best Final Year Project",
      description: "Selected as the best final year project for innovative AI-based solution",
      date: "2024",
      category: "Project",
      color: "text-green-500"
    },
    {
      icon: Star,
      title: "Hackathon Winner",
      description: "Won multiple hackathons including TechFest 2023 and CodeStorm 2024",
      date: "2023-2024",
      category: "Competition",
      color: "text-purple-500"
    },
    {
      icon: Target,
      title: "Research Paper Published",
      description: "Published research paper on machine learning applications in IEEE conference",
      date: "2023",
      category: "Research",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Tech Lead - College Club",
      description: "Led a team of 20+ students as Technical Lead of the Computer Science club",
      date: "2023-2024",
      category: "Leadership",
      color: "text-indigo-500"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-789012"
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "AZ-345678"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera (Stanford University)",
      date: "2023",
      credentialId: "ML-901234"
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialId: "FCC-567890"
    }
  ];

  const stats = [
    { number: "3.8", label: "GPA", suffix: "/4.0" },
    { number: "15+", label: "Projects", suffix: "" },
    { number: "5", label: "Certifications", suffix: "" },
    { number: "500+", label: "GitHub Commits", suffix: "" }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/10">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Recognition and certifications that showcase my dedication and expertise
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card/50 backdrop-blur-sm border-border/50 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}<span className="text-sm">{stat.suffix}</span>
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 animate-slide-in-left">
              🏆 Major Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="card-hover bg-card/50 backdrop-blur-sm border-border/50 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <achievement.icon className={`h-6 w-6 text-primary-foreground`} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-lg">{achievement.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {achievement.date}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                        <Badge 
                          variant="outline" 
                          className="text-xs border-primary/50 text-primary"
                        >
                          {achievement.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 animate-slide-in-right">
              📜 Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="card-hover bg-card/50 backdrop-blur-sm border-border/50 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {cert.date}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Issued by: <span className="font-medium">{cert.issuer}</span>
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">
                        Credential ID: {cert.credentialId}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;