
import { Phone } from "lucide-react";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:+61415469594";
  };

  return (
    <div className="relative min-h-screen flex items-center bg-pearl">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/lovable-uploads/hero.jpg')" }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-6">
            Transform Your Look with Expert Threading
          </h1>
          <p className="text-lg sm:text-xl text-warmGray mb-8">
            Where precision meets beauty. Experience the art of perfect brows with our expert threading services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleCall}
              className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-full text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Book Appointment
            </button>
            <a 
              href="#services"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-full text-lg transition-colors text-center"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
