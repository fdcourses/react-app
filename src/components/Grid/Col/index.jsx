import React from 'react';

const Col = (props) => {
  const {children} = props;
  return (
    <div className="col">
      {children}
    </div>
  );
}

export default Col;
