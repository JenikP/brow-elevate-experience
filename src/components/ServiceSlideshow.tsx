import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <section className="py-20 bg-pearl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-12 text-center">
          Our Beauty Services
        </h2>
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                      <div className="relative h-48">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-secondary mb-2">
                          {service.title}
                        </h3>
                        <p className="text-warmGray">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlideshow;