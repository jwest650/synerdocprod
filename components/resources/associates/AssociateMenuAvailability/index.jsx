import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { scheduleData } from '../../../../assets/scheduleData';
import Calendar from '../../../dashboard/Calendar';

const AssociateMenuAvailability = () => {
  const [eventsData, setEventsData] = useState(scheduleData);
  // useEffect(() => {
  // }, [eventsData]);
  // console.log('edata--->>', eventsData);

  return (
    <div>
      <div className="px-5">
        <div className="mt-7 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h2 className="verdana14 mr-3 font-semibold">
              Associate Availability
            </h2>
            <div className="btn-primary flex w-fit items-center gap-1 ">
              <BiPlus className="scale-150" />
              <span className="verdana10">Create Availability</span>
            </div>
            <div className="btn-primary flex w-fit items-center gap-1 ">
              <BiPlus className="scale-150" />
              <span className="verdana10">Create Standard Days</span>
            </div>
            <div className="btn-primary flex w-fit items-center gap-1 ">
              <BiPlus className="scale-150" />
              <span className="verdana10">Overide Availabilities</span>
            </div>
            <div className="btn-primary flex w-fit items-center gap-1 ">
              <BiPlus className="scale-150" />
              <span className="verdana10">Manage Overides</span>
            </div>
          </div>
          <div className="btn-primary shadow ">show Full Day</div>
        </div>
        <h2 className="verdana12 mt-5 font-semibold">
          Left click on the calendar to add/edit availability times.
        </h2>
        <div className="my-7">
          <h2 className="verdana18 text-center  font-semibold"></h2>
          <div className="mx-auto max-w-7xl px-3">
            <Calendar eventsData={eventsData} setEventsData={setEventsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociateMenuAvailability;
