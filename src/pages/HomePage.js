import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file for styling
import constructionImage from "../images/1.jpg";
import mainImage from "../images/home_main.jpeg";
import ImageSwitcher from "./ImageSwitcher";
import bckImage from "../images/gallery/backYard.jpeg";
import bckImage1 from "../images/gallery/backYard1.jpeg";
const services = [
  "Exterior/Interior Painting",
  "Cement/Stamped Concrete",
  "Home Remodeling",
  "Patios",
  "Shed",
  "Yard",
  "Garage Doors",
  "Decks",
  "Fence",
  "General Repairs &  More!",
];

const Home = () => {
  const chunkSize = Math.ceil(services.length / 3);
  const serviceRows = [];
  for (let i = 0; i < services.length; i += chunkSize) {
    const chunk = services.slice(i, i + chunkSize);
    serviceRows.push(chunk);
  }

  return (
    <div className="home-container">
      <main>
        <section>
          <p>
            Kings Construction & Remodeling is a leading construction company
            specializing in residential and commercial projects. With years of
            experience and a team of skilled professionals, we deliver
            high-quality results that exceed expectations.
          </p>
          {/* mainImage */}
          <img src={mainImage} alt="Construction" className="main-image" />
        </section>
        <section>
          <h2>What We Do</h2>
          <div className="service-list">
            {serviceRows.map((row, index) => (
              <ul
                key={index}
                style={{
                  marginRight: "20px",
                  marginBottom: "20px",
                  marginLeft: 0,
                  marginTop: "10px",
                }}
              >
                {row.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            ))}
          </div>

          <div className="service">
            <div className="service-details">
              <h3>Home Remodeling</h3>
              <p>
                Transform your home with our professional remodeling services.
                Whether you want to upgrade your living spaces, enhance
                functionality, or improve the overall aesthetics, we've got you
                covered. Our skilled team will work closely with you to
                understand your vision and create a customized plan that suits
                your style and budget. With our attention to detail and
                commitment to quality, we'll bring new life to your home and
                create spaces that you'll love.
              </p>
              <img
                src={constructionImage}
                alt="Construction"
                className="service-image"
              />
            </div>
          </div>
          <div className="service">
            <div className="service-details">
              <h3>Backyard Renovation</h3>
              <p>
                Enhance your outdoor living experience with our backyard
                renovation services. Whether you dream of a beautiful patio, a
                cozy outdoor kitchen, or a serene garden retreat, we can turn
                your backyard into a perfect oasis. Our team of experts will
                design and build custom features that blend seamlessly with your
                existing landscape, creating a space where you can relax and
                entertain in style.
              </p>
              <div style={{height:'200px',textAlign:'left'}}>
                <ImageSwitcher firstImage={bckImage} secondImage={bckImage1} />
              </div>
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
