import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion } from "framer-motion";
import {Check, Download} from "lucide-react";
import Typed from "typed.js";
import cvPdfUrl from "../../public/Ren-Makara-CV.pdf";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // TODO: Replace this with the actual path to your resume PDF file.

  const cvPdfUrl = "/Ren-Makara-CV.pdf";

  const handleDownload = () => {
    setIsLoading(true);
    setIsCompleted(false);

    // Simulate a process to allow the loading animation to run
    setTimeout(() => {
      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = cvPdfUrl;
      link.download = "Ren-Makara-CV.pdf"; // The name for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up the link element

      // Set loading to false and completed to true
      setIsLoading(false);
      setIsCompleted(true);

      // Reset the button state after 2 seconds
      setTimeout(() => {
        setIsCompleted(false);
      }, 1000);
    }, 2000); // 3-second loading animation
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const loadingBarVariants = {
    initial: { width: 0 },
    animate: {
      width: '100%',
      transition: { duration: 3, ease: 'linear' }
    },
  };

  const iconVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 }
  }

  const typedRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Frontend Developer", "Backend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-48 h-8 bg-gradient-start blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-56 h-8 bg-gradient-end blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-52 h-8 bg-primary blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto px-6"
      >
        {/* Hii section */}
        <motion.div variants={itemVariants} className="mb-5 flex flex-col justify-center items-center w-full">
          <div className="mb-6 text-3xl p-6 rounded-full bg-[#222222] shadow-amber-200 ">🙏</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Hi, I'm Ren Makara </h1>
        </motion.div>
        {/* Animated position */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-foreground mb-4">
            <span ref={typedRef} className="gradient-text"></span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-2xl mx-auto"
        >
          A passionate Backend Developer who builds reliable and scalable web solutions using modern technologies.
        </motion.p>

        {/* CTA Button */}
        <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={handleDownload}
            disabled={isLoading || isCompleted}
            className="relative overflow-hidden w-64 h-16 text-lg font-semibold rounded-full shadow-2xl border-0 bg-gradient-to-r from-purple-500 to-indigo-600 text-white "
        >
          {/* Loading Bar Animation */}
          <AnimatePresence>
            {isLoading && (
                <motion.div

                    initial="initial"
                    animate="animate"
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                    style={{ zIndex: 1 }}
                />
            )}
          </AnimatePresence>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <AnimatePresence mode="wait">
              {isLoading ? (
                  <motion.span
                      key="loading"
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="text-white"
                  >
                    Downloading...
                  </motion.span>
              ) : isCompleted ? (
                  <motion.div
                      key="completed"
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex items-center"
                  >
                    <Check className="mr-2" size={24} />
                    Done!
                  </motion.div>
              ) : (
                  <motion.div
                      key="default"
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex items-center"
                  >
                    <Download className="mr-2" size={20} />
                    Download Resume
                  </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>

        {/* Floating Animation Indicator */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        ></motion.div>
      </motion.div>
    </section>
  );
};
export default Hero;
