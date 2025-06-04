import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';


const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 z-10"
          aria-hidden="true"
        ></div>
        <img 
          src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Uniform manufacturing" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl text-white">
          <motion.h1 
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Premium Uniforms Crafted for Excellence
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-neutral-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Elevate your brand identity with custom-designed uniforms for every industry. 
            Fast delivery within 7-10 days across the UAE.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a 
              href="https://wa.me/971506988658" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <img src="src\assets\whatsapp icon.png" alt="" className='w-9' />
              Chat on WhatsApp
            </a>
            <a 
              href="tel:+971506988658" 
              className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            <Link to="/categories" className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              Explore Categories <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          <motion.p
            className="mt-6 text-neutral-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Contact us at: <a href="tel:+971506988658" className="text-secondary-500">+971 50 698 8658</a> | 
            <a href="mailto:sales@dubaiuniforms.ae" className="text-secondary-500 ml-1">sales@dubaiuniforms.ae</a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;