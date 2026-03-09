"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
  Cloud, 
  GitBranch
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 65},
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 88 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-green-600 dark:text-green-300",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "PHP / Laravel", level: 70 },
        { name: "WordPress", level: 80 },
        { name: "REST APIs", level: 50 },
        { name: "GraphQL", level: 50 },
        { name: "MySQL", level: 80 },
        { name: "Oracle Database", level: 60 },
        { name: "PostgreSQL", level: 40 },
        { name: "MongoDB", level: 40 },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "text-purple-600 dark:text-purple-300",
      skills: [
        { name: "GitHub Actions (CI/CD)", level: 80 },
        { name: "GitLab CI/CD", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 72 },
        { name: "Kubernetes", level: 65 },
        { name: "Nginx", level: 78 }
      ]
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      color: "text-orange-600 dark:text-orange-300",
      skills: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 70 },
        { name: "Axure RP", level: 70 },
        { name: "VS Code", level: 95 },
        { name: "Windsurf", level: 80 },
        { name: "Linux", level: 78 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-600 dark:text-white">Skills & Tech Stack</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-900 dark:text-white max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across frontend development, 
            backend systems, DevOps practices, and development tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
                        <span className="text-xs text-gray-600 dark:text-gray-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Git"].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 border border-purple-200 dark:border-purple-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
