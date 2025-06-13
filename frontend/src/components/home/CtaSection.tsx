import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto bg-primary-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to Outfit Your Team?
              </h2>
              <p className="text-neutral-200 mb-6 sm:mb-8">
                Get in touch with our uniform specialists today. Fast delivery within 7-10 days!
              </p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://wa.me/971506988658" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary w-full sm:w-auto flex items-center justify-center"
                  >
                    <img src="src\assets\whatsapp icon-01.png" alt="" className='w-7 mr-1'/>
                    WhatsApp Us
                  </a>
                  <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-100 w-full sm:w-auto">
                    Request a Quote
                  </Link>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+971506988658" 
                    className="inline-flex items-center text-white hover:text-secondary-500 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    +971 50 698 8658
                  </a>
                  <a 
                    href="mailto:sales@dubaiuniform.com" 
                    className="inline-flex items-center text-white hover:text-secondary-500 transition-colors"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    sales@dubaiuniform.com
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <img 
                src="https://cdn.garment.dony.vn/wp-content/uploads/2023/03/Team-group-uniform-styles-ideas-top-design-best-trends.jpg" 
                alt="Custom uniforms" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;