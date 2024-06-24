import React from 'react'
import { useState } from 'react'
import "./SumOfTwoNumbers.css";

function SumOfTwoNumbers() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setresult] = useState(0);


    const handleSum = ()=>{
        const sum = parseInt(num1) + parseInt(num2);
        setresult(sum);
    }



  return (
    <div className="sum-container">
    <h1>7. Sum of two numbers</h1>
    <input className="sum-input" type='number' value={num1} onChange={(e) => setNum1(e.target.value)}/>
    <input className="sum-input" type='number' value={num2} onChange={(e) => setNum2(e.target.value)}/>
    <button className="sum-button" onClick={handleSum}>add</button>
    <p className="sum-result">result: {result}</p>
    </div>
  )
}

export default SumOfTwoNumbers