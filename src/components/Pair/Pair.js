
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Pair.css';
import Swal from 'sweetalert2';

function Pair() {
  const location = useLocation();
  const navigate = useNavigate();
  const { shirts = [], pants = [], shoes = [], brands = [] } = location.state || {};

  const handleOrderNow = () => {
    // alert('🎉 Your outfit order has been placed successfully!');
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your outfit order has been placed successfully!🎉",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(() => {
      // console.log("Hello after 2 seconds");
      navigate('/'); // <-- Navigate to LunchPage after alert
    }, 3000);
    
  };

  return (
    <div className="pair-container">
      <h1>Selected Outfit Pair</h1>
      <div className="pair-row">
        {shirts.map((item, index) => (
          <img key={`shirt-${index}`} src={item.image} alt="shirt" className="pair-image" />
        ))}
        {pants.map((item, index) => (
          <img key={`pant-${index}`} src={item.image} alt="pant" className="pair-image" />
        ))}
        {shoes.map((item, index) => (
          <img key={`shoe-${index}`} src={item.image} alt="shoe" className="pair-image" />
        ))}
        {brands.map((item, index) => (
          <img key={`brand-${index}`} src={item.image} alt="brand" className="pair-image" />
        ))}
      </div>
      <button className="order-button" onClick={handleOrderNow}>
        Order Now
      </button>
    </div>
  );
}

export default Pair;
