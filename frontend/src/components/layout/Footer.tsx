import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Whatsapp_y from "../../assets/whatsapp icon-02.png"
import logo_White from '../../assets/DULOGO-W-01.png'; // Adjust the path as necessary


const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-custom pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src={logo_White} alt="" className='h-45' />
              
            </div>
            <p className="text-neutral-300 mb-6">
              Leading UAE-based manufacturer of premium uniforms for all industries across the GCC region.
              Fast delivery within 7-10 days!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/dubaiuniforms.ae" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/dubaiuniforms.ae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-500 transition-colors">
                <Instagram size={20} />
              </a>

              <a href="https://www.linkedin.com/company/dubaiuniforms/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-neutral-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/categories" className="text-neutral-300 hover:text-white transition-colors">Uniform Categories</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-white transition-colors">Our Process</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-6">Uniform Categories</h4>
            <ul className="space-y-3">
              <li><Link to="/categories/corporate" className="text-neutral-300 hover:text-white transition-colors">Corporate</Link></li>
              <li><Link to="/categories/medical" className="text-neutral-300 hover:text-white transition-colors">Medical</Link></li>
              <li><Link to="/categories/hospitality" className="text-neutral-300 hover:text-white transition-colors">Hospitality</Link></li>
              <li><Link to="/categories/industrial" className="text-neutral-300 hover:text-white transition-colors">Industrial</Link></li>
              <li><Link to="/categories/security" className="text-neutral-300 hover:text-white transition-colors">Security</Link></li>
              <li><Link to="/categories/school" className="text-neutral-300 hover:text-white transition-colors">School</Link></li>
              <li><Link to="/categories/sports" className="text-neutral-300 hover:text-white transition-colors">Sports</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-secondary-500 flex-shrink-0 mt-1" />
                <p className="text-neutral-300">
                  
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-secondary-500 flex-shrink-0" />
                <a href="tel:+971506988658" className="text-neutral-300 hover:text-white transition-colors">
                  +971 50 698 8658
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-secondary-500 flex-shrink-0" />
                <a href="mailto:sales@dubaiuniforms.ae" className="text-neutral-300 hover:text-white transition-colors">
                  sales@dubaiuniforms.ae
                </a>
              </div>
              <div className="flex items-center">
                <img src={Whatsapp_y} alt="" className='w-8 pr-2'/>
                <a 
                  href="https://wa.me/971506988658" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              &copy; {new Date().getFullYear()} Dubai Uniforms Craft. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-neutral-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-neutral-400 text-sm hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;