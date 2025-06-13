import { Category } from '../types';

//Corporate
import corporate  from  "../assets/img/Corporate/Coporate-DU.png";
import suit from "../assets/img/Corporate/Suit.jpg";
import shirt from '../assets/img/Corporate/Executiveshirts.jpg';
import Trousers from '../assets/img/Corporate/Trousers.jpg'
import id from '../assets/img/Corporate/ID.png' ;
import belts from '../assets/img/Corporate/belt.png' ;
import skirts from '../assets/img/Corporate/Business skirts.png' ;

//Medical
import doctor from '../assets/img/medical/Doctor.png';
import headcap from '../assets/img/medical/Headcap.png';
import mask from '../assets/img/medical/Mask.png';
import medical2 from '../assets/img/medical/Medical2-DU.png';
import scrub from '../assets/img/medical/Scrub.png';

//Hospitality
import hospitality from "../assets/img/Hospitality-DU.png"
import chef from '../assets/img/Hospitality/ho-chef.jpg';
import waiter from '../assets/img/Hospitality/ho-Shirt.png.jpg';
import aprons from '../assets/img/Hospitality/ho-apron.jpg';
import tshit from "../assets/img/Hospitality/ho-tshirt.png"
import trousers from '../assets/img/Hospitality/ho-trousers.png';
import caps from '../assets/img/Hospitality/ho-cap.png';


//Industrial
import industrial from '../assets/img/Industrial-DU.png'
import coveralls from '../assets/img/Industrial/Coveralls.png';
import helmet from '../assets/img/Industrial/helmet.png';
import industrialTrousers from '../assets/img/Industrial/Industrial Trousers.png';
import industrialcta from '../assets/img/Industrial/industrial-cta.png';
import reflectiveVests from '../assets/img/Industrial/Reflective Vests.png';
import safetyShoes from '../assets/img/Industrial/Safety Shoes.png';
import workShirts from '../assets/img/Industrial/Work Shirts.png';

//Security
import security from '../assets/img/Security-DU.png'
import jacket from '../assets/img/Security/Security_jacket.png';
import securityShirts from '../assets/img/Security/Security_shirts.png';
import tacticalTrousers from '../assets/img/Security/Security_Trousers.png';
import securityCaps from '../assets/img/Security/Security_cap.png';

//School
import school from '../assets/img/School-DU.png';
import PE from '../assets/img/School/PE_Uniform.png';
import schoolShirt from '../assets/img/School/School Shirts.png';
import schoolTrousers from '../assets/img/School/Pants & Skirts.png';
import Blazers from '../assets/img/School/School Blazers.png';


//Sports
import sports from '../assets/img/Sports-DU.png';
import teamJerseys from '../assets/img/Sports/Jerseys.png';
import tracksuit from '../assets/img/Sports/Tracksuits.png';
import trainingTees from '../assets/img/Sports/tees.png';
import sportsBottoms from '../assets/img/Sports/Short.png';
import headcap2 from '../assets/img/Sports/Headbands.png';



