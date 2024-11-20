import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import { toast } from "./ui/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaValue) {
      toast({
        title: "Verification Required",
        description: "Please complete the captcha verification",
        variant: "destructive"
      });
      return;
    }

    if (!formRef.current) return;

    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      if (formRef.current) {
        formRef.current.reset();
      }
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaValue(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-warmGray mb-2">Name</label>
                <input
                  name="user_name"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-warmGray mb-2">Email</label>
                <input
                  name="user_email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-warmGray mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary h-32"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your reCAPTCHA site key
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !captchaValue}
                className="w-full bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;