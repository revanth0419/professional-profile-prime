import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "University Name",
      period: "2021 - 2024",
      gpa: "8.5/10",
      status: "Final Year",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, Software Engineering",
        "Key Projects: Web Development, Machine Learning, Database Management",
        "Dean's List for Academic Excellence (2022, 2023)"
      ]
    },
    {
      degree: "Higher Secondary Certificate (PCM)",
      institution: "School Name",
      period: "2019 - 2021",
      gpa: "92%",
      status: "Completed",
      highlights: [
        "Science Stream with Mathematics, Physics, Chemistry",
        "School Topper in Computer Science",
        "Participated in National Science Olympiad"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My academic journey and educational achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  
                  {/* Left - Icon and Status */}
                  <div className="md:col-span-1 flex flex-col items-center md:items-start">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Final Year' 
                        ? 'bg-warning/20 text-warning' 
                        : 'bg-success/20 text-success'
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Right - Content */}
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="font-semibold text-primary">
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;