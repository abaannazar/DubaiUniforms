import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    category: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Dubai Uniform';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://dubaiuniform.com/backend/send-enquiry.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setIsSubmitted(true);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        category: '',
      });
    } else {
      console.error(result.message || 'Unknown error');
      alert('Failed to send message. Please try again later.');
    }
  } catch (error) {
    console.error('Network Error:', error);
    alert('Network error. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-600">
        <div className="container-custom text-center text-white">
          <h1 className="text-white mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-neutral-100">
            Get in touch with our team to discuss your uniform requirements or request a quote.
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-2 align-center justify-center mt-8" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a 
              href="https://wa.me/971506988658" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary "
            >
              <img src="src\assets\whatsapp icon.png" alt="" className='w-9' />
              Chat on WhatsApp
            </a>
            <a 
              href="tel:+971506988658" 
              className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm "
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-3 rounded-md bg-primary-50 text-primary-600 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Our Location</h3>
                    <p className="text-neutral-700">
                      Ajman Industrial 2 <br />
                      Dubai - United Arab Emirates
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="p-3 rounded-md bg-primary-50 text-primary-600 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Phone</h3>
                    <p className="text-neutral-700">
                      <a href="tel:+971506988658" className="hover:text-primary-600 transition-colors">
                        +971 50 6988 658
                      </a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="p-3 rounded-md bg-primary-50 text-primary-600 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <p className="text-neutral-700">
                      <a href="mailto:sales@dubaiuniform.com" className="hover:text-primary-600 transition-colors">
                        sales@dubaiuniform.com
                      </a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="p-3 rounded-md bg-primary-50 text-primary-600 mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Business Hours</h3>
                    <p className="text-neutral-700">
                      Monday - Thursday: 8:00 AM - 10:00 PM<br />
                      Friday: 8:00 AM - 12:00 PM<br />
                      Saturday: 9:00 AM - 10:00 PM<br />
                      Sunday : Closed
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Map */}
              <div className="h-[350px] rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.7983295632525!2d55.47382587524122!3d25.37807457759493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f592d8be4f117%3A0xa6f4ef11a0c4c927!2sDubai%20Uniforms%20-%20Manufacturer%20%26%20Suppliers%20UAE%20LLc%20%2C(Leading%20Uniform%20supplier%20in%20Middle%20east)!5e0!3m2!1sen!2sin!4v1748941613633!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Dubai Uniforms Craft Location"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-soft">
                <h2 className="mb-6">Send Us a Message</h2>
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 text-green-800 p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                    <p>
                      Your message has been sent successfully. One of our representatives will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-1">
                          Uniform Category
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select a category</option>
                          <option value="corporate">Corporate</option>
                          <option value="medical">Medical</option>
                          <option value="hospitality">Hospitality</option>
                          <option value="industrial">Industrial</option>
                          <option value="security">Security</option>
                          <option value="school">School</option>
                          <option value="sports">Sports</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        ></textarea>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-neutral-600 mt-4">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: 'What is the minimum order quantity?',
                  answer: 'Our minimum order quantity varies by product type. For most uniform categories, we require a minimum of 10 pieces per design. For custom uniforms with special requirements, please contact our team for specific details.'
                },
                {
                  question: 'How long does it take to fulfill an order?',
                  answer: 'Standard production time is 2-3 weeks from order confirmation and approval of designs. Rush orders may be accommodated based on our current production schedule and will incur additional charges.'
                },
                {
                  question: 'Do you offer samples before bulk production?',
                  answer: 'Yes, we provide samples for approval before proceeding with bulk production. Sample charges apply and will be credited toward your final order.'
                },
                {
                  question: 'What are your payment terms?',
                  answer: '50% advance payment is required to initiate the production process, with the remaining 50% due before shipment. For first-time customers, we may require full payment in advance.'
                },
                {
                  question: 'Do you ship internationally?',
                  answer: 'Yes, we ship to all GCC countries and can arrange international shipping upon request. Shipping costs and customs duties are the responsibility of the customer.'
                },
                {
                  question: 'Can I provide my own designs for uniforms?',
                  answer: 'Absolutely! We welcome custom designs and can work from your sketches, images, or detailed descriptions. Our design team is also available to create custom designs based on your requirements.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-soft p-6">
                  <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Elevate Your Team's Appearance?</h2>
          <p className="text-xl max-w-3xl mx-auto text-neutral-100 mb-8">
            Contact us today to discuss your uniform requirements and receive a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+971506988658" className="btn btn-secondary">
              Call +971 50 6988 658
            </a>
            <a href="mailto:sales@dubaiuniforms.ae" className="btn bg-white text-primary-600 hover:bg-neutral-100">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;