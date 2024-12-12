const ThreadingInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-8 text-center">
            Professional Threading & Beauty Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-warmGray leading-relaxed mb-6">
                At Brow Arc Threading, we specialize in precise eyebrow shaping and facial threading 
                services. Our skilled beauticians use traditional threading techniques combined with 
                modern expertise to enhance your natural beauty.
              </p>
              <p className="text-lg text-warmGray leading-relaxed">
                Visit us at our conveniently located salons across Melbourne's major shopping centres. 
                Our modern facilities are designed for your comfort, featuring professional lighting 
                and dedicated beauty stations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/d7103387-2066-42db-a27c-5fb9c881993a.png" 
                alt="Professional Lash Services" 
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="/lovable-uploads/02b9652d-300e-4cfd-be4c-40b987819b26.png" 
                alt="Professional Beauty Services" 
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img 
              src="/lovable-uploads/a625320e-edf1-4a19-825a-e24b0134a836.png" 
              alt="Our Modern Salon" 
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Modern Facilities
              </h3>
              <p className="text-lg text-warmGray leading-relaxed">
                Experience our services in our contemporary, well-lit salons. Each location features 
                professional beauty stations, comfortable seating, and a welcoming atmosphere. Our 
                commitment to cleanliness and professionalism ensures you receive the best possible 
                service in a relaxing environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreadingInfo;