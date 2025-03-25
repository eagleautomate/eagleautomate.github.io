
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-mumbai-cream">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-mumbai-black">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the story behind MumbaiLocal and our passion for authentic experiences.
          </p>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-serif font-semibold mb-4 title-accent">Our Story</h2>
              <p className="text-mumbai-charcoal">
                MumbaiLocal was born from a simple idea: to showcase the real Mumbai that locals know and love. Founded in 2018 by a group of passionate Mumbaikars, our mission is to go beyond the typical tourist experience.
              </p>
              <p className="text-mumbai-charcoal">
                We believe that truly experiencing Mumbai means diving into its contradictions – the chaos and calm, tradition and innovation, history and future – all guided by those who call this magnificent city home.
              </p>
              <div className="flex items-center space-x-4 pt-2">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Vikram Mehta</h4>
                  <p className="text-sm text-mumbai-charcoal">Founder & Lead Guide</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Mumbai Local Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">What Sets Us Apart</h2>
            <p className="text-mumbai-charcoal max-w-2xl mx-auto">
              We're not just tour guides – we're storytellers, historians, food enthusiasts, and proud Mumbaikars sharing our city with the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md card-hover animate-fade-in">
              <div className="w-12 h-12 bg-mumbai-yellow rounded-full flex items-center justify-center mb-4 text-mumbai-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Experts</h3>
              <p className="text-mumbai-charcoal">
                All our guides are born and raised in Mumbai, with deep knowledge of the city's history, culture, and hidden gems that only locals know.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md card-hover animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-mumbai-yellow rounded-full flex items-center justify-center mb-4 text-mumbai-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Curated Experiences</h3>
              <p className="text-mumbai-charcoal">
                Each tour is thoughtfully designed to showcase authentic experiences, not just tourist attractions. We blend history, culture, food, and art into unforgettable journeys.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md card-hover animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 bg-mumbai-yellow rounded-full flex items-center justify-center mb-4 text-mumbai-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Service</h3>
              <p className="text-mumbai-charcoal">
                We pride ourselves on attention to detail, personalized service, and small group sizes to ensure an intimate, high-quality experience for each guest.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-mumbai-black text-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the passionate locals who bring Mumbai's stories to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {name: "Priya Sharma", role: "Cultural Expert", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"},
              {name: "Raj Patel", role: "Food Guide", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"},
              {name: "Aisha Khan", role: "History Specialist", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"},
              {name: "Kiran Desai", role: "Architecture Guide", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"}
            ].map((member, index) => (
              <div key={member.name} className="text-center animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-mumbai-yellow">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;
