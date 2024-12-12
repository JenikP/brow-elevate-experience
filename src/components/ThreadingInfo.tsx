const ThreadingInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-8 text-center">
            What is Eyebrow Threading?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-warmGray leading-relaxed mb-6">
                Threading is an ancient method of hair removal originating in Central Asia and India. 
                This precise technique uses twisted cotton thread to remove unwanted hair from the root, 
                creating clean, defined brows that enhance your natural beauty.
              </p>
              <p className="text-lg text-warmGray leading-relaxed">
                At Brow Arc Threading, we use only organic cotton thread suitable for sensitive skin, 
                ensuring a comfortable experience with long-lasting results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/8ffeb09f-9003-4b2e-83d1-fd963014c46a.png" 
                alt="Eyebrow Henna Application" 
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="/lovable-uploads/444736aa-9be5-49de-8823-2577eef57e9d.png" 
                alt="Threading Demonstration" 
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreadingInfo;