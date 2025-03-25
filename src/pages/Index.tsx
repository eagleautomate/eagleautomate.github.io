
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import FeaturedTours from "../components/FeaturedTours";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle scrolling to contact section when redirected from another page
  useEffect(() => {
    if (location.state?.scrollToContact && !isLoading) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure the page is fully loaded
      }
    }
  }, [location.state, isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-mumbai-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-mumbai-yellow border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="font-serif text-2xl font-bold tracking-tight">
            <span className="text-white">Mumbai</span>
            <span className="text-mumbai-yellow">Local</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedTours />
      <Testimonials />
      <BlogPreview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
