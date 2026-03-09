"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Full-Stack Web Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Developed and maintained scalable web applications using React, Next.js, and Node.js",
        "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40%",
        "Led a team of 3 developers in building a customer management system",
        "Optimized database queries and implemented caching strategies, improving performance by 60%"
      ]
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2021 - 2022",
      description: [
        "Built responsive web applications for clients using React and TypeScript",
        "Integrated REST APIs and handled state management with Redux",
        "Participated in code reviews and mentored junior developers",
        "Ensured cross-browser compatibility and responsive design"
      ]
    },
    {
      type: "work",
      title: "Junior Web Developer",
      company: "StartUp Hub",
      location: "Austin, TX",
      period: "2020 - 2021",
      description: [
        "Developed frontend components for a SaaS platform using Vue.js",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Worked with backend team to integrate APIs and troubleshoot issues",
        "Contributed to documentation and testing processes"
      ]
    }
  ];

  const education = [
    {
      type: "education",
      title: "Bachelor of Science in Computing",
      institution: "University of Greenwich",
      location: "London, England",
      period: "2022 - 2024",
      description: [
        "GPA: 3.8/4.0",
        "Dean's List: 6 semesters",
        "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems",
        "Computer Science Club - Web Development Team Lead"
      ]
    }
  ];

  const certifications = [
    {
      type: "certification",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Validated expertise in designing distributed systems on AWS"
    },
    {
      type: "certification",
      title: "React Advanced Patterns",
      issuer: "Udemy",
      date: "2022",
      description: "Advanced React concepts including hooks, context, and performance optimization"
    },
    {
      type: "certification",
      title: "Full-Stack Web Development",
      issuer: "Codecademy",
      date: "2021",
      description: "Comprehensive training in modern web development technologies"
    },
    {
      type: "certification",
      title: "DevOps Engineering",
      issuer: "ALX eHub",
      date: "2022",
      description: "CI/CD pipelines, containerization, and cloud deployment strategies"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return Calendar;
      case "education":
        return GraduationCap;
      case "certification":
        return Award;
      default:
        return Calendar;
    }
  };

  const renderItems = (title: string, items: any[], type: string) => (
    <div className="mb-12">
      <h3 className="text-2xl md:text-3xl font-bold mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {(() => {
                      const IconComponent = getIcon(type);
                      return <IconComponent className="w-5 h-5" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <div className="text-sm text-muted-foreground">
                      {item.company} | {item.location} | {item.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {Array.isArray(item.description) ? item.description.map((desc: string, descIndex: number) => (
                    <li key={descIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mr-2">▸</span>
                      {desc}
                    </li>
                  )) : (
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mr-2">▸</span>
                      {item.description}
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-900 dark:text-white max-w-4xl mx-auto">
            My professional journey and academic background, showcasing growth through 
            various roles and continuous learning in web development.
          </p>
        </motion.div>
        
        {renderItems("Professional Experience", experiences, "work")}
        {renderItems("Education", education, "education")}
        {renderItems("Certifications", certifications, "certification")}
      </div>
    </section>
  );
}
