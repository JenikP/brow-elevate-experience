import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-pearl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
              Visit Us Today
            </h2>
            <p className="text-warmGray mb-8">
              We're conveniently located and ready to serve you. Walk-ins are welcome, 
              but appointments are recommended for minimal wait times.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary-dark mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Location</h3>
                  <p className="text-warmGray">123 Beauty Lane, Suite 100<br />Your City, ST 12345</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary-dark mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Phone</h3>
                  <p className="text-warmGray">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary-dark mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Email</h3>
                  <p className="text-warmGray">info@browarcthreading.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary-dark mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary">Hours</h3>
                  <p className="text-warmGray">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-secondary mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-warmGray mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-warmGray mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-warmGray mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-full transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;