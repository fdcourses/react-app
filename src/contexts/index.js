import { createContext } from 'react';
import CONSTANTS from '../constants';

export const UserContext = createContext({
  id: 0,
  name: 'test'
});
export const ThemeContext = createContext(CONSTANTS.THEMES.DARK);