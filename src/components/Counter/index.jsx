import { useState } from 'react';

function Counter(props) {
  const [countValue, setCountValue] = useState(0);
  const [step, setStep] = useState(1);

  const clickHandler = () => {
    setCountValue(countValue + step);
  };

  const changeHandler = ({target: {value}}) => {
    setStep(Number(value));
  }
  
  return (
    <div>
      <p>Count: {countValue}</p>
      <input onChange={changeHandler} value={step}/>
      <button onClick={clickHandler}>add</button>
    </div>
  );
}

export default Counter;
