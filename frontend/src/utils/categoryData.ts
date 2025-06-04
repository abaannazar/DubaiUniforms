import { Category } from '../types';


// Category data
const categoryData: Record<string, Category> = {
  corporate: {
    id: 'corporate',
    name: 'Corporate',
    description: 'Professional attire for office environments, including suits, shirts, blouses, and accessories.',
    image: "../../src/assets/img/Corporate/Coporate-DU.png",
    ctaImage: 'https://images.pexels.com/photos/4341054/pexels-photo-4341054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Custom tailoring', 'Premium fabrics', 'Corporate branding', 'Comfort-focused design'],
    products: [
      {
        name: 'Executive Suit Set',
        description: 'Premium tailored suit set for executives and management staff.',
        price: 'From AED 750',
        image: '../../src/assets/img/Corporate/Suit.jpg'
      },
      {
        name: 'Executive shirts',
        description: 'Crisp, polished shirts for a sharp corporate look.',
        price: 'From AED 40',
        image: '../../src/assets/img/Corporate/Executiveshirts.jpg'
      },
      {
        name: 'Formal trousers',
        description: 'Tailored comfort for daily executive wear.',
        price: 'From AED 60',
        image: '../../src/assets/img/Corporate/Trousers.jpg'
      },
      {
        name: 'Business skirts',
        description: 'Smart-fit skirts that combine modesty with elegance.',
        price: 'From AED 55',
        image: '../../src/assets/img/Corporate/Business skirts.png'
      },
      {
        name: 'Leather belts',
        description: 'High-quality belts that complete the executive look. ',
        price: 'From AED 25',
        image: '../../src/assets/img/Corporate/belt.png'
      },
      {
        name: 'Branded ID badges',
        description: 'Custom identity tags for a professional first impression.',
        price: 'From AED 10',
        image: '../../src/assets/img/Corporate/ID.png'
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
        name: 'Scrub suits',
        description: 'Breathable, antibacterial fabric for everyday clinical use.',
        price: 'From AED 65',
        image: '../../src/assets/img/medical/Scrub.png'
      },
      {
        name: 'Lab coats',
        description: 'Clean white coats with side pockets and logo branding.',
        price: 'From AED 40',
        image: '../../src/assets/img/medical/Doctor.png'
      },
      {
        name: 'Head caps',
        description: 'Protective and hygienic headwear for medical staff.',
        price: 'From AED 6',
        image: '../../src/assets/img/medical/Headcap.png'
      },
      {
        name: 'Face masks',
        description: 'Comfortable, breathable face masks with medical-grade safety.',
        price: 'From AED 2',
        image: '../../src/assets/img/medical/Mask.png'
      },
      {
        name: 'ID tags',
        description: 'Lightweight tags for staff recognition and access.',
        price: 'From AED 8',
        image: '../../src/assets/img/medical/ID.png'
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
        name: 'Waiter Shirts',
        description: 'Polished shirts designed for restaurant and banquet staff.',
        price: 'From AED 38',
        image: '#waiter-shirts-img'
      },
      {
        name: 'Chef Coats',
        description: 'Heat-resistant, breathable coats for professional chefs.',
        price: 'From AED 65',
        image: '#chef-coats-img'
      },
      {
        name: 'Aprons',
        description: 'Durable aprons with logo printing for kitchen and service teams.',
        price: 'From AED 15',
        image: '#aprons-img'
      },
      {
        name: 'Hospitality T-Shirts',
        description: 'Branded T-shirts for casual, modern restaurant staff uniforms.',
        price: 'From AED 25',
        image: '#hospitality-tshirts-img'
      },
      {
        name: 'Trousers',
        description: 'Stretch-fit trousers that balance style and comfort.',
        price: 'From AED 45',
        image: '#hospitality-trousers-img'
      },
      {
        name: 'Caps',
        description: 'Logo-printed caps to complete the branded look.',
        price: 'From AED 10',
        image: '#hospitality-caps-img'
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
        name: 'Coveralls',
        description: 'All-in-one protective gear built for industrial environments.',
        price: 'From AED 75',
        image: '#coveralls-img'
      },
      {
        name: 'Reflective Vests',
        description: 'Hi-vis vests for day and night visibility on-site.',
        price: 'From AED 20',
        image: '#reflective-vests-img'
      },
      {
        name: 'Work Shirts',
        description: 'Tough, breathable shirts suitable for long shifts.',
        price: 'From AED 40',
        image: '#industrial-work-shirts-img'
      },
      {
        name: 'Industrial Trousers',
        description: 'Reinforced trousers with utility pockets for tools and gear.',
        price: 'From AED 50',
        image: '#industrial-trousers-img'
      },
      {
        name: 'Safety Shoes',
        description: 'Steel-toe shoes with anti-slip soles for worker protection.',
        price: 'From AED 85',
        image: '#safety-shoes-img'
      },
      {
        name: 'Helmets',
        description: 'Impact-resistant helmets for head protection on-site.',
        price: 'From AED 25',
        image: '#industrial-helmets-img'
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
        name: 'Security Shirts',
        description: 'Structured shirts that offer authority and presence.',
        price: 'From AED 38',
        image: '#security-shirts-img'
      },
      {
        name: 'Tactical Trousers',
        description: 'Flexible, reinforced trousers for duty wear.',
        price: 'From AED 50',
        image: '#tactical-trousers-img'
      },
      {
        name: 'Caps & Berets',
        description: 'Formal headwear for professional security presentation.',
        price: 'From AED 12',
        image: '#security-caps-img'
      },
      {
        name: 'Security Jackets',
        description: 'All-weather jackets with logo placement and pockets.',
        price: 'From AED 90',
        image: '#security-jackets-img'
      },
      {
        name: 'Duty Belts',
        description: 'Multi-functional belts to carry essential tools.',
        price: 'From AED 25',
        image: '#security-duty-belts-img'
      },
      {
        name: 'Name & ID Tags',
        description: 'Essential for identity verification and formality.',
        price: 'From AED 10',
        image: '#security-id-tags-img'
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
        name: 'School Shirts',
        description: 'Smart-fit cotton shirts in school-specific colors.',
        price: 'From AED 30',
        image: '#school-shirts-img'
      },
      {
        name: 'Pants & Skirts',
        description: 'Tailored school trousers and skirts for a smart uniform look.',
        price: 'From AED 40',
        image: '#school-bottoms-img'
      },
      {
        name: 'School Blazers',
        description: 'Formal blazers with logo embroidery for senior students.',
        price: 'From AED 110',
        image: '#school-blazers-img'
      },
      {
        name: 'PE Uniforms',
        description: 'Flexible and breathable kits for physical education.',
        price: 'From AED 35',
        image: '#pe-uniforms-img'
      },
      {
        name: 'Socks & Ties',
        description: 'Color-coded socks and matching ties for full uniform compliance.',
        price: 'From AED 10',
        image: '#school-accessories-img'
      },
      {
        name: 'Backpacks',
        description: 'Durable school bags with logo print and extra padding.',
        price: 'From AED 45',
        image: '#school-backpacks-img'
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
        name: 'Team Jerseys',
        description: 'Lightweight jerseys in team colors with breathable mesh panels.',
        price: 'From AED 40',
        image: '#team-jerseys-img'
      },
      {
        name: 'Shorts & Track Pants',
        description: 'Comfort-fit lowers for games, training, and drills.',
        price: 'From AED 35',
        image: '#sports-bottoms-img'
      },
      {
        name: 'Tracksuits',
        description: 'Cozy zip-up sets for warmups and post-game wear.',
        price: 'From AED 90',
        image: '#tracksuits-img'
      },
      {
        name: 'Training Tees',
        description: 'Stretchy, sweat-resistant tees for intense workouts.',
        price: 'From AED 25',
        image: '#training-tees-img'
      },
      {
        name: 'Caps & Headbands',
        description: 'Performance accessories to keep hair and sweat under control.',
        price: 'From AED 8',
        image: '#sports-caps-img'
      }
    ]
  },
  
};

// Function to get category data
export const getCategoryData = (id: string): Category | undefined => {
  return categoryData[id];
};