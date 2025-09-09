import { motion } from "framer-motion";
import {
  Bot,
  Cpu,
  Code,
  Zap,
  Database,
  Cloud,
  Workflow,
  MessageSquare,
  Settings,
  Brain,
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI & Automation",
      skills: [
        { name: "OpenAI Agents SDK", icon: Bot },
        { name: "LangGraph", icon: Brain },
        { name: "MCP", icon: Workflow },
        { name: "n8n", icon: Settings },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: Code },
        { name: "Node.js", icon: Cpu },
        { name: "API Development", icon: Zap },
        { name: "System Design", icon: Database },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "FastAPI", icon: Cloud },
        { name: "Streamlit", icon: Code },
        { name: "Chainlit", icon: MessageSquare },
        { name: "Vercel/Render", icon: Cloud },
      ],
    },
    {
      title: "Integrations",
      skills: [
        { name: "Google Sheets API", icon: Database },
        { name: "LinkedIn API", icon: MessageSquare },
        { name: "Gmail API", icon: MessageSquare },
        { name: "Gemini API", icon: Brain },
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-4"
              variants={itemVariants}
            >
              <h3 className="font-heading font-semibold text-lg text-primary text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="bg-card border border-border rounded-lg p-4 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group cursor-pointer"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-5 h-5 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;