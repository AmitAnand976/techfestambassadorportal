import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/Reach";
import Workflow from "./components/Resume";
import Footer from "./components/Footer";
import Pricing from "./components/Domains";
import Testimonials from "./components/Testimonials";
import { useState } from "react";


const App = () => {
  return (
    <>
   
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        
        <HeroSection />
        <Workflow />
        <FeatureSection />
        <Pricing />
        <Testimonials />
        <Footer />
      
      </div>
      
    </>
  );
};

export default App;
