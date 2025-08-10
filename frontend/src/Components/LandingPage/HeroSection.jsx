import React, { useEffect, useState } from 'react';
import "../../App.css";
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
   
    const animateElements = () => {
      const elements = [
        { selector: '.home-data', delay: 0 },
        { selector: '.hero-badge', delay: 200 },
        { selector: '.home-data h1', delay: 400 },
        { selector: '.hero-subtitle', delay: 600 },
        { selector: '.hero-description', delay: 800 },
        { selector: '.hero-stats', delay: 1000 },
        { selector: '.button-group', delay: 1200 },
        { selector: '.hero-tagline', delay: 1400 },
        { selector: '.social-links', delay: 1600 },
        { selector: '.home-image', delay: 500 },
        { selector: '.floating-icon', delay: 1800 }
      ];

      elements.forEach(({ selector, delay }) => {
        setTimeout(() => {
          const element = document.querySelector(selector);
          if (element) {
            element.classList.add('reveal');
            element.classList.add('animate-on-scroll');
          }
        }, delay);
      });
    };


    if (isLoaded) {
      setTimeout(animateElements, 200);
    }


    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('reveal')) {
          entry.target.classList.add('reveal');
          entry.target.classList.add('animate-on-scroll');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const allElements = document.querySelectorAll('.home-data, .home-image, .hero-badge, .hero-subtitle, .hero-description, .hero-stats, .button-group, .hero-tagline, .social-links');
    allElements.forEach(el => observer.observe(el));

  
    const fallbackTimer = setTimeout(() => {
      const elements = document.querySelectorAll('.home-data, .home-image, .hero-badge, .hero-subtitle, .hero-description, .hero-stats, .button-group, .hero-tagline, .social-links');
      elements.forEach(el => {
        if (!el.classList.contains('reveal')) {
          el.classList.add('reveal');
          el.classList.add('animate-on-scroll');
        }
      });
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section id="home" className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
      <div className="container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
  
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
       
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        <div className="decorative-circle circle-3"></div>
        
        <div className="hero-content">
          <div className="home-data">
            <div className="hero-badge">
              <i className="ri-verified-badge-line"></i>
              <span className="badge-text">Eco-Certified Solutions</span>
            </div>
            
            <h1>
              <span className="highlight typing-text">TRANSFORM </span> YOUR BUSINESS
              <br />
              WITH <span className="highlight typing-text">SUSTAINABLE </span> INNOVATION
            </h1>
            
            <p className="hero-subtitle">
              Leading the Green Revolution in Business Solutions
            </p>
            
            <p className="hero-description">
              We empower businesses to thrive while protecting our planet. 
              From eco-friendly strategies to sustainable growth solutions — 
              we're your partner in building a greener, more profitable future.
            </p>
            
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            
            <div className="button-group">
              <button className="btn btn-primary btn-animated">
                <span>Book a Call</span>
                <i className="ri-arrow-right-line btn-icon"></i>
                <div className="btn-glow"></div>
              </button>
              <button className="btn btn-outline btn-animated">
                <span>Learn More</span>
                <div className="btn-glow"></div>
              </button>
            </div>
            
            <div className="social-links">
              <div className="social-icon-wrapper">
               <a href="https://www.facebook.com/people/EHM-Consultancy-Pvt-Ltd/100063877967113/" alt=""> <i className="ri-facebook-fill social-icon"></i></a>
                <div className="social-hover-effect"></div>
              </div>
              <div className="social-icon-wrapper">
               <a href="https://x.com/EhmConsultancy"> <i className="ri-twitter-x-line social-icon"></i></a>
                <div className="social-hover-effect"></div>
              </div>
              <div className="social-icon-wrapper">
               <a href="https://www.instagram.com/ehmconsultancy/"> <i className="ri-instagram-line social-icon"></i></a>
                <div className="social-hover-effect"></div>
              </div>
              <div className="social-icon-wrapper">
               <a href="https://www.linkedin.com/company/ehm-consultancy-pvt-ltd/"> <i className="ri-linkedin-fill social-icon"></i></a>
                <div className="social-hover-effect"></div>
              </div>
            </div>
          </div>
          
          <div className="home-image-container">
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <img 
                src="https://morneticherbal.in/images/313.png" 
                alt="Sustainability" 
                className="home-image"
              />
              </div>
             
            
            <div className="floating-icon floating-leaf">
              <i className="ri-leaf-line"></i>
              <div className="floating-trail"></div>
            </div>
            
            <div className="floating-icon floating-flower">
              <i className="ri-flower-line"></i>
              <div className="floating-trail"></div>
            </div>
            
            <div className="floating-icon floating-plant">
              <i className="ri-plant-line"></i>
              <div className="floating-trail"></div>
            </div>
            
            <div className="floating-icon floating-recycle">
              <i className="ri-recycle-line"></i>
              <div className="floating-trail"></div>
            </div>
          </div>
        </div>
        
     
        <div className="scroll-indicator" onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <div className="scroll-arrow"></div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
