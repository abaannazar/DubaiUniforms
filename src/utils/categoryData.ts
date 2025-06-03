import { Category } from '../types';


// Category data
const categoryData: Record<string, Category> = {
  corporate: {
    id: 'corporate',
    name: 'Corporate',
    description: 'Professional attire for office environments, including suits, shirts, blouses, and accessories.',
    image: "../../src/assets/img/Coporate-DU.png",
    ctaImage: 'https://images.pexels.com/photos/4341054/pexels-photo-4341054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Custom tailoring', 'Premium fabrics', 'Corporate branding', 'Comfort-focused design'],
    products: [
      {
        name: 'Executive Suit Set',
        description: 'Premium tailored suit set for executives and management staff.',
        price: 'From AED 750',
        image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Corporate Shirt Collection',
        description: 'High-quality shirts in various colors with optional embroidery.',
        price: 'From AED 150',
        image: 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Professional Blouse Set',
        description: 'Elegant blouses designed for comfort and professional appearance.',
        price: 'From AED 180',
        image: 'https://images.pexels.com/photos/5647119/pexels-photo-5647119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Corporate Trouser Collection',
        description: 'Durable and comfortable trousers for everyday office wear.',
        price: 'From AED 200',
        image: 'https://images.pexels.com/photos/8460872/pexels-photo-8460872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Reception Staff Uniform',
        description: 'Distinctive uniforms for front desk and reception staff.',
        price: 'From AED 400',
        image: 'https://images.pexels.com/photos/8989488/pexels-photo-8989488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Corporate Accessories',
        description: 'Ties, scarves, and other accessories to complete your corporate look.',
        price: 'From AED 80',
        image: 'https://images.pexels.com/photos/6786680/pexels-photo-6786680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  medical: {
    id: 'medical',
    name: 'Medical',
    description: 'Comfortable and functional scrubs, lab coats, and healthcare apparel for medical professionals.',
    image: "../../src/assets/img/medical/Medical2-DU.png",
    features: ['Antimicrobial fabrics', 'Functional pockets', 'Easy-care materials', 'Flexible sizing'],
    products: [
      {
        name: 'Premium Scrub Set',
        description: 'Comfortable scrubs with multiple pockets and antimicrobial fabric.',
        price: 'From AED 220',
        image: "../../src/assets/img/medical/Scrub.png"
      },
      {
        name: 'Doctor\'s Lab Coat',
        description: 'Professional lab coats with custom embroidery options.',
        price: 'From AED 250',
        image: "../../src/assets/img/medical/Doctor.png"
      },
      {
        name: 'Nurse Uniform Set',
        description: 'Complete nurse uniforms with options for customization.',
        price: 'From AED 280',
        image: 'https://images.pexels.com/photos/7661576/pexels-photo-7661576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
      
      
    ]
  },
  hospitality: {
    id: 'hospitality',
    name: 'Hospitality',
    description: 'Elegant uniforms for hotels, restaurants, and hospitality services that enhance customer experience.',
    image: 'https://images.pexels.com/photos/5634667/pexels-photo-5634667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Stain-resistant fabrics', 'Brand-aligned designs', 'Multiple style options', 'Durability for daily wear'],
    products: [
      {
        name: 'Chef Uniform Set',
        description: 'Professional chef jackets, pants, and hats for kitchen staff.',
        price: 'From AED 280',
        image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Hotel Front Desk Uniform',
        description: 'Elegant uniforms for front desk and reception staff.',
        price: 'From AED 350',
        image: 'https://images.pexels.com/photos/5696862/pexels-photo-5696862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Waiter/Waitress Attire',
        description: 'Professional serving staff uniforms for restaurants and hotels.',
        price: 'From AED 240',
        image: 'https://images.pexels.com/photos/9217248/pexels-photo-9217248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Housekeeping Uniform',
        description: 'Practical and professional uniforms for housekeeping staff.',
        price: 'From AED 200',
        image: 'https://images.pexels.com/photos/4464881/pexels-photo-4464881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Concierge Uniform',
        description: 'Distinguished uniforms for concierge and guest service staff.',
        price: 'From AED 380',
        image: 'https://images.pexels.com/photos/7363183/pexels-photo-7363183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Barista/Bartender Attire',
        description: 'Stylish and practical uniforms for bar and café staff.',
        price: 'From AED 220',
        image: 'https://images.pexels.com/photos/4252139/pexels-photo-4252139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  industrial: {
    id: 'industrial',
    name: 'Industrial',
    description: 'Durable workwear and safety apparel for industrial environments and construction sites.',
    image: 'https://images.pexels.com/photos/8961321/pexels-photo-8961321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['High-visibility options', 'Flame-resistant materials', 'Heavy-duty construction', 'Safety compliance'],
    products: [
      {
        name: 'Safety Coverall',
        description: 'Full-body coveralls with safety features for industrial environments.',
        price: 'From AED 280',
        image: 'https://images.pexels.com/photos/8961321/pexels-photo-8961321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Hi-Vis Work Shirt',
        description: 'High-visibility work shirts with reflective elements.',
        price: 'From AED 150',
        image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Cargo Work Pants',
        description: 'Durable cargo pants with multiple pockets for tools and equipment.',
        price: 'From AED 180',
        image: 'https://images.pexels.com/photos/4482935/pexels-photo-4482935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Flame-Resistant Jacket',
        description: 'Safety jackets with flame-resistant properties for hazardous environments.',
        price: 'From AED 320',
        image: 'https://images.pexels.com/photos/8961286/pexels-photo-8961286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Mechanic\'s Uniform',
        description: 'Specialized uniforms for mechanics and maintenance staff.',
        price: 'From AED 240',
        image: 'https://images.pexels.com/photos/6474499/pexels-photo-6474499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Construction Safety Vest',
        description: 'High-visibility vests with customizable branding options.',
        price: 'From AED 100',
        image: 'https://images.pexels.com/photos/8972918/pexels-photo-8972918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  security: {
    id: 'security',
    name: 'Security',
    description: 'Professional security uniforms that command respect and provide comfort during long shifts.',
    image: 'https://images.pexels.com/photos/5699676/pexels-photo-5699676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Tactical design elements', 'Durable materials', 'Weather adaptability', 'Professional appearance'],
    products: [
      {
        name: 'Security Officer Uniform',
        description: 'Complete uniform set for security officers with professional appearance.',
        price: 'From AED 350',
        image: 'https://images.pexels.com/photos/5699676/pexels-photo-5699676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Tactical Security Shirt',
        description: 'Specialized shirts with tactical features for security personnel.',
        price: 'From AED 180',
        image: 'https://images.pexels.com/photos/8127553/pexels-photo-8127553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Security Trouser',
        description: 'Durable trousers with multiple pockets for security equipment.',
        price: 'From AED 200',
        image: 'https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Security Jacket',
        description: 'Weather-resistant jackets with security features and branding options.',
        price: 'From AED 280',
        image: 'https://images.pexels.com/photos/7380776/pexels-photo-7380776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Hotel Security Uniform',
        description: 'Professional uniforms for hotel and hospitality security staff.',
        price: 'From AED 320',
        image: 'https://images.pexels.com/photos/6182573/pexels-photo-6182573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Event Security Attire',
        description: 'Identifiable uniforms for event security personnel.',
        price: 'From AED 250',
        image: 'https://images.pexels.com/photos/6231591/pexels-photo-6231591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  school: {
    id: 'school',
    name: 'School',
    description: 'Comfortable and durable school uniforms that foster a sense of belonging and pride.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Easy-care fabrics', 'Growth allowances', 'Customizable designs', 'Institutional branding'],
    products: [
      {
        name: 'Primary School Uniform Set',
        description: 'Complete uniform sets for primary school students with customizable options.',
        price: 'From AED 220',
        image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Secondary School Uniform',
        description: 'Age-appropriate uniforms for secondary school students.',
        price: 'From AED 250',
        image: 'https://images.pexels.com/photos/5538617/pexels-photo-5538617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'School PE Kit',
        description: 'Comfortable and durable physical education uniforms for students.',
        price: 'From AED 180',
        image: 'https://images.pexels.com/photos/8534689/pexels-photo-8534689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'School Staff Uniform',
        description: 'Professional uniforms for teaching and administrative staff.',
        price: 'From AED 280',
        image: 'https://images.pexels.com/photos/5212682/pexels-photo-5212682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Kindergarten Uniform',
        description: 'Colorful and practical uniforms for kindergarten students.',
        price: 'From AED 150',
        image: 'https://images.pexels.com/photos/8471977/pexels-photo-8471977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'School Accessories',
        description: 'Ties, caps, badges, and other accessories to complete school uniforms.',
        price: 'From AED 40',
        image: 'https://images.pexels.com/photos/5538583/pexels-photo-5538583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  },
  sports: {
    id: 'sports',
    name: 'Sports',
    description: 'Performance sportswear and team uniforms that enhance comfort and represent your brand.',
    image: 'https://images.pexels.com/photos/6765615/pexels-photo-6765615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Moisture-wicking fabrics', 'Customizable designs', 'Team branding', 'Comfort during activity'],
    products: [
      {
        name: 'Football Team Kit',
        description: 'Complete football team kits with custom designs and player numbers.',
        price: 'From AED 200',
        image: 'https://images.pexels.com/photos/6765615/pexels-photo-6765615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Basketball Uniform',
        description: 'Breathable basketball jerseys and shorts with team branding.',
        price: 'From AED 180',
        image: 'https://images.pexels.com/photos/8224992/pexels-photo-8224992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Cricket Team Kit',
        description: 'Professional cricket uniforms with custom designs and colors.',
        price: 'From AED 240',
        image: 'https://images.pexels.com/photos/7290196/pexels-photo-7290196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Running Team Gear',
        description: 'Performance running shirts and shorts for athletics teams.',
        price: 'From AED 150',
        image: 'https://images.pexels.com/photos/6572472/pexels-photo-6572472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Swimming Team Uniform',
        description: 'Professional swimwear for swimming teams and competitions.',
        price: 'From AED 180',
        image: 'https://images.pexels.com/photos/10493494/pexels-photo-10493494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        name: 'Training Tracksuit',
        description: 'Team tracksuits with customizable designs and branding options.',
        price: 'From AED 280',
        image: 'https://images.pexels.com/photos/3764015/pexels-photo-3764015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  }
};

// Function to get category data
export const getCategoryData = (id: string): Category | undefined => {
  return categoryData[id];
};