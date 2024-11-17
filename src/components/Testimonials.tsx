const testimonials = [
  {
    name: "Sarah Johnson",
    comment: "The best threading experience I've ever had. The attention to detail is amazing!",
    rating: 5
  },
  {
    name: "Emily Chen",
    comment: "I won't trust anyone else with my brows. Professional, clean, and always perfect results.",
    rating: 5
  },
  {
    name: "Maria Garcia",
    comment: "Finally found my go-to place for threading. The staff is skilled and friendly!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-warmGray max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-pearl p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-warmGray mb-4 italic">"{testimonial.comment}"</p>
              <p className="font-semibold text-secondary">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;