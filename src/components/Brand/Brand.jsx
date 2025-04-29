import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SelectionContext } from '../../Context/SelectionContext.js'
import './Brand.css';

function Brand() {
  const navigate = useNavigate();
  const { selections, setSelections } = useContext(SelectionContext);
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState(selections.brands || []);
  const [selectedNone, setSelectedNone] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/Brand')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSelect = (item) => {
    if (selectedNone) setSelectedNone(false);
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleNoneSelect = () => {
    setSelectedItems([]);
    setSelectedNone(true);
  };

  const handleContinue = () => {
    setSelections(prev => ({ ...prev, brands: selectedNone ? [] : selectedItems }));
    navigate('/Summary');
  };

  return (
    <div className="container">
      <h1>Pick Your Favorite Brands</h1>
      <div className="grid-container">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`card ${selectedItems.includes(item) ? 'selected' : ''}`}
            onClick={() => handleSelect(item)}
          >
            <img src={item.image} alt="brand" />
          </div>
        ))}
        <div className={`card none-card ${selectedNone ? 'selected' : ''}`} onClick={handleNoneSelect}>
          <p>None of These</p>
        </div>
      </div>
      <button
        className="continue-button"
        onClick={handleContinue}
        disabled={selectedItems.length === 0 && !selectedNone}
      >
        Continue
      </button>
    </div>
  );
}

export default Brand;
