import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0 },
  };

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-background">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto rounded-full" />
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Passionate About Creating Digital Experiences
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a third-year Computer Science student passionate about web
                development. I enjoy learning cutting-edge technologies and
                building innovative projects to solve real-world challenges.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in web development started with curiosity and has
                evolved into a deep passion for creating beautiful, functional,
                and user-friendly applications. I believe in writing clean,
                maintainable code and staying up-to-date with the latest
                industry trends and best practices.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <h4 className="text-2xl font-bold gradient-text mb-2">20+</h4>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <h4 className="text-2xl font-bold gradient-text mb-2">1+</h4>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative z-10"
                >
                  <img
                    src="/unnamed.png"
                    alt="Ren Makara Profile"
                    className="w-[450px] object-cover rounded-full border-4 border-primary/50 shadow-2xl"
                  />
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-4  xl bg-gradient-to-r from-gradient-start to-gradient-end opacity-20 blur-xl" />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-start/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-end/20 rounded-full blur-xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
