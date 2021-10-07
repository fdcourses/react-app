import { createContext } from 'react';
import CONSTANTS from '../constants';

const ThemeContext = createContext(CONSTANTS.THEMES.DARK);

export default ThemeContext;