
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <div 
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1625493845416-1ea0ab799353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center animate-image-scale"
            style={{ transformOrigin: 'center center' }}
          ></div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-mumbai-black/80 via-mumbai-black/50 to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative h-full w-full z-20 flex items-center">
        <div className="container-narrow">
          <div className="max-w-2xl space-y-6">
            <h4 
              className={`text-mumbai-yellow font-medium text-lg md:text-xl mb-3 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '0.3s' }}
            >
              Experience Mumbai Like Never Before
            </h4>
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '0.5s' }}
            >
              Discover the Hidden Gems of Mumbai with Local Experts
            </h1>
            <p 
              className={`text-gray-200 text-lg max-w-xl opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '0.7s' }}
            >
              Immerse yourself in authentic experiences that go beyond typical tourist spots. 
              Our premium tours reveal the true essence of Mumbai through history, art, and culture.
            </p>
            <div 
              className={`pt-4 flex flex-col sm:flex-row gap-4 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '0.9s' }}
            >
              <Link to="/tours" className="btn-primary">
                Explore Tours
              </Link>
              <Link to="/about" className="btn-secondary border-white text-white">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div 
          className={`flex flex-col items-center opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '1.2s' }}
        >
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-mumbai-yellow relative">
            <div className="absolute top-0 w-full h-3 bg-mumbai-yellow animate-slide-up"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
