import React, { useState } from 'react';
import './DynamicComponent.css';
// import Hello from './Hello';

function DynamicComponent() {
  const [components, setComponents] = useState([]);
  const [componentCount, setComponentCount] = useState(0);

  const addComponent = () => {
    const newComponent = <div className="dynamic-component" key={componentCount}></div>;
    setComponents([...components, newComponent]);
    setComponentCount(componentCount + 1);
  };

  return (
    <div className='dynamic-component-container'>
      <h1>Dynamic Add Child Component</h1>
      <button onClick={addComponent}>Add Component</button>
      <div>
        {components.map((component, index) => (
          <div key={index}>
            <h3>Component {index + 1}</h3>
            {component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicComponent;
