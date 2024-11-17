const services = [
  {
    title: "Eyebrow Threading",
    price: "$15",
    description: "Precise shaping using the ancient art of threading",
    duration: "15 mins"
  },
  {
    title: "Upper Lip Threading",
    price: "$8",
    description: "Gentle hair removal for a smooth finish",
    duration: "10 mins"
  },
  {
    title: "Full Face Threading",
    price: "$40",
    description: "Complete facial hair removal treatment",
    duration: "30 mins"
  },
  {
    title: "Eyebrow Tinting",
    price: "$20",
    description: "Enhanced color for fuller-looking brows",
    duration: "20 mins"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-warmGray max-w-2xl mx-auto">
            Experience our range of professional threading and beauty services, tailored to enhance your natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-pearl p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
                <p className="text-2xl font-bold text-primary-dark mb-4">{service.price}</p>
                <p className="text-warmGray mb-4">{service.description}</p>
                <p className="text-sm text-secondary">{service.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-secondary px-8 py-3 rounded-full text-lg transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;