"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Database, Cloud, GitBranch } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS, responsive design",
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Node.js, Python, REST APIs, GraphQL, database design",
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "CI/CD pipelines, GitHub Actions, GitLab, AWS deployment",
    },
    {
      icon: GitBranch,
      title: "Workflow Hygiene",
      description: "Git best practices, .gitignore, secure API design, testing",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-900 dark:text-white mb-4">
              I&apos;m a passionate web developer with a strong foundation in both frontend 
              and backend technologies. My journey in web development started with a 
              curiosity about how websites work and evolved into a career focused on 
              building robust, scalable applications.
            </p>
            <p className="text-gray-900 dark:text-white mb-4">
              I specialize in modern JavaScript frameworks, particularly React and Next.js, 
              and have experience building full-stack applications from concept to deployment. 
              My approach combines technical excellence with attention to user experience, 
              ensuring that the applications I build are not only functional but also 
              delightful to use.
            </p>
            <p className="text-gray-900 dark:text-white">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge through technical writing. 
                  I believe in continuous learning and staying up-to-date with the latest 
                  industry trends and best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{skill.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900 dark:text-white text-sm mb-4">
                  {skill.description}
                </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
