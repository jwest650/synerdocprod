import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { useEffect } from 'react';
import { useState } from 'react';
import { FcCalendar, FcPlanner } from 'react-icons/fc';

const CalendarComp = ({ setDate, date }) => {
  const [showCal, setShowCal] = useState(false);

  const handleChange = (e) => {
    setDate && setDate(e.value.toLocaleDateString());
    // console.log(e.value.toLocaleDateString());
  };
  return (
    <div
      className="relative"
      onMouseOver={() => setShowCal(true)}
      onMouseLeave={() => setShowCal(false)}
    >
      <div className="flex items-center gap-1.5">
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          value={date}
          onChange={() => true}
          className="input-date cursor-pointer"
        />
        <FcPlanner className="scale-125 text-lg" />
      </div>
      <div
        className={`absolute left-0 top-6 z-10 flex flex-col ${
          showCal ? 'date-anim inline-flex' : 'hidden'
        }`}
      >
        <CalendarComponent onChange={handleChange} cssClass="cal-primary" />
      </div>
    </div>
  );
};
export default CalendarComp;
