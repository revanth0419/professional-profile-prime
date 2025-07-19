import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Wrench, Cpu, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "TypeScript", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Express.js", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Database & Backend",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Linux", level: 80 },
        { name: "Figma", level: 85 },
        { name: "Postman", level: 90 }
      ]
    },
    {
      title: "Engineering Skills",
      icon: Cpu,
      skills: [
        { name: "Data Structures", level: 90 },
        { name: "Algorithms", level: 85 },
        { name: "System Design", level: 75 },
        { name: "Problem Solving", level: 95 },
        { name: "Software Architecture", level: 80 },
        { name: "Testing", level: 85 }
      ]
    },
    {
      title: "Version Control & Collaboration",
      icon: GitBranch,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Team Leadership", level: 85 },
        { name: "Agile/Scrum", level: 80 },
        { name: "Project Management", level: 85 },
        { name: "Documentation", level: 90 },
        { name: "Code Review", level: 85 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-success';
    if (level >= 80) return 'bg-primary';
    if (level >= 70) return 'bg-warning';
    return 'bg-muted';
  };

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;