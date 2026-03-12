import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiMonitor, FiTrendingUp, FiZap, FiPlayCircle, FiVideo } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Software Engineering',
    description: 'Building robust, scalable applications tailored specifically to your core business needs.',
    icon: <FiCode className="text-4xl" />,
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Media & Content',
    description: 'Creating engaging digital media content that captivates audiences across various platforms.',
    icon: <FiVideo className="text-4xl" />,
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 3,
    title: 'Interactive Experiences',
    description: 'Designing engaging digital experiences that blend technology with entertainment.',
    icon: <FiZap className="text-4xl" />,
    color: 'from-amber-500 to-red-600',
  },
  {
    id: 4,
    title: 'Esports Solutions',
    description: 'Building competitive gaming platforms and organizing tournaments for the gaming community.',
    icon: <FiPlayCircle className="text-4xl" />,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 5,
    title: 'Technical Consulting',
    description: 'Providing expert guidance to help you navigate complex technical challenges and architecture decisions.',
    icon: <FiTrendingUp className="text-4xl" />,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 6,
    title: 'Digital Strategy',
    description: 'Helping businesses modernize their operations and leverage new technologies effectively.',
    icon: <FiMonitor className="text-4xl" />,
    color: 'from-indigo-500 to-violet-600',
  },
];

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="section relative overflow-hidden bg-secondary-800">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our <span className="text-gradient">Services</span></h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            We specialize in a diverse range of technological services designed to address modern challenges and drive innovation.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="card group hover:translate-y-[-8px] transition-transform duration-300"
            >
              <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;