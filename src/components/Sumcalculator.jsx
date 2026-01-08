import React, { useState, useEffect } from "react";

const SumCalculator = () => {
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
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />

      <div >
        <strong>Sum: {sum}</strong>
      </div>
    </div>
  );
};

export default SumCalculator;
