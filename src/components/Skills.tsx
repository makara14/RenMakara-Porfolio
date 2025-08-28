import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaJava, 
  FaPython, FaPhp, FaGitAlt, FaDocker 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiSharp, SiSpring, SiLaravel, SiDjango, 
  SiDotnet, SiPostgresql, SiMysql, SiOracle,
  SiThemoviedatabase,
  SiP5Dotjs
} from 'react-icons/si';
import { DiMsqlServer } from "react-icons/di";
import { Github } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = {
    frontend: {
      title: 'Front-end',
      skills: [
        { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
        { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      ]
    },
    backend: {
      title: 'Back-end',
      skills: [
        { name: 'Java', icon: FaJava, color: '#ED8B00' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'C#', icon: SiSharp, color: '#239120' },
        { name: 'PHP', icon: FaPhp, color: '#777BB4' },
      ]
    },
    frameworks: {
      title: 'Frameworks',
      skills: [
        { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
        { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
        { name: 'Django', icon: SiDjango, color: '#092E20' },
        { name: '.NET', icon: SiDotnet, color: '#512BD4' },
      ]
    },
    database: {
      title: 'Database',
      skills: [
        { name: 'SQL Server', icon: DiMsqlServer, color: '#ff0400ff' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Oracle', icon: SiOracle, color: '#F80000' },
      ]
    },
    tools: {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'GitHub', icon: Github, color: '#ffffffff' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto rounded-full" />
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'gradient-btn text-primary-foreground shadow-lg'
                    : 'bg-card text-foreground hover:bg-card/80 border border-border'
                }`}
              >
                {category.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="gradient-border bg-card p-6 rounded-xl text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-4"
                  >
                    <IconComponent 
                      size={48} 
                      style={{ color: skill.color }}
                      className="group-hover:drop-shadow-lg transition-all duration-300"
                    />
                  </motion.div>
                  <h3 className="text-foreground font-semibold text-lg group-hover:gradient-text transition-all duration-300">
                    {skill.name}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Category Description */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {activeCategory === 'frontend' && "Creating beautiful and responsive user interfaces with modern web technologies."}
              {activeCategory === 'backend' && "Building robust server-side applications and APIs with various programming languages."}
              {activeCategory === 'frameworks' && "Leveraging powerful frameworks to accelerate development and ensure best practices."}
              {activeCategory === 'database' && "Managing and optimizing data storage solutions for scalable applications."}
              {activeCategory === 'tools' && "Using essential development tools for version control, containerization, and workflow optimization."}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;