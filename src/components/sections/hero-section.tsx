import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/button";
import profileImage from "../../assets/huzaifa-new-profile.jpg";

interface HeroSectionProps {
  onSectionClick: (section: string) => void;
}

const HeroSection = ({ onSectionClick }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-subtle">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-full blur-xl opacity-30 animate-glow"></div>
              <img
                src={profileImage}
                alt="Huzaifa Sheikh - AI & Automation Developer"
                className="relative w-80 h-80 object-cover object-center rounded-full shadow-strong border-4 border-primary/20"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-primary bg-clip-text text-transparent">
                Huzaifa Sheikh
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary">
                <TypeAnimation
                  sequence={[
                    'Agentic AI Developer',
                    1500,
                    'Automations and Web Dev Expert',
                    1500,
                    'Building Smart AI Systems',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Building intelligent agents & automation workflows to make
              processes smarter and more efficient.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => onSectionClick("projects")}
                className="shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
              >
                Explore My Work
              </Button>
              <Button
                variant="hero"
                size="lg"
                onClick={() => onSectionClick("contact")}
                className="shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;