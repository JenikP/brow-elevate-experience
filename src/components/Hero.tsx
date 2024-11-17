const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-pearl">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-6">
            Transform Your Look with Expert Threading
          </h1>
          <p className="text-lg sm:text-xl text-warmGray mb-8">
            Where precision meets beauty. Experience the art of perfect brows with our expert threading services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-full text-lg transition-colors">
              Book Appointment
            </button>
            <button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-full text-lg transition-colors">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;