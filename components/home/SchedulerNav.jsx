import TableSelect from '../structure/TableSelect';
import { BiPlus } from 'react-icons/bi';

const SchedulerNav = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center">
          <h2>Calendar For:</h2>
          <TableSelect options={['<-select->', 'Guest Guest']} />
        </div>
        <div>
          <h3>Availability</h3>
          {/* <button>
            <BiPlus />
            
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SchedulerNav;
