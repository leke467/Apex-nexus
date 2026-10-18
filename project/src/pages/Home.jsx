import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import SwarmCursor from '../components/ui/SwarmCursor';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import AboutPreview from '../components/home/AboutPreview';
import CallToAction from '../components/home/CallToAction';

function Home() {
  const { setDarkMode } = useTheme();

  useEffect(() => {
    // Randomly switch between light and dark mode every time the home page loads
    setDarkMode(Math.random() > 0.5);
  }, [setDarkMode]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <SwarmCursor
        fixed
        flee
        count={750}
        size={2.8}
        spread={85}
        swirl={0.65}
        speed={1.6}
        tail={0.15}
        trail={0.5}
        intro={false}
        idle="gather"
        color="#38bdf8"
        accentColor="#818cf8"
        clickEffect="burst"
      />
      <HeroSection />
      <ServicesSection />
      <ProjectsShowcase />
      <AboutPreview />
      <CallToAction />
    </motion.div>
  );
}

export default Home;