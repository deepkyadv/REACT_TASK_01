import React, { useState } from 'react';

function EnableDisableButton() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleNum1Change = (e) => {
    const value = e.target.value;
    setNum1(value);
  };

  const handleNum2Change = (e) => {
    const value = e.target.value;
    setNum2(value);
  };

  const handleSum = () => {
    if (!isButtonDisabled) {
      const sum = parseInt(num1) + parseInt(num2);
      setResult(sum);
    }
  };

  const isValidNumber = (num1, num2) => {
    return !isNaN(num1) && !isNaN(num2) && num1.trim() !== '' && num2.trim() !== '';
  };

  return (
    <div className='container'>
      <h1>4. Sum of Two Numbers with Enable/Disable Button</h1>
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Enter number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Enter number 2"
      />
      <br />
      <button onClick={handleSum} disabled={isButtonDisabled}>
        Calculate Sum
      </button>
      <button onClick={() => setIsButtonDisabled(!isButtonDisabled)}>
        {isButtonDisabled ? 'Enable Sum' : 'Disable Sum'}
      </button>
      <p>Result: {result}</p>
    </div>
  );
}

export default EnableDisableButton;
