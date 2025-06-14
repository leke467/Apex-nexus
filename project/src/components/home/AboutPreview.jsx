import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="section bg-secondary-800 relative overflow-hidden">
      <div className="absolute inset-0 environment-grid opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div variants={itemVariants} className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" 
                alt="Tech Innovation" 
                className="w-full h-auto"
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-600/20 rounded-full blur-3xl"></motion.div>
            <motion.div variants={itemVariants} className="absolute -top-10 -left-10 w-32 h-32 bg-secondary-500/20 rounded-full blur-3xl"></motion.div>
            
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 bg-secondary-800/90 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary-500 rounded-full p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Innovation First</h4>
                  <p className="text-sm text-white/70">Building the future through continuous innovation</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="absolute -top-6 -right-6 md:top-8 md:right-8 bg-secondary-800/90 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">5+</div>
                <p className="text-sm text-white/70">Years of Excellence</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="mb-6">About <span className="text-gradient">Apex Nexus</span></h2>
            <p className="text-lg text-white/80 mb-6">
              Apex Nexus Ltd is a pioneering tech startup at the forefront of innovation, creating solutions that address real-world challenges while pushing the boundaries of what's possible.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Founded with a vision to bridge technology and human needs, we specialize in developing cutting-edge applications, immersive digital experiences, and transformative platforms across multiple industries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/80">Innovative tech solutions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/80">Expert-driven development</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/80">Client-focused approach</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-white/80">Industry-leading research</p>
              </div>
            </div>
            
            <Link to="/about" className="btn btn-primary">
              Discover Our Story <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;