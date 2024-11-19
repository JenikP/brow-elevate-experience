import { Phone } from "lucide-react";
import ServiceCategory from './services/ServiceCategory';

const services = {
  facialThreadingWaxing: [
    {
      title: "Eyebrow Threading/Waxing",
      price: "from $12",
      description: "Precise shaping and hair removal",
      duration: "15 mins"
    },
    {
      title: "Upper Lip",
      price: "from $10",
      description: "Gentle hair removal for a smooth finish",
      duration: "10 mins"
    },
    {
      title: "Forehead",
      price: "from $10",
      description: "Smooth forehead hair removal",
      duration: "10 mins"
    },
    {
      title: "Chin",
      price: "from $10",
      description: "Precise chin hair removal",
      duration: "10 mins"
    },
    {
      title: "Side Burns",
      price: "from $10",
      description: "Shape and define your sideburns",
      duration: "10 mins"
    },
    {
      title: "Neck",
      price: "from $10",
      description: "Clean and smooth neck hair removal",
      duration: "10 mins"
    },
    {
      title: "Full Face",
      price: "from $45",
      description: "Complete facial hair removal",
      duration: "45 mins"
    }
  ],
  bodyWaxing: [
    {
      title: "Under Arms",
      price: "from $12",
      description: "Smooth underarm hair removal",
      duration: "15 mins"
    },
    {
      title: "Half Arm",
      price: "from $22",
      description: "Partial arm waxing service",
      duration: "20 mins"
    },
    {
      title: "Full Arm",
      price: "from $30",
      description: "Complete arm waxing treatment",
      duration: "30 mins"
    },
    {
      title: "Half Leg",
      price: "from $28",
      description: "Partial leg waxing service",
      duration: "25 mins"
    },
    {
      title: "Full Leg",
      price: "from $40",
      description: "Complete leg waxing treatment",
      duration: "45 mins"
    },
    {
      title: "Full Body",
      price: "from $220",
      description: "Complete body waxing package",
      duration: "120 mins"
    }
  ],
  beautyAddOns: [
    {
      title: "Eyebrow Tint",
      price: "from $15",
      description: "Enhanced color for fuller-looking brows",
      duration: "15 mins"
    },
    {
      title: "Eyelash Tint",
      price: "from $20",
      description: "Darker, more defined lashes",
      duration: "20 mins"
    },
    {
      title: "Eyelash Lift with Tint",
      price: "from $50",
      description: "Lifted and tinted lashes for a dramatic look",
      duration: "45 mins"
    },
    {
      title: "Eyebrow Henna Tattoo",
      price: "from $40",
      description: "Semi-permanent brow enhancement",
      duration: "40 mins"
    },
    {
      title: "Eyebrow Lamination with Tint",
      price: "from $65",
      description: "Restructured and tinted brows for a fuller look",
      duration: "60 mins"
    }
  ],
  facial: [
    {
      title: "Mini Facial",
      price: "from $50",
      description: "Quick refreshing facial treatment",
      duration: "30 mins"
    },
    {
      title: "Full Facial",
      price: "from $80",
      description: "Complete facial treatment for ultimate rejuvenation",
      duration: "60 mins"
    }
  ],
  comboOffers: [
    {
      title: "Eyebrow + Upper Lip",
      price: "from $20",
      description: "Popular combo for complete face framing",
      duration: "25 mins"
    },
    {
      title: "Eyebrow Threading & Eyelash Tint",
      price: "from $28",
      description: "Perfect combination for defined eyes",
      duration: "35 mins"
    },
    {
      title: "Eyebrow Tint & Eyelash Tint",
      price: "from $30",
      description: "Complete eye enhancement package",
      duration: "35 mins"
    }
  ]
};

const Services = () => {
  const handleCall = () => {
    window.location.href = "tel:+61123456789";
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-warmGray max-w-2xl mx-auto">
            Experience our comprehensive range of professional beauty services, tailored to enhance your natural beauty.
          </p>
        </div>

        {Object.entries(services).map(([category, items]) => (
          <ServiceCategory key={category} category={category} items={items} />
        ))}

        <div className="text-center mt-12">
          <button 
            onClick={handleCall}
            className="bg-primary hover:bg-primary-dark text-secondary px-8 py-3 rounded-full text-lg transition-colors flex items-center gap-2 mx-auto"
          >
            <Phone size={20} />
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
