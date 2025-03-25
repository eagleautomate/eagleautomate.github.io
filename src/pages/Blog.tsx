
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "The Hidden History of Colaba",
    excerpt: "Discover the fascinating stories behind one of Mumbai's most iconic neighborhoods, from its colonial past to the present day.",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Priya Sharma",
    date: "May 15, 2023",
    category: "History",
    readTime: "8 min read",
    content: "Colaba, located at the southern tip of Mumbai, is a neighborhood steeped in history and cultural significance. Originally an archipelago of seven islands, Colaba was one of the first areas to be developed during the colonial era. The area gets its name from Kolabhat, a word in the language of the indigenous Koli fishermen who were the original inhabitants of the islands of Mumbai...",
  },
  {
    id: 2,
    title: "Mumbai's Street Food Revolution",
    excerpt: "How innovative chefs are reinventing traditional street food, bringing Mumbai's culinary heritage to fine dining and global recognition.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    author: "Raj Malhotra",
    date: "April 22, 2023",
    category: "Food",
    readTime: "6 min read",
    content: "Mumbai's street food scene has always been a vibrant reflection of the city's diverse cultural influences and immigrant communities. From the iconic vada pav - often called Mumbai's burger - to the tangy pani puri and savory bhel puri, these dishes have long defined the city's culinary identity...",
  },
  {
    id: 3,
    title: "Monsoon in Mumbai: A Photographer's Guide",
    excerpt: "The best locations and techniques for capturing the dramatic beauty of Mumbai during the rainy season.",
    image: "https://images.unsplash.com/photo-1563448927992-9570402de0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    author: "Aditya Patel",
    date: "June 10, 2023",
    category: "Photography",
    readTime: "5 min read",
    content: "The monsoon season transforms Mumbai dramatically, washing away the dust and bringing a renewed sense of life to the city. For photographers, this season presents unique opportunities to capture the city in a different light. The dramatic skies, reflections in puddles, and the ways citizens adapt to the rain all tell compelling visual stories...",
  },
  {
    id: 4,
    title: "The Architecture of Bombay Art Deco",
    excerpt: "Exploring Mumbai's world-renowned collection of Art Deco buildings and their historical significance.",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Vikram Mehta",
    date: "March 5, 2023",
    category: "Architecture",
    readTime: "10 min read",
    content: "Mumbai boasts the world's second-largest collection of Art Deco buildings, after only Miami. Built primarily in the 1930s and 1940s, these structures reflect a fascinating period of optimism and modernization in the city's history...",
  },
  {
    id: 5,
    title: "The Last Parsi Cafes of Mumbai",
    excerpt: "The cultural legacy and uncertain future of Mumbai's historic Irani cafes.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Zarin Daruwala",
    date: "January 12, 2023",
    category: "Culture",
    readTime: "7 min read",
    content: "The Irani cafes of Mumbai, established by Persian immigrants in the 19th and early 20th centuries, have been crucial social institutions in the city for generations. With their marble-top tables, bentwood chairs, and glass cabinets, these cafes have a distinctive aesthetic that harks back to a different era...",
  },
];

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-mumbai-cream">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-mumbai-black">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Mumbai Stories</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Insights, adventures, and cultural explorations from our team of local experts.
          </p>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-narrow">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map(category => (
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
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-md card-hover animate-fade-in"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <div className="image-container h-48">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-mumbai-yellow/90 backdrop-blur-sm text-mumbai-black px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-mumbai-charcoal mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  
                  <p className="text-mumbai-charcoal mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                        <img 
                          src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${20 + index}.jpg`} 
                          alt={post.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    
                    <button className="text-mumbai-black font-medium hover:text-mumbai-yellow transition-colors">
                      Read More →
                    </button>
                  </div>
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

export default Blog;
