
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const tours = [
  {
    id: 1,
    title: "Hidden Culinary Gems",
    duration: "6 hours",
    image: "https://images.unsplash.com/photo-1529142934796-86bea6ae2fab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 149,
    category: "Food & Culture",
    description: "Explore Mumbai's secret food spots known only to locals. From street food to family-run eateries that have perfected recipes over generations.",
  },
  {
    id: 2,
    title: "Art & Architecture Walk",
    duration: "4 hours",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 129,
    category: "Art & History",
    description: "Discover the stunning colonial architecture, hidden art galleries, and street art that tells the story of Mumbai's creative evolution.",
  },
  {
    id: 3,
    title: "Dawn to Dusk Mumbai",
    duration: "10 hours",
    image: "https://images.unsplash.com/photo-1558013400-94e8abd8954d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    price: 199,
    category: "Comprehensive",
    description: "Experience Mumbai's complete daily transformation from the morning fish markets to the vibrant nightlife districts.",
  },
];

const FeaturedTours = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
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

  // Handle scroll to contact section on homepage
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="section-padding bg-mumbai-cream" id="tours">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="reveal-animation text-3xl md:text-4xl font-serif font-semibold mb-4 inline-block title-accent">
            Premium Tour Experiences
          </h2>
          <p className="reveal-animation text-mumbai-charcoal max-w-2xl mx-auto mt-8">
            Handcrafted experiences that blend Mumbai's rich heritage with exclusive access to local gems. Our tours are limited to small groups to ensure personalized attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div 
              key={tour.id}
              className={`reveal-animation bg-white rounded-xl overflow-hidden shadow-md card-hover flex flex-col`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="image-container h-64">
                <img 
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-mumbai-yellow text-mumbai-black px-3 py-1 rounded-full text-sm font-medium">
                  {tour.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{tour.title}</h3>
                  <div className="text-mumbai-black font-semibold">
                    ${tour.price}
                  </div>
                </div>
                
                <div className="flex items-center mb-3 text-mumbai-charcoal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{tour.duration}</span>
                </div>
                
                <p className="text-mumbai-charcoal mb-auto">
                  {tour.description}
                </p>
                
                <div className="mt-6">
                  <button 
                    onClick={scrollToContact}
                    className="btn-black w-full justify-center"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/tours" className="btn-primary">
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
