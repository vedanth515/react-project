import React from "react";
// import "./StyleSwipeComponent.css";
import './DashSection.css'

const StyleSwipeComponent = () => {
  return (
    <div className="style-swipe-container">
      <div className="top-banner">
        <div className="banner-text">
          <h2>Style Swipe</h2>
          <p>
            Tell us which clothes you like so that we can make an even better
            assessment of your tastes. <br />
            <a href="#">Try it now</a>
          </p>
        </div>
        <div className="banner-image">
          <img src="https://tse3.mm.bing.net/th?id=OIP.etiEX-fFiDBNyECam_NuPQHaFj&pid=Api&P=0&h=220" alt="Clothes" />
        </div>
      </div>

      <div className="autopilot-section">
        <div className="left">
          <p className="label">NEW! AUTOPILOT</p>
          <h3>Keep on looking great!</h3>
          <p>
            Make sure you sign up to Autopilot now. You decide when and how
            often you receive boxes from your stylist.
          </p>
          <button>START AUTOPILOT NOW</button>
        </div>

        <div className="right">
          <div className="feature">
            <i className="icon">🛒</i>
            <div>
              <strong>The perfect fit</strong>
              <p>
                Your stylist will send you exactly what you're missing - no
                matter if you need a whole outfit or just some new shirts.
              </p>
            </div>
          </div>

          <div className="feature">
            <i className="icon">👔</i>
            <div>
              <strong>Individualised fashion inspiration</strong>
              <p>
                Your stylist can help refresh your wardrobe and advise you on
                all things fashion. They focus on your personal style and not
                just the latest trends.
              </p>
            </div>
          </div>

          <div className="feature">
            <i className="icon">⚙️</i>
            <div>
              <strong>Complete control, always</strong>
              <p>
                You can always adjust the budget, due date, or frequency of your
                orders. It’s also possible to cancel your next order in your
                user account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSwipeComponent;
