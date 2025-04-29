import React from "react";
import "./DashSection3.css";

const SupportSection = () => {
  return (
    <div className="support-section">
      {/* FAQs and Contact Help Section */}
      <div className="info-cards">
        <div className="card">
          <h3>How can I use my voucher?</h3>
          <p>
            When you create a new order, type in your voucher code. The input
            field is on the address page.
          </p>
          <a href="#">See all FAQs</a>
        </div>
        <div className="card">
          <h3>Can we help?</h3>
          <p>Call us<br />+49 (30) 255 585 260</p>
          <a href="#">Contact us</a>
        </div>
      </div>

      {/* App Promotion Section */}
      <div className="app-section">
        <div className="app-info">
          <h2>Your wardrobe in an App</h2>
          <div className="store-buttons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
          </div>
        </div>
        <div className="app-preview">
          <img
            src="https://static.production.outfittery.io/frontpage-static-cache/customeraccount/dashboard/mobile-app/mw_app_block@1x.png"
            alt="Mobile App Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
