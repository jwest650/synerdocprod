import { Tooltip } from '@chakra-ui/react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { BsSquare } from 'react-icons/bs';
import { FcPlanner } from 'react-icons/fc';
import TableSelect from '../../structure/TableSelect';
import AssociateProductivity from './AssociateProductivity';
import AvailabilityPopup from './AvailabilityPopup';
import ManageOverrides from './ManageOverrides';
import Reassign from './Reassign';

const SchedulerNav = () => {
  const [showTable, setShowTable] = useState(false);
  return (
    <div className="whitespace-nowrap rounded border-[1px] p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="verdana14 font-semibold">Calendar For :</h2>
          <TableSelect options={['<-select->', 'Guest Guest']} />
        </div>
        <div className=" flex scale-90 items-center gap-4">
          <div
            onMouseOver={() => setShowTable(true)}
            onMouseLeave={() => setShowTable(false)}
            className=" flex items-center gap-2"
          >
            <FcPlanner className="scale-150 text-base" />
            <h3 className="verdana14 font-semibold">Availability</h3>
            {showTable && <AvailabilityPopup />}
          </div>
          <Tooltip
            hasArrow
            label={`Create Extra Availability/Unavailability`}
            fontSize="11px"
            color="white"
          >
            <button className="btn-primary flex items-center gap-1">
              <BiPlus className="scale-150" />
              Create Overrides
            </button>
          </Tooltip>

          <ManageOverrides />
          <Reassign />
          <AssociateProductivity />
        </div>
      </div>
      <ul className="mt-3 flex flex-wrap items-center gap-8">
        <li className="flex items-center gap-1">
          <BsSquare className="scale-125 rounded-sm bg-green-300 text-green-300 shadow" />
          assigned
        </li>
        <li className="flex items-center gap-1">
          <BsSquare className="scale-125 rounded-sm bg-yellow-300 text-yellow-300 shadow" />
          unassigned
        </li>
        <li className="flex items-center gap-1">
          <input
            type="checkbox"
            id="homeshowservicetimes"
            className="input-primary"
          />
          <label htmlFor="homeshowservicedesc">show service times</label>
        </li>
        <li className="flex items-center gap-1">
          <input
            type="checkbox"
            id="homeshowservicedesc"
            className="input-primary"
          />
          <label htmlFor="homeshowservicetimes">show service description</label>
        </li>
        <li className="flex items-center gap-1">
          <input
            type="checkbox"
            id="homeomitpayonlys"
            className="input-primary"
          />
          <label htmlFor="homeomitpayonlys">Omit Pay Onlys</label>
        </li>
        <li>
          <p className="text-primary-orange underline">Therapy Utilization</p>
        </li>
      </ul>
    </div>
  );
};

export default SchedulerNav;
