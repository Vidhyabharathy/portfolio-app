import React from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = [
    { name: "Python", level: 90, color: "#3776AB", icon: "🐍" },
    { name: "C++", level: 85, color: "#00599C", icon: "⚡" },
    { name: "JavaScript", level: 88, color: "#F7DF1E", icon: "📜" },
    { name: "AppScript", level: 75, color: "#0F9D58", icon: "📊" },
    { name: "Linux", level: 82, color: "#FCC624", icon: "🐧" },
    { name: "React", level: 87, color: "#61DAFB", icon: "⚛️" },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      className="py-5 position-relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      {/* Animated Background Elements */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(56, 118, 171, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(97, 218, 251, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(247, 223, 30, 0.05) 0%, transparent 50%)
          `
        }}
      />
      
      <div className="container position-relative">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold text-white mb-3">
            Skills &{" "}
            <span 
              style={{ 
                background: "linear-gradient(45deg, #60a5fa, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Expertise
            </span>
          </h2>
          <p className="fs-5 text-light opacity-75">
            Technologies I master to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4 justify-content-center"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="col-12 col-sm-6 col-lg-4"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="card h-100 border-0 position-relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderRadius: "1.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  cursor: "pointer"
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                    transition: "opacity 0.3s ease"
                  }}
                />
                
                <div className="card-body d-flex flex-column p-4 position-relative">
                  {/* Skill Header with Icon */}
                  <div className="d-flex align-items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="d-flex align-items-center justify-content-center rounded-3 me-3 shadow"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: `linear-gradient(135deg, ${skill.color}, ${skill.color}dd)`,
                        fontSize: "1.5rem"
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 text-white fw-bold">{skill.name}</h5>
                      <small className="text-light opacity-75">
                        Advanced Level
                      </small>
                    </div>
                    <motion.span 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="badge rounded-pill fs-6"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}, ${skill.color}dd)`,
                        color: "#fff"
                      }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-light opacity-75 small">Proficiency</span>
                      <span className="text-white fw-bold small">{skill.level}%</span>
                    </div>
                    <div 
                      className="progress rounded-pill"
                      style={{ 
                        height: "8px",
                        background: "rgba(255, 255, 255, 0.1)"
                      }}
                    >
                      <motion.div
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="progress-bar rounded-pill position-relative"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          boxShadow: `0 0 20px ${skill.color}40`
                        }}
                      >
                        {/* Animated shimmer effect */}
                        <motion.div
                          animate={{
                            x: ["0%", "100%", "0%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                            borderRadius: "inherit"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-5"
        >
          <div 
            className="d-inline-flex align-items-center gap-4 p-4 rounded-3"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            <div className="text-center">
              <div className="h3 fw-bold text-white mb-1">{skills.length}+</div>
              <div className="text-light opacity-75 small">Technologies</div>
            </div>
            <div style={{ width: "1px", height: "30px", background: "rgba(255, 255, 255, 0.2)" }} />
            <div className="text-center">
              <div className="h3 fw-bold text-white mb-1">
                {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-light opacity-75 small">Average Skill</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;