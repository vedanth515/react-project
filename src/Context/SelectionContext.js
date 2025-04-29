import React, { createContext, useState } from 'react';

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selections, setSelections] = useState({
    shirts: [],
    pants: [],
    shoes: [],
    brands: [],
  });

  return (
    <SelectionContext.Provider value={{ selections, setSelections }}>
      {children}
    </SelectionContext.Provider>
  );
};
