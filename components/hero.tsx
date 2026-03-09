"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const userName = process.env.NEXT_PUBLIC_USER_NAME || "L";

  const downloadResume = () => {
    const resumeContent = `
      <html>
        <head>
          <title>${userName}'s Resume</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 40px;
              color: #333;
            }
            h1 {
              color: #2c3e50;
              border-bottom: 3px solid #3498db;
              padding-bottom: 10px;
            }
            h2 {
              color: #34495e;
              margin-top: 30px;
            }
            .contact {
              background: #f8f9fa;
              padding: 15px;
              border-radius: 5px;
              margin: 20px 0;
            }
            .section {
              margin: 25px 0;
            }
            ul {
              margin: 10px 0;
              padding-left: 20px;
            }
            li {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <h1>${userName}</h1>
          <div class="contact">
            <p><strong>Email:</strong> hello@example.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Location:</strong> San Francisco, CA</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/l</p>
            <p><strong>GitHub:</strong> github.com/l</p>
          </div>
          
          <div class="section">
            <h2>Professional Summary</h2>
            <p>Passionate full-stack web developer with expertise in modern web technologies. 
            Currently learning and building projects with React, Next.js, Node.js, and various 
            other frameworks and tools.</p>
          </div>
          
          <div class="section">
            <h2>Skills</h2>
            <ul>
              <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
              <li>Backend: Node.js, Express, MongoDB, PostgreSQL</li>
              <li>Tools: Git, Docker, CI/CD, AWS</li>
              <li>Other: REST APIs, GraphQL, Responsive Design</li>
            </ul>
          </div>
          
          <div class="section">
            <h2>Experience</h2>
            <h3>Full-Stack Web Developer</h3>
            <p><strong>Tech Solutions Inc.</strong> | 2022 - Present</p>
            <ul>
              <li>Developed and maintained scalable web applications using React, Next.js, and Node.js</li>
              <li>Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40%</li>
              <li>Led a team of 3 developers in building a customer management system</li>
              <li>Optimized database queries and implemented caching strategies, improving performance by 60%</li>
            </ul>
            
            <h3>Frontend Developer</h3>
            <p><strong>Digital Agency Pro</strong> | 2021 - 2022</p>
            <ul>
              <li>Built responsive web applications for clients using React and TypeScript</li>
              <li>Integrated REST APIs and handled state management with Redux</li>
              <li>Participated in code reviews and mentored junior developers</li>
              <li>Ensured cross-browser compatibility and responsive design</li>
            </ul>
          </div>
          
          <div class="section">
            <h2>Education</h2>
            <h3>Bachelor of Science in Computer Science</h3>
            <p><strong>University of Technology</strong> | 2016 - 2020</p>
            <p>GPA: 3.8/4.0 | Dean's List: 6 semesters</p>
          </div>
          
          <div class="section">
            <h2>Certifications</h2>
            <ul>
              <li>AWS Certified Solutions Architect (2023)</li>
              <li>React Advanced Patterns (2022)</li>
              <li>Full-Stack Web Development (2021)</li>
              <li>DevOps Engineering (2022)</li>
            </ul>
          </div>
        </body>
      </html>
    `;

    const blob = new Blob([resumeContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    
    iframe.onload = () => {
      iframe.contentWindow?.print();
      setTimeout(() => {
        document.body.removeChild(iframe);
        URL.revokeObjectURL(url);
      }, 1000);
    };
    
    iframe.src = url;
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950 dark:via-blue-950 dark:to-pink-950">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I&apos;m {userName}
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-800 dark:text-white mb-6">
              Full-Stack Web Developer
            </h2>

            <p className="text-lg text-gray-900 dark:text-gray-100 mb-8 max-w-lg mx-auto lg:mx-0">
              Passionate about creating beautiful, functional web applications. 
              Currently learning and building projects with modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Download Resume
              </motion.button>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  {userName}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
