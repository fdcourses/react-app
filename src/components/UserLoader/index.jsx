import React, { useState, useEffect, useRef } from 'react';
import { useData, useClicker } from 'hooks';
import { getUsers } from 'api';

const UserLoader = () => {
  const { data: users, error, isLoading } = useData(getUsers);
  const [isLoaded, setIsLoaded] = useState(false);
  const [value, setValue ] = useState(0);
  const prevState = useRef(null);

  useEffect(() => {
    setTimeout(()=> {
      prevState.current = value;
      setValue(count => count + 1);
    }, 3000)
  }, [value]);

  const ulElem = useRef(null);


  useEffect(() => {
    if (ulElem.current !== null) {
      setTimeout(() => {setIsLoaded(true)}, 1000);
    }
  }, [ulElem]);

  const click = useClicker(ulElem , isLoaded);

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
