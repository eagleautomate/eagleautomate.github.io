
import { useEffect, useRef } from "react";

const AboutUs = () => {
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
    <section ref={sectionRef} className="section-padding bg-white" id="about">
      <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="reveal-animation text-3xl md:text-4xl font-serif font-semibold mb-4 title-accent">
              Why Choose Mumbai<span className="text-mumbai-yellow">Local</span>?
            </h2>
            <p className="reveal-animation text-mumbai-charcoal mt-8">
              We're not just tour guides, we're passionate Mumbai locals sharing the authentic side of our beloved city.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="reveal-animation flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-mumbai-yellow rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Local Expertise</h3>
                <p className="text-mumbai-charcoal">
                  All our guides are born and raised in Mumbai, with deep knowledge of the city's history and hidden gems.
                </p>
              </div>
            </div>
            
            <div className="reveal-animation flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-mumbai-yellow rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Exclusive Experiences</h3>
                <p className="text-mumbai-charcoal">
                  Access to private venues, interaction with local artisans, and authentic cultural experiences.
                </p>
              </div>
            </div>
            
            <div className="reveal-animation flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-mumbai-yellow rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Personalized Approach</h3>
                <p className="text-mumbai-charcoal">
                  Small group sizes and customizable itineraries ensure each experience is tailored to your interests.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="flex flex-col gap-4">
            <div className="reveal-animation-left rounded-2xl overflow-hidden h-48 md:h-64 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1601619989240-de6f2005941c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Mumbai street food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="reveal-animation-left rounded-2xl overflow-hidden h-64 md:h-80 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1580390730601-539a392697da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80" 
                alt="Mumbai architecture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-8">
            <div className="reveal-animation-right rounded-2xl overflow-hidden h-64 md:h-80 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1585231474241-c8340c9b94cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80" 
                alt="Mumbai locals" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="reveal-animation-right rounded-2xl overflow-hidden h-48 md:h-64 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1575485670503-69c30315ed76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                alt="Mumbai culture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
