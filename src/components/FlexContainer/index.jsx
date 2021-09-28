import React from 'react';

const FlexContainer = (props) => {
  const { children, justifyContainer, alignItems, column, reverse } = props;
  const direction = `${column ? 'column' : 'row'}${reverse ? '-reverse' : ''}`;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: justifyContainer,
        alignItems,
        height: '100vh',
        flexDirection: direction,
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
