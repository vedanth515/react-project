// import React from 'react'
// import './Section4.css'

// function Section4() {
//     return (
//         <div>
//             <div>
//                 <h5>APPROVED QUALITY</h5>
//                 <div>
//                     <img src='https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/dhl_test.webp' />
//                     <img src='https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/ecommerce-europe.webp' />
//                     <img />
//                 </div>
//                 <p>Our shop is certified by Trusted Shops.</p>
//             </div>
//             <div>
//                 <h5>SHIPPING PARTNERS</h5>
//                 <div>
//                     <img src='https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/dhl_test.webp'/>
//                     <img src='https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/ups-logo.webp'/>
//                 </div>
//                 <p>Free shipping and returns.</p>
//             </div>
//             <div>
//                 <h5>PAYMENT METHODS</h5>
//                 <div>
//                     <img src='https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/payment_methods_de.webp'/>
//                     <img src='https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/de-pp-logo-100px.webp'/>
//                 </div>
//                 <p></p>
//             </div>
//         </div>
//     )
// }

// export default Section4




import React from "react";
import "./Section4.css"; // Import the CSS file

function Section4() {
  return (
    <div className="section4-container">
      {/* Approved Quality */}
      <div className="section4-box">
        <h5>APPROVED QUALITY</h5>
        <div className="section4-images">
          <img src="https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/trusted-shops.webp" alt="Trusted Shops" />
          <img src="https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/ecommerce-europe.webp" alt="E-commerce Europe" />
        </div>
        <p>Our shop is certified by Trusted Shops.</p>
      </div>

      {/* Shipping Partners */}
      <div className="section4-box">
        <h5>SHIPPING PARTNERS</h5>
        <div className="section4-images">
          <img src="https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/dhl_test.webp" alt="DHL" />
          <img src="https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/ups-logo.webp" alt="UPS" />
        </div>
        <p>Free shipping and returns.</p>
      </div>

      {/* Payment Methods */}
      <div className="section4-box">
        <h5>PAYMENT METHODS</h5>
        <div className="section4-images1">
          <img id="img1" src="https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/payment_methods_de.webp" alt="Payment Methods" />
          <img id="img2" src="https://static.production.outfittery.io/frontpage-static-cache/homepage/social_icons/de-pp-logo-100px.webp" alt="PayPal" />
        </div>
        <p>Before you pay anything, you have 7 days to try-on everything at home.</p>
      </div>
    </div>
  );
}

export default Section4;

