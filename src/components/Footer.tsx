import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:renmakara.dev@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo/Name */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-joti font-bold text-foreground hover:gradient-text transition-all duration-300 cursor-pointer">
              REN MAKARA
            </h3>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-card rounded-full border border-border text-muted-foreground ${social.color} transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20`}
                  aria-label={social.label}
                >
                  <IconComponent size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-muted-foreground">
              © {currentYear} Ren Makara. All rights reserved.
            </p>

          </motion.div>

          {/* Animated Background Gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-gradient-start/5 via-transparent to-gradient-end/5 pointer-events-none"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;