import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! I'll get back to you within 24 hours.");
      setFormData({ name: "", company: "", email: "", role: "", message: "" });
    }, 2000);
  };

  const professionalLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/vidhya-bharathy-14b6bb1b9/",
      description: "Professional Profile",
      color: "linear-gradient(135deg, #0077b5, #00a0dc)"
    },
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com/Vidhyabharathy",
      description: "Code Portfolio",
      color: "linear-gradient(135deg, #333, #6e5494)"
    },
    {
      name: "Portfolio",
      icon: "🌐",
      url: "https://yourportfolio.com",
      description: "Project Showcase",
      color: "linear-gradient(135deg, #6366f1, #8b5cf6)"
    },
    {
      name: "Resume",
      icon: "📄",
      url: "/resume.pdf",
      description: "Download CV",
      color: "linear-gradient(135deg, #10b981, #059669)"
    }
  ];

  const stats = [
    { value: "24h", label: "Response Time" },
    { value: "Open", label: "To Opportunities" },
    { value: "Full-time", label: "Preferred" },
    { value: "Remote", label: "Work Preference" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="py-5 position-relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              background: `rgba(99, 102, 241, ${Math.random() * 0.2 + 0.1})`,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container position-relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row justify-content-center"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="col-12 text-center mb-5"
          >
            <motion.h2 
              className="display-4 fw-bold text-white mb-3"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 30px rgba(99, 102, 241, 0.3)"
              }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              className="fs-5 text-light opacity-75"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Interested in my profile? Let's discuss how I can contribute to your team.
            </motion.p>
          </motion.div>

          {/* Professional Stats */}
          <motion.div
            variants={itemVariants}
            className="col-12 col-lg-10 mb-5"
          >
            <div className="row g-3">
              {stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="card border-0 text-center h-100"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "1rem",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <div className="card-body py-3">
                      <div className="h5 fw-bold text-white mb-1">{stat.value}</div>
                      <div className="text-light opacity-75 small">{stat.label}</div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="col-12 col-lg-10">
            <div className="row g-5">
              {/* Contact Form */}
              <motion.div
                variants={itemVariants}
                className="col-12 col-md-7"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card border-0 h-100"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "1.5rem",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <div className="card-body p-4">
                    <h4 className="text-white fw-bold mb-4">Professional Inquiry</h4>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="name" className="form-label text-light opacity-75 small">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            className="form-control border-0"
                            style={{
                              background: "rgba(255, 255, 255, 0.1)",
                              color: "#fff",
                              borderRadius: "0.75rem",
                              padding: "0.75rem 1rem"
                            }}
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="company" className="form-label text-light opacity-75 small">
                            Company *
                          </label>
                          <input
                            type="text"
                            className="form-control border-0"
                            style={{
                              background: "rgba(255, 255, 255, 0.1)",
                              color: "#fff",
                              borderRadius: "0.75rem",
                              padding: "0.75rem 1rem"
                            }}
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            placeholder="Company Name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="email" className="form-label text-light opacity-75 small">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            className="form-control border-0"
                            style={{
                              background: "rgba(255, 255, 255, 0.1)",
                              color: "#fff",
                              borderRadius: "0.75rem",
                              padding: "0.75rem 1rem"
                            }}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="role" className="form-label text-light opacity-75 small">
                            Role Interested In
                          </label>
                          <input
                            type="text"
                            className="form-control border-0"
                            style={{
                              background: "rgba(255, 255, 255, 0.1)",
                              color: "#fff",
                              borderRadius: "0.75rem",
                              padding: "0.75rem 1rem"
                            }}
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="e.g., Senior Developer"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label text-light opacity-75 small">
                          Opportunity Details *
                        </label>
                        <textarea
                          className="form-control border-0"
                          style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                            borderRadius: "0.75rem",
                            padding: "0.75rem 1rem",
                            minHeight: "120px",
                            resize: "none"
                          }}
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell me about the role, team, and why you think I'd be a good fit..."
                        />
                      </div>
                      <motion.button
                        type="submit"
                        className="btn w-100 border-0 fw-bold"
                        style={{
                          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                          color: "#fff",
                          borderRadius: "0.75rem",
                          padding: "0.75rem 2rem",
                          fontSize: "1.1rem"
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" />
                            Sending Inquiry...
                          </>
                        ) : (
                          "Send Professional Inquiry"
                        )}
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              </motion.div>

              {/* Professional Info & Links */}
              <motion.div
                variants={itemVariants}
                className="col-12 col-md-5"
              >
                <div className="h-100 d-flex flex-column">
                  {/* Availability Card */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="card border-0 mb-4"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(20px)",
                      borderRadius: "1.5rem",
                      border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "linear-gradient(135deg, #10b981, #059669)",
                            fontSize: "1.5rem"
                          }}
                        >
                          ✅
                        </div>
                        <div>
                          <h6 className="text-white fw-bold mb-0">Currently Available</h6>
                          <small className="text-light opacity-75">Open to new opportunities</small>
                        </div>
                      </div>
                      <p className="text-light opacity-75 small mb-0">
                        I'm actively seeking full-time roles and would love to discuss how I can bring value to your organization.
                      </p>
                    </div>
                  </motion.div>

                  {/* Professional Links */}
                  <div className="flex-grow-1">
                    <h5 className="text-white fw-bold mb-3">Professional Profiles</h5>
                    <div className="row g-3">
                      {professionalLinks.map((link, index) => (
                        <motion.div
                          key={link.name}
                          variants={itemVariants}
                          className="col-12"
                        >
                          <motion.a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card border-0 text-decoration-none d-block"
                            style={{
                              background: "rgba(255, 255, 255, 0.05)",
                              backdropFilter: "blur(10px)",
                              borderRadius: "1rem",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              cursor: "pointer",
                              transition: "all 0.3s ease"
                            }}
                            whileHover={{ 
                              y: -3,
                              background: "rgba(255, 255, 255, 0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="card-body p-3">
                              <div className="d-flex align-items-center">
                                <div 
                                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                  style={{
                                    width: "45px",
                                    height: "45px",
                                    background: link.color,
                                    fontSize: "1.2rem",
                                    flexShrink: 0
                                  }}
                                >
                                  {link.icon}
                                </div>
                                <div className="flex-grow-1">
                                  <div className="text-white fw-semibold">
                                    {link.name}
                                  </div>
                                  <div className="text-light opacity-75 small">
                                    {link.description}
                                  </div>
                                </div>
                                <div className="text-light opacity-50">
                                  ↗
                                </div>
                              </div>
                            </div>
                          </motion.a>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-4"
                  >
                    <div className="card border-0"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "1rem"
                      }}
                    >
                      <div className="card-body p-3">
                        <h6 className="text-white fw-bold mb-2">Prefer direct email?</h6>
                        <a 
                          href="mailto:you@example.com" 
                          className="btn btn-outline-light btn-sm"
                          style={{ borderRadius: "20px" }}
                        >
                          📧 vidhyabharathy65255@gmail.com
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;