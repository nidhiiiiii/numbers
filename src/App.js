import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [nextNumbers, setNextNumbers] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Check if the input is a number
    if (!value || isNaN(value)) {
      setMessage('');
      setNextNumbers([]);
      return;
    }

    const number = Number(value);

    // Check for negative numbers
    if (number < 0) {
      setMessage('Enter a positive value');
      setNextNumbers([]);
      return;
    }

    // Determine next numbers based on even or odd
    if (number % 2 === 0) {
      setMessage('');
      setNextNumbers([number + 2, number + 4, number + 6]);
    } else {
      setMessage('');
      setNextNumbers([number + 2, number + 4, number + 6]);
    }
  };

  return (
    <div className="App">
      <h1>Number Input App</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a number"
        
      />
      {message && <p>{message}</p>}
      {nextNumbers.length > 0 && (
        <p>Next numbers: {nextNumbers.join(', ')}</p>
      )}
    </div>
  );
}

export default App;