import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Ruler, Palette, Shirt, BadgeCheck } from 'lucide-react';

// Import our category data
import { getCategoryData } from '../utils/categoryData';

const CategoryDetailPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryData = getCategoryData(category || '');

  useEffect(() => {
    if (categoryData) {
      document.title = `${categoryData.name} Uniforms | Dubai Uniforms`;
    } else {
      document.title = 'Category Not Found | Dubai Uniforms';
    }
  }, [categoryData]);

  if (!categoryData) {
    return (
      <div className="section">
        <div className="container-custom text-center">
          <h1 className="mb-6">Category Not Found</h1>
          <p className="mb-8">The uniform category you're looking for does not exist.</p>
          <Link to="/categories" className="btn btn-primary">
            View All Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-600">
        <div className="container-custom">
          <Link to="/categories" className="inline-flex items-center text-white mb-8 hover:text-secondary-300 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Categories
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h1 className="text-white mb-4">{categoryData.name} Uniforms</h1>
              <p className="text-xl text-neutral-100 mb-6">
                {categoryData.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-secondary">
                  Request a Quote
                </Link>
                <a href="#products" className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                  View Products
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src={categoryData.image} 
                alt={categoryData.name} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Why Choose Our {categoryData.name} Uniforms</h2>
            <p className="max-w-3xl mx-auto text-neutral-600 mt-4">
              Our premium quality uniforms are designed with functionality, comfort, and professional appearance in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryData.features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:border hover:border-primary-100"
              >
                <div className="p-3 rounded-md bg-primary-50 text-primary-600 inline-block mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl mb-2">{feature}</h3>
                <p className="text-neutral-600">
                  Our {categoryData.name.toLowerCase()} uniforms are designed to provide the best {feature.toLowerCase()} experience.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Our {categoryData.name} Collection</h2>
            <p className="max-w-3xl mx-auto text-neutral-600 mt-4">
              Browse our collection of high-quality {categoryData.name.toLowerCase()} uniforms designed for 
              comfort, functionality, and professional appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.products.map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="h-64 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-neutral-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-secondary-600 font-semibold">
                    {product.price}
                  </div>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                  >
                    Inquire Now
                    <svg 
                      className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="mb-6">Customization Options</h2>
              <p className="text-neutral-700 mb-6">
                Make your {categoryData.name.toLowerCase()} uniforms truly unique with our wide range of customization options. 
                From fabrics and colors to logos and designs, we offer complete flexibility to match your brand identity.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex">
                  <div className="mr-4">
                    <Ruler className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Custom Measurements</h3>
                    <p className="text-neutral-600">
                      Each uniform is tailored to provide the perfect fit for every individual in your team.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <Palette className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Fabric & Color Selection</h3>
                    <p className="text-neutral-600">
                      Choose from a wide range of fabrics and colors to match your brand identity.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <Shirt className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Logo Embroidery & Printing</h3>
                    <p className="text-neutral-600">
                      Add your logo or custom designs through high-quality embroidery or printing.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <BadgeCheck className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Quality Assurance</h3>
                    <p className="text-neutral-600">
                      Every uniform undergoes rigorous quality checks before delivery to ensure excellence.
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Discuss Your Requirements
              </Link>
            </div>
            <div>
              <img 
                src="../../src/assets/factory.png" 
                alt="Uniform customization" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="bg-primary-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                  Ready to Order {categoryData.name} Uniforms?
                </h2>
                <p className="text-neutral-200 mb-8">
                  Contact our team today to discuss your specific requirements and receive a custom quote.
                </p>
                <div className="space-y-4">
                  <Link to="/contact" className="btn btn-secondary w-full sm:w-auto">
                    Request a Quote
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 relative min-h-[300px]">
                <img 
                  src={categoryData.ctaImage || categoryData.image} 
                  alt={`${categoryData.name} uniforms`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryDetailPage;