import { useState } from 'react';
import Calendar from 'react-calendar';
 export function MyCalendarApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div >
      <Calendar onChange={onChange} value={value} />
      <p>Selected Date: {value.toDateString()}</p>
    </div>
  );
}