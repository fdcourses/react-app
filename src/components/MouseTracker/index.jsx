import React, { useState, useEffect } from 'react';

const MouseTracker = (props) => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const mouseMoveHandler = (event) => {
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const clickHandler = () => {
    console.log('я работаю');
    setCounter(function (prevCounter) {
      return prevCounter + step;
    });
  };

  useEffect(function effects() {
    // console.log('useEffect');
    document.body.addEventListener('click', clickHandler);

    return function componentWillUnmount() {
      console.log('clear effects');
      document.body.removeEventListener('click', clickHandler);
    };
  }, [step]);

  // console.log('test');

  const handleChange = ({target: {value}}) => {
    setStep(Number(value));
  }

  return (
    <div
      style={{ height: '100vh' }}
      onMouseMove={mouseMoveHandler}
    >
      <p>x: {coordinates.x}</p>
      <p>y: {coordinates.y}</p>
      <p>Count: {counter}</p>
      <input value={step} onChange={handleChange} />
    </div>
  );
};

const oldState = {
  x: 123,
  y: 324,
  count: 5,
};

const newState = {
  count: 6,
};

// классовое обновление стейта
let updatedState = {
  ...oldState,
  ...newState,
};
// на хуках
updatedState = {
  ...newState,
};
export default MouseTracker;
