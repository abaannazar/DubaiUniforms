import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const regions = [
  {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain','AL Ain']
  },
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    cities: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca', 'Medina']
  },
  {
    name: 'Qatar',
    flag: '🇶🇦',
    cities: ['Doha', 'Al Rayyan', 'Al Wakrah', 'Al Khor']
  },
  {
    name: 'Oman',
    flag: '🇴🇲',
    cities: ['Muscat', 'Salalah', 'Sohar', 'Nizwa']
  },
  {
    name: 'Kuwait',
    flag: '🇰🇼',
    cities: ['Kuwait City', 'Al Ahmadi', 'Hawalli', 'Al Farwaniyah']
  },
  {
    name: 'Bahrain',
    flag: '🇧🇭',
    cities: ['Manama', 'Riffa', 'Muharraq', 'Hamad Town']
  }
];

const RegionsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-4">Serving Across the GCC</h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Dubai Uniforms Craft proudly serves businesses and institutions throughout the Gulf region, 
            delivering premium uniforms with reliable logistics and local support.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {regions.map((region, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="card hover:border hover:border-primary-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{region.flag}</span>
                <h3 className="text-xl font-medium">{region.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {region.cities.map((city, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-700"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 p-8 md:p-12 rounded-xl bg-primary-50 border border-primary-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Fast & Reliable Shipping Throughout the GCC
              </h3>
              <p className="text-neutral-700 mb-6">
                Our strategic location in Dubai enables us to offer efficient logistics solutions across the Gulf region.
                With established shipping partnerships and customs expertise, we ensure your uniforms arrive on time, 
                no matter where you are in the GCC.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                    <span className="text-xl font-semibold">48</span>
                  </div>
                  <span className="text-neutral-700">Hour Dispatch</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                    <span className="text-xl font-semibold">7-10</span>
                  </div>
                  <span className="text-neutral-700">Days Delivery</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="GCC Map" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;