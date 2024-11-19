import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCall = () => {
    window.location.href = "tel:+61123456789";
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-semibold text-secondary">Brow Arc</Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation('services')} className="text-charcoal hover:text-secondary transition-colors">
              Services
            </button>
            <button onClick={() => handleNavigation('about')} className="text-charcoal hover:text-secondary transition-colors">
              About
            </button>
            <button onClick={() => handleNavigation('testimonials')} className="text-charcoal hover:text-secondary transition-colors">
              Testimonials
            </button>
            <Link to="/locations" className="text-charcoal hover:text-secondary transition-colors">
              Locations
            </Link>
            <button onClick={() => handleNavigation('contact')} className="text-charcoal hover:text-secondary transition-colors">
              Contact
            </button>
            <button 
              onClick={handleCall}
              className="bg-primary hover:bg-primary-dark text-secondary px-6 py-2 rounded-full transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => handleNavigation('services')} className="block w-full text-left px-3 py-2 text-charcoal hover:text-secondary">
                Services
              </button>
              <button onClick={() => handleNavigation('about')} className="block w-full text-left px-3 py-2 text-charcoal hover:text-secondary">
                About
              </button>
              <button onClick={() => handleNavigation('testimonials')} className="block w-full text-left px-3 py-2 text-charcoal hover:text-secondary">
                Testimonials
              </button>
              <Link to="/locations" className="block px-3 py-2 text-charcoal hover:text-secondary">
                Locations
              </Link>
              <button onClick={() => handleNavigation('contact')} className="block w-full text-left px-3 py-2 text-charcoal hover:text-secondary">
                Contact
              </button>
              <button 
                onClick={handleCall}
                className="w-full mt-4 bg-primary hover:bg-primary-dark text-secondary px-6 py-2 rounded-full flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;