import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink, FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Apex Grid',
    category: 'Esports',
    tags: ['Gaming', 'Community', 'Tournament'],
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    description: 'A comprehensive gaming community platform and tournament management system that connects players, organizes competitions, and tracks performance metrics.',
    link: '#'
  },
  {
    id: 2,
    title: 'Honey Spicy',
    category: 'Food Tech',
    tags: ['Food', 'E-commerce', 'Delivery'],
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    description: 'An innovative food and snacks delivery platform that uses AI to recommend personalized selections based on taste preferences and dietary requirements.',
    link: '#'
  },
  {
    id: 3,
    title: 'Terraflow',
    category: 'AgriTech',
    tags: ['Farming', 'IoT', 'Analytics'],
    image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg',
    description: 'Advanced farm management system utilizing IoT sensors, AI analytics, and automation to optimize crop yields and resource utilization for sustainable farming.',
    link: '#'
  },
  {
    id: 4,
    title: 'NexusPay',
    category: 'FinTech',
    tags: ['Payments', 'Security', 'Blockchain'],
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg',
    description: 'Secure and seamless payment solution using blockchain technology to facilitate fast, encrypted transactions across multiple currencies and platforms.',
    link: '#'
  },
  {
    id: 5,
    title: 'StreamVerse',
    category: 'Media',
    tags: ['Streaming', 'Content', 'Social'],
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg',
    description: 'Interactive streaming platform for gamers and content creators featuring integrated chat, monetization tools, and AI-enhanced content recommendations.',
    link: '#'
  },
  {
    id: 6,
    title: 'EcoTrack',
    category: 'CleanTech',
    tags: ['Sustainability', 'IoT', 'Analytics'],
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
    description: 'Environmental monitoring system that uses distributed sensors to track air quality, water purity, and other ecological metrics for cities and communities.',
    link: '#'
  }
];

const categories = ['All', 'Esports', 'Food Tech', 'AgriTech', 'FinTech', 'Media', 'CleanTech'];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
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
              Our <span className="text-gradient">Projects</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our innovative solutions that are transforming industries and creating new possibilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Filter & Grid */}
      <section className="py-20 bg-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 environment-grid opacity-10"></div>
        
        <div className="container-custom relative z-10">
          {/* Category Filter */}
          <motion.div 
            className="flex items-center justify-center mb-12 overflow-x-auto pb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex space-x-2 p-1 bg-secondary-900/50 backdrop-blur-sm rounded-full">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-primary-500 text-white shadow-lg' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card overflow-hidden group h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 flex-grow">{project.description}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors"
                    target="_blank"
                    rel="noopener"
                  >
                    View Project <FiExternalLink className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Have a Project in <span className="text-gradient">Mind?</span></h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                We're always excited to take on new challenges and create innovative solutions. Let's work together to bring your vision to life.
              </p>
              
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;