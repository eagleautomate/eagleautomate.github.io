
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
  },
];

const BlogPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section ref={sectionRef} className="section-padding bg-white" id="blog">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="reveal-animation text-3xl md:text-4xl font-serif font-semibold mb-4 inline-block title-accent">
            Stories from Mumbai
          </h2>
          <p className="reveal-animation text-mumbai-charcoal max-w-2xl mx-auto mt-8">
            Dive deeper into the rich tapestry of Mumbai through our curated stories, insights, and local perspectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`reveal-animation bg-white rounded-xl overflow-hidden shadow-md card-hover`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
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
                  
                  <Link to={`/blog/${post.id}`} className="text-mumbai-black font-medium hover:text-mumbai-yellow transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="btn-primary">
            Explore All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
