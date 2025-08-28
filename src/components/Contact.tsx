import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({ type: null, msg: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      from_name: String(formData.get("name") || ""),
      from_email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    // Basic validation
    if (!payload.from_name || !payload.from_email || !payload.message) {
      setStatus({
        type: "error",
        msg: "Please fill in name, email, and message.",
      });
      return;
    }

    try {
      setSending(true);
      setStatus({ type: null, msg: "" });

      await emailjs.send(
        "service_3de5p6h",
        "template_mvfkzmu",
        payload,
        "WfAbPmn7rVKwr_t_n"
      );

      setStatus({
        type: "success",
        msg: "Thanks! Your message has been sent.",
      });
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        msg: "Failed to send. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "makara00814@gmail.com",
      link: "mailto:makara00814@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+855 963 044 008",
      link: "tel:+855963044008",
      color: "text-green-400",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chhuk Meas, Sen Sok, Phnom Penh, Cambodia",
      link: "#",
      color: "text-red-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-secondary/20">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and
              exciting projects. Let's connect and discuss how we can work
              together!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="gradient-border bg-card p-8 rounded-xl text-center group cursor-pointer"
                  onClick={() => {
                    if (info.link !== "#") {
                      window.open(
                        info.link,
                        info.link.startsWith("mailto:") ||
                          info.link.startsWith("tel:")
                          ? "_self"
                          : "_blank"
                      );
                    }
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-6"
                  >
                    <div
                      className={`p-4 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end shadow-lg`}
                    >
                      <IconComponent size={32} className="text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                    {info.title}
                  </h3>

                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {info.value}
                  </p>

                  {/* Animated background effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-gradient-start to-gradient-end rounded-xl"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}

          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Send Me a Message
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-border p-6 rounded-xl bg-card max-w-3xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground font-medium mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-foreground font-medium mb-2">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={sending}
              className="gradient-btn text-primary-foreground font-semibold px-8 py-3 rounded-full w-full md:w-auto"
            >
              <Send className="mr-2" size={20} />
              {sending ? "Sending..." : "Send Message"}
            </Button>

            {status.type && (
              <p
                className={
                  status.type === "success" ? "text-green-500" : "text-red-500"
                }
              >
                {status.msg}
              </p>
            )}
          </form>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-20 right-20 w-32 h-32 bg-gradient-start/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                delay: 5,
              }}
              className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-end/10 rounded-full blur-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
