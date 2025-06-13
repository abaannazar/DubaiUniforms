import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Scissors, Timer, BadgeCheck, Truck } from 'lucide-react';
import img from '../../assets/img/In-house.png'

const features = [
  {
    icon: Scissors,
    title: 'Custom Tailoring',
    description: 'Each uniform is tailored to your exact specifications, ensuring a perfect fit for every team member.'
  },
  {
    icon: BadgeCheck,
    title: 'Premium Quality',
    description: 'We use only the highest quality fabrics and materials to ensure durability, comfort, and professional appearance.'
  },
  {
    icon: Timer,
    title: 'Fast Production',
    description: 'Our efficient production process allows us to deliver your orders on time, even for large quantities.'
  },
  {
    icon: Truck,
    title: 'UAE & GCC Delivery',
    description: 'We offer reliable delivery services across the UAE and neighboring GCC countries.'
  }
];

const WhyChooseUsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section className="section bg-primary-600 text-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-white mb-4">Why Choose Us</h2>
          <p className="max-w-3xl mx-auto text-neutral-100">
            At Dubai Uniforms, we pride ourselves on our commitment to excellence, 
            attention to detail, and customer satisfaction.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-secondary-500 text-primary-800 mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-neutral-200">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                In-House Manufacturing Excellence
              </h3>
              <p className="text-neutral-200 mb-4">
                Our state-of-the-art manufacturing facility in Dubai allows us to maintain strict quality control, 
                ensure timely delivery, and offer competitive pricing without compromising on quality.
              </p>
              <ul className="space-y-2">
                {[
                  'Advanced machinery for precision cutting and stitching',
                  'Skilled craftsmen with years of experience',
                  'Rigorous quality inspection at every stage',
                  'Eco-friendly processes and sustainable materials'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-secondary-500 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3">
              <img 
                src={img}
                alt="Manufacturing facility" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;