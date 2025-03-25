
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-mumbai-cream py-24">
        <div className="text-center px-6">
          <h1 className="text-8xl font-serif font-bold mb-4 text-mumbai-black">404</h1>
          <div className="w-24 h-1 bg-mumbai-yellow mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-mumbai-charcoal mb-8 max-w-lg mx-auto">
            Oops! The page you're looking for seems to have wandered off exploring Mumbai.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
