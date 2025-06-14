import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiMonitor, FiTrendingUp, FiZap, FiPlayCircle, FiVideo } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Tech Innovation',
    description: 'Developing cutting-edge technologies that push boundaries and solve complex problems.',
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
    title: 'Recreational Zone',
    description: 'Designing immersive recreational experiences that blend technology with entertainment.',
    icon: <FiZap className="text-4xl" />,
    color: 'from-amber-500 to-red-600',
  },
  {
    id: 4,
    title: 'Esports',
    description: 'Building competitive gaming platforms and organizing tournaments for the gaming community.',
    icon: <FiPlayCircle className="text-4xl" />,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 5,
    title: 'Problem Solutions',
    description: 'Providing innovative technological solutions to real-life challenges and pain points.',
    icon: <FiTrendingUp className="text-4xl" />,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 6,
    title: 'Digital Transformation',
    description: 'Guiding businesses through comprehensive digital transformation journeys for growth.',
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