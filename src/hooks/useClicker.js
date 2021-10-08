import { useEffect, useState } from 'react';

function useClicker() {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click => click + 1)
  }
  
  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    }
  }, [])

  return click;
}

export default useClicker;