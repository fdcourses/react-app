import React, {useState} from 'react';
import CalendarBody from './CalendarBody';
import SelectedDay from './SelectedDay';

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  return (
    <article>
      <SelectedDay  currentDay={currentDay}/>
      <CalendarBody currentDay={currentDay} setCurrentDay={setCurrentDay}/>
    </article>
  );
}

export default Calendar;
