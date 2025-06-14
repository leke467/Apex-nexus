import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

function HeroSection() {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white/20';
      
      // Random size
      const size = Math.random() * 6 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      particlesRef.current.appendChild(particle);
      
      // Animate with GSAP
      gsap.to(particle, {
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 5,
      });
    }
    
    return () => {
      // Cleanup
      if (particlesRef.current) {
        while (particlesRef.current.firstChild) {
          particlesRef.current.removeChild(particlesRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen relative flex items-center justify-center overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-6 leading-tight">
              <span className="text-gradient glow-text">Innovating</span> Tomorrow's <span className="text-primary-400">Solutions</span>
            </h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/80 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pioneering tech innovations that solve real-world problems and shape a better future.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/services" className="btn btn-primary group">
                Explore Our Services
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn btn-outline group">
                <FiPlay className="mr-2" /> Learn About Us
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              {['Tech Innovation', 'Media Content', 'Esports'].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm mb-2 mx-auto">
                    <div className="w-6 h-6 bg-primary-500 rounded-md"></div>
                  </div>
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* 3D Cube Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            <div className="relative w-64 h-64 mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-xl backdrop-blur-lg shadow-xl"></div>
              <div className="absolute inset-4 glass-panel flex items-center justify-center border border-white/20">
                <div className="w-16 h-16 relative">
                  <div className="absolute inset-0 animate-pulse bg-primary-500/20 rounded-full"></div>
                  <svg className="absolute inset-0" width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#1A82FC"/>
                    <path d="M2 9V23L16 30V16L2 9Z" fill="#5BC0BE"/>
                    <path d="M30 9V23L16 30V16L30 9Z" fill="#0B132B"/>
                  </svg>
                </div>
              </div>
              <div className="absolute left-12 top-0 -translate-y-1/2 px-4 py-2 bg-secondary-700/90 backdrop-blur-sm rounded-full text-sm font-medium">Innovative</div>
              <div className="absolute right-0 top-1/3 translate-x-1/2 px-4 py-2 bg-primary-600/90 backdrop-blur-sm rounded-full text-sm font-medium">Cutting-edge</div>
              <div className="absolute bottom-0 left-1/4 translate-y-1/2 px-4 py-2 bg-secondary-500/90 backdrop-blur-sm rounded-full text-sm font-medium">Future-focused</div>
            </div>
            
            {/* Glowing orbs */}
            <div className="absolute w-12 h-12 rounded-full bg-primary-500/30 blur-xl animate-pulse-slow top-1/4 left-1/4"></div>
            <div className="absolute w-16 h-16 rounded-full bg-secondary-500/20 blur-xl animate-pulse-slow bottom-1/4 right-1/4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;