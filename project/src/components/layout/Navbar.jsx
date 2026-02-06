import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/vision', label: 'Vision & Goals' },
  { path: '/contact', label: 'Contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const navbarClasses = `fixed top-0 w-full z-40 transition-all duration-300 ${
    isScrolled 
      ? 'bg-secondary-800/80 backdrop-blur-md py-3 shadow-lg' 
      : 'bg-transparent py-6'
  }`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={navbarClasses}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#1A82FC"/>
              <path d="M2 9V23L16 30V16L2 9Z" fill="#5BC0BE"/>
              <path d="M30 9V23L16 30V16L30 9Z" fill="#0B132B"/>
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white">APEX LABS</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Theme Toggler */}
          <button 
            onClick={toggleDarkMode} 
            className="ml-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <FiMoon className="text-xl text-blue-400" />
            ) : (
              <FiSun className="text-xl text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <FiMoon className="text-xl text-blue-400" />
            ) : (
              <FiSun className="text-xl text-yellow-400" />
            )}
          </button>
          
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-secondary-800/95 backdrop-blur-lg shadow-lg md:hidden z-50"
            >
              <div className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      `py-3 px-4 border-b border-white/10 ${
                        isActive ? 'text-primary-500 font-medium' : 'text-white/80'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;