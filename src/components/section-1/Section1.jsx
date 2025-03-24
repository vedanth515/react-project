import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Section1.css'
function Section1() {
  const navigate=useNavigate()
  return (
    <div className="launch-container">
    <div className="image-gallery">
      <img src="http://menscraze.com/wp-content/uploads/2016/05/2016-mens-fashion-1.jpg" alt="Style 1" />
      <img src="https://snazzylair.com/wp-content/uploads/2018/11/13-different-mens-fashion-styles.jpg" alt="Style 2" />
      <img src="https://www.instaloverz.com/wp-content/uploads/2016/07/1-mens-fashion-fall-1.jpg" alt="Style 3" />
      <img src="https://cdn.shopify.com/s/files/1/0162/2116/files/Winter_street_style_looks_for_men_7.jpg?v=1548138068" alt="Style 4" />
    </div>
    <div className="overlay">
      <h1>Style, your way.</h1>
      <div id='btn'>
      <button onClick={() => navigate('/shirts')}>TRY IT NOW</button>
      </div>
    </div>
  </div>
  )
}

export default Section1;
