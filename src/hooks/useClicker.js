import { useEffect, useState } from 'react';

function useClicker(elemRef) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click => click + 1)
  }

  
  useEffect(() => {
    const elem = elemRef.current;
    console.log(elem);

    if(elem) {
      elem.addEventListener('click', handleClick);
  
      return () => {
        elem.removeEventListener('click', handleClick);
      }
    }
  }, [elemRef.current])

  return click;
}

export default useClicker;