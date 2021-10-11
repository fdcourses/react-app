import React from 'react';
import { startOfWeek, addDays, getWeeksInMonth } from 'date-fns';
import Week from '../Week';

const Month = (props) => {
  const weekAmount = getWeeksInMonth(props.currentDay)
  console.log(weekAmount);
  return (
    <div>
      <Week startingDay={addDays(props.currentDay, -14)}/>
      <Week startingDay={addDays(props.currentDay, 7)}/>
      <Week startingDay={props.currentDay}/>
      <Week startingDay={addDays(props.currentDay, 7)}/>
      <Week startingDay={addDays(props.currentDay, 14)}/>
      <Week startingDay={addDays(props.currentDay, 21)}/>
    </div>
  );
}

export default Month;
