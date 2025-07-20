import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUsers, FiTarget, FiAward, FiTrendingUp } from 'react-icons/fi';
import personJpeg from '../assets/person.jpeg';

function About() {
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });
  const teamMembers = [
    {
      name: 'Adeleke Adebayo',
      role: 'Founder & CEO',
      image: personJpeg,
      bio: 'Visionary leader with 15+ years in tech innovation.'
    },

    {
      name: 'Adeniyi fajemisin',
      role: 'CTO',
      image: personJpeg,
      bio: 'Pioneering technologist specializing in AI and emerging tech.'
    },
    {
      name: 'Gbolagade Ridwan',
      role: 'Design Director',
      image: personJpeg,
      bio: 'Award-winning UX/UI expert with a passion for user-centered design.'
    },
    {
      name: 'Ibrahim Olawale',
      role: 'Software Engineer',
      image: personJpeg,
      bio: 'Operational strategist with expertise in scaling tech ventures.'
    },
    {
      name: 'Oloruntade Idris',
      role: 'Marketer',
      image: personJpeg,
      bio: 'Award-winning UX/UI expert with a passion for user-centered design.'
    },
  ];

  const values = [
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'People First',
      description: 'We believe in putting people—both our team and clients—at the center of everything we do.'
    },
    {
      icon: <FiTarget className="text-3xl" />,
      title: 'Innovation',
      description: 'Pushing boundaries and exploring new possibilities is in our DNA.'
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in our work, never settling for "good enough."'
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: 'Impact',
      description: 'We measure our success by the positive change our work creates in the world.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-600/10 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-gradient">Apex Nexus</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Pioneering the future through innovative technology solutions and 
              pushing the boundaries of what's possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 environment-grid opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Our <span className="text-gradient">Story</span></h2>
              <p className="text-lg text-white/80 mb-6">
                Founded in 2020, Apex Nexus emerged from a simple vision: to create technology that makes a difference. What began as a small team of passionate innovators has grown into a dynamic company at the forefront of digital transformation.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Our journey has been defined by a relentless pursuit of excellence, constantly pushing the boundaries of what's possible in tech innovation, media content creation, esports, and problem-solving solutions.
              </p>
              <p className="text-lg text-white/80">
                Today, we stand as a testament to what happens when creativity, technical expertise, and a human-centered approach converge to tackle the challenges of our time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute bottom-6 right-6 bg-secondary-800/90 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary-500">50+</div>
                    <p className="text-sm text-white/70">Projects Delivered</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-500">30+</div>
                    <p className="text-sm text-white/70">Team Members</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Our <span className="text-gradient">Values</span></h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">
              These core principles guide our work and define our culture at Apex Nexus.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-6 text-primary-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 environment-grid opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Our <span className="text-gradient">Team</span></h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">
              Meet the talented individuals behind Apex Nexus who bring our vision to life.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group"
              >
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-400 mb-3">{member.role}</p>
                <p className="text-white/70">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;