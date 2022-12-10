import { FcPlanner } from 'react-icons/fc';
import TableSelect from '../structure/TableSelect';

const SchedulerNav = () => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <h2 className="verdana14 font-semibold">Calendar For :</h2>
          <TableSelect options={['<-select->', 'Guest Guest']} />
        </div>
        <div className="flex items-center gap-3">
          <FcPlanner className="scale-150 text-base" />
          <h3 className="verdana14 font-semibold">Availability</h3>
          {/* <button>
            <BiPlus />
            
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SchedulerNav;
