import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectionContext } from '../../Context/SelectionContext';
import './Summary.css';

function Summary() {
  const { selections, setSelections } = useContext(SelectionContext);
  const navigate = useNavigate();

  // State to track selected items to send to Pair component
  const [selectedForPair, setSelectedForPair] = useState({
    shirts: [],
    pants: [],
    shoes: [],
    brands: [],
  });

  const removeItem = (type, item) => {
    setSelections(prev => ({
      ...prev,
      [type]: prev[type].filter(i => i !== item)
    }));
  };

  const toggleSelectForPair = (type, item) => {
    setSelectedForPair(prev => {
      const isSelected = prev[type].includes(item);
      return {
        ...prev,
        [type]: isSelected
          ? prev[type].filter(i => i !== item)
          : [...prev[type], item],
      };
    });
  };

  const handleViewPair = () => {
    navigate('/pair', { state: selectedForPair });
  };

  const renderSection = (title, items, type) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="summary-section">
        <h2>{title}</h2>
        <div className="grid-container">
          {items.map((item, idx) => (
            <div key={idx} className="summary-card">
              <img src={item.image} alt={`${type}-${idx}`} />
              <div className="button-group">
                <button
                  className={`select-button ${selectedForPair[type]?.includes(item) ? 'selected' : ''}`}
                  onClick={() => toggleSelectForPair(type, item)}
                >
                  {selectedForPair[type]?.includes(item) ? 'Deselect' : 'Select'}
                </button>
                <button
                  className="remove-button"
                  onClick={() => removeItem(type, item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="summary-container">
      <h1>Your Outfit Summary</h1>
      {renderSection("Shirts", selections.shirts, 'shirts')}
      {renderSection("Pants", selections.pants, 'pants')}
      {renderSection("Shoes", selections.shoes, 'shoes')}
      {renderSection("Brands", selections.brands, 'brands')}

      {Object.values(selections).every(arr => arr.length === 0) && (
        <p className="empty-msg">You haven’t selected any items.</p>
      )}

      <button className="view-pair-btn" onClick={handleViewPair}>
        View Selected Pair
      </button>
    </div>
  );
}

export default Summary;