// Category data
const categoryData: Record<string, Category> = {
  corporate: {
    id: 'corporate',
    name: 'Corporate',
    description: 'Professional attire for office environments, including suits, shirts, blouses, and accessories.',
    image: corporate,
    ctaImage: 'https://images.pexels.com/photos/4341054/pexels-photo-4341054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Custom tailoring', 'Premium fabrics', 'Corporate branding', 'Comfort-focused design'],
    products: [
      {
        name: 'Executive Suit Set',
        description: 'Premium tailored suit set for executives and management staff.',
        price: 'From AED 750',
        image: suit
      },
      {
        name: 'Executive shirts',
        description: 'Crisp, polished shirts for a sharp corporate look.',
        price: 'From AED 40',
        image: shirt
      },
      {
        name: 'Formal trousers',
        description: 'Tailored comfort for daily executive wear.',
        price: 'From AED 60',
        image: Trousers
      },
      {
        name: 'Business skirts',
        description: 'Smart-fit skirts that combine modesty with elegance.',
        price: 'From AED 55',
        image: skirts
      },
      {
        name: 'Leather belts',
        description: 'High-quality belts that complete the executive look. ',
        price: 'From AED 25',
        image: belts
      },
      {
        name: 'Branded ID badges',
        description: 'Custom identity tags for a professional first impression.',
        price: 'From AED 10',
        image: id
      }
    ]
  },
  medical: {
    id: 'medical',
    name: 'Medical',
    description: 'Comfortable and functional scrubs, lab coats, and healthcare apparel for medical professionals.',
    image: medical2,
    ctaImage: "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/10/Best-Hospital-Bed-Brands-01-0504060004.jpg",
    features: ['Antimicrobial fabrics', 'Functional pockets', 'Easy-care materials', 'Flexible sizing'],
    products: [
      {
        name: 'Scrub suits',
        description: 'Breathable, antibacterial fabric for everyday clinical use.',
        price: 'From AED 65',
        image: scrub
      },
      {
        name: 'Lab coats',
        description: 'Clean white coats with side pockets and logo branding.',
        price: 'From AED 40',
        image: doctor
      },
      {
        name: 'Head caps',
        description: 'Protective and hygienic headwear for medical staff.',
        price: 'From AED 6',
        image: headcap
      },
      {
        name: 'Face masks',
        description: 'Comfortable, breathable face masks with medical-grade safety.',
        price: 'From AED 2',
        image: mask
      },
      {
        name: 'ID tags',
        description: 'Lightweight tags for staff recognition and access.',
        price: 'From AED 8',
        image: id
      }
      
      
    ]
  },
  hospitality: {
    id: 'hospitality',
    name: 'Hospitality',
    description: 'Elegant uniforms for hotels, restaurants, and hospitality services that enhance customer experience.',
    image: hospitality,
    ctaImage: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Stain-resistant fabrics', 'Brand-aligned designs', 'Multiple style options', 'Durability for daily wear'],
    products: [
      {
        name: 'Waiter Shirts',
        description: 'Polished shirts designed for restaurant and banquet staff.',
        price: 'From AED 38',
        image: waiter
      },
      {
        name: 'Chef Coats',
        description: 'Heat-resistant, breathable coats for professional chefs.',
        price: 'From AED 65',
        image: chef
      },
      {
        name: 'Aprons',
        description: 'Durable aprons with logo printing for kitchen and service teams.',
        price: 'From AED 15',
        image: aprons
      },
      {
        name: 'Hospitality T-Shirts',
        description: 'Branded T-shirts for casual, modern restaurant staff uniforms.',
        price: 'From AED 25',
        image: tshit
      },
      {
        name: 'Trousers',
        description: 'Stretch-fit trousers that balance style and comfort.',
        price: 'From AED 45',
        image: trousers
      },
      {
        name: 'Caps',
        description: 'Logo-printed caps to complete the branded look.',
        price: 'From AED 10',
        image: caps
      }
    ]
  },
  industrial: {
    id: 'industrial',
    name: 'Industrial',
    description: 'Durable workwear and safety apparel for industrial environments and construction sites.',
    image: industrial,
    ctaImage: industrialcta,
    features: ['High-visibility options', 'Flame-resistant materials', 'Heavy-duty construction', 'Safety compliance'],
    products: [
       {
        name: 'Coveralls',
        description: 'All-in-one protective gear built for industrial environments.',
        price: 'From AED 75',
        image: coveralls
      },
      {
        name: 'Reflective Vests',
        description: 'Hi-vis vests for day and night visibility on-site.',
        price: 'From AED 20',
        image: reflectiveVests
      },
      {
        name: 'Work Shirts',
        description: 'Tough, breathable shirts suitable for long shifts.',
        price: 'From AED 40',
        image: workShirts
      },
      {
        name: 'Industrial Trousers',
        description: 'Reinforced trousers with utility pockets for tools and gear.',
        price: 'From AED 50',
        image: industrialTrousers
      },
      {
        name: 'Safety Shoes',
        description: 'Steel-toe shoes with anti-slip soles for worker protection.',
        price: 'From AED 85',
        image: safetyShoes
      },
      {
        name: 'Helmets',
        description: 'Impact-resistant helmets for head protection on-site.',
        price: 'From AED 25',
        image: helmet
      }
    ]
  },
  security: {
    id: 'security',
    name: 'Security',
    description: 'Professional security uniforms that command respect and provide comfort during long shifts.',
    image: security,
    ctaImage: 'https://images.pexels.com/photos/3770588/pexels-photo-3770588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Tactical design elements', 'Durable materials', 'Weather adaptability', 'Professional appearance'],
    products: [
       {
        name: 'Security Shirts',
        description: 'Structured shirts that offer authority and presence.',
        price: 'From AED 38',
        image: securityShirts
      },
      {
        name: 'Tactical Trousers',
        description: 'Flexible, reinforced trousers for duty wear.',
        price: 'From AED 50',
        image: tacticalTrousers
      },
      {
        name: 'Caps & Berets',
        description: 'Formal headwear for professional security presentation.',
        price: 'From AED 12',
        image: securityCaps
      },
      {
        name: 'Security Jackets',
        description: 'All-weather jackets with logo placement and pockets.',
        price: 'From AED 90',
        image: jacket
      },
      {
        name: 'Duty Belts',
        description: 'Multi-functional belts to carry essential tools.',
        price: 'From AED 25',
        image: belts
      },
      {
        name: 'Name & ID Tags',
        description: 'Essential for identity verification and formality.',
        price: 'From AED 10',
        image: id
      }
    ]
  },
  school: {
    id: 'school',
    name: 'School',
    description: 'Comfortable and durable school uniforms that foster a sense of belonging and pride.',
    image: school,
    ctaImage: 'https://www.understood.org/_next/image?url=https%3A%2F%2Fcdn-images.understood.org%2Fp0qf7j048i0q%2FE3C718B6580F40C3B5C7D8D1E86B4A6E%2Ff3dbff6e10f35df96a79d58b6039b954%2Fi499343530.jpg&w=3840&q=75',
    features: ['Easy-care fabrics', 'Growth allowances', 'Customizable designs', 'Institutional branding'],
    products: [
      {
        name: 'School Shirts',
        description: 'Smart-fit cotton shirts in school-specific colors.',
        price: 'From AED 30',
        image: schoolShirt
      },
      {
        name: 'Pants & Skirts',
        description: 'Tailored school trousers and skirts for a smart uniform look.',
        price: 'From AED 40',
        image: schoolTrousers
      },
      {
        name: 'School Blazers',
        description: 'Formal blazers with logo embroidery for senior students.',
        price: 'From AED 110',
        image: Blazers
      },
      {
        name: 'PE Uniforms',
        description: 'Flexible and breathable kits for physical education.',
        price: 'From AED 35',
        image: PE
      }
    ]
  },
  sports: {
    id: 'sports',
    name: 'Sports',
    description: 'Performance sportswear and team uniforms that enhance comfort and represent your brand.',
    image: sports,
    ctaImage: 'https://nauathletics.com/images/2025/5/31/BSJ_5608__1_.JPG',
    features: ['Moisture-wicking fabrics', 'Customizable designs', 'Team branding', 'Comfort during activity'],
    products: [
     {
        name: 'Team Jerseys',
        description: 'Lightweight jerseys in team colors with breathable mesh panels.',
        price: 'From AED 40',
        image: teamJerseys
      },
      {
        name: 'Shorts & Track Pants',
        description: 'Comfort-fit lowers for games, training, and drills.',
        price: 'From AED 35',
        image: sportsBottoms
      },
      {
        name: 'Tracksuits',
        description: 'Cozy zip-up sets for warmups and post-game wear.',
        price: 'From AED 90',
        image: tracksuit
      },
      {
        name: 'Training Tees',
        description: 'Stretchy, sweat-resistant tees for intense workouts.',
        price: 'From AED 25',
        image: trainingTees
      },
      {
        name: 'Caps & Headbands',
        description: 'Performance accessories to keep hair and sweat under control.',
        price: 'From AED 8',
        image: headcap2
      }
    ]
  },
  
};

// Function to get category data
export const getCategoryData = (id: string): Category | undefined => {
  return categoryData[id];
};