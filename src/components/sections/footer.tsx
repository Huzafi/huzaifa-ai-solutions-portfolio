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
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2025 Huzaifa Sheikh. All Rights Reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onSectionClick(link.id)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;