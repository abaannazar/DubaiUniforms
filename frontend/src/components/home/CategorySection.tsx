import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Briefcase, Stethoscope, UtensilsCrossed, HardHat, ShieldCheck, GraduationCap, Shirt } from 'lucide-react';
import corporate from '../../assets/img/Corporate/Coporate-DU.png';
import medical from '../../assets/img/Medical-DU.png';
import hospitality from '../../assets/img/Hospitality-DU.png';
import industrial from '../../assets/img/Industrial-DU.png';
import security from '../../assets/img/Security-DU.png';
import school from '../../assets/img/School-DU.png';
import sports from '../../assets/img/Sports-DU.png';

const categories = [
  {
    id: 'corporate',
    name: 'Corporate',
    icon: Briefcase,
    description: 'Professional attire for office environments, including suits, shirts, blouses, and accessories.',
    image: corporate
  },
  {
    id: 'medical',
    name: 'Medical',
    icon: Stethoscope,
    description: 'Comfortable and functional scrubs, lab coats, and healthcare apparel for medical professionals.',
    image: medical
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: UtensilsCrossed,
    description: 'Elegant uniforms for hotels, restaurants, and hospitality services that enhance customer experience.',
    image: hospitality
  },
  {
    id: 'industrial',
    name: 'Industrial',
    icon: HardHat,
    description: 'Durable workwear and safety apparel for industrial environments and construction sites.',
    image: industrial
  },
  {
    id: 'security',
    name: 'Security',
    icon: ShieldCheck,
    description: 'Professional security uniforms that command respect and provide comfort during long shifts.',
    image: security
  },
  {
    id: 'school',
    name: 'School',
    icon: GraduationCap,
    description: 'Comfortable and durable school uniforms that foster a sense of belonging and pride.',
    image: school
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: Shirt,
    description: 'Performance sportswear and team uniforms that enhance comfort and represent your brand.',
    image: sports
  },
];

const CategorySection = () => {
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
    <section className="section bg-neutral-50" id="categories">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-4">Uniform Categories</h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            We offer a diverse range of high-quality uniforms tailored for various industries and purposes, 
            ensuring your team looks professional and feels comfortable.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              variants={itemVariants}
              className="card group"
            >
              <div className="h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-md bg-primary-50 text-primary-600 mr-3">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium">{category.name}</h3>
              </div>
              <p className="text-neutral-600 mb-4">{category.description}</p>
              <Link 
                to={`/categories/${category.id}`} 
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
              >
                View Collection
                <svg 
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/categories" className="btn btn-outline">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;