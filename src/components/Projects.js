import React from "react";
import { motion } from "framer-motion";
import projects from "./Project_data";

const ProjectsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
    },
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
      id="projects"
      className="py-5 position-relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a2e 50%, #16213e 75%, #0f3460 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      {/* Animated Background Particles */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        {[...Array(15)].map((_, i) => (
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
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container position-relative">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <motion.h2 
            className="display-4 fw-bold text-white mb-3"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="fs-5 text-light opacity-75"
          >
            A collection of my recent work and experiments
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto"
            style={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #6366f1, transparent)",
              borderRadius: "2px",
              marginTop: "1rem"
            }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="row justify-content-center g-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="col-12 col-sm-6 col-lg-4 d-flex"
            >
              <motion.div
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="card h-100 border-0 position-relative overflow-hidden w-100"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "1rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  minHeight: "400px",
                  cursor: "pointer"
                }}
              >
                {/* Project Image */}
                <div 
                  className="position-relative overflow-hidden"
                  style={{ height: "200px", flexShrink: 0 }}
                >
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100"
                      style={{ 
                        objectFit: "cover",
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  ) : (
                    <div 
                      className="w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{ 
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)" 
                      }}
                    >
                      <div style={{ fontSize: "3rem", opacity: 0.7 }}>
                        💻
                      </div>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ 
                      background: "rgba(0, 0, 0, 0.7)",
                      opacity: 0
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <motion.a
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-light btn-sm me-2 mb-1"
                        style={{ borderRadius: "15px" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-external-link-alt me-1"></i>
                        Live Demo
                      </motion.a>
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn btn-outline-light btn-sm mb-1"
                          style={{ borderRadius: "15px" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fab fa-github me-1"></i>
                          Code
                        </motion.a>
                      )}
                    </div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="position-absolute top-3 start-3">
                    <span 
                      className="badge fw-semibold border-0"
                      style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        fontSize: "0.7rem",
                        borderRadius: "10px",
                        padding: "0.4rem 0.8rem"
                      }}
                    >
                      {project.category || "Project"}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body d-flex flex-column p-3">
                  {/* Title */}
                  <h5 className="text-white fw-bold mb-2">
                    {project.title}
                  </h5>

                  {/* Description */}
                  <p className="text-light opacity-75 mb-3 flex-grow-1" style={{ 
                    lineHeight: "1.5",
                    fontSize: "0.9rem"
                  }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="badge border-0"
                            style={{
                              background: "rgba(255, 255, 255, 0.1)",
                              color: "#fff",
                              fontSize: "0.65rem",
                              padding: "0.3rem 0.6rem",
                              borderRadius: "8px",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span
                            className="badge border-0"
                            style={{
                              background: "rgba(255, 255, 255, 0.05)",
                              color: "#fff",
                              fontSize: "0.65rem",
                              padding: "0.3rem 0.6rem",
                              borderRadius: "8px"
                            }}
                          >
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-5"
        >
          <div 
            className="d-inline-flex align-items-center gap-4 p-3 rounded-3"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            <div className="text-center">
              <div className="h4 fw-bold text-white mb-1">{projects.length}</div>
              <div className="text-light opacity-75 small">Total Projects</div>
            </div>
            <div style={{ width: "1px", height: "30px", background: "rgba(255, 255, 255, 0.2)" }} />
            <div className="text-center">
              <div className="h4 fw-bold text-white mb-1">
                {Math.round(projects.reduce((acc, proj) => acc + (proj.technologies?.length || 0), 0) / projects.length)}+
              </div>
              <div className="text-light opacity-75 small">Avg Tech Stack</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;