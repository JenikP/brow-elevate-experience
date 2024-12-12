const About = () => {
  return (
    <section id="about" className="py-20 bg-pearl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Threading expert at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg">
              <p className="text-secondary font-bold text-xl">15+ Years</p>
              <p className="text-secondary-light">of Experience</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
              Your Beauty, Our Expertise
            </h2>
            <p className="text-warmGray mb-6">
              Since 2005, Brow Arc Threading has been the premier destination for 
              exceptional threading services. Our skilled professionals combine ancient 
              techniques with modern precision to deliver results that enhance your 
              natural beauty.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-2xl font-bold text-secondary">5000+</p>
                <p className="text-warmGray">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">100%</p>
                <p className="text-warmGray">Satisfaction</p>
              </div>
            </div>
            <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;