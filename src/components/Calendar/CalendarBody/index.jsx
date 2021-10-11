import { format, startOfWeek, addDays } from 'date-fns';
import React from 'react';
import Month from '../Month';

const CalendarBody = (props) => {
  return (
    <div>
      <h2>{format(props.currentDay, 'LLLL yyyy')}</h2>
      <DaysOfWeek currentDay={props.currentDay} />
      <Month {...props}/>
    </div>
  );
};

function DaysOfWeek({ currentDay }) {
  const startingDate = startOfWeek(currentDay);
  const daysArr = new Array(7).fill(null).map((_, index) => {
    return (
      <div style={{ margin: '10px' }}>
        {format(addDays(startingDate, index), 'EEEEE')}
      </div>
    );
  });
  return <div style={{ display: 'flex' }}>{daysArr}</div>;
}

export default CalendarBody;
