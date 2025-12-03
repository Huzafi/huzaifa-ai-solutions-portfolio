import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import logo from "@/assets/logo.png";
interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}
const Navigation = ({
  activeSection,
  onSectionClick
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [{
    id: "home",
    label: "Home"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "skills",
    label: "Skills"
  }, {
    id: "services",
    label: "Services"
  }, {
    id: "projects",
    label: "Projects"
  }, {
    id: "contact",
    label: "Contact"
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" initial={{
    opacity: 1,
    y: 0
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">

          {/* 💠 Logo */}
          <motion.div className="relative w-14 h-14 flex items-center justify-center cursor-pointer transition-transform duration-300 rounded-full bg-card border border-border" whileHover={{
          scale: 1.1
        }} transition={{
          type: "spring",
          stiffness: 300
        }}>
            <img src={logo} alt="HS Logo" className="w-full h-full object-contain rounded-full" />
          </motion.div>

          {/* 🖥 Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`transition-all duration-300 font-medium px-6 py-2 rounded-full ${
                  activeSection === item.id 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* 🌓 Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* 📱 Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>

        </div>
      </div>
    </motion.nav>;
};
export default Navigation;