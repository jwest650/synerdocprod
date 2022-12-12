import Link from 'next/link';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import CreateNewLocation from '../../components/home/staff/CreateNewLocation';
import CalendarComp from '../../components/structure/CalendarComp';
import TableSelect from '../../components/structure/TableSelect';

const StaffDirections = () => {
  const [date, setDate] = useState('');
  const [newLocation, setNewLocation] = useState(false);

  return (
    <div className="container-primary space-y-6">
      <h2 className="verdana16 border-b border-primary-gray font-semibold">
        Directions/Mapping
      </h2>
      {newLocation ? (
        <CreateNewLocation setNewLocation={setNewLocation} />
      ) : (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TableSelect options={['<--select-->', 'Guest Guest']} />
              <CalendarComp setDate={setDate} date={date} />
            </div>
            <Link href="/">
              <span className="btn-cancel cursor-pointer text-black">
                Cancel
              </span>
            </Link>
          </div>
          <div
            onClick={() => setNewLocation(true)}
            className="btn-primary flex w-fit cursor-pointer items-center gap-1"
          >
            <BiPlus className="scale-150" />
            <span>Create Location</span>
          </div>

          <table className="min-w-full overflow-auto shadow-md">
            <thead className="thead-primary">
              <tr>
                <th className="th-first"></th>
                <th className="th-middle">Seq</th>
                <th className="th-middle">Patient/Location</th>
                <th className="th-middle">Address</th>
                <th className="th-middle">Service Date</th>
                <th className="th-middle">Time In</th>
                <th className="th-middle">Time Out</th>
                <th className="th-middle"># Miles</th>
                <th className="th-middle">Comment</th>
                <th className="th-last">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="verdana11 border border-primary-gray bg-[#eeeeee]">
                <td colSpan="9" className="td-primary">
                  No records to display
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              Route Type:{' '}
              <TableSelect
                options={['<--select-->', 'Shortest', 'Fastest', 'Pedestrian']}
              />
            </div>
            <div className="flex items-center gap-2">
              Language:{' '}
              <TableSelect options={['<--select-->', 'English', 'Spanish']} />
            </div>
            <div className="flex items-center gap-2">
              Avoid:{' '}
              <TableSelect
                options={[
                  '<--select-->',
                  'Toll Road',
                  'Seasonal Closure',
                  'Unpaved',
                  'Ferry',
                ]}
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="input-primary" />
              <span>Enhanced Narrative</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="input-primary" />
              <span>Include Map</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StaffDirections;
