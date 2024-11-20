import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const services = [
  {
    title: "Eyebrow Threading",
    description: "Expert shaping and definition for your brows",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
  },
  {
    title: "Facial Threading",
    description: "Gentle hair removal for a smoother complexion",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8"
  },
  {
    title: "Body Waxing",
    description: "Professional waxing services for lasting smoothness",
    image: "https://images.unsplash.com/photo-1598524374912-6b0b0bdd5e4e"
  },
  {
    title: "Beauty Add-Ons",
    description: "Enhance your look with our beauty services",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702"
  },
  {
    title: "Facial Treatments",
    description: "Rejuvenating facials for glowing skin",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881"
  }
];

const ServiceSlideshow = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-pearl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-12 text-center">
          Our Beauty Services
        </h2>
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-4">
                    <div className="rounded-xl overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:scale-105">
                      <div className="relative h-72">
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center p-6 transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                            <p className="text-lg leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-semibold text-secondary mb-3">
                          {service.title}
                        </h3>
                        <p className="text-warmGray text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16" />
            <CarouselNext className="hidden md:flex -right-16" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlideshow;