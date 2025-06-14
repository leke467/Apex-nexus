import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import AboutPreview from '../components/home/AboutPreview';
import CallToAction from '../components/home/CallToAction';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ServicesSection />
      <ProjectsShowcase />
      <AboutPreview />
      <CallToAction />
    </motion.div>
  );
}

export default Home;