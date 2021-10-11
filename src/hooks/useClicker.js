import { useEffect, useState } from 'react';

function useClicker(elemRef, isLoaded) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click => click + 1)
  }

  
  useEffect(() => {
    const elem = elemRef.current;
    console.log(elem);

    if(elem && isLoaded) {
      elem.addEventListener('click', handleClick);
  
      return () => {
        elem.removeEventListener('click', handleClick);
      }
    }
  }, [elemRef, isLoaded])

  return click;
}

export default useClicker;