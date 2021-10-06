import React, { useState } from 'react';
import { Component } from 'react';
import CONSTANTS from './constants';
import Counter from './components/Counter';
import MouseTracker from './components/MouseTracker';
const { THEMES } = CONSTANTS;

function App(props) {
  const [theme, setTheme] = useState(THEMES.DARK);
  const [user, setUser] = useState({
    id: 1,
    fullName: 'User Userovich',
    userImg:
      'https://www.ikea.com/kr/en/images/products/jaettelik-soft-toy-dinosaur-dinosaur-velociraptor__0814802_pe772713_s5.jpg?f=undefined',
  });
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Switch</button>
      {isVisible && <MouseTracker />}
    </>
  );
}

export default App;
