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
    image: "/ecommerce.png",
    technologies: ["Django", "Bootstrap", "Sqlite"],
    github: "https://github.com/RaGangMKR/ecommerce_django",
    live: "#",
    position: "left"
  }, {
    id: 2,
    title: "Inventory & Product Management System",
    description: "Collaborative project management tool with real-time updates and team features",
    image: "/inventory&product.jpg",
    technologies: ["SpringBoot", "Thymeleaf & Tailwind", "Oracle"],
    github: "https://github.com/RaGangMKR/SpringBoot-Ecom",
    live: "#",
    position: "right"
  }, {
    id: 3,
    title: "Library Management System",
    description: "Analytics dashboard for social media management with interactive charts",
    image: "/library.jpg",
    technologies: ["Laravel", "Tailwind", "PostgreSQL"],
    github: "https://github.com/RaGangMKR/TokTok",
    live: "#",
    position: "left"
  }, {
    id: 4,
    title: "Student Management System",
    description: "Educational platform with course management and student progress tracking",
    image: "/studentMs.png",
    technologies: ["SpringBoot", "Thymeleaf & Tailwind", "PostgreSQL"],
    github: "https://github.com/RaGangMKR/StudentMSWeb",
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

  const handleGithubClick = (githubUrl) => {
    console.log('Attempting to open:', githubUrl);
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return <section id="projects" ref={ref} className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div className="text-center mb-16">
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

                  {/* Action Buttons - Multiple approaches for maximum compatibility */}
                  
                  {/* Action Buttons - Plain HTML button approach */}
                  <div className="absolute flex flex-wrap justify-center w-full sm:w-auto">
                    <button
                        onClick={() => handleGithubClick(project.github)}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-primary text-primary bg-transparent rounded-md hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                        style={{cursor: 'pointer', pointerEvents: 'auto'}}
                    >
                      <Github size={16} className="mr-2"/>
                      View Code
                    </button>
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
          <Button
              size="lg"
              onClick={() => handleGithubClick('https://github.com/RaGangMKR')}
              className="gradient-btn text-primary-foreground font-semibold px-8 py-3 rounded-full cursor-pointer shadow-2xl hover:shadow-glow border-0"
              style={{ cursor: 'pointer', pointerEvents: 'auto' }}
          >
            <Github className="mr-2" size={20} />
            View All Projects
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>;
};

export default Projects;