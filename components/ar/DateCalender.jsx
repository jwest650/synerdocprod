import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import React, { useState } from 'react';
import { FcPlanner } from 'react-icons/fc';

const DateCalender = () => {
  const [showCal, setShowCal] = useState(false);
  const [date, setDate] = useState('');

  const handleChange = (e) => {
    setDate(e.value.toLocaleDateString());
  };
  return (
    <div
      className=""
      onMouseOver={() => setShowCal(true)}
      onMouseLeave={() => setShowCal(false)}
    >
      <section className="relative flex items-center gap-1.5">
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          disabled
          value={date}
          onChange={() => true}
          className="input-date cursor-pointer disabled:bg-white"
        />

        <FcPlanner className="scale-125 text-lg" />
      </section>
      <section
        className={`absolute z-50  ${showCal ? 'date-anim ' : 'hidden'}`}
      >
        {' '}
        <CalendarComponent
          onChange={handleChange}
          value={date}
          showTodayButton={false}
        />
        <div className="-mt-1 flex items-center justify-end rounded-b bg-[#c6d8ff] p-1 px-3">
          <span
            className={`cursor-pointer rounded px-2 py-1 hover:bg-primary-blue hover:text-white ${
              date === new Date().toLocaleDateString() &&
              'bg-primary-blue text-white'
            } `}
            onClick={() => setDate(new Date().toLocaleDateString())}
          >
            Today
          </span>
        </div>
      </section>
    </div>
  );
};

export default DateCalender;
