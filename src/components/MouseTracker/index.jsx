import React from 'react';
import { useState } from 'react/cjs/react.development';

const MouseTracker = (props) => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0
  });

  const mouseMoveHandler = (event) => {
    setCoordinates({
      x: event.clientX,
      y: event.clientY
    });
  }

  
  // document.body.addEventListener('mousemove', mouseMoveHandler);

  return (
    <div style={{height: '100vh'}} onMouseMove={mouseMoveHandler}>
      <p>x: {coordinates.x}</p>
      <p>y: {coordinates.y}</p>
    </div>
  );
}

export default MouseTracker;
