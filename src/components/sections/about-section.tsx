import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { GraduationCap, Download } from "lucide-react";

const AboutSection = () => {
  const educationTimeline = [
    {
      year: "2019",
      title: "Matriculation",
      institution: "The Educators School",
      status: "Completed",
    },
    {
      year: "2025",
      title: "Intermediate in Computer Science",
      institution: "DJ Science College",
      status: "Ongoing",
    },
    {
      year: "2024",
      title: "Agentic AI Engineer/Developer",
      institution: "PIAIC",
      status: "Ongoing",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm Huzaifa Sheikh, a passionate developer specializing in AI and
                automation. I love building intelligent agents and workflow
                automations that make processes smarter and more efficient.
              </p>
              <p className="text-lg leading-relaxed">
                I'm constantly exploring new AI technologies to create innovative
                solutions that solve real-world problems and enhance productivity
                for businesses and individuals.
              </p>
            </div>

            <Button 
              variant="hero" 
              className="shadow-medium hover:shadow-strong"
              asChild
            >
              <a 
                href="https://drive.google.com/uc?export=download&id=1cEbGB5zrJi6Qp69iRYA2BB6OOCeghAha"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading font-semibold text-xl text-foreground flex items-center">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              Education
            </h3>

            <div className="space-y-6">
              {educationTimeline.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-primary before:shadow-glow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="bg-card border border-border rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-heading font-semibold text-primary">
                        {edu.year}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          edu.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {edu.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {edu.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;