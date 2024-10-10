import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <div className="hero-div">
        <h2>
          Discover Your Website's Health{" "}
          <span>with a Comprehensive Scan and Audit!</span>
        </h2>
        <p>
          <span>Gain In-Depth Insights into Your Website’s Health!</span> Analyze key factors
          such as On-Page SEO, Performance, Keyword Research, Social Media
          Presence, and Internal Links. <span> Get a comprehensive, clear, and detailed
          report to elevate your online presence.</span>
        </p>
        
        
        <Link className="hero-btn"  to="/rankpage">Get Started</Link>
      
      </div>
    </>
  );
};

export default HeroSection;
