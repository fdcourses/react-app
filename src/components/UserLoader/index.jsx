import React, { useState, useEffect } from 'react';
import {useData} from 'hooks';
import { getUsers } from 'api';

const UserLoader = () => {
  const {data : users, error, isLoading} = useData(getUsers);


  if (isLoading) {
    return <div>LOADING ...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}><pre>{JSON.stringify(user, null,2)}</pre></li>
      ))}
    </ul>
  );
};

export default UserLoader;
