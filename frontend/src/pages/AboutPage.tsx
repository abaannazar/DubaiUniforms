import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Aguy from "../assets/img/About/Aguy.png";
import { Helmet } from 'react-helmet-async'; // Uncomment if you want to use Helmet for SEO
import yarn from '../assets/img/yarning.png';
import machine from '../assets/factory.png';
import Manufacturing from '../assets/img/Manufacturing facility.png';


const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | Dubai Uniforms';
  }, []);

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    <Helmet>
      <title>About Dubai Uniform | Uniform Supplier in Dubai & GCC</title>
      <meta name="description" content="Learn about Dubai Uniform – trusted uniform manufacturers in the UAE and across the GCC, specializing in high-quality, customized workwear." />
      <meta name="keywords" content="about uniform company dubai, gcc uniform manufacturer, workwear uae" />
      <link rel="canonical" href="https://dubaiuniform.com/about" />
    </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-600">
        <div className="container-custom text-center text-white">
          <h1 className="text-white mb-6">About Dubai Uniforms</h1>
          <p className="text-xl max-w-3xl mx-auto text-neutral-100">
            Leading uniform manufacturer serving businesses and institutions across the GCC region since 2005.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-6">Our Mission & Values</h2>
              <p className="text-neutral-700 mb-6">
                At Dubai Uniforms Craft, we are committed to designing and producing high-quality uniforms 
                that enhance the professional image of businesses and institutions across the Gulf region. 
                Our mission is to provide exceptional uniform solutions that combine durability, comfort, 
                and style while maintaining the highest standards of craftsmanship.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Quality Excellence', description: 'We source the finest fabrics and employ skilled craftsmen to ensure premium quality in every garment.' },
                  { title: 'Customer Satisfaction', description: 'We prioritize our clients\' needs and work closely with them to exceed their expectations.' },
                  { title: 'Innovation', description: 'We continuously explore new designs, materials, and production techniques to stay ahead in the industry.' },
                  { title: 'Reliability', description: 'We honor our commitments and deliver orders on time, every time.' }
                ].map((value, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-4">
                    <h4 className="font-medium text-primary-600">{value.title}</h4>
                    <p className="text-neutral-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute -left-100 -top-4 w-24 h-24 bg-secondary-500 rounded-lg opacity-30"></div>
              <img 
                src={Aguy} 
                alt="Uniform craftsmen at work" 
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section bg-neutral-50" ref={timelineRef}>
        <div className="container-custom">
          <div className="section-title">
            <h2 className="mb-4">Our Journey</h2>
            <p className="max-w-3xl mx-auto text-neutral-600">
              From a small tailoring workshop to a leading uniform manufacturer in the UAE.
            </p>
          </div>

          <div className="mt-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

            {/* Timeline Items */}
            {[
              {
                year: '2005',
                title: 'Humble Beginnings',
                description: 'Started as a small tailoring workshop in Dubai with just 5 craftsmen.'
              },
              {
                year: '2010',
                title: 'Expansion',
                description: 'Expanded operations and moved to a larger facility to accommodate growing demand.'
              },
              {
                year: '2015',
                title: 'GCC Presence',
                description: 'Established partnerships across GCC countries to better serve the regional market.'
              },
              {
                year: '2020',
                title: 'Modern Manufacturing',
                description: 'Invested in state-of-the-art machinery and technology to enhance production capabilities.'
              },
              {
                year: '2023',
                title: 'Sustainability Focus',
                description: 'Implemented eco-friendly processes and sustainable materials in our production.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center justify-between mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-5/12"></div>
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary-600 rounded-full text-white">
                  {index + 1}
                </div>
                <div className="w-5/12 p-6 bg-white rounded-xl shadow-soft">
                  <div className="mb-1 text-secondary-500 font-bold">{item.year}</div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
  <div className="container-custom">
    <div className="section-title">
      <h2 className="mb-4">Our Leadership Team</h2>
      <p className="max-w-3xl mx-auto text-neutral-600">
        Meet the experienced professionals who guide our company toward excellence.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center mt-12 max-w-5xl mx-auto">
      {[
        {
          name: 'Abdul Nazar Marakar',
          role: 'Founder & CEO',
          image: 'https://media.licdn.com/dms/image/v2/C5103AQFXZ9b8Q-YWSg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1563098631270?e=1754524800&v=beta&t=C99I3pf39r66RcX9NHz0gJroBkqJ5-NtymI2EBWthbQ',
          bio: '20+ years in textile manufacturing and business leadership across the Middle East.'
        },
        {
          name: 'Abaan Nazar',
          role: 'Management Staff',
          image: 'https://media.licdn.com/dms/image/v2/D4D03AQGsNkO4P4xxEQ/profile-displayphoto-shrink_400_400/B4DZO.OhTYGoAg-/0/1734063298423?e=1755129600&v=beta&t=TNZ-lpNUC7rsiHz8Z5NT0QB4OonQJWwLd1tdyxBWw1w',
          bio: 'Expert in supply chain management and operational efficiency with a focus on quality control.'
        }
      ].map((member, index) => (
        <div
          key={index}
          className="card text-center hover:shadow-xl transition-shadow duration-300 w-80 h-auto p-6 rounded-xl border mx-auto bg-white"
        >
          <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-5">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
          <div className="text-secondary-500 font-medium mb-4">{member.role}</div>
          <p className="text-neutral-600 text-base">{member.bio}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Manufacturing Facility */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="section-title">
            <h2 className="mb-4">Our Manufacturing Facility</h2>
            <p className="max-w-3xl mx-auto text-neutral-600">
              Our state-of-the-art facility in Dubai enables us to maintain strict quality control
              and deliver premium uniforms efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div>
              <img 
                src={Manufacturing}
                alt="Manufacturing facility" 
                className="rounded-lg shadow-lg mb-4"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src= {yarn}
                  alt="Yarn and fabric,Fabric cutting" 
                  className="rounded-lg shadow-lg h-48 object-cover"
                />
                <img 
                  src={machine} 
                  alt="Sewing machine" 
                  className="rounded-lg shadow-lg h-48 object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-4">World-Class Production Capabilities</h3>
              <p className="text-neutral-700 mb-6">
                Our 25,000 sq. ft. manufacturing facility houses the latest technology and equipment, 
                allowing us to produce up to 10,000 uniform pieces per week while maintaining the highest 
                quality standards.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  'Automated cutting systems for precision and consistency',
                  'Advanced embroidery machines for custom logos and designs',
                  'Quality control at every stage of production',
                  'Sustainable practices to minimize environmental impact',
                  'Flexible production lines to accommodate custom orders',
                  'In-house printing and embroidery services'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">150+</div>
                  <div className="text-neutral-600">Skilled Employees</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">10K+</div>
                  <div className="text-neutral-600">Weekly Capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;