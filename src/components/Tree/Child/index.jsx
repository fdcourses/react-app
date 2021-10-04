import React from 'react';
import { UserContext } from '../../../contexts';

const Child = () => {
  const consumerFunc = (user) => {
    return (
      <div>
        <h2>Child</h2>
        <div>{JSON.stringify(user)}</div>
      </div>
    );
  };

  return <UserContext.Consumer>{consumerFunc}</UserContext.Consumer>;
};

export default Child;
