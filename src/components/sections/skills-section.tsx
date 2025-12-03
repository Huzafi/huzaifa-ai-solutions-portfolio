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
      className="py-20 bg-[#000000] relative overflow-hidden"
    >
      {/* Subtle grid/particle background effect */}
      <div className="absolute inset-0 opacity-20">
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4"
              style={{
                textShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)'
              }}>
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full"
               style={{
                 background: 'linear-gradient(90deg, #00d4ff, #0099cc)',
                 boxShadow: '0 0 15px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.5)'
               }} />
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
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(15, 30, 50, 0.6)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon 
                  className="w-6 h-6"
                  style={{
                    color: '#00d4ff',
                    filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.8))'
                  }}
                />
                <h3 className="font-heading font-semibold text-xl text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-400">
                        {skill.name}
                      </span>
                      <span 
                        className="text-sm font-semibold"
                        style={{
                          color: '#00d4ff',
                          textShadow: '0 0 10px rgba(0, 212, 255, 0.8)'
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div 
                      className="relative w-full h-2 rounded-full overflow-hidden"
                      style={{
                        background: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(0, 212, 255, 0.2)'
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #00d4ff 0%, #00a8cc 100%)',
                          boxShadow: `
                            0 0 10px rgba(0, 212, 255, 0.9),
                            0 0 20px rgba(0, 212, 255, 0.6),
                            0 0 30px rgba(0, 212, 255, 0.4)
                          `
                        }}
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
