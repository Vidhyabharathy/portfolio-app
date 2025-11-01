import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

const About = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [statValues, setStatValues] = useState({ projects: 0, experience: 0, passion: 0 });
  const sectionRef = useRef(null);

  const skills = [
    {
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern frameworks like React, Node.js, and cloud platforms.",
      icon: "💻",
      color: "#6366f1",
      proficiencies: [
        { name: "Technical Architecture", level: 90 },
        { name: "System Design", level: 85 },
        { name: "API Development", level: 88 }

      ]
    },
    {
      title: "Cyber Security",
      description: "Combining cybersecurity expertise with strategic business acumen to build resilient, compliant, and risk-aware organizations.",
      icon: "📊",
      color: "#f59e0b",
      proficiencies: [
        { name: "AI-Driven Threat Detection", level: 85 },
        { name: "Cybersecurity Frameworks (NIST CSF)", level: 80 },
        { name: "Risk Assessment", level: 88 }
      ]
    },
    {
      title: "AI & Innovation",
      description: "Leveraging cutting-edge technologies to solve complex problems and drive digital transformation.",
      icon: "🤖",
      color: "#10b981",
      proficiencies: [
        { name: "AI Integration", level: 82 },
        { name: "Innovation Strategy", level: 85 },
        { name: "Digital Transformation", level: 87 }
      ]
    }
  ];

  // Animation variants
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

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
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
        delay: 0.5,
        ease: "easeOut"
      }
    })
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats counting
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    let projects = 0;
    let experience = 0;
    let passion = 0;
    
    const interval = setInterval(() => {
      if (projects < 50) projects += 5;
      if (experience < 3) experience += 1;
      if (passion < 100) passion += 10;
      
      setStatValues({ projects, experience, passion });
      
      if (projects >= 50 && experience >= 3 && passion >= 100) {
        clearInterval(interval);
      }
    }, 50);
  };

  return (
    <section 
      ref={sectionRef} 
      className={`about-section ${isVisible ? 'visible' : ''}`}
      id="about"
    >
      <div className="container-fluid" style={{ width: "90%", maxWidth: "1400px" }}>
        {/* Animated Background Elements */}
        <div className="floating-shapes">
          <motion.div 
            className="shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="shape shape-3"
            animate={{
              y: [0, -10, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <motion.div 
          className="row g-5 align-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Column - Interactive Title */}
          <motion.div className="col-lg-5" variants={itemVariants}>
            <div className="title-container mb-5">
              <motion.h1 className="main-title" variants={titleVariants}>
                <motion.span 
                  className="title-word"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                 Creator
                </motion.span>
                <motion.span 
                  className="title-word"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Developer
                </motion.span>
                <motion.span 
                  className="title-word"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Problem-Solver
                </motion.span>
              </motion.h1>
              <motion.div 
                className="title-underline"
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            
            {/* Interactive Profile Card */}
            <motion.div 
              className="profile-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="profile-image">
                <motion.div 
                  className="image-placeholder"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className="fas fa-user"></i>
                </motion.div>
                <motion.div 
                  className="profile-status"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="profile-info">
                <h3>Vidhyabharathy N</h3>
                <p>B.E ECE Graduate</p>
                <div className="social-links">
                  {['linkedin', 'github', 'twitter'].map((platform, index) => (
                    <motion.a
                      key={platform}
                      href="#"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <i className={`fab fa-${platform}`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Content */}
          <motion.div className="col-lg-7" variants={itemVariants}>
            <div className="content-wrapper">
              {/* Intro Section */}
              <motion.div className="intro-section mb-5" variants={itemVariants}>
                <motion.h2 
                  className="mb-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{color:"white"}}
                >
                  Bridging Technology & Business
                </motion.h2>
                <motion.p 
                  className="lead mb-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{color:"white"}}
                >
                  I specialize in creating digital solutions that not only solve technical challenges 
                  but also drive business growth and user engagement.
                </motion.p>
                
                {/* Animated Stats */}
                <motion.div 
                  className="stats-grid"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {[
                    { value: statValues.projects, label: "Projects Completed", suffix: "+" },
                    { value: statValues.experience, label: "Years Experience", suffix: "+" },
                    { value: statValues.passion, label: "Passion", suffix: "%" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="stat-item"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="stat-number">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Interactive Skills Section */}
              <motion.div 
                className="skills-section"
                variants={itemVariants}
              >
                <motion.h3 
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  style={{color:"white"}}
                >
                  Core Competencies
                </motion.h3>
                
                <div className="skills-container">
                  {/* Skills Navigation */}
                  <motion.div 
                    className="skills-nav"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {skills.map((skill, index) => (
                      <motion.button
                        key={index}
                        className={`skill-tab ${activeSkill === index ? 'active' : ''}`}
                        onClick={() => setActiveSkill(index)}
                        style={{ '--skill-color': skill.color }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      >
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.title}
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Skills Content */}
                  <div className="skills-content">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSkill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="skill-content-wrapper"
                      >
                        <motion.div 
                          className="skill-description mb-4"
                          style={{ borderLeftColor: skills[activeSkill].color }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {skills[activeSkill].description}
                        </motion.div>
                        
                        {/* Skill Progress Bars */}
                        <div className="skill-details">
                          {skills[activeSkill].proficiencies.map((proficiency, index) => (
                            <motion.div
                              key={proficiency.name}
                              className="progress-item mb-3"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                            >
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="skill-name">{proficiency.name}</span>
                                <span className="skill-percentage">{proficiency.level}%</span>
                              </div>
                              <div className="progress-bar-container">
                                <motion.div
                                  custom={proficiency.level}
                                  variants={progressVariants}
                                  initial="hidden"
                                  animate="visible"
                                  className="progress-bar"
                                  style={{ backgroundColor: skills[activeSkill].color }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                className="cta-section mt-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.a 
                  href="#contact" 
                  className="cta-button"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Build Something Amazing</span>
                  <motion.i 
                    className="fas fa-arrow-right"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;