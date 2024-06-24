import React from 'react'
import "./ShowHideElement.css"
import { useState } from 'react';

function ShowHideElement() {
const [isvisible, setisvisible] = useState(true);

const togglevisible = ()=>{
    setisvisible(!isvisible)
}
 
  return (
    <div className='showhide'>
    <h1>3. Show Hide Element</h1>
    <button onClick={togglevisible}>
    {
            isvisible ? 'Hide Element':'show element'
    }
    </button>
    {isvisible && <h3>This element can be hide or show</h3>}
    
    </div>
  )
}

export default ShowHideElement