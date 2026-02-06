import { motion } from 'framer-motion';

function Loader() {
  return (
    <div className="fixed inset-0 bg-secondary-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <svg width="80" height="80" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M16 2L2 9L16 16L30 9L16 2Z"
              fill="#1A82FC"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            <motion.path
              d="M2 9V23L16 30V16L2 9Z"
              fill="#5BC0BE"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
            <motion.path
              d="M30 9V23L16 30V16L30 9Z"
              fill="#0B132B"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
          </svg>
        </motion.div>
        
        <motion.h2 
          className="text-2xl font-display font-bold text-gradient mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          APEX LABS
        </motion.h2>
        
        <div className="flex space-x-2">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-3 h-3 rounded-full bg-primary-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: [0, 1, 0],
                y: [10, 0, 10],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  delay: dot * 0.2,
                },
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loader;