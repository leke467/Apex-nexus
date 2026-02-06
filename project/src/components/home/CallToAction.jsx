import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden bg-secondary-900">
      {/* Background effects */}
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
            <h2 className="mb-6">Ready to <span className="text-gradient">Transform</span> Your Ideas?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Partner with Apex Labs Ltd to bring your vision to life. Our team of experts is ready to turn your concept into reality with cutting-edge technology and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch <FiArrowRight className="ml-2" />
              </Link>
              <Link to="/projects" className="btn btn-outline">
                Explore Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;