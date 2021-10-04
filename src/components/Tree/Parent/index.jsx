import React from 'react';
import Subparent from '../Subparent';

const Parent = (props) => {
  return (
    <div>
      <h2>Parent component</h2>
      <Subparent />
    </div>
  );
}

export default Parent;