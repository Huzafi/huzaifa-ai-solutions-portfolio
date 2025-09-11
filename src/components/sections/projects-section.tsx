import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI Resume Analyzer",
      description: "Intelligent resume analysis and optimization tool",
      image: "🤖",
      details: "Advanced AI-powered resume analyzer that provides detailed feedback, keyword optimization, and formatting suggestions to help job seekers improve their resumes.",
      technologies: ["Python", "OpenAI API", "FastAPI", "Streamlit"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Writer Agent",
      description: "AI content generation and editing assistant",
      image: "✍️",
      details: "Intelligent writing assistant that helps create, edit, and optimize content across various formats including blogs, emails, and marketing copy.",
      technologies: ["LangGraph", "OpenAI", "FastAPI", "React"],
      githubUrl: "https://github.com/Huzafi/Expert_Writing_Agent",
      liveUrl: "https://writer-agent.streamlit.app/",
    },
    {
      id: 3,
      title: "Coding Agent",
      description: "AI-powered code review and generation tool",
      image: "💻",
      details: "Smart coding assistant that provides code reviews, generates documentation, and helps with debugging and optimization tasks.",
      technologies: ["Python", "GitHub API", "OpenAI", "Chainlit"],
      githubUrl: "https://github.com/Huzafi/Expert_Coding_Agent",
      liveUrl: "https://expert-coding-agent.streamlit.app/",
    },
    {
      id: 4,
      title: "AI Chat Assistant",
      description: "Conversational AI for customer support",
      image: "💬",
      details: "Intelligent chatbot solution for businesses to automate customer support, handle inquiries, and provide 24/7 assistance.",
      technologies: ["Node.js", "OpenAI", "WebSocket", "React"],
      githubUrl: "https://github.com/Huzafi/AI_Chat_Assistant-Agent",
      liveUrl: "https://agentbot.streamlit.app/",
    },
    {
      id: 5,
      title: "LinkedIn Automation Agent",
      description: "Automated LinkedIn outreach and networking",
      image: "🔗",
      details: "Automation tool for LinkedIn that helps with connection requests, messaging, and profile optimization while maintaining authenticity.",
      technologies: ["Python", "LinkedIn API", "Selenium", "FastAPI"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 6,
      title: "Gmail Agent",
      description: "Smart email management and automation",
      image: "📧",
      details: "AI-powered email assistant that categorizes emails, generates responses, and automates routine email tasks to boost productivity.",
      technologies: ["Python", "Gmail API", "OpenAI", "n8n"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my recent work in AI and automation, showcasing innovative
            solutions that solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="font-heading">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-base leading-relaxed">
                          {project.details}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button variant="default" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;