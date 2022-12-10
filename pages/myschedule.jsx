import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import MyScheduleTable from '../components/home/MyScheduleTable';
import CalendarComp from '../components/structure/CalendarComp';
import TableSelect from '../components/structure/TableSelect';

const MySchedule = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  return (
    <div className="container-primary space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h2 className="verdana16 font-semibold">Schedules</h2>
          <button className="btn-primary flex items-center gap-1">
            <BiPlus className="scale-150" />
            <span>Create Pay Only</span>
          </button>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <TableSelect options={['PDF', 'Spreadsheet']} />
            <button className="btn-primary">Export</button>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">From:</label>
            <CalendarComp setDate={setFromDate} date={fromDate} />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">To:</label>
            <CalendarComp setDate={setToDate} date={toDate} />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="input-primary w-44"
              placeholder="Enter first or last name"
            />
            <button className="btn-primary">Search</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2">
          <p>Show Services without a service note attached</p>
          <input type="checkbox" className="input-primary" />
        </div>
        <div className="flex items-center gap-2">
          <label>Payer Reporting Group</label>
          <TableSelect options={['All']} />
        </div>
      </div>

      <MyScheduleTable />

      {/* <table className="mt-3 w-full">
        <thead className="thead-primary">
          <tr>
             </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <TableSelect option={['All', 'Option2']} />
            </td>
            <td>
              <TableSelect option={['All', 'Option2']} />
            </td>
            <td>
              <TableSelect option={['Guest Guest', 'Option2']} />
            </td>
            <td>
              <TableSelect option={['All', 'Option2']} />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <TableSelect option={['All', 'Option2']} />
            </td>
            <td>
              <TableSelect option={['Unverified', 'Option2']} />
            </td>
            <td></td>
          </tr>
          <tr>No recordes to display</tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default MySchedule;
