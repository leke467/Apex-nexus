import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCode, FiMonitor, FiTrendingUp, FiZap, FiVideo, FiPlus, FiMinus } from 'react-icons/fi';

const services = [
  {
    id: 1,
    icon: <FiCode />,
    title: 'Technology Innovation',
    description: 'We create cutting-edge technology solutions that push boundaries and solve complex problems across various industries.',
    details: [
      'Custom software development',
      'AI and machine learning solutions',
      'IoT device integration',
      'Blockchain applications',
      'Cloud infrastructure optimization'
    ]
  },
  {
    id: 2,
    icon: <FiVideo />,
    title: 'Media & Content Creation',
    description: 'Our media team produces engaging digital content that captivates audiences and delivers impactful messages.',
    details: [
      'Digital content strategy',
      'Video production and editing',
      'Interactive media experiences',
      'Immersive storytelling',
      'Content distribution platforms'
    ]
  },
  {
    id: 3,
    icon: <FiZap />,
    title: 'Recreational Technology',
    description: 'We design immersive recreational experiences that blend cutting-edge technology with entertainment.',
    details: [
      'AR/VR experience design',
      'Interactive installations',
      'Digital playgrounds',
      'Gaming applications',
      'Tech-enhanced recreational spaces'
    ]
  },
  {
    id: 4,
    // TODO: Replace icon when FiJoystick export issue is resolved
    icon: <FiCode />,
    title: 'Esports Solutions',
    description: 'We build competitive gaming platforms and organize tournaments that bring the gaming community together.',
    details: [
      'Tournament management systems',
      'Esports team platforms',
      'Live streaming solutions',
      'Gaming community portals',
      'Analytics and performance tracking'
    ]
  },
  {
    id: 5,
    icon: <FiTrendingUp />,
    title: 'Problem-Solving Solutions',
    description: 'Our team identifies real-world challenges and develops innovative technological solutions to address them.',
    details: [
      'Process automation',
      'Efficiency optimization',
      'Resource management systems',
      'Predictive analytics',
      'Crisis response technology'
    ]
  },
  {
    id: 6,
    icon: <FiMonitor />,
    title: 'Digital Transformation',
    description: 'We guide businesses through comprehensive digital transformation journeys to unlock new growth potential.',
    details: [
      'Digital strategy development',
      'Legacy system modernization',
      'Digital workflow implementation',
      'Organizational change management',
      'Digital training and enablement'
    ]
  }
];

const FAQ = [
  {
    question: 'What industries do you primarily work with?',
    answer: 'We work across various sectors including healthcare, finance, education, entertainment, retail, and manufacturing. Our diverse expertise allows us to apply innovative solutions regardless of industry.'
  },
  {
    question: 'How long does a typical project take to complete?',
    answer: 'Project timelines vary based on scope and complexity. Small projects might take 2-3 months, while larger enterprise solutions can take 6-12 months. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you offer maintenance and support after project completion?',
    answer: 'Yes, we offer flexible maintenance and support packages tailored to your needs. This includes regular updates, performance monitoring, security patches, and technical support.'
  },
  {
    question: 'How do you approach data security and privacy?',
    answer: 'We implement industry-leading security measures and follow best practices for data protection. All our solutions comply with relevant regulations like GDPR, HIPAA, or CCPA depending on your region and industry.'
  },
  {
    question: 'Can you work with our existing systems and infrastructure?',
    answer: 'Absolutely. We specialize in developing solutions that integrate seamlessly with your existing technology stack, enhancing functionality without disrupting operations.'
  }
];

function Services() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
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
              Our <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive technological solutions designed to address modern challenges
              and drive innovation across industries.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 environment-grid opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="card h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 w-14 h-14 rounded-2xl bg-primary-500 flex items-center justify-center text-white text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-3">
                    What We Offer
                  </h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-3 mt-0.5 flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="text-white/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Our <span className="text-gradient">Process</span></h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">
              We follow a structured approach to ensure every project delivers exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', desc: 'We start by deeply understanding your needs, goals, and challenges.' },
              { number: '02', title: 'Strategy', desc: 'We develop a customized approach and roadmap for your specific requirements.' },
              { number: '03', title: 'Execution', desc: 'Our team implements the solution with regular updates and milestones.' },
              { number: '04', title: 'Refinement', desc: 'We optimize the solution based on feedback and performance metrics.' }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="card relative border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -right-6 -top-6 text-8xl font-bold text-primary-500/10">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary-500/20 text-primary-500 flex items-center justify-center mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 environment-grid opacity-10"></div>
        
        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="max-w-2xl mx-auto text-lg text-white/80">
              Get answers to some common questions about our services and process.
            </p>
          </motion.div>

          <div className="space-y-4">
            {FAQ.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left bg-white/5 hover:bg-white/10 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-medium">{faq.question}</h3>
                  <span className="text-primary-500 ml-4">
                    {expandedFaq === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </span>
                </button>
                
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-white/5"
                  >
                    <p className="text-white/80">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Services;