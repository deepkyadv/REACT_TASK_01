import React, { useState } from 'react';
import "./DataBinding.css";

function DataBinding() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='data-binding-container'>
    <h1>5. 2Way data binding using textbox</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <h4><p>You entered:</p>{inputValue}</h4>
    </div>
  );
}

export default DataBinding;
