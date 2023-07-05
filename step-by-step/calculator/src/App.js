import React , {useState} from 'react';
import './App.css';

 function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e, inputName) => {
    const value = e.target.value;
    if (inputName === 'num1') {
      setNum1(value);
    } else if (inputName === 'num2') {
      setNum2(value);
    }
  };

  const handleAddition = (e) => {
    e.preventDefault();
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };

  const handleSubtraction = (e) => {
    e.preventDefault();
    const difference = parseInt(num1) - parseInt(num2);
    setResult(difference);
  };

  const handleMultiplication = (e) => {
    e.preventDefault();
    const product = parseInt(num1) * parseInt(num2);
    setResult(product);
  };

  const handleDivision = (e) => {
    e.preventDefault();
    const quotient = parseInt(num1) / parseInt(num2);
    setResult(quotient);
  };

  return (
    <div className="calculator-container">
      <form className="calculator-form">
        <h1>My Calculator</h1>
        <div className="input-container">
          <input type="number" value={num1} onChange={(e) => handleInputChange(e, 'num1')} placeholder="Enter" />
          <input type="number" value={num2} onChange={(e) => handleInputChange(e, 'num2')} placeholder="Enter" />
        </div>
        <div className="button-container">
          <button className="add" onClick={handleAddition}>+</button>
          <button className="substract" onClick={handleSubtraction}>-</button>
          <button className="multiply" onClick={handleMultiplication}>*</button>
          <button className="divide" onClick={handleDivision}>/</button>
        </div>
        <h2>
        <button className="result" >{result}</button></h2>
      </form>
    </div>
  );
}

export default App;