import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/Dubai Uniforms-01.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsCategoryOpen(false);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `px-3 py-2 relative font-medium transition-all duration-300 ${
      isActive 
        ? 'text-primary-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary-500' 
        : 'text-neutral-700 hover:text-primary-600'
    }`;

  const mobileLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `block w-full px-4 py-3 border-b border-neutral-100 ${
      isActive ? 'text-primary-600 font-medium bg-neutral-50' : 'text-neutral-700'
    }`;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white md:bg-transparent py-4'
    }`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src={logo} alt="" className="h-10" />
    
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
          
          <div className="relative group">
            <button 
              className="flex items-center px-3 py-2 font-medium text-neutral-700 hover:text-primary-600 transition-all duration-300"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              onBlur={() => setTimeout(() => setIsCategoryOpen(false), 200)}
            >
              Categories <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-medium transform transition-all duration-200 ${
              isCategoryOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}>
              <div className="py-2">
                <Link to="/categories/corporate" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 hover:text-primary-600">
                  Corporate
                </Link>
                <Link to="/categories/medical" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 hover:text-primary-600">
                  Medical
                </Link>
                <Link to="/categories/hospitality" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 hover:text-primary-600">
                  Hospitality
                </Link>
                <Link to="/categories/industrial" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 hover:text-primary-600">
                  Industrial
                </Link>
                <Link to="/categories/security" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 hover:text-primary-600">
                  Security
                </Link>
                <Link to="/categories/school" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 hover:text-primary-600">
                  School
                </Link>
                <Link to="/categories/sports" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700 hover:text-primary-600">
                  Sports
                </Link>
              </div>
            </div>
          </div>
          
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          <Link to="/contact" className="btn btn-primary ml-4">Get a Quote</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={closeMenu}>
        <div 
          className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-heading font-bold text-primary-600">Menu</span>
              <button 
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                onClick={closeMenu}
                aria-label="Close Menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto mr-4">
              <NavLink to="/" className={mobileLinkClasses} onClick={closeMenu} end>Home</NavLink>
              <NavLink to="/about" className={mobileLinkClasses} onClick={closeMenu}>About Us</NavLink>
              <NavLink to="/categories" className={mobileLinkClasses} onClick={closeMenu}>Categories</NavLink>
              <NavLink to="/contact" className={mobileLinkClasses} onClick={closeMenu}>Contact</NavLink>
            </nav>
            <div className="p-4 border-t ">
              <Link 
                to="/contact" 
                className="btn btn-primary w-full justify-center"
                onClick={closeMenu}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;