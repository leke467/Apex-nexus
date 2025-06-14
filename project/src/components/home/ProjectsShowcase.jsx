import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    id: 1,
    title: 'Apex Grid',
    description: 'A comprehensive gaming community platform and tournament management system.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    category: 'Esports',
    link: '/projects',
  },
  {
    id: 2,
    title: 'Honey Spicy',
    description: 'Innovative food and snacks delivery platform with unique taste profiles.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    category: 'Food Tech',
    link: '/projects',
  },
  {
    id: 3,
    title: 'Terraflow',
    description: 'Advanced farm management system utilizing IoT and AI for optimal crop yields.',
    image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg',
    category: 'AgriTech',
    link: '/projects',
  },
  {
    id: 4,
    title: 'NexusPay',
    description: 'Secure and seamless payment solution for digital transactions.',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg',
    category: 'FinTech',
    link: '/projects',
  },
  {
    id: 5,
    title: 'StreamVerse',
    description: 'Interactive streaming platform for gamers and content creators.',
    image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg',
    category: 'Media',
    link: '/projects',
  },
];

function ProjectsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section relative overflow-hidden bg-secondary-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our <span className="text-gradient">Projects</span></h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Explore our innovative projects that are transforming industries and creating new possibilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper rounded-xl"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="max-w-md">
                <div className="relative overflow-hidden rounded-xl group">
                  <div className="relative h-64 md:h-80">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/60 to-transparent opacity-90"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left transform transition-transform duration-500 translate-y-0">
                    <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/80 mb-4 text-sm md:text-base">{project.description}</p>
                    <Link 
                      to={project.link} 
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors"
                    >
                      Learn More <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link to="/projects" className="btn btn-outline">
            View All Projects <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;