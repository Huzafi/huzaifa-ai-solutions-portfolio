import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-card/60 backdrop-blur-lg"
      }`}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* 💠 Logo */}
          <motion.div
            className="relative w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl 
            text-primary cursor-pointer shadow-medium"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="relative z-10">HS</span>
            <div className="absolute inset-0 rounded-full gradient-hero opacity-50 blur-md" />
          </motion.div>

          {/* 🖥 Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => onSectionClick(item.id)}
                  className={`transition-all duration-300 font-medium px-5 py-2 rounded-lg ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-medium"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}

            {/* 🌓 Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* 📱 Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary hover:bg-accent"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
