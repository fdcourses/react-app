import React from 'react';

const Grid = (props) => {
  const {children} = props;
  return (
    <div className='container' style={{display:'flex', flexDirection: 'column'}}>
      {children}
    </div>
  );
}

export default Grid;
