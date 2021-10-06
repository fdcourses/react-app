
import { useEffect, useState } from 'react';
import { addMilliseconds,  format} from 'date-fns';

const StopWatch = () => {
  const [time, setTime] = useState(new Date(0,0,0,0,0,0,0,0));
  const [isOn, setIsOn] = useState(false);
  
  useEffect(() => {
    if(isOn) {
      const id = setInterval(() => {
        setTime(prevDate => addMilliseconds(prevDate,1));
      },1);
      return function () {
        clearInterval(id);
      }
    }
  }, [isOn]);

  const resetHandler = () => {
    setIsOn(false);
    setTime(new Date(0,0,0,0,0,0,0,0));
  }

  return (
    <div>
      <h2>{format(time, 'HH:mm:ss.SSS')}</h2>
      <button onClick={() => setIsOn(true)}>Start</button>
      <button onClick={() => setIsOn(false)}>Stop</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default StopWatch;
