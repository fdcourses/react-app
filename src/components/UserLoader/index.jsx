import React, { useState, useEffect, useRef } from 'react';
import { useData, useClicker } from 'hooks';
import { getUsers } from 'api';

const UserLoader = () => {
  const { data: users, error, isLoading } = useData(getUsers);
  const ulElem = useRef(null);
  const click = useClicker(ulElem);
 
  if (isLoading) {
    return <div>LOADING ...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <h1>{click}</h1>
      <ul ref={ulElem}>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserLoader;
