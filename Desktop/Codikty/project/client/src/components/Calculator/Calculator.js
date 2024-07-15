import React, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [isAdvanced, setIsAdvanced] = useState(false);

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleToggleMode = () => {
    setIsAdvanced(!isAdvanced);
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className={styles.calculator}>
      <input className={styles.display} type="text" value={input} readOnly />
      <div className={styles.buttons}>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={handleClear}>CLEAR</button>
        {isAdvanced ? (
          <>
            <button onClick={() => handleButtonClick('(')}>(</button>
            <button onClick={() => handleButtonClick(')')}>)</button>
            <button onClick={() => handleButtonClick('^')}>^</button>
            <button onClick={() => handleButtonClick('%')}>%</button>
            <button onClick={handleToggleMode}>SIMPLE</button>
          </>
        ) : (
          <button onClick={handleToggleMode}>ADVANCED</button>
        )}
      </div>
    </div>
  );
};

export default Calculator;
