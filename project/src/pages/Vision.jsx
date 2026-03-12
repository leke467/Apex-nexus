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
              Building reliable digital platforms that solve real business challenges 
              and deliver measurable results.
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
                To be a trusted partner in digital transformation, creating robust software solutions that help our clients operate more efficiently and serve their customers better.
              </p>
              <p className="text-lg text-white/80">
                We envision a tech landscape where tools are straightforward, dependable, and built with the explicit goal of generating practical value.
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
                To deliver high-quality, reliable software engineering and media services that directly address our clients' operational needs and strategic objectives.
              </p>
              <p className="text-lg text-white/80">
                We commit to a practical approach in every project, emphasizing clear communication, solid architecture, and delivering software that truly works.
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
                title: 'User-Focused Design',
                description: 'We build applications that are easy to use, ensuring that the software we create actually gets adopted and provides value from day one.',
              },
              {
                icon: <FiGlobe className="text-3xl" />,
                title: 'Reliable Engineering',
                description: 'We prioritize stability, security, and performance over chasing the newest frameworks, because predictable software is good business.',
              },
              {
                icon: <FiTrendingUp className="text-3xl" />,
                title: 'Pragmatic Solutions',
                description: 'We focus on practical problem solving rather than over-engineering, choosing the right tools to get the job done effectively.',
              },
              {
                icon: <FiTarget className="text-3xl" />,
                title: 'Business Alignment',
                description: 'We measure our success by the tangible benefits our solutions provide to your bottom line and operational efficiency.',
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
                title: 'Expand Service Offerings',
                description: 'Broaden our core capabilities to deliver more comprehensive solutions across web development, media processing, and data management.',
                highlights: [
                  'Launch dedicated esports tournament management tools',
                  'Expand our media content delivery network capabilities',
                  'Roll out advanced analytics dashboards for enterprise clients'
                ]
              },
              {
                year: '2026',
                title: 'Scale Client Operations',
                description: 'Increase our capacity to handle larger, more complex projects while maintaining our high standards for code quality and reliability.',
                highlights: [
                  'Establish new regional support teams',
                  'Automate QA and deployment pipelines for faster delivery',
                  'Expand service integrations with major cloud providers'
                ]
              },
              {
                year: '2027',
                title: 'Open Source Leadership',
                description: 'Contribute significantly to the tools and frameworks we rely on, giving back to the developer community that enables our work.',
                highlights: [
                  'Release our internal UI component library to open source',
                  'Sponsor key infrastructure projects',
                  'Publish standardized best practices for scalable architecture'
                ]
              },
              {
                year: '2028',
                title: 'Platform Consolidation',
                description: 'Unify our various service offerings into a cohesive, centralized management suite for our clients to manage their digital assets.',
                highlights: [
                  'Deploy unified client portal and billing system',
                  'Integrate cross-platform data reporting tools',
                  'Streamline API access for all enterprise services'
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