import { motion } from "framer-motion";

interface FooterProps {
  onSectionClick: (section: string) => void;
}

const Footer = ({ onSectionClick }: FooterProps) => {
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-transparent border-t border-border/50 py-12 shadow-[0_-4px_30px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {quickLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => onSectionClick(link.id)}
                className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground/80 text-sm">
              © 2025 Huzaifa Sheikh. All Rights Reserved.
            </p>
            <p className="text-muted-foreground/60 text-sm flex items-center justify-center gap-1">
              Crafted with <span className="text-red-500 animate-pulse">❤️</span> by Huzaifa Sheikh
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
