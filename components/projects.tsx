"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design. Features include user authentication, shopping cart, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, and comprehensive analytics dashboard.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Weather Dashboard",
      description: "Modern weather application with location-based forecasts, interactive maps, historical data visualization, and severe weather alerts.",
      tech: ["Next.js", "TypeScript", "Weather API", "Chart.js", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Blog Platform",
      description: "Content management system with markdown support, SEO optimization, comment system, and social media integration. Features admin panel and analytics.",
      tech: ["React", "Node.js", "Express", "MongoDB", "MDX"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search filters, virtual tours, mortgage calculator, and agent communication system.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Mapbox"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "DevOps Pipeline Tool",
      description: "CI/CD automation tool with GitHub Actions integration, deployment monitoring, rollback capabilities, and performance analytics.",
      tech: ["Node.js", "React", "GitHub API", "Docker", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-900 dark:text-white max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            from frontend interfaces to backend systems and DevOps automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-900 dark:text-white mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2 flex-1">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-2 flex-1">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
