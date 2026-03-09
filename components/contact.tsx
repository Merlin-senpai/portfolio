"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/l",
      href: "https://github.com/l"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/l",
      href: "https://linkedin.com/in/l"
    },
    {
      icon: Mail,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-900 dark:text-white max-w-4xl mx-auto">
            I&apos;m always interested in hearing about new opportunities, collaborations, 
            or exciting projects. Feel free to reach out through any of the channels below.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl">Email</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm font-medium">hello@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm font-medium">(+233) 0500000000/(+229) 0100000000</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm font-medium">github.com/Merlin-senpai</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm font-medium">linkedin.com/in/l</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl">Location</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed">
                    Available for freelance opportunities and collaborations. 
                    Currently based in Accra, Ghana/ Cotonou, Benin but open to remote work 
                    for the right opportunity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
