import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file for styling
import constructionImage from '../images/1.jpg';
import remodelingImage from '../images/2.jpg';
import backyardRenovation from '../images/4.jpeg';

const Home = () => {
  return (
    <div className="home-container">
      <main>
        <section>
          <p>
            Kings Construction & Remodeling is a leading construction company specializing in residential and commercial projects.
            With years of experience and a team of skilled professionals, we deliver high-quality results that exceed expectations.
          </p>
        </section>
        <section>
          <h2>What We Do</h2>
          <div className="service">
            <img src={constructionImage} alt="Construction"  className="service-image"/>
            <div className="service-details">
              <h3>New Construction</h3>
              <p>
              We specialize in new construction projects, bringing your vision to life with quality craftsmanship and attention to detail.
              Our experienced team will work closely with you throughout the entire process, from concept development to project completion.
              Whether it's a residential or commercial project, we are committed to delivering outstanding results that exceed your expectations.
            </p>
                        </div>
          </div>
          <div className="service">
            <img src={remodelingImage} alt="Remodeling" className="service-image"/>
            <div className="service-details">
              <h3>Home Remodeling</h3>
              <p>
              Transform your home with our professional remodeling services.
              Whether you want to renovate your kitchen, upgrade your bathroom, or enhance your living spaces, we've got you covered.
              Our skilled team will work closely with you to understand your vision and create a customized plan that suits your style and budget.
              With our attention to detail and commitment to quality, we'll bring new life to your home and create spaces that you'll love.
            </p>
                        </div>
          </div>
          <div className="service">
            <img src={backyardRenovation} alt="BackyardRenovation" className="service-image"/>
            <div className="service-details">
              <h3>Backyard Renovation</h3>
              <p>
              Enhance your outdoor living experience with our backyard renovation services.
              Whether you dream of a beautiful patio, a cozy outdoor kitchen, or a serene garden retreat, we can turn your backyard into a perfect oasis.
              Our team of experts will design and build custom features that blend seamlessly with your existing landscape, creating a space where you can relax and entertain in style.
            </p>
                        </div>
          </div>
        </section>
        <section>
          <Link to="/contact">Contact Us</Link>
        </section>
      </main>
    
    </div>
  );
};

export default Home;
