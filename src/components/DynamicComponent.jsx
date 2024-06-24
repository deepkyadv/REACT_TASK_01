import React from 'react'
import { useState } from 'react';
import "./DynamicComponent.css";

function DynamicComponent() {
    const [components, setComponents] = useState([]);

    const addComponent = () => {
        const newComponent = <div className="dynamic-component" key={components.length}>New Component</div>;
        setComponents([...components, newComponent]);
      };
  return (
    <div className='dynamic-component-container'>
    <h1>6. Dynamic add child Component</h1>
    <button onClick={addComponent}>Add Component</button>
      <div>{components}</div>
    </div>
  )
}

export default DynamicComponent