import React, { useState, useEffect } from 'react';

const sumCalculator = () => {
  // State for the list of numbers and the calculated sum
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // Effect to recalculate the sum whenever the 'numbers' array changes
  useEffect(() => {
    const calculateSum = () => {
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(total);
    };

    calculateSum();
  }, [numbers]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Parse the input and add to the array if it's a valid number
    const parsedValue = parseInt(value, 10);
    
    if (!isNaN(parsedValue)) {
      // Functional update to ensure we have the latest state
      setNumbers((prevNumbers) => [...prevNumbers, parsedValue]);
      // Clear input after adding (optional, but typical for these UX patterns)
      setInputValue(""); 
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Sum Calculator</h1>
      
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
        style={{ padding: '8px', fontSize: '16px' }}
      />

      <div style={{ marginTop: '20px' }}>
        <strong>Sum: {sum}</strong>
      </div>

      {/* Optional: Show history of numbers added */}
      <div style={{ marginTop: '10px', color: '#666' }}>
        Numbers entered: {numbers.join(', ')}
      </div>
    </div>
  );
};

export default sumCalculator;
