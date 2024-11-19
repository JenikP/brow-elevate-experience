import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+61123456789";
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
            <a href="#services" className="text-charcoal hover:text-secondary transition-colors">Services</a>
            <a href="#about" className="text-charcoal hover:text-secondary transition-colors">About</a>
            <a href="#testimonials" className="text-charcoal hover:text-secondary transition-colors">Testimonials</a>
            <Link to="/locations" className="text-charcoal hover:text-secondary transition-colors">Locations</Link>
            <a href="#contact" className="text-charcoal hover:text-secondary transition-colors">Contact</a>
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
              <a href="#services" className="block px-3 py-2 text-charcoal hover:text-secondary">Services</a>
              <a href="#about" className="block px-3 py-2 text-charcoal hover:text-secondary">About</a>
              <a href="#testimonials" className="block px-3 py-2 text-charcoal hover:text-secondary">Testimonials</a>
              <Link to="/locations" className="block px-3 py-2 text-charcoal hover:text-secondary">Locations</Link>
              <a href="#contact" className="block px-3 py-2 text-charcoal hover:text-secondary">Contact</a>
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