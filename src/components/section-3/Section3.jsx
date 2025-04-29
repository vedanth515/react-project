
import React from "react";
import "./Section3.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function Section3() {
  const navigate=useNavigate()
  return (
    <div id="main-Div">
        <div id="section-container1">
        <h1>Why you should try Europe's biggest personal shopping service for men!</h1>
    </div>
    <div className="section-container">
      {/* Left Section */}
      <div className="section-box left-box">
        <h2>Free style advice</h2>
        <p>
          Your stylist can help you discover your individual style or find new
          inspiration. Their expert advice is completely free. You only pay for
          the clothes that you decide to keep.
        </p>
        <img
          src="https://www.suitsexpert.com/wp-content/uploads/tan-sweater-over-white-shirt-beige-pants-with-overcoat.jpg"
          alt="Stylists group"
          className="section-image"
        />
      </div>

      {/* Right Section */}
      <div className="section-box right-box">
        <h2>Simply look good.</h2>
        <p>
          Your stylist will send your selection to your home. Try on everything
          in the peace of your private dressing room and send back the items room and send back the items.
        </p>
        <img
          src="https://www.suitsexpert.com/wp-content/uploads/tan-sweater-over-white-shirt-beige-pants-with-overcoat.jpg"
          alt="Man unboxing clothes"
          className="section-image"
        />
      </div>
    </div>
    <div id="btn">
        <button onClick={() => navigate('/shirts')}>TRY IT NOW</button>
    </div>
    </div>
  );
}

export default Section3;
