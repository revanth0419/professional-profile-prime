import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "Web Development",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "#",
      live: "#",
      status: "Completed"
    },
    {
      title: "AI-Powered Task Manager",
      description: "Smart task management app using machine learning to predict task priorities and deadlines. Built with Python and TensorFlow.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      category: "Machine Learning",
      tech: ["Python", "TensorFlow", "Flask", "SQLite", "React"],
      github: "#",
      live: "#",
      status: "In Progress"
    },
    {
      title: "IoT Home Automation",
      description: "Smart home system with Arduino and Raspberry Pi. Controls lighting, temperature, and security systems via mobile app.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      category: "IoT",
      tech: ["Arduino", "Raspberry Pi", "Python", "React Native", "MQTT"],
      github: "#",
      live: "#",
      status: "Completed"
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat app with real-time messaging, file sharing, and video calls. Built with Socket.io and WebRTC.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
      category: "Web Development",
      tech: ["React", "Socket.io", "WebRTC", "Node.js", "PostgreSQL"],
      github: "#",
      live: "#",
      status: "Completed"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing large datasets with charts, graphs, and real-time updates using D3.js and Python.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Data Science",
      tech: ["Python", "D3.js", "Pandas", "Flask", "PostgreSQL"],
      github: "#",
      live: "#",
      status: "Completed"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "React Native app for tracking workouts, nutrition, and health metrics with social features and progress analytics.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      category: "Mobile Development",
      tech: ["React Native", "Firebase", "Redux", "Charts.js"],
      github: "#",
      live: "#",
      status: "In Progress"
    }
  ];

  const categories = ['All', 'Web Development', 'Machine Learning', 'IoT', 'Data Science', 'Mobile Development'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my technical projects and engineering solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`transition-all duration-200 ${
                filter === category 
                  ? 'bg-gradient-primary shadow-glow' 
                  : 'hover:bg-secondary/80'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
                <Badge 
                  className={`absolute top-4 right-4 ${
                    project.status === 'Completed' 
                      ? 'bg-success/20 text-success' 
                      : 'bg-warning/20 text-warning'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-2 font-medium">
                      Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-secondary/80"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-primary">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
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

export default Projects;