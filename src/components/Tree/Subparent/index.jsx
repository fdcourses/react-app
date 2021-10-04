import React from 'react';
import Child from '../Child';

const Subparent = (props) => {
  return (
    <div>
      <h2>Subparent</h2>
      <Child />
    </div>
  );
}

export default Subparent;
