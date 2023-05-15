import logo from './logo.svg';
import './App.css';

import React, { useRef, useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);

  const number1Ref = useRef(null);
  const number2Ref = useRef(null);

  const handleAddition = () => {
    const number1 = Number(number1Ref.current.value);
    const number2 = Number(number2Ref.current.value);
    setResult(number1 + number2);
  };

  const handleSubtraction = () => {
    const number1 = Number(number1Ref.current.value);
    const number2 = Number(number2Ref.current.value);
    setResult1(number1 - number2);
  };

  const handleDivision = () => {
    const number1 = Number(number1Ref.current.value);
    const number2 = Number(number2Ref.current.value);
    setResult2(number1 / number2);
  };

  return (
    <div>
      <h1></h1>
      <input type="text" ref={number1Ref} />
      <input type="text" ref={number2Ref} />
      <br />
      <button onClick={handleAddition}>sum</button>
      <button onClick={handleSubtraction}> subtract </button>
      <button onClick={handleDivision}>division </button>
      <br />
      <h2>sum result is: {result}</h2>
      <h2>subtract result is: {result1}</h2>
      <h2>Division  result is: {result2}</h2>
    </div>
  );
}

export default App;