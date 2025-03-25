
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tourCategories = ["All", "Food & Culture", "Art & History", "Comprehensive", "Adventure", "Heritage"];

const allTours = [
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
  {
    id: 4,
    title: "Mumbai Film City Tour",
    duration: "5 hours",
    image: "https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 139,
    category: "Art & History",
    description: "Go behind the scenes of Bollywood with visits to iconic film studios and locations featured in famous Indian films.",
  },
  {
    id: 5,
    title: "Harbor & Islands Expedition",
    duration: "7 hours",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 179,
    category: "Adventure",
    description: "Explore Mumbai's beautiful harbor and nearby islands with boat rides and guided tours of historical sites.",
  },
  {
    id: 6,
    title: "Heritage Walking Tour",
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: 99,
    category: "Heritage",
    description: "Walk through Mumbai's UNESCO heritage sites with expert commentary on the colonial influences and architectural significance.",
  },
];

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredTours, setFilteredTours] = useState(allTours);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredTours(allTours);
    } else {
      setFilteredTours(allTours.filter(tour => tour.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-mumbai-cream">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-mumbai-black">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Tours</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our handcrafted experiences that reveal the true essence of Mumbai through the eyes of locals.
          </p>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-narrow">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {tourCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${activeCategory === category 
                    ? 'bg-mumbai-yellow text-mumbai-black' 
                    : 'bg-white text-mumbai-charcoal hover:bg-mumbai-yellow/10'}`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map(tour => (
              <div 
                key={tour.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md card-hover animate-fade-in"
                style={{ animationDelay: `${0.05 * tour.id}s` }}
              >
                <div className="image-container h-60">
                  <img 
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-mumbai-yellow text-mumbai-black px-3 py-1 rounded-full text-sm font-medium">
                    {tour.category}
                  </div>
                </div>
                
                <div className="p-6">
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
                  
                  <p className="text-mumbai-charcoal mb-6">
                    {tour.description}
                  </p>
                  
                  <button className="btn-black w-full justify-center">
                    Book This Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Tours;
