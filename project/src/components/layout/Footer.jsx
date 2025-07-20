import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary-800 relative z-10 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 environment-grid opacity-10"></div>
      
      {/* Main footer content */}
      <div className="container-custom pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#1A82FC"/>
                <path d="M2 9V23L16 30V16L2 9Z" fill="#5BC0BE"/>
                <path d="M30 9V23L16 30V16L30 9Z" fill="#0B132B"/>
              </svg>
              <span className="font-display font-bold text-xl tracking-wider text-white">APEX NEXUS</span>
            </div>
            <p className="text-white/70">
              Pioneering technological innovations and solutions for a better future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-primary-500 transition-colors" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary-500 transition-colors" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-primary-500 transition-colors" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/70 hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-primary-500 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-white/70 hover:text-primary-500 transition-colors">Projects</Link></li>
              <li><Link to="/vision" className="text-white/70 hover:text-primary-500 transition-colors">Vision & Goals</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-primary-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Our Projects */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-white">Our Projects</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-primary-500 transition-colors">Battle Grid</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-500 transition-colors">Honey Spicy</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-500 transition-colors">Terraflow</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-500 transition-colors">Ade-hi Farm</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary-500 transition-colors">Innovation Lab</a></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-white/70">No 33 Nurrudeen Street</li>
              <li className="text-white/70"> Olayemi Bustup Ayobo Lagos. </li>
              <li className="text-white/70">hello@apexnexus.com</li>
              <li className="text-white/70">+2349032459336</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Apex Nexus Ltd. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute right-10 bottom-10 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-500 transition-colors duration-300"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </motion.button>
    </footer>
  );
}

export default Footer;