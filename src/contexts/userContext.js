import { createContext } from 'react';

const UserContext = createContext({
  id: 0,
  name: 'test',
});

export default UserContext;
