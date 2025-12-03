import { motion } from "framer-motion";
import { Bot, Cpu, Code, Cloud, LucideIcon } from "lucide-react";

const SkillsSection = () => {
  const skillCategories: {
    title: string;
    icon: LucideIcon;
    skills: { name: string; level: number }[];
  }[] = [
    {
      title: "AI & Automation",
      icon: Bot,
      skills: [
        { name: "OpenAI Agents SDK", level: 90 },
        { name: "LangGraph", level: 85 },
        { name: "MCP", level: 80 },
        { name: "Agent Kit", level: 95 },
        { name: "n8n", level: 88 },
      ],
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "Node.js", level: 88 },
        { name: "API Development", level: 92 },
        { name: "Full-Stack Programming / Development", level: 85 },
        { name: "System Design", level: 88 },
      ],
    },
    {
      title: "Web Technologies",
      icon: Cloud,
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "Streamlit/Chainlit", level: 87 },
        { name: "Cloud", level: 82 },
        { name: "Micro-Services/Containerize", level: 90 },
        { name: "Vercel/Render", level: 88 },
      ],
    },
    {
      title: "Integrations",
      icon: Cpu,
      skills: [
        { name: "API Integration", level: 90 },
        { name: "Rag Integration", level: 85 },
        { name: "AI Integration", level: 88 },
        { name: "Vector Database Integration", level: 85 },
        { name: "OpenAI/Gemini API", level: 92 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Subtle grid/particle background effect - only visible in dark mode */}
      <div className="absolute inset-0 opacity-20 dark:opacity-20 opacity-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
          <div className="w-20 h-1 mx-auto rounded-full gradient-hero" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 bg-card border border-border hover:shadow-[0_0_20px_rgba(0,255,255,0.3),0_0_40px_rgba(0,255,255,0.1)] hover:border-[rgba(0,255,255,0.6)]"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon 
                  className="w-6 h-6 text-primary"
                />
                <h3 className="font-heading font-semibold text-xl text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full h-2 rounded-full overflow-hidden bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
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
