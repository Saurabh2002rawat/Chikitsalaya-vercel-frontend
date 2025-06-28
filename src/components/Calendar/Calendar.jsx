import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles
import './Calendar.css'; // Your custom styles (optional)

const FullCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Calendar</h2>
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={({ date, view }) => {
          const today = new Date();
          return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
          )
            ? 'highlight-today'
            : null;
        }}
        className="custom-calendar"
      />
    </div>
  );
};

export default FullCalendar;
