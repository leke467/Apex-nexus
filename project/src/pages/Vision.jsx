import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FiTarget, FiTrendingUp, FiUsers, FiGlobe } from 'react-icons/fi';

function Vision() {
  const timelineRef = useRef(null);

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
              Our Vision & <span className="text-gradient">Goals</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Pioneering a future where technology seamlessly enhances human experiences
              and solves our most pressing challenges.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 environment-grid opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="card h-full bg-gradient-to-br from-secondary-700 to-secondary-900 border-0"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500">
                <FiTarget className="text-3xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-white/80 mb-6">
                To be at the forefront of technological innovation, creating solutions that transform industries, enhance human experiences, and address global challenges.
              </p>
              <p className="text-lg text-white/80">
                We envision a world where technology is accessible, ethical, and empowering – breaking barriers and creating new possibilities for everyone.
              </p>
            </motion.div>
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="card h-full bg-gradient-to-br from-primary-900/50 to-secondary-800 border-0"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500">
                <FiTrendingUp className="text-3xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-white/80 mb-6">
                To develop innovative, user-centered technological solutions that solve real-world problems and create meaningful impact across diverse industries and communities.
              </p>
              <p className="text-lg text-white/80">
                We commit to excellence in every project, fostering collaboration, continuous learning, and ethical practices that build trust and drive sustainable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Core <span className="text-gradient">Values</span></h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">
              These principles guide our decision-making and shape our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <FiUsers className="text-3xl" />,
                title: 'Human-Centered Innovation',
                description: 'We design technology that puts human needs and experiences at the center, creating solutions that are intuitive, accessible, and empowering.',
              },
              {
                icon: <FiGlobe className="text-3xl" />,
                title: 'Ethical Technology',
                description: 'We develop solutions with integrity and responsibility, considering the broader social impact and potential consequences of our innovations.',
              },
              {
                icon: <FiTrendingUp className="text-3xl" />,
                title: 'Continuous Learning',
                description: 'We embrace a culture of perpetual growth, staying at the forefront of technological advancements and constantly expanding our expertise.',
              },
              {
                icon: <FiTarget className="text-3xl" />,
                title: 'Impact-Driven',
                description: 'We measure our success by the positive change we create, focusing on solutions that address meaningful challenges and create lasting value.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="card flex items-start space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-20 bg-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 environment-grid opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Strategic <span className="text-gradient">Goals</span></h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">
              Our roadmap for making our vision a reality in the coming years
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                year: '2025',
                title: 'Expand Innovation Portfolio',
                description: 'Develop and launch three groundbreaking technologies that address emerging market needs across our core sectors.',
                highlights: [
                  'Launch next-generation Apex Grid platform with advanced AI integration',
                  'Expand Terraflow\'s capabilities to support urban farming',
                  'Introduce revolutionary AR technology for immersive media experiences'
                ]
              },
              {
                year: '2026',
                title: 'Scale Global Impact',
                description: 'Extend our reach to international markets, making our solutions accessible to a more diverse range of users and industries.',
                highlights: [
                  'Establish strategic partnerships in Europe and Asia',
                  'Localize platforms for regional markets',
                  'Develop solutions for emerging economies'
                ]
              },
              {
                year: '2027',
                title: 'Pioneer Sustainable Tech',
                description: 'Lead the industry in developing carbon-neutral, resource-efficient technology solutions that address climate challenges.',
                highlights: [
                  'Achieve carbon neutrality across all operations',
                  'Launch ClimaTech innovation division',
                  'Develop resource optimization platforms for enterprise clients'
                ]
              },
              {
                year: '2028',
                title: 'Transform Digital Experience',
                description: 'Revolutionize how humans interact with technology through seamless, intuitive interfaces and personalized experiences.',
                highlights: [
                  'Deploy next-generation human-computer interaction systems',
                  'Launch cognitive computing platform',
                  'Introduce adaptive learning technology across all platforms'
                ]
              }
            ].map((goal, index) => (
              <motion.div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-4 gap-6 items-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Left timeline line */}
                {index < 3 && (
                  <div className="absolute top-14 left-8 md:left-[7.5%] bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent hidden md:block"></div>
                )}
                
                {/* Year */}
                <div className="md:text-center">
                  <div className="inline-flex md:mx-auto items-center justify-center w-16 h-16 rounded-full bg-primary-500 text-white text-xl font-bold relative z-10">
                    {goal.year}
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-3 card">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{goal.title}</h3>
                  <p className="text-white/80 mb-6">{goal.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
                      Key Initiatives
                    </h4>
                    <ul className="space-y-2">
                      {goal.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-3 mt-0.5 flex-shrink-0">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Vision;