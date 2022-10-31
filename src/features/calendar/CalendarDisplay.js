import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: 'Session with K.Pipat',
    start: new Date(2022, 10, 20),
    end: new Date(2022, 10, 21),
  },
];

function CalendarDisplay() {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState(events);
  console.log(allEvents);
  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);
      /*
      console.log(d1 <= d2);
      console.log(d2 <= d3);
      console.log(d1 <= d4);
      console.log(d4 <= d3);
        */

      if (d1 < d3 && d2 < d4) {
        alert('CLASH');
        break;
      }
    }

    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div>
      <h1>Calendar</h1>
      <h2>Make an appointment</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: '20%', marginRight: '10px' }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Select Date"
          style={{ marginRight: '10px' }}
          selected={newEvent.start}
          onChange={(start) =>
            setNewEvent({ ...newEvent, start: start, end: start })
          }
        />
        {/* <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        /> */}
        <button stlye={{ marginTop: '10px' }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 750, margin: '50px' }}
      />
    </div>
  );
}

export default CalendarDisplay;
