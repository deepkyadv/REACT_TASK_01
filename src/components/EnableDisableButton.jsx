import React from 'react'
import { useState } from 'react';
import "./EnableDisableButton.css";

function EnableDisableButton() {
    const [isEnabled, setIsEnabled] = useState(true);

    const toggleEnabled = () => {
      setIsEnabled(!isEnabled);
    };
  
    return (
      <div  className='button-container'>
      <h1>4. Enable and Disable Button</h1>
        <button disabled={!isEnabled}>Enabled/Disabled Button</button>
        <br />
        <button onClick={toggleEnabled}>
          {isEnabled ? 'Disable Button' : 'Enable Button'}
        </button>
      </div>
    )}

export default EnableDisableButton