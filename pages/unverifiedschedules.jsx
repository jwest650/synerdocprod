import { useState } from 'react';
import usePeriods from '../components/home/hooks/usePeriods';
import SelectDay from '../components/home/SelectDay';
import UnverifiedSchedulesTable from '../components/home/UnverifiedSchedulesTable';
import CalendarComp from '../components/structure/CalendarComp';

const UnverifiedSchedules = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [dayDuration, setDayDuration] = useState('');

  usePeriods(dayDuration, setFromDate, setToDate);

  return (
    <div className="container-primary w-full">
      <div className="flex w-full items-center justify-between">
        <h2 className="verdana16 font-semibold">Patient Schedules</h2>
        <div className="flex items-center gap-4">
          <SelectDay setDayDuration={setDayDuration} />
          <div className="flex items-center gap-2 ">
            <label>From:</label>
            <CalendarComp date={fromDate} setDate={setFromDate} />
          </div>
          <div className="flex items-center gap-2 ">
            <label>To:</label>
            <CalendarComp date={toDate} setDate={setToDate} />
          </div>
          <div className="flex items-center gap-2 ">
            <input
              type="text"
              placeholder="Enter first or last name"
              className="input-primary w-40"
            />{' '}
            <button className="btn-primary">Search</button>
          </div>
        </div>
      </div>
      <UnverifiedSchedulesTable />
    </div>
  );
};

export default UnverifiedSchedules;
