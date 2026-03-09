import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Brand Section */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <span className="text-xl font-bold text-foreground">L&apos;s Portfolio</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  Passionate full-stack developer crafting beautiful, functional web experiences with modern technologies.
                </p>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">About</a>
                  <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Experience</a>
                  <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Skills</a>
                  <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Projects</a>
                </div>
              </div>

              {/* Connect */}
              <div className="text-center md:text-right">
                <h3 className="font-semibold text-foreground mb-4">Connect</h3>
                <div className="flex flex-wrap justify-center md:justify-end gap-3">
                  <a href="mailto:hello@example.com" className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs hover:bg-primary/20 transition-colors">
                    Email
                  </a>
                  <a href="https://github.com/l" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs hover:bg-primary/20 transition-colors">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/l" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs hover:bg-primary/20 transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200 dark:border-slate-700 mb-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  Built with <span className="text-primary font-semibold">Next.js</span>, <span className="text-primary font-semibold">TypeScript</span>, and <span className="text-primary font-semibold">Tailwind CSS</span>
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Available for work</span>
                </div>
                <div className="text-xs text-muted-foreground">•</div>
                <p className="text-xs text-primary font-bold">
                  2026 L&apos;s Portfolio. All rights reserved.
                </p>
              </div>
            </div>

            {/* Tech Stack Icons */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-wrap justify-center gap-6 opacity-60">
                <div className="text-xs text-muted-foreground">React</div>
                <div className="text-xs text-muted-foreground">Next.js</div>
                <div className="text-xs text-muted-foreground">TypeScript</div>
                <div className="text-xs text-muted-foreground">Tailwind</div>
                <div className="text-xs text-muted-foreground">Node.js</div>
                <div className="text-xs text-muted-foreground">Git</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
