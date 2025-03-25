
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "My trip to Mumbai wouldn't have been the same without MumbaiLocal. The insider knowledge of our guide took us to places no guidebook would mention. The street food tour was the highlight - we got to taste authentic dishes in places I would have been too intimidated to try on my own.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Wilson",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
    text: "The Art & Architecture tour completely changed my perception of Mumbai. Our guide was incredibly knowledgeable and took us to hidden art galleries and architectural marvels that told the story of the city's evolution. The personal touches and attention to detail made this experience truly premium.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anika Patel",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    text: "As someone of Indian heritage who had never been to Mumbai, this tour was eye-opening. Our guide didn't just show us places, they shared stories and created connections with locals that made us feel like insiders rather than tourists. I now have a much deeper appreciation for my cultural roots.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-animation, .reveal-animation-left, .reveal-animation-right');
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-mumbai-black text-white" id="testimonials">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="reveal-animation text-3xl md:text-4xl font-serif font-semibold mb-4 inline-block title-accent">
            What Our Guests Say
          </h2>
          <p className="reveal-animation text-gray-300 max-w-2xl mx-auto mt-8">
            Hear directly from travelers who've experienced the magic of Mumbai through our premium local tours.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-mumbai-charcoal/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mumbai-yellow" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-300 italic">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-mumbai-yellow w-6' : 'bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
