import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20 flex items-center justify-center"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <div className="text-9xl font-display font-bold text-gradient mb-8">404</div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Page Not Found
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/80 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/" className="btn btn-primary">
              <FiHome className="mr-2" /> Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-outline"
            >
              <FiArrowLeft className="mr-2" /> Go Back
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default NotFound;