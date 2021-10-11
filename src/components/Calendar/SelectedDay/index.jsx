import React from 'react';
import { format } from 'date-fns';

const SelectedDay = ({currentDay}) => {
  return (
    <div>
      <p>{format(currentDay, 'eeee')}</p>
      <h2>{format(currentDay, 'd')}</h2>
    </div>
  );
}

export default SelectedDay;
