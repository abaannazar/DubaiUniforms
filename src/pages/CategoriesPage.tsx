import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Stethoscope, UtensilsCrossed, HardHat, ShieldCheck, GraduationCap, Shirt } from 'lucide-react';

const categories = [
  {
    id: 'corporate',
    name: 'Corporate',
    icon: Briefcase,
    description: 'Professional attire for office environments, including suits, shirts, blouses, and accessories.',
    features: ['Custom tailoring', 'Premium fabrics', 'Corporate branding', 'Comfort-focused design'],
    image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'medical',
    name: 'Medical',
    icon: Stethoscope,
    description: 'Comfortable and functional scrubs, lab coats, and healthcare apparel for medical professionals.',
    features: ['Antimicrobial fabrics', 'Functional pockets', 'Easy-care materials', 'Flexible sizing'],
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: UtensilsCrossed,
    description: 'Elegant uniforms for hotels, restaurants, and hospitality services that enhance customer experience.',
    features: ['Stain-resistant fabrics', 'Brand-aligned designs', 'Multiple style options', 'Durability for daily wear'],
    image: 'https://images.pexels.com/photos/5634667/pexels-photo-5634667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'industrial',
    name: 'Industrial',
    icon: HardHat,
    description: 'Durable workwear and safety apparel for industrial environments and construction sites.',
    features: ['High-visibility options', 'Flame-resistant materials', 'Heavy-duty construction', 'Safety compliance'],
    image: 'https://images.pexels.com/photos/8961321/pexels-photo-8961321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'security',
    name: 'Security',
    icon: ShieldCheck,
    description: 'Professional security uniforms that command respect and provide comfort during long shifts.',
    features: ['Tactical design elements', 'Durable materials', 'Weather adaptability', 'Professional appearance'],
    image: 'https://images.pexels.com/photos/5699676/pexels-photo-5699676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'school',
    name: 'School',
    icon: GraduationCap,
    description: 'Comfortable and durable school uniforms that foster a sense of belonging and pride.',
    features: ['Easy-care fabrics', 'Growth allowances', 'Customizable designs', 'Institutional branding'],
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: Shirt,
    description: 'Performance sportswear and team uniforms that enhance comfort and represent your brand.',
    features: ['Moisture-wicking fabrics', 'Customizable designs', 'Team branding', 'Comfort during activity'],
    image: 'https://images.pexels.com/photos/6765615/pexels-photo-6765615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

const CategoriesPage = () => {
  useEffect(() => {
    document.title = 'Uniform Categories | Dubai Uniforms Craft';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-600">
        <div className="container-custom text-center text-white">
          <h1 className="text-white mb-6">Dubai Uniforms</h1>
          <p className="text-xl max-w-3xl mx-auto text-neutral-100">
            Explore our comprehensive range of professional uniforms for every industry and need.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-white">
        <div className="container-custom">
          <p className="text-neutral-700 max-w-4xl mx-auto text-center mb-12">
            At Dubai Uniforms Craft, we design and manufacture high-quality uniforms for a wide range of industries
            and purposes. Browse our categories below to find the perfect uniform solution for your organization.
          </p>

          <div className="space-y-24">
            {categories.map((category, index) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className={`absolute -z-10 w-full h-full ${index % 2 === 0 ? '-right-4 -bottom-4' : '-left-4 -bottom-4'} bg-primary-100 rounded-lg`}></div>
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="rounded-lg shadow-lg w-full h-[300px] md:h-[400px] object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-md bg-primary-50 text-primary-600 mr-4">
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl">{category.name} Uniforms</h2>
                  </div>
                  <p className="text-neutral-700 text-lg mb-6">{category.description}</p>
                  <div className="mb-8">
                    <h3 className="text-xl mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <svg className="h-5 w-5 text-secondary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link to={`/categories/${category.id}`} className="btn btn-primary">
                      View Collection
                    </Link>
                    <Link to="/contact" className="btn btn-outline">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-medium p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-12">
                <h2 className="mb-4">Need Custom Uniforms?</h2>
                <p className="text-lg text-neutral-700 mb-6">
                  Can't find exactly what you're looking for? Our team specializes in custom uniform 
                  solutions tailored to your specific requirements. From unique designs to specialized 
                  fabrics, we can create the perfect uniforms for your organization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn btn-primary">
                    Contact Us
                  </Link>
                  <a href="tel:+97142345678" className="btn btn-outline">
                    Call +971 4 234 5678
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/6192311/pexels-photo-6192311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Custom uniforms design" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesPage;