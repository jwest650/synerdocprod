import { BiPlus } from 'react-icons/bi';
import TableSelect from '../structure/TableSelect';

const Card = ({ title, addOption, selectOptions }) => {
  return (
    <div className="card-primary space-y-3.5">
      <div className="flex items-center justify-between">
        <h2 className="verdana14 font-semibold">{title && title}</h2>
        {addOption && (
          <button className="btn-primary flex items-center gap-1">
            <BiPlus className="scale-150" />
            <span>{addOption}</span>
          </button>
        )}
      </div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Enter first or last name"
          className="input-primary"
        />
        <button className="btn-primary">Search</button>
      </div>
      <p className="text-gray-700">or jump to</p>
      <TableSelect
        styles={{ backgroundColor: 'white' }}
        options={selectOptions}
      />
    </div>
  );
};

export default Card;
