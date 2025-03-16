
import { FacebookIcon, InstagramIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brow Arc Threading</h3>
            <p className="text-gray-300">
              Where precision meets beauty. Your trusted destination for professional threading services.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Eyebrow Threading</li>
              <li className="text-gray-300">Upper Lip Threading</li>
              <li className="text-gray-300">Full Face Threading</li>
              <li className="text-gray-300">Eyebrow Tinting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/browarcthreading/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a 
                href="http://instagram.com/browarcthreading/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Visit our Instagram page"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Brow Arc Threading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
