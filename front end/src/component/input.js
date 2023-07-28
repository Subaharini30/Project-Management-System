import React, { useState } from 'react';
import '../styles/input.css'

const InputBoxToggle = () => {
  const [inputBoxes, setInputBoxes] = useState([]);

  const handleAddButtonClick = () => {
    setInputBoxes([...inputBoxes, '']); // Add an empty element to the inputBoxes array
  };

  const handleRemoveButtonClick = () => {
    if (inputBoxes.length > 0) {
      setInputBoxes(inputBoxes.slice(0, inputBoxes.length - 1)); // Remove the last element from the inputBoxes array
    }
  };

  return (
    <div>
      <button onClick={handleAddButtonClick}>+</button>
      <button onClick={handleRemoveButtonClick}>-</button>
      {inputBoxes.map((value, index) => (
        <div key={index} className="input-container">
          <input type="text" />
        </div>
      ))}
    </div>
  );
};

export default InputBoxToggle;
