import { useState, useEffect } from 'react';

function Datetime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.toLocaleString('en-US', { weekday: 'long' });
  let month = date.toLocaleString('en-US', { month: 'long' });
  let dayOfMonth = date.getDate();
  let year = date.getFullYear();

  return (
    <div>
      <h1>
        This is the current time: {hours}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </h1>
      <h2>
        Today is: {day}, {month} {dayOfMonth}, {year}
      </h2>
    </div>
  );
}
export default Datetime;