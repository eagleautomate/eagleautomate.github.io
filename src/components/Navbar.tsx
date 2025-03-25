
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="font-serif text-2xl font-bold tracking-tight">
            <span className="text-mumbai-black">Mumbai</span>
            <span className="text-mumbai-yellow">Local</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-mumbai-black font-medium hover:text-mumbai-yellow transition-colors">
            Home
          </Link>
          <Link to="/tours" className="text-mumbai-black font-medium hover:text-mumbai-yellow transition-colors">
            Tours
          </Link>
          <Link to="/blog" className="text-mumbai-black font-medium hover:text-mumbai-yellow transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-mumbai-black font-medium hover:text-mumbai-yellow transition-colors">
            About
          </Link>
          <Link to="/contact" className="btn-primary">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-mumbai-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-mumbai-black font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/tours" 
            className="text-mumbai-black font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tours
          </Link>
          <Link 
            to="/blog" 
            className="text-mumbai-black font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className="text-mumbai-black font-medium py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="btn-primary w-full justify-center mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
