import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  const projects = [{
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI and secure payment integration",
    image: "https://via.placeholder.com/400x200/1F1F1F/4F46E5?text=E-Commerce",
    technologies: ["React.js", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    position: "left"
  }, {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features",
    image: "https://via.placeholder.com/400x200/1F1F1F/EC4899?text=Task+Manager",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    github: "#",
    live: "#",
    position: "right"
  }, {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with interactive charts",
    image: "https://via.placeholder.com/400x200/1F1F1F/10B981?text=Dashboard",
    technologies: ["React.js", "Django", "PostgreSQL"],
    github: "#",
    live: "#",
    position: "left"
  }, {
    id: 4,
    title: "Learning Management System",
    description: "Educational platform with course management and student progress tracking",
    image: "https://via.placeholder.com/400x200/1F1F1F/F59E0B?text=LMS",
    technologies: ["Angular", "Spring Boot", "Oracle"],
    github: "#",
    live: "#",
    position: "right"
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  };
  return <section id="projects" ref={ref} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="relative">
            {/* Vertical Dash Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gradient-start via-gradient-end to-gradient-start opacity-30" />
            
            <div className="space-y-16">
              {projects.map((project, index) => <motion.div key={project.id} variants={cardVariants} className={`relative flex flex-col lg:flex-row items-center gap-8 ${project.position === 'right' ? 'lg:flex-row-reverse' : project.position === 'center' ? 'lg:justify-center' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full z-10 shadow-lg" />
                  
                  {/* Project Card */}
                  <motion.div whileHover={{
                scale: 1.05,
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }} className={`
                      gradient-border bg-card rounded-xl overflow-hidden shadow-2xl max-w-lg w-full
                      ${project.position === 'center' ? 'lg:max-w-md' : ''}
                    `}>
                    {/* Project Image */}
                    <div className="relative overflow-hidden group">
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-0" />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map(tech => <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border">
                            {tech}
                          </span>)}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-2" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacing for layout */}
                  {project.position !== 'center' && <div className="hidden lg:block flex-1" />}
                </motion.div>)}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-muted-foreground text-lg mb-6">
              Want to see more of my work?
            </p>
            <Button size="lg" className="gradient-btn text-primary-foreground font-semibold px-8 py-3 rounded-full" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                View All Projects
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Projects;