import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowRight } from 'react-icons/fi';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you shortly.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
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
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We'd love to hear from you. Reach out to discuss your next project or learn more about our services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 environment-grid opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact <span className="text-gradient">Information</span></h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <FiMail className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-white/70 mb-1">General Inquiries:</p>
                    <p className="text-primary-400">hello@apexnexus.com</p>
                    <p className="text-white/70 mb-1 mt-3">Support:</p>
                    <p className="text-primary-400">support@apexnexus.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <FiPhone className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-white/70 mb-1">Main Office:</p>
                    <p className="text-primary-400">+1 (555) 123-4567</p>
                    <p className="text-white/70 mb-1 mt-3">Customer Support:</p>
                    <p className="text-primary-400">+1 (555) 765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <FiMapPin className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                    <p className="text-white/70 mb-1">Headquarters:</p>
                    <p className="text-primary-400">123 Tech Street</p>
                    <p className="text-primary-400">Nexus Park, Innovation City, 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="card p-8">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/70 mb-1">Monday - Friday:</p>
                    <p className="font-medium">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="text-white/70 mb-1">Saturday:</p>
                    <p className="font-medium">10:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="text-white/70 mb-1">Sunday:</p>
                    <p className="font-medium">Closed</p>
                  </div>
                  <div>
                    <p className="text-white/70 mb-1">Support:</p>
                    <p className="font-medium">24/7</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <h2 className="text-3xl font-bold mb-8">Send Us a <span className="text-gradient">Message</span></h2>
                
                {formStatus.submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg mb-6 ${formStatus.error ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}
                  >
                    {formStatus.message}
                  </motion.div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white/80 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-white outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/80 mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-white outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white/80 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-white outline-none"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-white outline-none resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiSend />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
              
              <div className="mt-8 p-6 rounded-lg bg-secondary-900/50 border border-white/5">
                <h3 className="flex items-center text-lg font-semibold mb-4">
                  <FiArrowRight className="mr-3 text-primary-500" />
                  Looking for a quote?
                </h3>
                <p className="text-white/70 mb-4">
                  For project estimates or detailed service quotes, please fill out the form above with specifics about your needs, or contact us directly at 
                  <a href="mailto:quotes@apexnexus.com" className="text-primary-400 hover:text-primary-300 ml-1">quotes@apexnexus.com</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Replace with actual map integration if needed */}
        <div className="absolute inset-0 flex items-center justify-center bg-secondary-900">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mx-auto mb-4">
              <FiMapPin className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-white/70">123 Tech Street, Nexus Park, Innovation City, 12345</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;